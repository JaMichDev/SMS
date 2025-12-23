import mongoose from "mongoose"; //mongoose : ORM pour MongoDB

//Ce code sert à définir le modèle User (Utilisateur) dans MongoDB à l’aide de Mongoose.
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ['admin', 'scolarite', 'student'],
      required: true
    },
    profileImage: String
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);
export default User;