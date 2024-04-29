import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL!);
    console.log("CONNECTED TO MONGODB SUCCESS...");
  } catch (error) {
    console.log("CONNECTED TO MONGODB SUCCESS...");
    process.exit(1); //to jump out of the process
  }
};
export default dbConnect;
