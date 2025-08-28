import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

export const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DB,
    password: process.env.PG_PASSWORD,
    port: 5432,
});

export async function addFishToInventory(account_id: number, fish_id: number, modifier: number, final_price: number) {
    try {
        const query =`
        INSERT INTO fishventory (account_id, fish_id, modifier, final_price)
        VALUES ($1, $2, $3, $4)
        RETURNING *;
        `;

        const values = [account_id, fish_id, modifier, final_price];

        const res = await pool.query(query, values);
        console.log("New inventory row added:", res.rows[0]);
        return res.rows[0];
    } catch (err) {
        console.error("Error adding inventory row:", err);
        throw err;
    }
}