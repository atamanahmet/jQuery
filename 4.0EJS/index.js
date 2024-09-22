// import express from "express";
// import ejs from "ejs";
// import { fileURLToPath } from "url";
// import path from "path";

// const port = 3000;
// const app = express();
// const indexDirectory = new URL(fileURLToPath(path.dirname(import.meta.url)));
// const directoryEJS = indexDirectory.pathname + "/views/index.ejs";
// const date = new Date().getDay();
// const weekdays = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// var dayType = "";
// var advice = "";
// if (date == 0 || date == 6) {
//   dayType = "is weekend";
//   advice = "it is time to play hard!";
// } else {
//   dayType = "a weekday";
//   advice = "it is time to work hard!";
// }
// // <h1><%= day %> is <%= dayType%>, <%= advice %>!</h1>
// // app.set("view engine", "ejs");
// console.log(directoryEJS);

// // console.log(indexDirectory.pathname);
// const bowl = ["apple", "pear", "bok"]
// app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.render("index.ejs", {fruit : bowl})
// });
// app.listen(port, (req, res) => {
//   console.log("Listening on port: " + port);
// });

// app.post("/daywrite", (req, res) => {
//   res.render("index.ejs", {
//     name: req.body.name1,
//     day: weekdays[date],
//     advice: advice,
//     dayType: dayType,
//   });
//   //   console.log(req.body.name1);
// });

import express from "express";
import path from "path";
import fileURLtoPath from "url";


const app= express();
const port = 3000;

app.get("/", (req, res) => {
    const data = {
        title : "EJS Tags",
        seconds: new Date().getSeconds(),
        items: ["apple", "banana", "erik", "elma"],
        htmlContent: "<em>Tis is and alert like bs </em>",
    }
    // data.items.forEach( (i) => console.log(i))
    
    res.render("index.ejs", data);
})
app.listen(port, (req, res) => {
    console.log("Server online, Listening port "+port);
})