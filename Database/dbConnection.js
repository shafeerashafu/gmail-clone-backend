import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); 

const dbUsername = process.env.DB_USERNAME || "";
const dbPassword = process.env.DB_PASSWORD || "";
const dbClustername = process.env.DB_CLUSTER_NAME || "127.0.0.1:27017";
const dbName = process.env.DB_NAME || "GmailCloneApp";

const cloudUri=`mongodb+srv://${dbUsername}:${dbPassword}@${dbClustername}/${dbName}?retryWrites=true&w=majority`;



const connectToDb = async() => {
    try {
        await mongoose.connect(cloudUri);
      } catch (err) {
        process.exit(1);
      }
};

export default connectToDb;