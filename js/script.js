var ataWorkshop;
var atasDosWorkshop = [];
var colaboradores2WorkshopsSeguidos = [];
var jaCadastrado;

function adicionarPessoasWorkshop(){

    ataWorkshop = document.getElementById("imput").value;

    if (ataWorkshop != ""){
        atasDosWorkshop.push(ataWorkshop);
        ataWorkshop = "";
        ColaboradoresQueViram2WorkshopsSeguidos();
        var listaNomes = document.getElementById('lista');
        listaNomes.innerHTML = colaboradores2WorkshopsSeguidos;
    }
console.log(colaboradores2WorkshopsSeguidos);
}

function ColaboradoresQueViram2WorkshopsSeguidos(){ 
    
    for (var i = 0; i < atasDosWorkshop.length; i++){
        var coladoradores = atasDosWorkshop[i].split(" "); //separar os nomes dos colaboradores
        if (atasDosWorkshop.length == i+1){
            break;
        }
        var coladoradoresProximoWorkshop = atasDosWorkshop[i+1].split(" "); //separar os nomes dos colaboradores do workshop seguido
        for(var j = 0; j < coladoradores.length; j++){
            for(var k = 0; k < coladoradoresProximoWorkshop.length; k++){
                if(coladoradores[j]==coladoradoresProximoWorkshop[k]){ //comparar o nomes
                    if( colaboradores2WorkshopsSeguidos.length == 0 || !colaboradores2WorkshopsSeguidos.indexOf(coladoradores[j])){ //adicionar se o nome não exite
                        colaboradores2WorkshopsSeguidos.push(coladoradores[j]);
                    }                
                }
            }
        }
    }
}