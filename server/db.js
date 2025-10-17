import dotenv from 'dotenv';
import { Pool } from 'pg';
dotenv.config();

class DatabaseManager {
    constructor() {
        this.pool = new Pool({
            host: process.env.DB_HOST,
            port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            ssl: {
                rejectUnauthorized: false,
            },
        });
    }

    async query(text, params) {
        return this.pool.query(text, params);
    }

    async verify() {
        try {
            await this.pool.query('SELECT 1');
            console.log('PostgreSQL connection verified');
        } catch (err) {
            console.error('PostgreSQL connection failed:', err.message);
        }
    }
}

export const db = new DatabaseManager();
export const verifyDatabaseConnection = () => db.verify();
