import express from "express";
import fileURLtoPath from "url";

const port = 3000;
const app = express();
var data;

app.get("/", (req, res) => {
    res.render("index.ejs", data)
})
app.post("/submit", (req, res) => {
    
})
app.listen(port, (req, res) => {
    console.log("Server listening on port : "+port);
})
