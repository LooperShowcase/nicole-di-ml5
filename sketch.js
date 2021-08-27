let player;
let playerImg;
let bgImg;
let obsImg;
let obstacles = [];
let wordClassifier;

function preload() {
  playerImg = loadImage("levi.png");
  bgImg = loadImage("bgg.png");
  obsImg = loadImage("monke.png");
}

let options = {
  probabilityThrehold: 0.85,
};

wordClassifier = ml5.soundClassifier("SpeechCommands18w", options);

function setup() {
  createCanvas(1000, 600);
  player = new Player();

  wordClassifier.classify(heardWord);
}

function heardWord(error, results) {
  console.log(results[0].label + "  " + results[0].confidence);
  if (results[0].label == "up") {
    player.jump();
  }
}

function keyPressed() {
  if (key === " ") {
    player.jump();
  }
}

function draw() {
  background(bgImg);

  if (random(1) < 0.01) {
    obstacles.push(new Obstacle());
  }

  for (let obs of obstacles) {
    obs.show();
    obs.move();
    if (player.collided(obs) === true) {
      console.log("Game Over");
      noLoop();
    }
  }

  player.show();
  player.move();
}
