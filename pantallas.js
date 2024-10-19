function misPantallas() {
  if (estado >= 1 && estado <= cantF) {
    image(pantallas[estado - 1], 80, 0, 480, 480);
  }
}
function pInicio() {
  textSize (18);
  if (estado === 1) {
    fill(255, 220, 248);
    rect (0, 0, anchoPantalla, altoPantalla);
    image (avion, 300, 250, 300, 300);
    image (titulo, 77, -40, 500, 200);
    fill(110, 20, 40);
    noStroke();
    text ('Alma Abril Kaldi', 20, 360);
    text ('120328/0', 20, 380);
    text ('Pilar Jara', 20, 420);
    text ('119058/2', 20, 440);
    text ('Comisión 4', 515, 25);
    fill (0);
    text ('¡Elige tu propia aventura!', 200, 210);
    strokeWeight(1);
    stroke(0);
    line (20, 180, 620, 180);
  }
}
function pCreditos() {
  if (estado >cantF) {
    background(255, 220, 248);
    image (avion, 300, 250, 300, 300);
    image (titulo, 77, -40, 500, 200);
    fill(0);
    strokeWeight(1);
    line (20, 180, 620, 180);
    textSize(20);
    noStroke();
    text ('¡Llegaste al fin de la aventura!', 200, 210);
  }
}

 function pantallaUnBoton(){
  if (estado >=2 && estado <= cantF && estado !== 3 && estado !==5 && estado !== 8 && estado !== 11 && estado !== 16 ){
   fill (255,130);
   stroke(50);
   rect ( 435,420, 120,30);
   fill(0);
   noStroke();
   textSize(16);
   text('Siguiente',460,440);    
  }
}
function pantallaDosBotones(){
  if (estado === 3 || estado === 5 || estado === 8 || estado === 11 || estado === 16){
   stroke (50);
    fill(255, 200);
    rect (85,410, 130,50); // opcion A
    rect (420,410,135,50); // opcion B
  }
    }
    
