  function botonInicio(){ 
  if (estado === 1){
  fill(255);
  rect (250,250,150,40);
  fill(0);
  noStroke();
  text ('Iniciar', 295,275);
  }
}
  function botonSiguiente(){
    if (estado >=2 && estado <= cantF && estado !== 3 && estado !==5 && estado !== 8 && estado !== 11 && estado !== 16 ){
      fill (255,130);
      stroke(50);
      rect ( 435,420, 120,30);
      fill(0);
      noStroke();
      textSize(18);
      text('Siguiente',455,440);    
  }
}
function cambioDeRumbo(){
  if (estado === 3){
    caminos ();
  } else if (estado === 5){
    caminos();
  } else if (estado === 8){
    caminos ();
  } else if (estado === 11){
    caminos ();
  }else if (estado === 16){
    caminos ();
  }
}

function caminos (){
 stroke (50);
    fill(255, 200);
    rect (85,410, 130,50);
    rect (420,410,135,50);
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
