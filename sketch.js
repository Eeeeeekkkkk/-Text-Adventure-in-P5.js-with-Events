let inputText = "";
let textColor = "#3498db";
let backgroundColor = "#ffffff";
let waveSpeed = 1;

let isFullscreen = false;

function setup() {
    let canvas = createCanvas(windowWidth / 2, windowHeight / 2);
    canvas.parent('canvas-container');
    textFont('Arial');
    textSize(40);
}

function toggleFullscreen() {
    let fs = fullscreen();
    fullscreen(!fs);
    isFullscreen = !isFullscreen;
}

function autoChangeBackgroundColor() {
    backgroundColor = getRandomColor();
    redraw();
}

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
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

function keyPressed() {
    if (keyCode === BACKSPACE) {
        clearCanvas();
    } else if (key === 'S' || key === 's') {
        saveCanvas();
    }
}

function draw() {
    background(color(backgroundColor));

    for (let i = 0; i < inputText.length; i++) {
        const letterOffset = i * 30;
        let angle = (frameCount - letterOffset) * 0.05 * waveSpeed;
        let radius = 100 + sin(angle) * 50;

      
        let x = width / 2 + cos(angle) * radius + random(-5, 5);
        let y = height / 2 + sin(angle) * radius + random(-5, 5);

        
        let rotation = sin(angle) * PI / 4;
        rotate(rotation);

        
        let dynamicColor = color(
            red(textColor) + random(-20, 20),
            green(textColor) + random(-20, 20),
            blue(textColor) + random(-20, 20)
        );

        
        if (/[acdfgjkopqtu]/i.test(inputText[i])) {
            textStyle(BOLD);
            textSize(random(30, 60));
        } else {
            textStyle(NORMAL);
            textSize(random(20, 40));
        }

        
        fill(dynamicColor);
        noStroke();
        text(inputText[i], x, y);
    }

    
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        addRandomSignKey();
    }
}

function addRandomSignKey() {
    const signKeys = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '[', ']', '{', '}', ';', ':', ',', '.', '<', '>', '/', '?'];
    const randomSignKey = random(signKeys);
    const randomColor = getRandomColor();
    const randomSize = random(60, 120); 

    fill(randomColor);
    textSize(randomSize);
    text(randomSignKey, random(width), random(height));
}

function clearCanvas() {
    background(255);
}

function saveCanvas() {
    save('generative_typography_canvas.png');
}


