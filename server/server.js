import express from 'express';
import cors from 'cors';
import { db } from './db.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is running...');
});

// Fetch all products
app.get('/api/products', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM products');
        res.json(rows);
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ error: 'Database query failed' });
    }
});

// Fetch best-seller products
app.get('/api/best-sellers', async (req, res) => {
    try {
        const [rows] = await db.query(
            'SELECT * FROM products WHERE id IN (1, 3, 5, 6, 9, 11, 12)'
        );
        res.json(rows);
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ error: 'Database query failed' });
    }
});

const PORT = 5000;
app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
);
