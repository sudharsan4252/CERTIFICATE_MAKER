import express from "express";
import cors from "cors";
import dotenv from "dotenv/config";
import uploadRouter from "./routes/uploadRoutes.js";


const app = express();
app.use(express.json());
app.use(cors());
const Port = process.env.PORT || 3005;
console.log(process.env.PORT);
console.log(process.env.REGION)
//
app.use(express.static('public'));

// Routes
app.use("/upload", uploadRouter);

// Connect to the database
// ConnectDB()


// Optional Figma integration route
// figmaConnect();
app.get("/", (req, res) => {
    res.send("hello guus")
});

// Start the server
app.listen(Port,()=>{
    console.log(" successfully running at "+`http://localhost:${Port}`)
})
