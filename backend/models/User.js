import mongoose from "mongoose"; //mongoose : ORM pour MongoDB

//Ce code sert à définir le modèle User (Utilisateur) dans MongoDB à l’aide de Mongoose.
const userSchema = new mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'scolarite', 'student'], required: true },
    profileImage: { type: String }, // URL de l'image de profil
    createAt: { type: Date, default: Date.now }, // Date de création de l'utilisateur    
    updatedAt: { type: Date, default: Date.now } // Date de la dernière mise à jour de l'utilisateur    
});

const User = mongoose.model('User', userSchema);

export default User;