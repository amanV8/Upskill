import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

connectDB();

// Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true
}

app.use(cors(corsOptions));

// Define Routes
app.get('/', (req, res) => res.send('API Running'));
app.use('/api/users', userRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
