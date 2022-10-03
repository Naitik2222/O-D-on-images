Status="";
function preload(){
  laptop_img = loadImage("laptop.jfif");
}
function setup()
{
    canvas=createCanvas(600,300);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

}
function modelLoaded(){
    console.log("Model Loaded!");
    Status= true;
    objectDetector.detect(img , gotResult);
}
function gotResult(error , results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
   

}
function draw(){
    image(laptop_img , 0,0,600,300);
}