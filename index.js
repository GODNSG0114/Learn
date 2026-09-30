import express from "express"
import dotenv from "dotenv"
dotenv.config();

const app = express();
const PORT  = process.env.PORT

app.get("/" , (req,res)=>{
    res.send("Hello ")
})

app.get("/login" , (req,res)=>{
    res.send("<h1> Login page </h1> ");
})

app.listen(PORT , ()=>{
    console.log(`Listening on http://localhost:${PORT}`);
})