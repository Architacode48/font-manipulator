rwristX=0;
lwristX=0;
difference=0;
function setup(){
canvas=createCanvas(450,400);
canvas.position(690,150);
video=createCapture(VIDEO);
video.size(450,450);
video.position(100,150);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("model loaded");
}
function draw(){
    word=document.getElementById("name").value;
    background("#000000");
    stroke("#ff0000");
    fill("#ff0000");
    text(word,200,300);
    textSize(difference);
    document.getElementById("size").innerHTML="Textsize is= "+difference+"px";
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        rwristX=results[0].pose.rightWrist.x;
        lwristX=results[0].pose.leftWrist.x;
        difference=floor(rwristX-lwristX);
        console.log("rwristX= "+rwristX+"lwristX= "+lwristX+"difference= "+difference);
    }
}