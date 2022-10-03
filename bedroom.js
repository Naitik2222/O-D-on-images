Status="";
function preload(){
  bedroom_img = loadImage("bedroom.jpg");
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
    image(bedroom_img , 0,0,600,300);
}