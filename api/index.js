import { error } from "console";
import express from "express";
import https from "https";
import axios from "axios";

const port = 3000;
const app = express();
var result;
app.get("/", async (req, res) => {
try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    res.render("index.ejs", {data: result});

}
catch (error){
    console.error("Errored : ", error.message);
    // console.log(error);
}
    // const options = {
    //     hostname: "bored-api.appbrewery.com",
    //     path: "/random",
    //     method: "GET",
    // };
    // const request = https.request(options, (response)=>{
    //     let data = "";
    //     response.on("data", (chunk)=>{
    //         data= data+ chunk;
    //     });
    //     response.on("end", () => {
    //         try{
    //             result = JSON.parse(data);
    //             console.log(result);
    //         }
    //         catch (error){
    //             // console.error("Erorr: ", error.message);
    //         }
    //     });
    // });
    // // request.on("error", (error)=>{
    // //     console.error("request error", error.message)
    // // });
});





  app.listen(port, (req, res) => {
    console.log("Online : " + port);
  });

