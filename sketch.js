let img;
var sizeX = 150;
var sizeY = 150;
let c;
let myFont;
let dragX, dragY;


function preload() {
  img = loadImage("0140.jpg");
}

function setup() {
  let c = createCanvas(960, 1200);
  image(img, 0, 0);
  textSize(14);
}

function draw() {
  copy(img, 0, height - 20, width, height, 0, height - 20, width, height);

  if (mouseIsPressed) {
    copy(img, dragX, dragY, sizeX, sizeY, mouseX, mouseY, sizeX, sizeY);
  }

  fill(255);
  textAlign(CENTER);
  text("size x: " + sizeX + "  size y: " + sizeY, width / 2, height - 5);
}

function mousePressed() {
  dragX = mouseX;
  dragY = mouseY;
}

function keyPressed() {
  if (key === 's') {
    saveCanvas(c, 'gen_exploration', 'jpg');
  }

  if (key == 'r') {
    image(img, 0, 0);
  }

  if (keyCode == RIGHT_ARROW) {
    sizeX = sizeX + 25;
  }
  if (keyCode == LEFT_ARROW) {
    sizeX = sizeX - 25;
    if (sizeX == 0) {
      sizeX = sizeX + 25;
    }
  }
  if (keyCode == UP_ARROW) {
    sizeY = sizeY + 25;
  }
  if (keyCode == DOWN_ARROW) {
    sizeY = sizeY - 25;
    if (sizeY == 0) {
      sizeY = sizeY + 25;
    }
  }
}
