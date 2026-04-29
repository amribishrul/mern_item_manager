const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const itemsRouter = require('./routes/items');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/items', itemsRouter);

app.get('/', (req, res) => {
    res.send('Item Manager API is running...');
});

// ONLY use the environment variable - NO fallback
const mongoURI = process.env.MONGO_URI;

if (!mongoURI) {
    console.error('ERROR: MONGO_URI environment variable is not set!');
    process.exit(1);
}

console.log('Connecting to MongoDB...');

mongoose
    .connect(mongoURI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err.message);
        process.exit(1);
    });