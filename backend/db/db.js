import mongoose from "mongoose";               //mongoose : ORM pour MongoDB

const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {   //Connexion à la base de données MongoDB                    
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};