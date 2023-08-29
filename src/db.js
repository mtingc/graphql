const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Retrieve MongoDB Atlas credentials from environment variables
    const DB_USER = process.env.DB_USER;
    const DB_PASSWORD = process.env.DB_PASSWORD;
    const DB_CLUSTER = process.env.DB_CLUSTER;

    // Connect to the MongoDB Atlas cluster
    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}.gvcdasx.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    // Log success message upon successful connection
    console.log("Connected successfully to DB");
  } catch (error) {
    // Log error message if connection fails
    console.error("Connection error:", error);
  }
};

module.exports = connectDB;
