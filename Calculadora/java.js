function Convctor(){
    let ctor = document.getElementById("entrada-ctor").value;

    let temr = ctor * 9 / 5 + 491.67;
    document.getElementById("result-ctor").value = temr.toFixed(2);
}

document.getElementById("converte-ctor").addEventListener("click",Convctor);

function Convktor(){
    let ktor = document.getElementById("entrada-ktor").value;

    let temre = (ktor - 273.15) * 0.80000;
    document.getElementById("result-ktor").value = temre.toFixed(2);
}

document.getElementById("converte-ktor").addEventListener("click",Convktor);
  
function Convkm(){
    let km = document.getElementById("entrada-km").value;

    let calL = 100 / km;
    document.getElementById("result-km").value = calL;
}

document.getElementById("conv-km").addEventListener("click",Convkm);
   
  
function seleciona( aba ){
    let lista = document.getElementsByClassName("wrapper");
    for (let i = 0; i < lista.length ; i++){
        document.getElementById("wrapper-" + i).style.display="none";
        //document.getElementById("btn-" + i).style.background="transparent"
        document.getElementById("btn-"+ i).classList.remove("ativa");
    }
    document.getElementById("wrapper-" + aba).style.display="grid";
    //document.getElementById("btn-" + aba).style.background="#eee";
    document.getElementById("btn-"+ aba).classList.add("ativa");
  }
  
  window.onload = seleciona(0);
  
  document.getElementById("btn-0").addEventListener("click", function(){seleciona(0)});
  document.getElementById("btn-1").addEventListener("click", function(){seleciona(1)});
  document.getElementById("btn-2").addEventListener("click", function(){seleciona(2)});
  
    