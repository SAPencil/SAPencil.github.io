size(400,400);
var pick1 = "r";
var pick2 = "b";
var replacement = true;

var buttonPos = 280;
var buttonWidth = 50;
var buttonHeight = 25; 

mouseClicked = function () {
    if (mouseX > 140 && mouseX < 200 && mouseY > 80 && mouseY < 105){
        pick1 = "b";}
    if (mouseX > 140 && mouseX < 200 && mouseY > 180 && mouseY < 210){
        pick1 = "r";}
    
    if (mouseX > 290 && mouseX < 340 && ((mouseY > 50 && mouseY < 80) || (mouseY > 160 && mouseY < 190))){
        pick2 = "b";}
    if (mouseX > 290 && mouseX < 340 && ((mouseY > 126 && mouseY < 150) || (mouseY > 225 && mouseY < 250))){
        pick2 = "r";}
    if (mouseX > buttonPos && mouseX < buttonPos+buttonWidth && mouseY > buttonPos && mouseY < buttonPos+buttonHeight)
        {replacement = true;}
    if (mouseX > buttonPos + buttonWidth + 10 && mouseX < buttonPos+ 2*buttonWidth + 10 && mouseY > buttonPos && mouseY < buttonPos+buttonHeight)
        {replacement = false;}
        console.log(replacement);

};

draw = function() {
  
    
    stroke(0, 0, 0);
    background(255, 255, 255);
    strokeWeight(2);
    if (replacement) {text("With Replacement", 140, 20);}
    else {text("Without replacement", 140, 20);}
    //timeline
    line(mouseX, 0, mouseX, height);
    fill(220,220,220);
    rect(buttonPos, buttonPos, buttonWidth, buttonHeight);
    rect(buttonPos + buttonWidth +10, buttonPos, buttonWidth, buttonHeight);
    fill(0,0,0);
    text( "Replacement", buttonPos - 80, buttonPos + 15);
    text("on", buttonPos + 10, buttonPos+ 15);
    text("off", buttonPos + buttonWidth + 10 + 10, buttonPos+ 15);
    //tree
    
    //base pick1
    line(50, 150, 135, 100);
    line(50, 150, 135, 200);
    
    //base pick2
    line(205, 200, 290, 170);
    line(205, 200, 290,240);
    
    line(205, 100, 290, 70);
    line(205, 100, 290,140);
    
    //text
    fill(17, 0, 255);
    text("blue", 299, 74);
    
    fill(255, 0, 0);
    text("red", 299, 145);
    
    fill(17, 0, 255);
    text("blue", 298, 182);
    
    fill(255, 0, 0);
    text("red", 295, 243);
    
    //conditionals
    if (pick1 === "b") {
        strokeWeight(8);
        stroke(64, 0, 255);
        if (mouseX > 50){
        line(50, 150, 136, 99);}
        stroke(0, 0, 0);
        strokeWeight(2);
        
        //pick2 given pick1 = blue
        if (pick2 === "b") {
                strokeWeight(8);
            stroke(64, 0, 255);
            if (mouseX > 205){
                    line(205, 100, 288, 70);}
            stroke(0, 0, 0);
            strokeWeight(2);
        } else if (pick2 === "r") {
            strokeWeight(8);
        stroke(255, 0, 0);
        if (mouseX > 205){
                line(205, 100, 290, 140);}
        stroke(0, 0, 0);
        strokeWeight(2);
        }
    } 
    else if (pick1 === "r") {
        strokeWeight(8);
        stroke(255, 0, 0);
        if (mouseX > 50) {line(50, 150, 135, 200);}
        stroke(0, 0, 0);
        strokeWeight(2);
        
        
        //pick2 given pick1 = red
        if (pick2 === "b") {
            strokeWeight(8);
        stroke(64, 0, 255);
            if (mouseX > 205) {
        line(205, 200, 290, 170);}
        stroke(0, 0, 0);
        strokeWeight(2);
        } else if (pick2 === "r") {
            strokeWeight(8);
        stroke(255, 0, 0);
            if (mouseX > 205) {
        line(205, 200, 290, 240);}
        stroke(0, 0, 0);
        strokeWeight(2);
        }
    } 

    textSize(20);
    
    fill(17, 0, 255);
    text("blue", 149, 100);
    
    fill(255, 0, 0);
    text("red", 149, 200);

    
    //box of counters
    line(30, 300, 30, 350);
    line(100, 300, 100, 350);
    line(30, 350, 100, 350);
    
    //red counters
    fill(255, 0, 0);
    noStroke();
    
    //ball one
    var d;
    if(replacement) {
        if (pick1 === "r") {
            if (mouseX<135) {
                 d = constrain(mouseX, 50, 135);}
            else {d = constrain(-mouseX+270 , 50, 135);}
        }
        else if (pick2 === "r") {
        d = constrain(mouseX, 205, 290) - 160;}
        else {d = 51;}
    }
    else {
        if (pick1 === "r") {
    d = constrain(mouseX, 50, 135);
    } else if (pick2 === "r") {
    d = constrain(mouseX, 205, 290) - 160;}
    else {d = 51;}
    }
    ellipse(43, 383-d, 15, 15);
    
    //ball two
    var e;
    if (pick1 === "r" && pick2 === "r") {
    e = constrain(mouseX, 205, 290);
    } 
    else {e = 205;}
    ellipse(71, 539-e, 15, 15);
    
    
    
    //blue counters
    fill(13, 0, 255);
    
    //ball one
    var b;
    if (replacement) {
        if (pick1 === "b") {
            if(mouseX<135) {
                 b = constrain(mouseX, 50, 135);}
            else {b = constrain(-mouseX+270 , 50, 135);}
        }else if (pick2 === "b") {
    b = constrain(mouseX, 205, 290) - 160;}
    else {b = 51;}}
    
    else {if (pick1 === "b") {
    b = constrain(mouseX, 50, 135);
    } else if (pick2 === "b") {
    b = constrain(mouseX, 205, 290) - 160;}
    else {b = 51;}}
    ellipse(57, 359 - b, 15, 15);
    
    //ball two
    var c;
    if (pick2 === "b" && pick1 === "b") {
    c = constrain(mouseX, 205, 290);
    }   else {c = 203;}
    ellipse(76, 512 - c, 15, 15);
    
    //ball three
    ellipse(91, 323, 15, 15);
    
};
 
