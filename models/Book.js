import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  title: { type: String, required: true, trim: true },
  publishedDate: { type: Date, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
    required: true,
  },
});

const Book = mongoose.model("Book", bookSchema);

export default Book;
