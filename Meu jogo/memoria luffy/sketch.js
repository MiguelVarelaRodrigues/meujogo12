var zoro, luffy,doflamingo,barbanegra,sanji,robin,katakuri,kaido,barbabranca,ace,yamato,dragon,nami
var titulo,atrasdacarta

var cartaaltura=65
var cartalargura=115
var viradas=[]
var quantidadedecartas=24
var cartaX=[]
var cartaY=[]

function preload () {
  zoro=loadImage("./assets/zoro.jpg")
  luffy=loadImage("./assets/luffy.jpg")
  doflamingo=loadImage("./assets/Doflamingo.jpg")
  sanji=loadImage("./assets/sanji.jpg")
  titulo=loadImage("./assets/year.png")
  robin=loadImage("./assets/robin.jpg")
  dragon=loadImage("./assets/dragon.jpg")
  yamato=loadImage("./assets/yamato-capa-omelete.jpg")
  ace=loadImage("./assets/one-piece-ace-wano.jpg")
  katakuri=loadImage("./assets/katakuri.jpg")
  nami=loadImage("./assets/blob_z8c5.1080-1-910x512.jpg")
  barbabranca=loadImage("./assets/barba branca.jpg")
  barbanegra=loadImage("./assets/barba negra.jpg")
  atrasdacarta-loadImage("./assets/ONE LUFFY.jpg")
}

function setup() {
  createCanvas(1201,601);
  imageMode(CENTER)
}

function draw() {
  background("black");  

  image(titulo,600,75,220,110)
  drawSprites();

}

