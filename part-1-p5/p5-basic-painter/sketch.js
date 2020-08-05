// p5-basic-painter

let slider;
let colorPicker;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // setup slider
  slider = createSlider(0, 100, 20);
  slider.position(40, 40);
  slider.style('width', '80px');

  // setup colorpicker
  colorPicker = createColorPicker('#ed225d');
  colorPicker.position(200, 40);
}

function draw() {
  noStroke();
  fill(0);
  rect(0, 0, width, 80);
}

function mouseDragged() {
  fill(colorPicker.color());
  ellipse(mouseX, mouseY, slider.value(), slider.value());
}

function keyPressed() {
  background(255);
}
