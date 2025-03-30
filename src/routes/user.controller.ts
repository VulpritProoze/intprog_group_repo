import { Router, Request, Response, NextFunction } from "express";
import * as userService from "../services/user.service";

const router = Router();

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
      await userService.create(req.body);
      res.json({ message: "User created" });
    } catch (err) {
      next(err);
    }
  });


  export const userRouter = router;