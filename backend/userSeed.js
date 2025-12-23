import User from './models/User.js';
import bcrypt from 'bcryptjs';
import connectToDatabase from './db/db.js';

import mongoose from "mongoose"; //mongoose : ORM pour MongoDB

//Ce code sert à définir le modèle User (Utilisateur) dans MongoDB à l’aide de Mongoose.
/*const userSchema = new mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'scolarite', 'student'], required: true },
    profileImage: { type: String }, // URL de l'image de profil
    createAt: { type: Date, default: Date.now }, // Date de création de l'utilisateur    
    updatedAt: { type: Date, default: Date.now } // Date de la dernière mise à jour de l'utilisateur    
});
*/

const userRegister = async () => {
  try {
    await connectToDatabase();

    const hashedPassword = await bcrypt.hash('admin123', 10);

    const users = [
      {
        name: 'Admin',
        email: 'admin@example.com',
        password: hashedPassword,
        role: 'admin'
      },
      {
        name: 'Scolarity',
        email: 'scolarity@example.com',
        password: hashedPassword,
        role: 'scolarite'
      },
      {
        name: 'Student',
        email: 'student@example.com',
        password: hashedPassword,
        role: 'student'
      }
    ];

    await User.insertMany(users);

    console.log('Users seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding users:', error);
    process.exit(1);
  }
};

userRegister();
