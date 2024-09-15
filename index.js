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

var randomNumber;
var gameArray = [];
var userArray = [];
var userSelection;
var gameCounter = 0;
var clickCounter = 0;
var soundCount;
var soundObj = {
  sound0 : new Audio("./sounds/green.mp3"),
  sound1 : new Audio("./sounds/red.mp3"),
  sound2 : new Audio("./sounds/yellow.mp3"),
  sound3 : new Audio("./sounds/blue.mp3"),
  wrong : new Audio("./sounds/wrong.mp3")
}


$("body").keypress(function () {
  generateAndPushRandom();
  
  $("button").click(function () {
   soundCount ="sound"+$(this).attr("id");
   console.log(soundCount);
   soundObj[soundCount].play();
   $(this).addClass("flash");
   

    userSelection = Number($(this).attr("id"));
    userArray.push(userSelection);

    console.log(gameArray);


    if (gameArray[clickCounter] == userSelection) {
      console.log("user selection ="+userSelection);
      console.log("GameRandom = "+gameArray[clickCounter]);
      console.log("same");
      generateAndPushRandom();
      userArray.push(userSelection);
      clickCounter++;
    } else if (gameArray[clickCounter] != userSelection) {
      console.log("user selection ="+userSelection);
      console.log("GameRandom = "+gameArray[clickCounter]);
      console.log("user Array = "+userArray);
      gameOver();
    }
  });
});

function generateAndPushRandom() {
  randomNumber = Math.floor(Math.random() * 4);
  gameArray.push(randomNumber);
  $("#"+randomNumber).animate(
    {
      opacity: 0.25,
    },
    100,
    function () {
      
      $("#"+randomNumber).animate(
        {
          opacity: 1,
        },
        100
      ); // Animation complete.
    }
  );
  
  
  console.log(gameArray[clickCounter]);
  
}
function gameOver() {
  console.log("wrong");
  soundObj.wrong.play();
  $("body").css("background-color", "red");
  $("h1").html("Game Over.<br>Press F5 to Restart");
}
