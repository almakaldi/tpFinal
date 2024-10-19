let anchoPantalla = 640;
let altoPantalla = 480;
let cantF = 23;
let pantallas = [];
let estado = 1;
let miFuente ;
let avion;
let titulo;
let sonidoDeFondo;
let estados = [];
let decisiones = [];

function preload() {
   for (let i = 0; i < cantF; i++){
     pantallas[i] = loadImage("data/porco" + i + ".jpg");
   }
   miFuente = loadFont('data/inter.ttf');
   titulo = loadImage("data/porcorosso.png");
   avion = loadImage("data/avion.png");
   soundFormats('ogg');
   sonidoDeFondo = loadSound('data/sonido.ogg');
   estados = loadStrings('data/textos.txt');
  decisiones[3] = [' Rechazar \n el llamado', 'Aceptar e intentar \n salvar a las niñas'];
  decisiones[5] = ['  Rechazar \n la propuesta', '    Aceptar \n  la propuesta'];
  decisiones[8] = ['Buscar otra \n alternativa', 'Confiar en Fio para \nreparar el hidroavión'];
  decisiones[11] = ['Rechazar el\n   desafío','Aceptar el desafío \n y pelear por Fio'];
  decisiones[16] = ['Casarse con \n   Gina', 'Negar y despedirse \n       de Gina'];
}

function setup() {
   createCanvas(anchoPantalla, altoPantalla);
   background(0);
   print(pantallas);
   textFont(miFuente);
   textSize(20);
   print(avion);
   print(titulo);
   sonidoDeFondo.loop();
}

function draw() {
   background(0);
   misPantallas(); 
   pantallaDosBotones();
   pInicio();
   botonInicio();
  pantallaUnBoton();
   textos();
   pCreditos();
   reiniciar();
   textoAlt();
}

function mousePressed() { 
  if (estado === 1 && detectarBoton (250,250,150,40)){
  estado++; // para inicar
  } else if (estado >cantF && detectarBoton (250, 250, 150, 40)){
    estado = 1; // para reiniciar
  } else if (estado === 3 && detectarBoton (85,400, 150,60)){
    estado = 19;
  } else if (estado === 19 && detectarBoton (435,420, 120,30)){
    estado = 5;
  } else if (estado === 5 && detectarBoton (85,400, 150,60)){
    estado = 20;
  } else if (estado === 20 && (435,420, 120,30)){ //final
    estado = 25;
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
  } else if (pantallaUnBoton && detectarBoton ( 435,420, 120,30)){ 
    estado++; // botón siguiente
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
