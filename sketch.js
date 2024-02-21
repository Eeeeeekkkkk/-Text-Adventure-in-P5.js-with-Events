let inputText = "";
let textColor = "#3498db"; 
let backgroundColor = "#ffffff";
let waveSpeed = 1; 

let isPaused = false; 
let lastFrame = null; 

function setup() {
  createCanvas(600, 503); 
  noStroke();
}

function keyPressed() {
  if (keyCode === BACKSPACE) { 
    background(255); 
  } else if (key === 's' || key === 'S') { 
    saveCanvas('canvas', 'png'); 
  }
}

function updateText() {
  inputText = document.getElementById('textInput').value;
  redraw(); 
}

function updateTextColor() {
  textColor = document.getElementById('textColorPicker').value;
  redraw();
}

function updateBackgroundColor() {
  backgroundColor = document.getElementById('backgroundColorPicker').value;
  redraw(); 
}

function updateWaveSpeed() {
  waveSpeed = parseFloat(document.getElementById('waveSpeedSlider').value);
  redraw(); 
}

function mousePressed() {
  
  background(random(255), random(255), random(255));
}

function draw() {
  fill(color(textColor)); 
  textSize(100);
  let x = width / 2;
  let y = height / 2;

  for (let i = 0; i < inputText.length; i++) {
    const letterOffset = i * 10;
    const letterY = y + sin((frameCount - letterOffset) * 0.05 * waveSpeed) * 100;

    text(inputText[i], x, letterY);
    x += textWidth(inputText[i]) + 10;
  }

  
  ellipse(mouseX, mouseY, 33, 33);
}
