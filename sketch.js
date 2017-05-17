var brushSize = 20;
var redColor = 50;
var greenColor = 50;
var blueColor = 50;
var inverse = false;
function setup() {
	createCanvas(1920,1080);
    background(30);
}

function draw() {
    noStroke();
	if (mouseIsPressed){
        fill(redColor,greenColor,blueColor);
        ellipse(mouseX,mouseY,brushSize,brushSize);
        colorRandomizer();
        brushSizeChanger();
    }


}
function keyPressed() {
    if (keyCode === DELETE) {
        background(255);
    }
}
function brushSizeChanger() {
    if (brushSize > 0 && !inverse){
        brushSize = brushSize - 5;
    } else if (brushSize == 0) {
        inverse = true;
        brushSize = brushSize + 5;
    } else if (brushSize < 200 && inverse){
        brushSize = brushSize + 5;
    } else if (brushSize == 200){
        inverse = false;
        brushSize = brushSize - 5;
    }
}
function colorRandomizer(){
    redColor = random(255);
    greenColor = random(255);
    blueColor = random(255);
}

