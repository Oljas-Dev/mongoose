import express from "express";
import "dotenv/config";
import mongoose from "mongoose";

const app = express();
const port = process.env.PORT;
const dbURI = process.env.MONGO_URI || "uri";

// Connection to MongoDB
mongoose
  .connect(dbURI)
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is working");
});

app.listen(port, () => {
  console.log(`Server is running on http:localhost:${port}`);
});
