

let altura = 0;
let largura = 0;
let vidas = 1;
let tempo = 50;



function ajustaTamanhoJogo () {

     let cronometro = setInterval(function () {
//innerHTML coloca os valores entre as tags no caso entre o spam
          tempo -= 1;   
         

          tempo = tempo < 0 ? 0 : tempo;

          if(tempo == 0){
               clearInterval(cronometro);
               clearInterval(criar);
               window.location.href = 'vitoria.html';
          }else{
               document.getElementById('cronometro').innerHTML = tempo;
          }
          
     }, 1000) 

     altura = window.innerHeight;
     largura = window.innerWidth;
    
     console.log(largura , altura);
}

 ajustaTamanhoJogo();


function positionRamdom () {
//remover mosquito anterior se ele existir
if (document.getElementById('mosquito')){
     document.getElementById('mosquito').remove();

if(vidas <= 3){
     document.getElementById('coracao' + vidas).src = 'imagens/coracao_vazio.png';
     vidas++;

}else{
window.location.href = "fimDoJogo.html"

}
   
}

     let posicaoX = Math.floor(Math.random() * largura) - 90;
     let posicaoY = Math.floor(Math.random() * altura) - 90;
     
     console.log(posicaoX , posicaoY);

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;
     
     //criar elemento imagem
     //criar elemento 
      let mosquito = document.createElement('img');
      mosquito.src = 'imagens/mosca.png';
      mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
      mosquito.style.left = posicaoX + 'px';
      mosquito.style.top = posicaoY + 'px';
      mosquito.style.position = 'absolute';
      mosquito.id = 'mosquito';
      mosquito.onclick = function () {

          this.remove();
      }
      mosquito.onmouseover = function () {

     switch(tamanhoAleatorio()){

          case 'mosquito1':
               return mosquito.className = 'mosquito4' + ' ' + ladoAleatorio();
          case 'mosquito2':   
               return mosquito.className = 'mosquito5' + ' ' + ladoAleatorio();
          case 'mosquito3':
               return mosquito.className = 'mosquito6' + ' ' + ladoAleatorio();
     }

     }
      
      
      
     
      //criar um filho na PAI DOM
      document.body.appendChild(mosquito);

      
}

function tamanhoAleatorio (){
let classe = Math.floor(Math.random() * 3);
console.log(classe);

switch(classe){
     case 0:
          return 'mosquito1';
     case 1: 
          return 'mosquito2';
     case 2:
          return 'mosquito3';
}
}

function ladoAleatorio (){
let classe = Math.floor(Math.random() * 2);

 switch(classe){
     case 0:
          return 'ladoA';
     case 1:
          return 'ladoB';
 }
}
