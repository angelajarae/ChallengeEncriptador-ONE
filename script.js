const matrizDiccionario=[["e","enter"],
                        ["i","imes"],
                        ["a","ai"],
                        ["o","ober"],
                        ["u","ufat"]];



const divOutputInical=document.querySelector(".output-inicial");
const divOutputFinal=document.querySelector(".output-final");

const inputArea=document.querySelector(".input-area");
const outputArea=document.querySelector(".output-area");





function onEncriptar(){
    divOutputInical.style.display="none";
    divOutputFinal.style.display="flex";

    outputArea.innerHTML=encriptar(inputArea.value);
}
function encriptar(texto){
    texto=texto.toLowerCase();

    for(let i=0;i<matrizDiccionario.length;i++){
        if(texto.includes(matrizDiccionario[i][0])){
            texto=texto.replaceAll(matrizDiccionario[i][0],matrizDiccionario[i][1]);
        }
    }

    return texto;
}


function onDesencriptar(){
    divOutputInical.style.display="none";
    divOutputFinal.style.display="flex";
}


function onCopiar(){
    
}