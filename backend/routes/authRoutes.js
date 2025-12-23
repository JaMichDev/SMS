import express from 'express';
import { loginLocal } from '../controllers/authController.js';

const router = express.Router();

router.post('/login', loginLocal);

export default router;




