const express = require("express");
const cors = require("cors");
const router = express.Router();


const commentController = require("../controllers/commentController");
const Serverless = require("serverless-http");


const app = express();
//const port = 8001;
const port = process.env.PORT;
app.use(cors());

//They converted  what
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/.netlify/functions/api",commentController)


app.listen(port,()=>{
    console.log("App is listening")
    console.log("http://localhost:"+port)
}

)

