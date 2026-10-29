import mongoose from "mongoose";

const authorSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  bio: { type: String, required: true },
});

const Author = mongoose.model("Author", authorSchema);

export default Author;
