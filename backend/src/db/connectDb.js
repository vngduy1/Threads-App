import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_URI;

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connect successfully!!");
  } catch (error) {
    console.log("Connect failure!!!", error);
    process.exit(1);
  }
}

export default connect;
