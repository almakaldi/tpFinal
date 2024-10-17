function textos (){
   stroke(0);
    fill(255);
  
  if (estado === 2) {
    text ('Marco es un expliloto de guerra de la\n                     marina Italiana', 155, 380);
  } else if (estado === 3) {
    text ('Un día, unos piratas secuestran a unas niñas y Marco \n     recibe un llamado para que vaya a rescatarlas', 100, 380);
  } else if (estado === 4) { 
    text ('Marco le gana a los piratas y salva \n                     a las niñas', 160, 380);
  } else if (estado === 5) {
    text ('Encuentro en el bar con Curtis y le propone\n                  un combate aereo', 145, 380);
  } else if (estado === 6) {
    text ('Regresa a Italia, se encuentra con \n                Picolo y Fio', 160, 380);
  } else if (estado === 7) {
    text ('Marco choca el hidroavión en una isla', 155, 400);
  } else if (estado === 8) {
    text ('Fio junto a un grupo de mujeres quieren\n                arreglar el hidroavión', 155, 370);
  } else if (estado === 13) {
    text ('Luego de la pelea, gana Marcos', 155, 400);
  } else if (estado === 9) {
    text ('Confia en Fio y reparan el hidroavión', 155, 400);
  } else if (estado === 10) {
    text ('Marco prueba el hidroavión con Fio y \n                       van a la isla', 150, 380);
  } else if (estado === 11) {
    text ('Ataque de piratas y Curtis desafía a \n               Marco con Fio', 150, 380);
  } else if (estado === 12) {
    text ('Comienzo de la batalla aérea', 150, 400);
  } else if (estado === 14) {
    text ('Llega Gina, avisa que vienen las \n               fuerzas aéreas', 150, 380);
  } else if (estado === 16) {
    text ('Gina le pregunta a Marco si se casará \n                         con ella', 150, 380);
  } else if (estado === 15) {
    text ('Todos se retiran de la isla', 150, 400);
  } else if (estado === 17) {
    text ('Fio se despide de Marco', 150, 400);
  } else if (estado === 18) {
    text ('Fio regresa a Milan', 150, 400);
  } else if (estado === 19) {
    text ('No las rescata y los piratas se quedan \n                        con ellas', 150, 380);
  } else if (estado === 20) {
    text ('Rechaza el desafío y se queda en el bar \n                        con gina', 150, 380);
  } else if (estado === 21) {
    text ('Preocupado por su tiempo busca \n                    otro taller', 150,380);
  } else if (estado === 22) {
    text ('Marco acepta y se casa con Gina', 150, 400);
  } else if (estado === 23) {
    text ('No se cumple la batalla y Curtis se \n           queda con Fio', 150, 380);
  }
}

function textoAlt (){
  noStroke();
  fill(0);
  textSize(14);
  if (estado === 3){
    text (' Rechazar \n el llamado',105,430);
    text ('Aceptar e intentar \n salvar a las niñas',430,430);
} else if (estado === 5){
  text ('  Rechazar \n la propuesta',105,430);
  text ('    Aceptar \n  la propuesta',430,430);
} else if (estado === 8){
  text ('Buscar otra \n alternativa', 105, 430);
  text ('Confiar en Fio para \nreparar el hidroavión', 425,430);
} else if (estado === 11){
  text ('Aceptar el desafío \n y pelear por Fio',425,430);
  text ('Rechazar el\n   desafío', 105, 430);
} else if (estado === 16){
  text ('Casarse con \n   Gina', 105,430);
  text ('Negar y despedirse \n       de Gina', 425,430);
  
}
}
