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
    if(inputArea.value){
        divOutputInical.style.display="none";
        divOutputFinal.style.display="flex";

        outputArea.innerHTML=encriptar(inputArea.value);
    }
    else{
        divOutputInical.style.display="flex";
        divOutputFinal.style.display="none";
    }
    
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
    if(inputArea.value){
        divOutputInical.style.display="none";
        divOutputFinal.style.display="flex";

        outputArea.innerHTML=desencriptar(inputArea.value);
    }
    else{
        divOutputInical.style.display="flex";
        divOutputFinal.style.display="none";
    }
}
function desencriptar(texto){
    texto=texto.toLowerCase();

    for(let i=0;i<matrizDiccionario.length;i++){
        if(texto.includes(matrizDiccionario[i][1])){
            texto=texto.replaceAll(matrizDiccionario[i][1],matrizDiccionario[i][0]);
        }
    }

    return texto;
}



function onCopiar(){
    navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
        if (result.state === "granted" || result.state === "prompt") {
            navigator.clipboard.writeText(outputArea.innerHTML).then(
                () => {

                },
                () => {
                    alert("Error al copiar al portapapeles.");
                },
            );
        }
        else{
            alert("No se tienen los permisos para copiar al portapapeles.");
        }
    });
}