# Bitrate Series – Google Research (Magenta) x Gray Area
Audio Visualization with [p5.js](https://p5js.org/) + [Tone.js](https://tonejs.github.io/)
August 7, 2020 6-9pm PST

[Link to slides](https://docs.google.com/presentation/d/1xpjRurNecQmTOZmDElrU26k5N3-maBcoV3L0A4GFDHg/edit?usp=sharing)

***

## Part I: Setup & Intros, Getting Started with p5.js
- Quick Intros, workshop agenda
- Setup (5 min!) 
  - Download code, open in editor of choice (I'm using VSCode, but have also tried [Atom](https://atom.io/) and [Sublime Text](https://www.sublimetext.com/). Both are good options!)
  - Start a local server. There are several ways to do this! 
    - Some text editors have external packages you can download so you can start a server directly within your editor (e.g., Atom Live Server)
    - If you want to do this in Terminal, `cd` into wherever you downloaded the code, and run the following: ```python -m SimpleHTTPServer 3333```

    - See this [documentation](https://github.com/processing/p5.js/wiki/Local-server) for more information.

- p5.js Overview
  - Brief summary of p5.js origins
  - [Getting started documentation, if you are new to p5.js](https://p5js.org/get-started/)
  - `setup()` and `draw()`
  - Basic interactivity: 
    - `mouseX, mouseY, mousePressed(), mouseClicked(), mouseOver()`
    - `keyCode, keyPressed(), keyReleased()`
  -  Working with [p5.sound](https://p5js.org/reference/#/libraries/p5.sound)
      - [p5.amplitude](https://p5js.org/reference/#/p5.Amplitude)


***
## Part II: Intro to Tone.js
- Brief summary of Tone.js origins
- Basic synthesis examples - ADSR explained, `triggerAttack, triggerRelease, triggerAttackRelease`
- Transport, basic oscillator and synths (won't be covering effects e.g., [PingPongDelay](https://tonejs.github.io/docs/14.7.39/PingPongDelay) but you can see a list of them in the documentation)
- Using the mic
- Using samples



***
## Part III: Tone.js + p5.js
- Incorporating sound into existing p5 sketches
- Looking at audio data via Waveform and FFT

***
## Resources + References + More examples!
https://github.com/therewasaguy/p5-music-viz


