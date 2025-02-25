import express, { Express, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import connectDB from './config/database';

// Load environment variables
dotenv.config();

// Initialize Express app
const app: Express = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // CORS handling
app.use(express.json()); // JSON body parser
app.use(express.urlencoded({ extended: true })); // URL encoded body parser

// Connect to MongoDB
connectDB();

// Simple route for testing
app.get('/', (req: Request, res: Response): void => {
  res.json({ message: 'Welcome to the TypeScript Express API' });
});

// Error handling middleware
app.use(
  (err: Error, req: Request, res: Response, _next: NextFunction): void => {
    console.error(err.stack);
    res.status(500).json({
      message: 'Something went wrong!',
    });
  }
);

// Import routes
import userRoutes from './routes/userRoutes';

app.use('/api/v1/users', userRoutes);

// Start the server
app.listen(port, (): void => {
  console.log(`Server is running on port ${port}`);
});

export default app;
