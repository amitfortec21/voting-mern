import express from "express";
const app = express();
import cors from "cors";
import bodyParser from "body-parser";
import fruitRouter from './router/fruitRouter.js';

// define application port
const PORT = 7000;

// import database connection file
import connect from "./database/conn.js";

// application middlewares
app.use(bodyParser.json());                           // for parsing application/json
app.use(bodyParser.urlencoded({extended:true}));      // for parsing application/xwww-form-urlencoded
app.use(cors());
app.use("/uploads", express.static('./uploads'))

// define routes
app.use("/fruits", fruitRouter);
app.get("/", (req, res) => res.json({ message:"Welcome to the Backend Server!" }));
app.all("*", (req, res) => res.json({ message:"Route doesn't exist" }));

// start server only when we have valid connection
connect().then(() => {
    try {
      app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
      });
    } catch (error) {
      console.log("Invalid Database Connection");
    }
});