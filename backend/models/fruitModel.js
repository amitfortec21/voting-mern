import mongoose from "mongoose";

const fruitModel = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter title!"],
        unique: true
    },
    votes: {
        type: Number,
        default: 0
    },
    image: {
        type: String,
        required: [true, "Please insert an image!"],
        unique: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model("fruit", fruitModel);