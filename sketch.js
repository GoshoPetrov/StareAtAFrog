let frog;

let currentScene;

let score = 0;
let bestScore = 0;

let song2;

let started = false;  

let soundSlider;

let sliderX = 0
let sliderY = 300

function preload(){
  frog = loadImage("frog.jpg")
  song1 = loadSound('frogcave.mp3');
  song2 = loadSound("autisIsland.ogg");
}


function setup() {
  var w = window.innerWidth;
  var h = window.innerHeight; 
  
  createCanvas(w, h);
  currentScene = "startScene"
  soundSlider = createSlider(0, 255);

}

function draw() {
  background(220);
  
  if(currentScene == "startScene"){
    startScene()
  }
  else if(currentScene == "playScene"){
    playScene()
  }
  else if(currentScene == "endScene"){
    endScene()
  }
  
  soundSlider.size(200);
  soundSlider.position(sliderX, sliderY);
  soundSlider.size(200);

}

function clearMouse() {
  mouseIsPressed = false
}

function startScene(){
  rect(0, height - 100, 265, height + 220)
  textSize(50);
  text("PLAY", 50, height - 40)
  if(mouseIsPressed && mouseX < 265 && mouseY > 400){
    currentScene = "playScene"
    clearMouse()

    if (!started) {
      started = true;
      song2.play();

    }

    sliderX = 10000;
    sliderY = 10000;
  }
  else{
    //image(frog, 0, 0)
    frog.resize(400, 400)
  }

  song2.setVolume(soundSlider.value()); 
}

function playScene(){
  
  if (mouseIsPressed && mouseX < 200 && mouseY > 400){
    currentScene = "endScene"
    clearMouse()
  }
  else{
    ellipse(500, 500, 200)
    score += 1;
    textSize(50)
    text(`score: ${score}`, 10, 50)
    text("i give up", 100, 450)
  }
}


function endScene(){
  print('endScene')
  if(mouseIsPressed){
    currentScene = "startScene"
    clearMouse()
    bestScore = score;
    score = 0
  }
  else{
    if(bestScore < score){
      text("Yay you beated your previous score", 0, 100)
      text(`New best score: ${score}`, 100, 200)
    }
    else{
      text(`You FOOL why not try stare for more than your previous score wich is ${score}`, 100, 100)
    }

    text("Play again?", 100, 400)
  }
}
