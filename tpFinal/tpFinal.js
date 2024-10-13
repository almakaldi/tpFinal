let anchoPantalla = 640;
let altoPantalla = 480;
let cantF = 21;
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
   reiniciar();
   pInicio();
   botonInicio();
   cambioDeRumbo1();
}

function misFondos() {
  
  if (estado >= 1 && estado <= cantF) {
    image(fondos[estado - 1], 80, 0, 480, 480); 
  }
}


function botonInicio(){ 
  if (estado === 1){
  fill(255);
  rect (250,250,150,40);
  fill(0);
  text ('Iniciar', 295,275);
  }
}
function pInicio(){
  if(estado === 1){
  fill(255,220,248);
  rect (0,0,640,480);
  image (avion, 300, 250,300,300);
  image (titulo,77,-40,500,200);
  fill(110,20,40);
  text ('Alma Abril Kaldi',20,360);
  text ('120328/0', 20,380);
  text ('Pilar Jara', 20,420);
  text ('119058/2',20,440);
  text ('Comisión 4', 515,25);
  fill (0);
  text ('¡Elige tu propia aventura!', 200,210);
  line (20, 180, 620,180);
  
  

}
}
  
  function botonSiguiente(){
    if (estado >=2 && estado <= cantF){
      fill (255,130);
      stroke(50);
      rect ( 435,420, 120,30);
      fill(0);
      noStroke();
      textSize(18);
      text('Siguiente',455,440);
    
  }
}
function cambioDeRumbo1(){
  if (estado === 3) {
    stroke (50);
    fill(255, 200);
    rect (85,420, 120,30);
  }
}
 function reiniciar(){
   if (estado >cantF){
     fill (255);
     rect (250,320,150,50);
     fill(0);
     text ('Reniciar', 285,350);
   }
 }
function mousePressed() {
 
  if (estado === 1 && detectarBoton (250,250,150,40)){
  estado++;
  } else if (estado >=2 && detectarBoton ( 435,420, 120,30)) {
    estado++;
  } else if (estado >cantF && detectarBoton (250,320,150,50)){
    estado = 1;
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
