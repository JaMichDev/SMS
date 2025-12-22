import express from 'express' ;
import cors from 'cors' ;
import dotenv from 'dotenv' ;

const app = express();
app.use(express.json());
app.use(cors());    

dotenv.config();    
const PORT = process.env.PORT || 3000 ;

import studentRoutes from './routes/studentRoutes.js' ;
app.use('/students', studentRoutes);        
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});