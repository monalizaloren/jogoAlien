var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg;

var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;

var zombieGroup;

var score = 0;
var life = 3;
var bullets = 70;

var heart1, heart2, heart3

var gameState = "fight"

var lose, winning, explosionSound;


function preload(){
  
  heart1Img = loadImage("assets/heart_1.png")
  //Faça o mesmo com o 'heart2Img' e 'heart3Img'
//???
//???

//Utilize o código que carrega uma imagem
  shooterImg = ???("assets/shooter_2.png")
  shooter_shooting = ???("assets/shooter_3.png")

  zombieImg = ???("assets/zombie.png")

  bgImg = ???("assets/bg.jpeg")
//Utilize o código que carrega um som
  lose = ???("assets/lose.mp3")
  winning = ???("assets/win.mp3")
  explosionSound = ???("assets/explosion.mp3")

}

function setup() {

  //Crie um canva com a largura:windowWidth
  //e com altura: windowHeight
  //Dessa forma, o seu camva ocupará toda a tela
  //???

  //Crie um sprite
  bg = ???(displayWidth/2-20,displayHeight/2-40,20,20)
  //Esse sprite guardará sua imagem de fundo, utilize 'addImage' para adicionar uma imagem
bg.???(bgImg)
//Defina o tamanho da imagem de fundo para 1.1
///???   

//crie o sprite do jogador
player = ???(displayWidth-1150, displayHeight-300, 50, 50);
//Adicione a imagem do jogador
 player.???(shooterImg)
 //Defina o tamanho do jogador para 0.3
   ///???
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)
