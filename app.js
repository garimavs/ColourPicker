function generateRandomValue(){
    var r= Math.floor(Math.random() * 256);
    var g= Math.floor(Math.random() * 256);
    var b= Math.floor(Math.random() * 256);

    return "rgb("+r+ ", "+ g+", "+b+")";

} 

function generateRandomColors(num){
    var arr = [];
 for(var i=0; i<num; i++){
    arr.push(generateRandomValue());
 }
 return arr;
}

function changeColors(colors){
    for(var i=0; i<boxes.length; i++){
        boxes[i].style.backgroundColor = colors
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * color.length);
    return color[random];
}


var n =6;
var color = generateRandomColors(n);

var boxes= document.querySelectorAll(".boxes");
var pickedColor = pickColor();
var selectedColor = document.querySelector("#selectedColor");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reload= document.querySelector("#reload");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard")


easy.addEventListener("click", function(){
    n=3;
    color = generateRandomColors(n);
    pickedColor = pickColor();
    selectedColor.textContent = pickedColor;
    for(var i=0; i< boxes.length; i++){
        if(color[i]){
        boxes[i].style.backgroundColor= color[i];
    }
    else{
       boxes[i].style.display = "none";
    }
    }
    
})

hard.addEventListener("click", function(){
    n =6;
    color = generateRandomColors(n);
    pickedColor = pickColor();
    selectedColor.textContent = pickedColor;
    for(var i=0; i< boxes.length; i++){
        boxes[i].style.backgroundColor= color[i];
        boxes[i].style.display = "block";
    }

   
})

reload.addEventListener("click", function(){
    console.log("clicked")
    color = generateRandomColors(n);
    pickedColor = pickColor();
    selectedColor.textContent =pickedColor;
    reload.textContent= "New Colors"

    message.textContent = "";
    for(var i=0; i< boxes.length; i++){
        boxes[i].style.backgroundColor= color[i];
    }
})

selectedColor.textContent =pickedColor;

for(var i =0; i< boxes.length; i++){
    boxes[i].style.backgroundColor = color[i];

    boxes[i].addEventListener("click", function(){
        var clickedColor =this.style.backgroundColor;
        console.log(pickedColor, clickedColor)
        if(clickedColor ===pickedColor){
           message.textContent = "Correct";
           changeColors(clickedColor);
           h1.style.backgroundColor = clickedColor;
           reload.textContent ="play again?";
        }
        else{
        this.style.backgroundColor = "#232323"
        message.textContent = "try again"
        }
    })
}

