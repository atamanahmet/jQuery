import express from "express";
import fileURLtoPath from "url";

const port = 3000;
const app = express();
var strCount;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
res.locals.strCount = (req.body.name + req.body.lastname).trim().length;
// console.log(strCount);
  res.render("index.ejs", strCount);
  
});

app.listen(port, (req, res) => {
  console.log("Server listening on port : " + port);
});

function countChar() {
 strCount = (data.name + data.lastname).trim().length;
}
