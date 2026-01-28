const text = document.querySelector("#texto");
const btnAnalizar = document.querySelector("#idAnalizar");
const mensajes = document.querySelector("#mensajes");
const resultado = document.querySelector("#resultados");

btnAnalizar.addEventListener("click", function(event) {
    mensajes.innerHTML = "";
    resultado.innerHTML = "";
    const newText = text.value.split(",");
    if(!validacion(newText)){
        analisis(newText);
    }
});

function validacion(newText) {
   
    for (let i = 0; i < newText.length; i++) {
        if (newText[i].trim().length === 0) {
            mensajes.innerHTML += "ERROR: Debes colocar algo";
            mensajes.classList.add("mensajes");
            setTimeout(function(){
            mensajes.innerHTML = "";
            mensajes.classList.remove("mensajes");
        }, 2000)
            return true;
        } else if (Number.isNaN(Number((newText[i])))) {
            mensajes.innerHTML += "ERROR: Solo están permitidos números";
            mensajes.classList.add("mensajes");
            setTimeout(function(){
            mensajes.innerHTML = "";
             mensajes.classList.remove("mensajes");
        }, 2000)
            return true;
        }
    }
    return false;
}

function analisis(newText) {

    let countPositivo = 0;
    let countNeg = 0;
    let countZero = 0;
    let countMayor = 0;
    let countMenor = 1;
    let total = 0;

     resultado.innerHTML += `Números: `
    for (let i = 0; i < newText.length; i++) {
        total++;
        resultado.innerHTML += `${newText[i]},`;
       if (Number(newText[i]) > 0)  {
            countPositivo++;
       } else if (Number(newText[i]) < 0) {
            countNeg++;
       } else if (Number(newText[i]) === 0) {
            countZero++;
       }  
       if (Number(newText[i]) > countMayor) {
            countMayor = Number(newText[i]);
       } 
       if (Number(newText[i]) < countMenor) {
            countMenor = Number(newText[i]);
       }
    }

    resultado.innerHTML += `<br>Números Negativos: ${countNeg}<br>`;
    resultado.innerHTML += `Números Positivos: ${countPositivo}<br>`;
    resultado.innerHTML += `Número Menor: ${countMenor}<br>`;
    resultado.innerHTML += `Número Mayor: ${countMayor}<br>`;
    resultado.innerHTML += `Ceros: ${countZero}<br>`;
    resultado.innerHTML += `Total: ${total}<br>`;
}