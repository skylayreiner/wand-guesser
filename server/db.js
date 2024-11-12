import { connect, Schema, model } from "mongoose";

connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`);

const playerSchema = new Schema(
  {},
  { timestamps: true } // will automatically create and set `createdAt` and `updatedAt` timestamps
);

const Player = new model("Player", playerSchema);

export { Player };
