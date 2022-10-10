Status="";
objects=[];
function preload(){
  tv_img = loadImage("Tv.jpg");
}
function setup()
{
    canvas=createCanvas(600,300);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("tv_status").innerHTML = "Status : Detecting Objects";

}
function modelLoaded(){
    console.log("Model Loaded!");
    Status= true;
    objectDetector.detect(tv_img , gotResult);
}
function gotResult(error , results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects=results;
    }
   

}
function draw(){
    image(tv_img , 0,0,600,300);
    if(Status != "")
    {
      for (i = 0; i < objects.length; i++) {
        document.getElementById("tv_status").innerHTML = "Status : Object Detected";
        document.getElementById("tv_msg").innerHTML ="There is 2 big object in the image and COCOssd model detected it TV correctly";
  
        fill("#FF0000");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
      }
}
}