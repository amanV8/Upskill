import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

connectDB();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Define Routes
app.get('/', (req, res) => res.send('API Running'));
app.use('/api/users', userRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
