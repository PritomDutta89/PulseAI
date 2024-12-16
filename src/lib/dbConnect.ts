/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from "mongoose";

// It's used to track the database connection state in the connection variable.
type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected to database");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {});

    connection.isConnected = db.connections[0].readyState; //optional - you can use true/false
    // db.connections[0].readyState ->
    // 0: Disconnected
    // 1: Connected
    // 2: Connecting
    // 3: Disconnecting

    console.log("DB Connected Successfully!");
  } catch (error) {
    console.log("Database Connected failed!", error);
    process.exit(1);
  }
}

export default dbConnect;
