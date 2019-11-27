var canvas;
var rai = "RAI";
var tg;
var monoscopio;

function preload(){
  tg = loadSound("./assets/TG1_new.mp3");
  monoscopio = loadImage("./assets/monoscopio_rai-60.png");
}

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  canvas.parent("#cnv");
  background(140, 144, 145);

  imageMode(CENTER);
  image(monoscopio, windowWidth/2, windowHeight/2, 1300);

  //fft = new p5.FFT();

  analyzer = new p5.Amplitude();
  analyzer.setInput(tg);

  tg.pause();
  tg.playMode('sustain');


}

function draw() {
  push();
  rectMode(CENTER);
  noStroke();
  fill(0, 26, 255);
  if(tg.isPlaying() === true){
    var volume = 0;
    volume = analyzer.getLevel();
    volume = map(volume, 0, 1, 0, height);
    //background(202, 203, 204);
    image(monoscopio, windowWidth/2, windowHeight/2, 1300);
    ellipse(width/6,height/4,30 + volume * 2,30 + volume * 2);
} else {
    //background(202, 203, 204);
    image(monoscopio, windowWidth/2, windowHeight/2, 1300);
    ellipse(width/6,height/4,30,30);
  }
  pop();

  push();
  rectMode(CENTER);
  noStroke();
  fill(0, 179, 57);
  if(tg.isPlaying() === true){
    var volume = 0;
    volume = analyzer.getLevel();
    volume = map(volume, 0, 1, 0, height);
    ellipse(width/6,height-height/6,30+ volume * 3,30+ volume * 3);
} else {
    ellipse(width/6,height-height/6,30,30);
  }
  pop();

  push();
  rectMode(CENTER);
  noStroke();
  fill(235, 64, 52);
  if(tg.isPlaying() === true){
    var volume = 0;
    volume = analyzer.getLevel();
    volume = map(volume, 0, 1, 0, height);
    ellipse(width-width/6,height/4,30 + volume * 1.5,30 + volume * 1.5);
} else {
    ellipse(width-width/6,height/4,30,30);
  }
  pop();

  push();
  rectMode(CENTER);
  noStroke();
  fill(212, 72, 200);
  if(tg.isPlaying() === true){
    var volume = 0;
    volume = analyzer.getLevel();
    volume = map(volume, 0, 1, 0, height);
    ellipse(width-width/6,height-height/6,30 + volume * 2.5,30 + volume * 2.5);
} else {
    ellipse(width-width/6,height-height/6,30,30);
  }
  pop();

  push();
  ellipseMode(CENTER);
  stroke(0);
  strokeWeight(4);
  fill('white');
  ellipse(width/2, height/2, windowHeight);

/*
  var spectrum = fft.analyze();

  var mybass = fft.getEnergy("bass");
  var mylowmid = fft.getEnergy("lowMid");
  var mymid = fft.getEnergy("mid");
  var myhighmif = fft.getEnergy("hightMid");
  var energyArray = [mybass, mylowmid, mymid, myhighmid];
*/
  for(var d = 100; d < windowHeight; d = d + 20) {
    //for(var i = 0; i < spectrum.length; i++){
      //var e = energyArray[Math.floor(Math.random() * energyArray.lenght)];
    ellipseMode(CENTER);
    stroke(0);
    strokeWeight(2);
    noFill()
    ellipse(width/2, height/2, d);
    //}
  }

  fill(0);
  translate(width/2, height/2 + 20);
  textAlign(CENTER);
  textFont('Notable');
  textSize(100);
  text(rai, 0, 0);
  textFont('Orbitron');
  textSize(20);
  text("click for the jingle",0, 0 + 20);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseClicked() {
  if(tg.isPlaying() === false) {
    tg.play();
  }
}
