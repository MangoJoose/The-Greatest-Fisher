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

export async function sellInventory(account_id: number): Promise<number> {
    try {
        const query =`SELECT final_price FROM fishventory WHERE account_id = $1`;
        const value = [account_id];
        
        const res = await pool.query(query, value);
        const sum = res.rows.reduce((acc, row) => acc + Number(row["final_price"]), 0);
        console.log("Inventory sold, gaining:", sum, "gold.");

        return sum;
    } catch (err) {
        console.error("Error selling inventory in DB.");
        throw err;
    }
}

export async function addMoney(account_id: number, additional_funds: number) {
    try {
        const query = `
        UPDATE accounts
        SET money = money + $1
        WHERE id = $2
        RETURNING *;
        `;
        const values = [additional_funds, account_id];

        const res = await pool.query(query, values);
        return res.rows[0];
    } catch (err) {
        console.error("Error adding money to account.");
        throw err;
    }
}