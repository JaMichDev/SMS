import mongoose from 'mongoose'; //mongoose : ORM pour MongoDB

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);//Connexion à la base de données MongoDB    
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectToDatabase;