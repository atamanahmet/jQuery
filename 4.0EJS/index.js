import express from "express";
import ejs from "ejs";
import { fileURLToPath } from "url";
import path from "path";

const port = 3000;
const app = express();
const indexDirectory = new URL(fileURLToPath(path.dirname(import.meta.url)));
// const directoryEJS = indexDirectory.pathname + "/views/index.ejs";
const date = new Date();
const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
var day = weekDays[date.getDay()];
app.set('view engine', 'ejs')
console.log(day);

console.log(indexDirectory.pathname);

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(indexDirectory + "/index.html");
});
app.listen(port, (req, res) => {
  console.log("Listening on port: " + port);
});
app.post("/daywrite", (req, res) => {
  res.render("index.ejs", {name: "ataman"}, (err) => {
    // res.sendFile(indexDirectory + "/index.html");
    if(err){
    console.log(err);}
  });
  console.log(req.body.name1);
 
});
