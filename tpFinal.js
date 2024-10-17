let anchoPantalla = 640;
let altoPantalla = 480;
let cantF = 23;
let fondos = [];
let estado = 1;
let miFuente ;
let avion;
let titulo;
let sonidoDeFondo;


function preload() {
   for (let i = 0; i < cantF; i++) {
     fondos[i] = loadImage("data/porco" + i + ".jpg");
   }
   miFuente = loadFont('data/inter.ttf');
   titulo = loadImage("data/porcorosso.png");
   avion = loadImage("data/avion.png");
   soundFormats('ogg');
   sonidoDeFondo = loadSound('data/sonido.ogg');
  
}

function setup() {
   createCanvas(anchoPantalla, altoPantalla);
   background(0);
   print(fondos);
   textFont(miFuente);
   textSize(20);
   print(avion);
   print(titulo);
   sonidoDeFondo.loop();
}

function draw() {
   background(0);
   misFondos(); 
   botonSiguiente();
   pInicio();
   botonInicio();
   cambioDeRumbo();
   textos();
   pCreditos();
   reiniciar();
   textoAlt();
}


function mousePressed() {
 
  if (estado === 1 && detectarBoton (250,250,150,40)){
  estado++;
  } else if (estado >cantF && detectarBoton (250, 250, 150, 40)){
    estado = 1;
  } else if (estado === 3 && detectarBoton (85,400, 150,60)){
    estado = 19;
  } else if (estado === 19 && detectarBoton (435,420, 120,30)){
    estado = 5;
  } else if (estado === 5 && detectarBoton (85,400, 150,60)){
    estado = 20;
  } else if (estado === 20 && (435,420, 120,30)){ //final
    estado = 24;
  } else if (estado === 8 && detectarBoton (85,400, 150,60)) {
  estado = 21;
  } else if (estado === 21 && detectarBoton (435,420, 120,30)){
    estado = 11;
  } else if (estado === 18 && (435,420, 120,30)){ //final
    estado = 24;
  } else if (estado === 22 && (435,420, 120,30)){ // final
    estado = 24;
  } else if (estado === 11 && detectarBoton (85,400, 150,60)){
    estado = 23;
  } else if (estado === 16 && detectarBoton (85,400, 150,60)){
    estado = 22;
  } else if (estado === 23 && detectarBoton (435,420, 120,30)){
    estado = 17;
  } else if (estado >=2 && detectarBoton ( 435,420, 120,30)){ 
    estado++;
  }
  
}
function detectarBoton(x, y, an, al) {
  return mouseX > x && mouseX < x+an && mouseY > y && mouseY < y+al;
}
function mouseReleased() {
  if(sonidoDeFondo.isPlaying()){
  sonidoDeFondo.play();
}
}
function keyPressed () {
  sonidoDeFondo.stop();

}
