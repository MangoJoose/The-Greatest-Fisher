import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();
import { load_game_data, game_data } from "./config_loader";
import apiRoutes from "./routes/api";

import { Pool } from 'pg';

export const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DB,
    password: process.env.PG_PASSWORD,
    port: 5432,
});

const app = express();
const port = 5000;

app.use(express.json());
app.use("/api", apiRoutes);

async function getFish() {
    try {
        const res = await pool.query('SELECT * FROM fish');
        console.log(res.rows);
    } catch (err) {
        console.error('Error fetching fish:', err);
    }
}

// Handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// React
app.use(express.static(path.join(__dirname, '../client/build')));

// API Route
app.get('/api/hello', (req, res) => {

    res.json({ message: 'Hello !!'});

});

// Server rendered route
app.get('/login', (req, res) => {

    res.render('login', { title: 'Login Page' });

});

// Fallback
/*
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
*/
load_game_data();

app.listen(port, () => { // Run Server with npm run dev
    console.log(`Server is running at http://localhost:${port}`);
    getFish();
});