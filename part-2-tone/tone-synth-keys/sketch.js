// tone-synth-keys

// Basic mousePressed with Tone.js
// a minor scale played sequentially on click
let synth;
let idx = 0;

const AMinorScale = ['A3', 'B3', 'C4', 'D4', 'E4', 'F4', 'G4'];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  synth = new Tone.Synth().toDestination()
}

function draw() {
  background(0);
}

function mousePressed() {

  // Current audio context time (in seconds)
  const now = Tone.now();

  AMinorScale.forEach((note, idx) => {
    synth.triggerAttackRelease(note, '16n', now + idx);
  });
}