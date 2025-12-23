import mongoose from "mongoose";               //mongoose : ORM pour MongoDB

const connectToDatabase = async () => {
  try {
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.pviohoc.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

    await mongoose.connect(uri);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectToDatabase;


