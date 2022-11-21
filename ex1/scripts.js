const canvas = document.getElementById('exemplo');  //referência canvas HTML
const ctx = canvas.getContext('2d');    //contexto, será acessado para manipular conteúdo do canvas;

ctx.fillStyle = 'rgb(200, 0, 0)';       //estilo da "caneta";
ctx.fillRect(10, 10, 50, 50);           //cria retângulo preenchido: x, y, largura, altura;

ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
ctx.fillRect(30, 30, 50, 50);

/** Mais exemplos: */
ctx.fillStyle = 'rgb(0, 0, 0)';         //cor (qualquer formato CSS), gradiente, pattern, etc.
ctx.fillRect(125, 25, 100, 100);        
ctx.clearRect(145, 45, 60, 60);         //cria retângulo de borracha
ctx.strokeRect(150, 50, 50, 50);        //cria retângulo contornado

function drawTrng() {
    ctx.fillStyle = '#228';
    ctx.beginPath();      //inicia definição de trajeto
    ctx.moveTo(250, 50);   //move cursor sem "riscar" canvas
    ctx.lineTo(300, 75);  //linha da coordenada atual à indicada;
    ctx.lineTo(300, 25);  
    ctx.fill();           //fecha trajeto e o preenche com a cor atual de fillStyle;
}
drawTrng();

function drawEmoji() {
    ctx.beginPath();    //inicia projeto de caminho:

    ctx.arc(75, 175, 50, 0, Math.PI * 2, true); // centro x , centro y, raio, startAngle, endAngle, anti-horário
    ctx.moveTo(110, 175);       ctx.arc(75, 175, 35, 0, Math.PI, true);
    ctx.moveTo(65, 195);        ctx.arc(60, 195, 5, 0, Math.PI * 2, true); 
    ctx.moveTo(95, 195);        ctx.arc(90, 195, 5, 0, Math.PI * 2, true);
    ctx.strokeStyle = 'darkOrange';

    ctx.stroke();   //desenha contorno sem preencher;

    //ctx.fill();   //fecha última linha e preenche;

    /** Alternativa: */
    // ctx.beginPath();
    // ctx.arc(75, 175, 50, 0, Math.PI * 2, true);
    // ctx.moveTo(110, 175);    ctx.arc(75, 175, 35, 0, Math.PI, false); 
    // ctx.moveTo(65, 165);     ctx.arc(60, 165, 5, 0, Math.PI * 2, true);
    // ctx.moveTo(95, 165);     ctx.arc(90, 165, 5, 0, Math.PI * 2, true);
    // ctx.stroke();
}
drawEmoji()

function drawArcs() {
    for (let i = 0; i < 4; i++) {           //4 colunas
        for (let j = 0; j < 3; j++) {       //3 linhas por coluna:
            ctx.beginPath();
            const x = 400 + j * 50;                         //coordenada x
            const y = 25 + i * 50;                          //coordenada y
            const radius = 20;                              //raio do arco (radianos)
            const startAngle = 0;                           //ângulo inicial do arco
            const endAngle = Math.PI + (Math.PI * j) / 2;   //ângulo final do arco
            const counterclockwise = i % 2 !== 0;           //horário / anti-horário

            ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);

            if (i > 1) ctx.fill();  else ctx.stroke();
        }
    }
}
drawArcs();

function drawBalloon(){
     // Quadratic curves example

     const balloon = new Path2D();  //Possibilita salvar trajeto para uso posterior

     ctx.beginPath();
     balloon.moveTo(75, 25);        //Balão feito com curvas quadráticas:
     balloon.quadraticCurveTo(25, 25, 25, 62.5);
     balloon.quadraticCurveTo(25, 100, 50, 100);
     balloon.quadraticCurveTo(50, 120, 30, 125);
     balloon.quadraticCurveTo(60, 120, 65, 100);
     balloon.quadraticCurveTo(125, 100, 125, 62.5);
     balloon.quadraticCurveTo(125, 25, 75, 25);

     ctx.translate(170,170); //x, y, relativo à posição atual
     ctx.stroke(balloon);
     
     ctx.translate(170,0);
     ctx.fill(balloon);
}
drawBalloon();

