lipsX=0;
lipsY=0;
function preload(){
lips= loadImage('https://i.postimg.cc/hvB18R7z/lips.jpg');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet= ml5.poseNet (video, modelLoaded );
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
console.log('poseNet Has Started');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        lipsX= results[0].pose.nose.x-25;
        lipsY= results[0].pose.nose.y+15;
        console.log("x="+lipsX);
        console.log("y="+lipsY);
    }
}

function draw(){
    fill(0,120,255)
    stroke(0,120,255);
    circle(25,25,50);
    circle(25,75,50);
    circle(25,125,50);
    circle(25,175,50);
    circle(25,225,50);
    circle(25,275,50);
    circle(75,275,50);
    circle(125,275,50);
    circle(175,275,50);
    circle(225,275,50);
    circle(275,275,50);
    circle(275,25,50);
    circle(275,75,50);
    circle(275,125,50);
    circle(275,175,50);
    circle(275,225,50);
    circle(75,25,50);
    circle(125,25,50);
    circle(175,25,50);
    circle(225,25,50);
    circle(275,25,50);
    image(video,50,50,200,200);
    image(lips,lipsX,lipsY,30,30);
}
function take_snapshot(){
    save("myFilterImage.png");
}