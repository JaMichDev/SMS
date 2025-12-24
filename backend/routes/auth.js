import express from 'express';
import { login } from '../controllers/authController.js';


const router = express.Router(); //Une instance de routeur

router.post('/login', login); // login fonction dans le controlleur authController

export default router;