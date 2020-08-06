// tone-basic-synth

let synth;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  synth = new Tone.Synth().toDestination();
}

function draw() {
  background(0);
}

function mousePressed() {
  ellipse(mouseX, mouseY, 20, 20);
  synth.triggerAttackRelease("C4", "8n");
}





