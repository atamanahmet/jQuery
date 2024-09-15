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

var randomNum;
var btnClick;
var userArray = [];
var randomArray = [];
var randomCheck;
var counter = 0;

$("body").keypress(function () {
  randomNum = Math.floor(Math.random() * 4 + 1);
  randomArray.push(randomNum);
  randomFlash();
  // console.log("Random number is " + randomNum);
  console.log(randomArray);

  $("button").click(function () {

    btnClick = Number($(this).attr("id"));
    userArray.push(btnClick);
    // console.log("counter base array "+userArray[counter]);
    addFlash();

    

    for (i=0; i<counter; i++){
  
      if(randomArray[i]==userArray[i]){
        // continue 
        console.log("same");
        console.log("User Array = "+userArray);
        console.log("random Array = "+randomArray);
      }
      else if (randomArray[i]!=userArray[i]){
        // red
        console.log("not same");
        
      }
    }
    // console.log("User Select " + btnClick);
    randomNum = Math.floor(Math.random() * 4 + 1);
    randomArray.push(randomNum);
    // console.log(randomArray);
    randomFlash();
    // console.log("Random number is " + randomNum);
    counter++;
    console.log("counter "+counter);
  });
});

function addFlash() {
  $(this).addClass("flash");

  setTimeout(() => {
    $(this).removeClass("flash");
  }, 100);
}

function randomFlash() {
  randomCheck = "#" + randomNum;
  $(randomCheck).addClass("activeBox");
  setTimeout(() => {
    $(randomCheck).removeClass("activeBox");
  }, 700);
}


