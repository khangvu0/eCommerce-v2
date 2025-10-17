import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { db, verifyDatabaseConnection } from './db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from client/dist
app.use(express.static(path.join(__dirname, '../client/dist')));

// Fetch all products
app.get('/api/products', async (req, res) => {
    try {
        const { rows } = await db.query('SELECT * FROM products');
        res.json(rows);
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ error: 'Database query failed' });
    }
});

// Fetch best-seller products
app.get('/api/best-sellers', async (req, res) => {
    try {
        const { rows } = await db.query(
            'SELECT * FROM products WHERE id IN (1, 3, 5, 6, 9, 11, 12)'
        );
        res.json(rows);
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ error: 'Database query failed' });
    }
});

// Fetch single product by ID
app.get('/api/products/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const { rows } = await db.query(
            'SELECT * FROM products WHERE id = $1',
            [id]
        );

        if (rows.length === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.json(rows[0]);
    } catch (err) {
        console.error('Error fetching product by ID:', err);
        res.status(500).json({ error: 'Database query failed' });
    }
});

// Catch-all route to serve index.html for client-side routing (Express 5 compatible)
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

const PORT = process.env.PORT ? Number(process.env.PORT) : 5000;
app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`);
    await verifyDatabaseConnection();
});
