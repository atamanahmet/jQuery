// $("h1").css("color", "red")
// $("#btn2").css("font-size","5rem")

// if($("h1").text()=="Title"){
// console.log(true);
// }
// else{
//     console.log(false);
// }
// console.log($("h1").text());
// $("Button").html("<em>Click Me!</em>");

// console.log($("button").attr("class"));
// var sentence = "";
// $(document).keypress(function (event)
// {
//     sentence = sentence + event.key;

// $("h1").text(sentence);
// });

// var randomNum;
// var btnClick;
// var userArray = [];
// var randomArray = [];
// var randomCheck;
// var counter = 0;

// $("body").keypress(function () {
//   randomNum = Math.floor(Math.random() * 4);
//   console.log(randomNum);
//   randomArray.push(randomNum);
//   randomFlash();
//   // console.log("Random number is " + randomNum);
//   // console.log(randomArray);

//   $("button").click(function () {

//     btnClick = Number($(this).attr("id"));
//     userArray.push(btnClick);
//     // console.log(userArray);
//     // console.log("counter base array "+userArray[counter]);
//     addFlash();

//     for (i=0; i<counter; i++){

//     }
//     // console.log("User Select " + btnClick);
//     randomNum = Math.floor(Math.random() * 4 + 1);
//     randomArray.push(randomNum);
//     // console.log(randomArray);
//     randomFlash();
//     // console.log("Random number is " + randomNum);
//     counter++;
//     console.log("counter "+counter);
//   });
// });

// function addFlash() {
//   $(this).addClass("flash");

//   setTimeout(() => {
//     $(this).removeClass("flash");
//   }, 100);
// }

// function randomFlash() {
//   randomCheck = "#" + randomNum;
//   $(randomCheck).addClass("activeBox");
//   setTimeout(() => {
//     $(randomCheck).removeClass("activeBox");
//   }, 700);
// }

// //Dice Game
// var randomNumber;
// var gameArray = [];
// var userArray = [];
// var userSelection;
// var counter = -1;
// var clickCounter = 0;
// var level = 0;
// var started= false;
// var soundCount;
// var soundObj = {
//   sound0: new Audio("./sounds/green.mp3"),
//   sound1: new Audio("./sounds/red.mp3"),
//   sound2: new Audio("./sounds/yellow.mp3"),
//   sound3: new Audio("./sounds/blue.mp3"),
//   wrong: new Audio("./sounds/wrong.mp3"),
// };

// $("body").keypress(function () {
//   if(!started){
//   generateAndPushRandom();
//   $("h1").text("Level "+level)
//   $("button").click(function () {
//     clickCounter++;
//     // Sound-Animation etc
//     soundCount = "sound" + $(this).attr("id");
//     soundObj[soundCount].play();

//     $(this).addClass("flash");
//     setTimeout(() => {
//       $(this).removeClass("flash");
//     }, 200);

//     //User button click input#id getting and pushing into an array
//     userSelection = Number($(this).attr("id"));

//     userArray.push(userSelection);
//     // console.log("object");
//     // userArray.push(userSelection);

//     // console.log(gameArray);
//     if (gameArray[counter] == userSelection) {
//       console.log(true);
//       counter++;
//       if (clickCounter == gameArray.length) {
//         console.log("click counter " + clickCounter);
//         statusCheck();
//       }
//     } else {
//       gameOver();
//     }

//     // if (JSON.stringify.gameArray == JSON.stringify.userArray) {
//     //   generateAndPushRandom();
//     // }
//     //   if ((gameArray.length == clickCounter)&&(gameArray == userArray)) {
//     //     generateAndPushRandom();
//     // }
//   });
// }});

// function generateAndPushRandom() {
//  started=true;
//   randomNumber = Math.floor(Math.random() * 4);
//   gameArray.push(randomNumber);
//   level++;
//   $("#" + randomNumber).animate(
//     {
//       opacity: 0.25,
//     },
//     300,
//     function () {
//       $("#" + randomNumber).animate(
//         {
//           opacity: 1,
//         },
//         300
//       ); // Animation complete.
//     }
//   );
//   counter++;
//   // console.log(gameArray[clickCounter]);
//   console.log(gameArray);
// }
// function gameOver() {
//   console.log("wrong");
//   soundObj.wrong.play();
//   $("body").css("background-color", "red");
//   setTimeout(()=> {
//     $("body").css("background-color", "rgb(0, 0, 53)")
//   },400)

//   $("h1").html("Game Over. Press F5");
//   started=false;
//   // console.log("user selection "+ userSelection);
//   // console.log("user selection "+ gameArray[counter]);
// }
// function statusCheck() {
//   for (i = 0; i < gameArray.length; i++) {
//     if (gameArray[i] == userArray[i]) {
//       //continue
//       console.log("check done.");
//       generateAndPushRandom();
//       clickCounter = 0;
//       counter=0;
//       gameArray=[];
//       level=0;
//       userArray = [];
//       $("h1").text("Level "+level)
//     }
//     // else {
//     //   // gameOver();
//     // }
//   }
// }
// function startOver(){

// }

// console.log("Welcome");

// import fs from "fs";
// import inquirer from "inquirer";
// import qr from "qr-image";

// var data = "";
// var questions = [
//   {
//     type: "input",
//     name: "userName",
//     message: "Give your QR code a Name:",
//     default: "NoNameFU",
//   },
//   {
//     type: "input",
//     name: "qrableUrl",
//     message: "Please enter your URL:",
//     default: "https://google.com",
//     // validate (answer) {
//     //     if (isNaN(answer)==false){
//     //         console.log("Please enter a URL. URL must be a string.");
//     //     }
//     //     else {
//     //         return answer;
//     //     }
//     // }
//   },
// ];
// inquirer.prompt(questions).then((answers) => {
//     console.log(`Hello ${answers.userName}.`);
//     data = answers.qrableUrl;
//     fs.writeFile('userURLs.txt', data, (err) => {
//         if (err) throw err;
//         console.log('The URL file has been saved!');
//       }); 
//     fs.readFile('userURLs.txt', (err, data) => {
//         if (err) throw err;
//         var qrSvg = qr.image(data, { type: "svg" });
//         qrSvg.pipe(fs.createWriteStream(`${answers.userName}.svg`));
//       }); 

  
//   console.log("Your QR code has been created!");
//   console.log(`Your Url: ${answers.qrableUrl}`);
// });

// import express from "express";
// const app = express();
// const port = 3000;
// const reqparams={
//     "name": "ataman"
// }
// app.listen(port, ()=>{
//     console.log("Server online");
//     res.sendStatus(200)
// })
// app.get("/", (req,res)=>{

//     res.send("<h1>Hello World!<h1/>")
//     res.sendStatus(200)
//     res.send(reqs)
// })

// app.post("/about", (req, res)=>{
//     res.sendStatus(201)
    
// })

// app.get("/contact", (req,res)=>{
//     // res.send("<h1>Contact Me<h1/>")
//     res.sendStatus(200);
//     console.log(req.params); 
// })
// import express from "express";
// import path from "path"
// import bodyParser from "body-parser";
// import morgan from "morgan"

// const app = express();
// const port = 3000;

// const directory = new URL(path.dirname(import.meta.url));
// function logdiy(req, res, next) {
//     console.log("Request method: "+ req.method);
//     console.log("Client ip: "+ req.ip);
    
//     next();
// }

// app.use(logdiy);
// // app.use((req, res, next)=>{
// //     console.log(req)
// // })

// app.use(bodyParser.urlencoded({ extended: true }));


// app.listen(port, ()=>{
//     console.log("Server online");
// })

// app.get("/", (req,res)=>{
//     res.sendFile(directory.pathname.slice(1)+"/public/index.html")
// })

// app.post("/submit",(req, res)=>{
//     console.log(req.body);
    
//     res.sendStatus(201)
    
// })

// app.put("/contact", (req,res)=>{
//     // res.send("<h1>Contact Me<h1/>")
//     res.sendStatus(200);
// })
// app.put("/me", (req,res)=>{
//     // res.send("<h1>Contact Me<h1/>")
//     res.sendStatus(200);
// })

// import express from "express";
// import bodyParser from "body-parser";
// import path from "path";

// const app = express();
// const port = 3000;
// var directory = path.dirname(import.meta.url)+"/public/index.html";
// var bandName="";
// // var  directory = new URL(path.dirname(import.meta.url));
// // directory =directory.pathname.slice(1)+"/public/index.html";
// directory = directory.slice(8);
// // console.log(directory);

// app.use(bodyParser.urlencoded({extended: true}));


// app.get("/", (req, res) => {
//     res.sendFile(directory);
// })

// app.post("/submit", (req, res) => {
//     console.log(req.body);
//     bandName = req.body.street+req.body.petName;
//     console.log(bandName);
//     res.send("<h1>Your Band Name is:<h1/>"+`<h2>${bandName}🎧<h2/>`)
   
// })
// app.listen(port, (req, res) => {
//     console.log("Server online. Listening in port: "+port);
    
// })


import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const port = 3000;
const app = express();
const passcode=123456789;
const directory = new URL(fileURLToPath(path.dirname(import.meta.url)))

app.use(bodyParser.urlencoded({extended: true}))

console.log(directory.href);
app.listen(port, (req,res) => {
    // res.sendStatus(200);
    console.log("Server online on port : "+port);
})
app.get("/", (req,res) => {
    res.sendFile(directory.href+"/public/index.html");
})
app.post("/check", (req, res) => {
    console.log(req.body);
    if (passcode==req.body["password"]) {
        console.log("AuthOK");
        res.sendFile(directory.href+"/public/secret.html")
    }
    else {
        console.log("AuthNO");
        res.sendFile(directory.href+"/public/index.html")
    }
})