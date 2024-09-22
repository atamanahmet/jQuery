import express from "express";
import ejs from "ejs";

const app = express();
const port = 3000;
var strCount;
app.use(express.urlencoded({extended: true}))

app.get("/", (req,res) => {
    app.render("index.ejs")
})
app.post("/submit", (req,res) => {
   res.locals.strCount = (req.body.name+req.body.lastname).trim().length
   res.render("index.ejs", strCount)
})


app.listen(port, (req, res) => {
    console.log("Server listenin on port : "+port);
})