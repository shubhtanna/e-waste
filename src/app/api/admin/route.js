import { connectDb } from "@/Helper/db";
import { Admin } from "@/Models/admin";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

connectDb();

export async function POST(request) {
    try {
        const { name, email,mobileNumber, password, confirmPassword } = await request.json();

        // Validate password and confirmPassword match
        if (password !== confirmPassword) {
            return NextResponse.json({
                status: false,
                message: "Password and confirmPassword do not match",
            });
        }

        // Hash the password
        const hashedPassword = bcrypt.hashSync(password, parseInt(process.env.BCRYPT_SALT));

        // Create a new admin user
        const user = new Admin({
            name,
            email,
            mobileNumber,
            password: hashedPassword,
            confirmPassword: hashedPassword, // Store hashed password in confirmPassword for demonstration purposes
        });

        // Save the admin user
        const createdAdmin = await user.save();

        // Return a JSON response
        const response = NextResponse.json({
            user: createdAdmin,
            status: 201,
            message: "Admin Created",
        });

        return response;
    } catch (error) {
        console.error("Error creating admin:", error);
        return NextResponse.json({
            status: false,
            message: "Failed to create admin",
        });
    }
}
