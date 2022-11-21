const nasc = document.getElementById ('nasc');
const tel = document.getElementById ('tel');
const gen = document.getElementById('gen');
const ip = document.getElementById('ip');


function validate(item){
    item.setCustomValidity('');     
    item.checkValidity()

    if (item == nasc){
        let hoje = new Date();      
        let dnasc = new Date(nasc.value);
        let idade = hoje.getFullYear() - dnasc.getFullYear();
        let m = hoje.getMonth() - dnasc.getMonth();
        
        if (m < 0 || (m == 0 && hoje.getDate() < dnasc.getDate() )){
            idade--;
        }
        if(idade >= 0){
            if(idade < 18){
                item.setCustomValidity('Tem que ser maior de 18.');
            }else if(idade > 130){
                item.setCustomValidity('diga sua idade verdadeira.');
            }
        }else{
            item.setCustomValidity('Você ainda não nasceu.');
        }

    }

}

function maskTEL(){
    let strTEL = tel.value;
    if(strTEL.length == 2) tel.value = '(' + tel.value + ') ';
    if(strTEL.length == 9) tel.value += '-';
    if(strTEL.length == 15 && strTEL[9] == "-"){
        tel.value = strTEL.substring(0,9)+strTEL[10]+"-"+strTEL.substring(11);
}}

function maskIP(){
    let strIP = ip.value;
    if (strIP.length == 3) ip.value += ".";
    if (strIP.length == 5) ip.value += ".";
    if (strIP.length == 7) ip.value += ".";
    
}



ip.addEventListener    ('input', function() {maskIP() });
nasc.addEventListener   ('input', function(){validate(nasc) }); 
tel.addEventListener    ('input', maskTEL);
nasc.addEventListener('invalid', function(){
    if(nasc.value === ''){
        nasc.setCustomValidity('Insira sua data de nascimento.');
    }
});

tel.addEventListener    ('invalid', function(){
    if(tel.value === ''){
        tel.setCustomValidity("Insira seu número de telefone.");
    }else if(tel.value.length < 14){
        tel.setCustomValidity("Seu número de telefone deve conter pelo menos 10 dígitos com DDD.");
    }else{
        tel.setCustomValidity("");
    }
});




