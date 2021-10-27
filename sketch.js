function setup() {
    createCanvas(windowWidth, windowHeight);
    background(230); 
} 
  
  var r = 0;
  var g = 0;
  var b = 0;
  let firstClick = false;
  
function draw() {
    let xWinMid = (windowWidth / 2);
    let yWinMid = (windowHeight / 2);
    
    if (firstClick == false) {
      var xVar = xWinMid;
      var yVar = yWinMid;
    
    } else if (firstClick == true) {
      var xVar = xClick;
      var yVar = yClick;     
    }
    
    let lineColor = color(r, g, b);
    stroke(lineColor);
    line(mouseX, mouseY, xVar, yVar);
    let mouseIsPressed = false;   
}
  
  
function mouseClicked() {
    if (mouseIsPressed == false){ 
      xClick = mouseX;
      yClick = mouseY;
      r = random(255);
      g = random(255);
      b = random(255);
      firstClick = true;
      mouseIsPressed = true;     
    }   
}