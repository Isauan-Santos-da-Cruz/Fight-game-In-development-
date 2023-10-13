var canvas = document.getElementById("#tela")
var screen = canvas.getContext('2d')

var drawSqr = new Image()

var red = {
  red : drawSqr.src="taler/red.png",
  posY: -30,
  posx: 30
  
}
function drawRed(){
  screen.drawImage(red.red, red.posY, red.posX, 50, 50);
  
}

screen.("load", drawRed())