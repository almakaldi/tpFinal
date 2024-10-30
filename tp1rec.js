let imge;
let posX = -200;
let posX2 = 0;
let posY = -200;
let posY2 = 0;
let tam = 200;
let colorV = 0; 
let cant = 16;
let cambioDeColor = false; 
let rotacion = false; 

function preload() {
// falta agregar imagen
imge = loadImage('data/M_21.png');
}
function setup() {
createCanvas(800, 400);
}


function draw() {
background(0);
image (imge, 0, 0, 400, 400);
translate(600, 200);
  
  if (rotacion) {
    let angle = calcularRotacion(frameCount);
    rotate(angle); 
  }
  
  colorV = cambioDeColor ? obtenerColor(frameCount) : 0;
  dibujarCuadrados(colorV, cant, tam, posX, posY, posX2, posY2);
  
  let d = dist(posX2, posY2, mouseX, mouseY);
  if (d < 500) {
    posX = Math.floor(random(-200, 200));
    posY = Math.floor(random(-200, 200));
    posX2 = Math.floor(random(-200, 200));
    posY2 = Math.floor(random(-200, 200));
  }
}

function obtenerColor(frameCount) {
  return Math.floor(map(sin(frameCount * 0.1), -1, 1, 0, 255)); // Ajuste de frecuencia en sin()
}

function calcularRotacion(frameCount) {
  return radians(frameCount * 15);
}

function dibujarCuadrados(colorV, cant, tam, posX, posY, posX2, posY2) {
  for (let i = 0; i <= cant; i++) {
    if (i % 2 === 0) {
      fill(colorV, colorV, colorV); 
    } else {
      fill(255 - colorV, 255 - colorV, 255 - colorV); 
    }
    
    rect(posX + i * 10, posY2 + i % 2, tam - i * 10, tam - i * 10);
    rect(posX2 - i % 2, posY + i * 10, tam - i * 10, tam - i * 10);
    
    for (let j = 0; j <= cant; j++) {
      if (j % 2 === 0) {
        fill(255 - colorV, 255 - colorV, 255 - colorV);
      } else {
        fill(colorV, colorV, colorV); 
      }

      rect(posX + j * 10, posY + j * 10, tam - j * 10, tam - j * 10);
      rect(posX2 - j % 2, posY2 - j % 2, tam - j * 10, tam - j * 10);
    }
  }
}

function reiniciar() {
  rotacion = false;
  cambioDeColor = false;
  posX = -200;
  posX2 = 0;
  posY = -200;
  posY2 = 0;
}

function keyPressed() {
  if (key === 'g') { // Tecla 'g' para iniciar la rotación
    rotacion = true;
  } else if (key === 'c') { // Tecla 'c' para cambiar de color
    cambioDeColor = true;
  } else if (key === 'r') { // Tecla 'r' para reiniciar
    reiniciar();
  }
}
