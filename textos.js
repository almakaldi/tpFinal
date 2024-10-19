function textos(){
    strokeWeight(2);
  stroke(0);
    fill(255);
    textSize(15);
 if (estado >= 2 && estado <= 23) {
    text(estados[estado - 2], 130, 380);
  }
}
function textoAlt() {
  noStroke();
  fill(0);
  textSize(13);
  
  if (decisiones[estado]) {
    text(decisiones[estado][0], 105, 430);
    text(decisiones[estado][1], 425, 430);
  }
}
