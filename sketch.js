let frog;

let currentScene;

let score = 0;
let bestScore = 0;

let song2;

let started = false;  

let soundSlider;

let sliderX
let sliderY

let happyAhh

function preload(){
  frog = loadImage("FrogForGame.PNG")
  youFool = loadImage("YouFool.webp")
  happyAhh = loadImage("HappyAhh.jpg")
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
  else if(currentScene == "winGame"){
    winGame()
  }
  
  soundSlider.position(sliderX, sliderY);
  soundSlider.size(400);


}

function clearMouse() {
  mouseIsPressed = false
}

function startScene(){
  textSize(100)
  text(`STARE AT A FROG: 
  THE GAME`, width/2 - 500, 300)
  textSize(60)
  text(`Rule 1: 
  You have to stare at the frog`, width/2 - 500, 600)
  text(`Rule 2: 
  Stare at frog as long as possible`,  width/2 - 500, 800)
  text(`Rule 3:
  If you beat the score of 6900 you 
  win a price`, width/2 - 500, 1000)
  text(`Rule 4:
  Have fun!`, width/2 - 500, 1300)

  soundSlider.position(sliderX, sliderY);
  rect(width/2 - 250, height - 400, 450, 200, 40)
  textSize(80);
  text("PLAY", width/2 - 130, height - 270)
  textSize(60);
  text("Volume:", 30, height - 480)

  if(mouseIsPressed){
    if (started == false) {
      started = true;
      song1.play();
  
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

  song1.setVolume(soundSlider.value()); 
}

function playScene(){

  frog.resize(1000, 1000)
  image(frog, width/2 - 500, height/2 - 900)
  
  if (mouseIsPressed && mouseX < width/2 + 200 && mouseY > height - 450){

    currentScene = "endScene"
    clearMouse()
  }
  else{
    //ellipse(500, 500, 200)
    score += 1;
    textSize(50)
    text(`score: ${score}`, 10, 50)
    textSize(100)
    text("i give up", width/2 - 220, height - 270)

    if(score >= 100){
      currentScene = "winGame"
    }

    //textSize(100);
    //text("i give up", width/2 - 220, height - 270)
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
    textSize(60)
    if(bestScore < score){
      text("Yay you beated your previous score", 0, 100)
      text(`New best score: ${score}`, 100, 200)
    }
    else{
      image(youFool, width/2 - 450, height/2 - 400);

      youFool.resize(900, 900)
      text(`  You FOOL why not try stare for 
    more than your previous 
    score wich is ${score}`, 100, 100)
    }

    text("Play again?", width/2 - 130, height - 270)
  }
}

function winGame(){
  if(mouseIsPressed){
    currentScene = "startScene"
    score = 0;
  }

  textSize(100)
  text("YOU WOn", 100, 100);

  textSize(90)
  text("Go black to main menu", 10, height - 400)

  happyAhh.resize(900, 900)
  image(happyAhh, width/2 - 450, height/2 - 600)
}