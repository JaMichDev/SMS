import User from './models/User.js';
import bycrypt from 'bcryptjs';

const userRegister = async () => {

    /*
    try {
        await User.deleteMany({});
        const users = [
            {
                name: "Admin",
                email: "admin@example.com",
                password: "admin123",
                role: "admin"
            },
            {
                name: "Scolarite",
                email: "scolarite@example.com",
                password: "scolarite123",
                role: "scolarite"
            },
            {
                name: "Student",
                email: "student@example.com",
                password: "student123",
                role: "student"
            }
        ];

        await User.insertMany(users);
        console.log("Users seeded successfully");

    } catch (error) {
        console.error("Error seeding users:", error);
    }
  */

    try {
        const hashedPassword = await bycrypt.hash('admin123', 10);

        const adminUser = new User({
            name: "Admin",
            email: "admin@example.com",
            password: hashedPassword,
            role: "admin"
        });
        await adminUser.save();
        console.log("Admin user seeded successfully");
    } catch (error) {
        console.error("Error seeding admin user:", error);
    }  
}

userRegister(); 
                 