import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "article",
    };
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("DB CONNECTED SUCCESSFULLY!!");
  } catch (err){
    console.log("Error in connectin db");
    console.log(err);
  }
};

export default connectDB