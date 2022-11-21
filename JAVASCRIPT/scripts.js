const apiLinkIBGE = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
const uf = document.getElementById("uf");

window.onload = function(){ //após baixar a página:
    fetch(apiLinkIBGE)      //baixa lista de estados
        .then(resp => resp.json())  //processa arquivo baixado como JSON
        .then(json => {             //manipula JSON
            json.forEach( function(estado){
                uf.innerHTML += "<option value="+ estado.id +">"+ estado.nome + "</option>";
            })
        })
}

uf.addEventListener("change", function(){
    fetch(apiLinkIBGE + "/" + uf.value + "/municipios")
        .then(resp => resp.json())
        .then(json =>{
            document.getElementById("cidade").innerHTML = "<option value='0'></option>";
            json.forEach( function(cidade){
                document.getElementById("cidade").innerHTML += 
                    "<option value="+cidade.id+">"+cidade.nome+"</option>";
            })
        })
})
