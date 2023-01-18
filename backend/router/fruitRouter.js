import express from "express";
const fruitRouter = express.Router();
import multer from "multer";

// import controllers
import {  addFruit, getFruits, updateFruit, deleteFruit } from "../controllers/fruitController.js"

// image upload code start
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
});
const upload = multer({storage: storage});
// image upload code end

// import body-parser
import bodyParser from "body-parser";
fruitRouter.use(bodyParser.json());
fruitRouter.use(bodyParser.urlencoded({ extended: true }));

fruitRouter.use(express.json());
fruitRouter.post("/add", upload.single('image'), addFruit);
fruitRouter.get("/:id", getFruits);
fruitRouter.get("/", getFruits);
fruitRouter.put("/:id", upload.single('image'), updateFruit);
fruitRouter.delete("/:id", deleteFruit);

export default fruitRouter;