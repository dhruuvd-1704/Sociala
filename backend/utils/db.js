import mongoose from "mongoose";
const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Database connected");
    });
    await mongoose.connect(`${process.env.MONGODB_URI}/Cluster0`);
  } catch (e) {
    console.log(e);
  }
};
export default connectDB;
