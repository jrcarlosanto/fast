var ataWorkshop;
var atasDosWorkshop = [];
var colaboradores2WorkshopsSeguidos = [];
var jaCadastrado;

function ColaboradoresQueViram2WorkshopsSeguidos(){

    ataWorkshop = document.getElementById("imput").value;

    if (ataWorkshop != ""){
        atasDosWorkshop.push(ataWorkshop); //adicionar os colaboradores
        document.getElementById('imput').value='';
        if(atasDosWorkshop.length > 1){
            
            var i = atasDosWorkshop.length - 2;
            var coladoradoresAnteriores = atasDosWorkshop[i].split(" "); //separar os nomes dos colaboradores do workshp anterior
            var coladoradoresProximoWorkshop = atasDosWorkshop[i+1].split(" "); //separar os nomes dos colaboradores do workshop seguido
            
            for(var j = 0; j < coladoradoresAnteriores.length; j++){
                for(var k = 0; k < coladoradoresProximoWorkshop.length; k++){
                    if(coladoradoresAnteriores[j]==coladoradoresProximoWorkshop[k]){ //comparar o nomes
                        for (var a =0; a < colaboradores2WorkshopsSeguidos.length; a++){
                            if(colaboradores2WorkshopsSeguidos[a] == coladoradoresAnteriores[j]){ //colaborador já cadastrado
                                jaCadastrado = true;
                                break;
                            }
                                jaCadastrado = false;                     
                        }
                        if( (colaboradores2WorkshopsSeguidos.length == 0 || !jaCadastrado) && coladoradoresAnteriores[j]!=""){ //adicionar se o nome não exite
                            colaboradores2WorkshopsSeguidos.push(coladoradoresAnteriores[j]);
                        }                
                    }
                }
            }
        }
            
        var listaNomes = document.getElementById('lista'); 
        listaNomes.innerHTML = colaboradores2WorkshopsSeguidos.sort();
    }
}
