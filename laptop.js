Status="";
objects=[];
function preload(){
  laptop_img = loadImage("laptop.jfif");
}
function setup()
{
    canvas=createCanvas(600,300);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("laptop_status").innerHTML = "Status : Detecting Objects";

}
function modelLoaded(){
    console.log("Model Loaded!");
    Status= true;
    objectDetector.detect(laptop_img , gotResult);
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
    image(laptop_img , 0,0,600,300);

    if(Status != "")
    {
      for (i = 0; i < objects.length; i++) {
        document.getElementById("laptop_status").innerHTML = "Status : Object Detected";
        document.getElementById("laptop_msg").innerHTML ="There is 1 big object in the image and COCOssd model detected it TV instead of laptop that is too close";
  
        fill("#FF0000");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
      }
}
}