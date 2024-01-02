let frog;

let currentScene;

let score = 0;
let bestScore = 0;

function preload(){
  frog = loadImage("frog.jpg")
}


function setup() {
  createCanvas(800, 800);
  currentScene = "startScene"
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
  
  

}

function clearMouse() {
  mouseIsPressed = false
}

function startScene(){
  if(mouseIsPressed){
    currentScene = "playScene"
    clearMouse()
  }
  else{
    image(frog, 0, 0)
    frog.resize(400, 400)
  }
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
