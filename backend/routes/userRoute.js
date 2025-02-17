import express from 'express';
import { login, register } from '../controllers/userController.js';

const router = express.Router();

// Define the route for registration
router.post('/register', register);
router.post('/login', login)

export default router; 
