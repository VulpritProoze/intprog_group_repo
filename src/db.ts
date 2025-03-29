import { AppDataSource } from "./data-source";
import { createConnection } from "mysql2/promise";

const initialize = async() => {
    try {
        // Extract database configuration from AppDataSource.options
        // Type assertion into constants
        const { host, port, username, password, database } = AppDataSource.options as {
            host: string;
            port: number;
            username: string;
            password: string;
            database: string;
        };

        // Create a connection to MySQL without specifying the database
        const connection = await createConnection({
            host, port, user: username, password,
        });

        // Create the database if it doesn't exist
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
        await connection.end();
        // Initialize the TypeORM DataSource     
        await AppDataSource.initialize();
        console.log("Database connection established."); 
        // Synchronize entities (create tables if they don't exist)      
        await AppDataSource.synchronize();
        console.log("Database synchronized.");
    } catch (err) {
        console.error("Database connection failed", err);
    }
}

export default initialize;