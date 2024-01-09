let frog;

let currentScene;

let score = 0;
let bestScore = 0;

let song2;

let started = false;  

let soundSlider;

let sliderX
let sliderY

function preload(){
  frog = loadImage("frog.jpg")
  song1 = loadSound('frogcave.mp3');
  song2 = loadSound("autisIsland.ogg");
}


function setup() {
  //var w = window.innerWidth;
  //var h = window.innerHeight; 
  
  createCanvas(1000, 2100);
  currentScene = "startScene"
  sliderX = width/2
  sliderY = height/2
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
  
  soundSlider.position(sliderX, sliderY);
  soundSlider.size(400);


}

function clearMouse() {
  mouseIsPressed = false
}

function startScene(){
  soundSlider.position(sliderX, sliderY);
  rect(width/2 - 250, height - 400, 450, 200, 40)
  textSize(80);
  text("PLAY", width/2 - 130, height - 270)
  textSize(60);
  text("Volume:", 30, height - 480)

  if(mouseIsPressed){
    if (started == false) {
      started = true;
      song2.play();
  
    }
  }
  

  if(mouseIsPressed && mouseX < width/2 + 170 && mouseY > height - 400){
    currentScene = "playScene"
    clearMouse()

    sliderX = 10000;
    sliderY = 10000;
  }
  else{
    //image(frog, 0, 0)
    frog.resize(400, 400)
    sliderX = width/2 - 210
    sliderY = height - 500
    
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
