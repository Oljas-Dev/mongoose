import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
  title: { type: String, required: true, trim: true },
  releaseYear: { type: Date, required: true },
  actors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Actor",
    },
  ],
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
