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
console.log(randomNum);

$("button").click(inputCount);


function inputCount(){
    randomNum = Math.floor(Math.random()*4+1)
    btnClick = $(this).attr("id");
    $(this).addClass("flash");
    setTimeout(() =>{
        
        $(this).removeClass("flash");
        
    },100);
    
   
    console.log(btnClick);
    if (randomNum==btnClick) {
        //continue
    } else {
        // $("body").css("background-color", "red")
    }
}
