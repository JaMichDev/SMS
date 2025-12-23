import dotenv from 'dotenv'; //dotenv : charger les variables du fichier .env
dotenv.config(); // UNE SEULE FOIS, tout en haut

import express from 'express'; //express : serveur web
import cors from 'cors'; //cors : autoriser les requêtes du frontend

//import connectToDatabase from './db/db.js';
//await connectToDatabase();
import authRoutes from './routes/authRoutes.js';
const app = express();

app.use(express.json());
app.use(cors());
app.use('/auth', authRoutes);
const PORT = process.env.PORT || 3000;

app.listen(PORT,'0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});















