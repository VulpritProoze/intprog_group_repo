import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import initialize from "./db";
import errorHandler from "./_middleware/error-handler";
// import userRouter from "./routes/user.controller";

// Define app to use express module
const app = express();
app.use(express.json())

// Middleware for added security
app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(helmet());

// Initialize DataSource
initialize()   
    .then( () => {
        console.log("Database connected.");
    })
    .catch( (err) => {
        console.error("Database connection failed.", err);
    });

// Routes
// app.use("/users", userRouter);

// Initiate global error handler
// create interface for ErrorHandler
interface ErrorHandler {
    ( err: Error, req: Request, res: Response, next: NextFunction ): void; 
};
// inject interface into a errorHandler middleware
const errorHandlerMiddleware: ErrorHandler = (err, req, res, next) => errorHandler(err, req, res, next);
// use the middleware
app.use(errorHandlerMiddleware);

// Start server
const port = 4000;
app.listen(port, () => console.log(`Server is listening on port ${port}.`));