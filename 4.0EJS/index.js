import express from "express";
import ejs from "ejs";
import { fileURLToPath } from "url";
import path from "path";

const port = 3000;
const app = express();
const indexDirectory = new URL(fileURLToPath(path.dirname(import.meta.url)));
const directoryEJS = indexDirectory.pathname + "/views/index.ejs";
const date = new Date().getDay();
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
var dayType = "";
var advice = "";
if(date == 0 || date==6){
dayType= "is weekend";
advice = "it is time to play hard!";
}
else {dayType= "a weekday";
    advice = "it is time to work hard!";
}

app.set('view engine', 'ejs')
console.log(directoryEJS);

// console.log(indexDirectory.pathname);

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(indexDirectory + "/index.html");
});
app.listen(port, (req, res) => {
  console.log("Listening on port: " + port);
});

app.post("/daywrite", (req, res) => {
  res.render("index.ejs", {name: req.body.name1, day: weekdays[date], advice: advice, dayType: dayType });
//   console.log(req.body.name1);
 
});
