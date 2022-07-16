import { connect } from "mongoose";

const connectToDatabase = () => {
  try {
    connect(process.env.NEXT_APP_DB_URI);
  } catch (err) {
    console.log("Error: ", err.message);
  }
};
