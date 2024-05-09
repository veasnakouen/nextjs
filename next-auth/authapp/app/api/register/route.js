import { NextResponse } from "next/server";
import { connectMongoDb } from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    // incrypt password using bcryptjs before save to database
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDb();

    // set password equal to hashed password
    await User.create({ name, email, password: hashedPassword });
    return NextResponse.json(
      { message: "User Registered!." },
      {
        //status successful created
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "An error occurred while registering user ",
      },
      {
        //Status internal server Error.
        status: 500,
      }
    );
  }
}
