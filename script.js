var tela = document.getElementById("canvas1");
var contexto = tela.getContext('2d');

let p1x = 175;
let p2x = 175;

let pxbola = 200;
let pybola = 200;
let dxbola = 0;
let dybola = 1;


let msg = document.querySelector("#msg");
let placar1 = document.querySelector("#placar1");
let placar2 = document.querySelector("#placar2");
let pontos1 =  0;
let pontos2 = 0;
let anima,code,key;
let placavelocidade = document.querySelector("#velocidade");

let velocidade = 1; 
let contador = 0;

document.body.addEventListener('keydown', function (event) {
    let key = event.key;
    let code = event.keyCode;
    
    if (code == 65) {
        if(p1x > 0) {
            p1x=p1x-10
        }
       
    }
    if (code == 68) {
        if(p1x < 350) {
            p1x=p1x+10
        }
        
    }

    if (code == 37) {
        if(p2x > 0) {
            p2x=p2x-10
        }
       
    }
    if (code == 39) {
        if(p2x < 350) {
            p2x=p2x+10
        }
    }
  
    if( code == 32) {
        dybola = velocidade;
    }

    
    
    
  });


  function desenha(){

   

    placavelocidade.innerHTML = "velocidade: "+velocidade;
    
    contexto.clearRect(0,0,500,500);
    
    contexto.fillStyle = "blue";
    contexto.fillRect(p1x,10,50,10);


    contexto.fillStyle = "white";
    contexto.fillRect(pxbola,pybola,7,7);

    contexto.fillStyle = "red";
    contexto.fillRect(p2x,380,50,10); 
    

    if (pybola > 372 && pybola < 377 &&  pxbola > p2x && pxbola < p2x + 50 ) {
        
        if(pxbola > p2x + 25) {
            dxbola = velocidade;
        } else {
            dxbola = -velocidade;
        }
        dybola = -velocidade;
        contador++;

    }

    if (pybola < 17 && pybola > 11 &&  pxbola > p1x && pxbola < p1x + 50 ) {
        if(pxbola > p1x + 25) {
            dxbola = velocidade;
        } else {
            dxbola = -velocidade;
        }
        dybola = velocidade;
        contador++;
    }


    if (pxbola > 393) {
        dxbola = -velocidade;
    }
    if (pxbola < 7) {
        dxbola = velocidade;
    }
    
    pxbola += dxbola;
    pybola += dybola;

    if(pybola > 393) {
        pontos1++;
        placar1.innerHTML = "Player 1 - "+ pontos1;
        pxbola = 200;
        pybola = 200;
        dxbola = 0;
        dybola = 0;
    }
    if(pybola < 7) {
        pontos2++;
        placar2.innerHTML = "Player 2 - "+ pontos2;
        pxbola = 200;
        pybola = 200;
        dxbola = 0;
        dybola = 0;
    }
    
    
    if(contador < 8) {
        velocidade = 1;
    } 
    if(contador > 8) {
        velocidade = 2;
    }
    if(contador > 15){
        velocidade = 3;
    }
    anima = requestAnimationFrame(desenha)
    
}
//nova
desenha()





