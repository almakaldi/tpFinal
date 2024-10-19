  function botonInicio(){ 
  if (estado === 1){
  fill(255);
  rect (250,250,150,40);
  fill(0);
  noStroke();
  text ('Iniciar', 295,275);
  }
}
 
 function reiniciar() {
  if (estado >cantF) {
    fill (255);
    stroke(0);
    rect (250, 250, 150, 40);
    fill(0);
    textSize(20);
    noStroke();
    text ('Reniciar', 290, 275);
  }
}
