// userRoutes.ts
import express, { Router } from 'express';
import { getUser } from '../controllers/userController';
import asyncHandler from '../utils/AsyncHandler';

const router: Router = express.Router();

// Use asyncHandler to wrap the async controller function
router.get('/', asyncHandler(getUser));

export default router;
