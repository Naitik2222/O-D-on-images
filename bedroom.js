Status="";
objects=[];
function preload(){
  bedroom_img = loadImage("bedroom.jpg");
}
function setup()
{
    canvas=createCanvas(600,300);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("bedroom_status").innerHTML = "Status : Detecting Objects";
    document.getElementById("bedroom_msg").innerHTML ="There is 5 big object in the image but COCOssd model not detected any of them";

}
function modelLoaded(){
    console.log("Model Loaded!");
    Status= true;
    objectDetector.detect(bedroom_img , gotResult);
}
function gotResult(error , results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects = results;
    }
   

}
function draw(){
    image(bedroom_img , 0,0,600,300);
    if(Status != "")
    {
      for (i = 0; i < objects.length; i++) {
        document.getElementById("bedroom_status").innerHTML = "Status : Object Detected";
       
  
        fill("#FF0000");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
      }
}

}