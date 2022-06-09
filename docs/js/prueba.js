let inputValue = document.getElementById("id1");
let textValue = document.getElementById('id2');
let boton = document.getElementById('idB');
let caja = document.getElementById('caja');
let caja2 = document.getElementById('caja2');
let textoFinal = document.getElementById('txtFinal');


function empezar(){
    boton.remove();
    caja.removeAttribute('hidden');
}

function mostrarMensaje(){
    const valor = textValue.innerHTML;
    if (valor.includes("1.")) {
        if (inputValue.value.toLowerCase() == 'san sebastian') {
            textValue.innerHTML = '2. ¿Como se llama nuestro dino?';
            inputValue.value= "";
        }else{
            alert('Mmm... Con que ' + inputValue.value + ' , me lo apunto pero no. Algo mas hacia la costa?');
        }
    }
    if (valor.includes("2.")) {
        if (inputValue.value.toLowerCase() == 'mocca') {
            textValue.innerHTML = '3. ¿Cual es el alimento que no me gusta que comas?';
            inputValue.value= "";

        }else{
            alert('Muy feo que te hayas equivocado en esto...');
        }
    }
    if (valor.includes("3.")) {
        if (inputValue.value.toLowerCase() == 'nueces') {
            textValue.innerHTML = '4. ¿Objeto tuyo que intento tener siempre cerca?';
            inputValue.value= "";

        }else{
            alert('Pista... Le tienes alergia aunque no quieras admitirlo');
        }
    }
    if (valor.includes("4.")) {
        if (inputValue.value.toLowerCase() == 'goma de pelo') {
            textValue.innerHTML = '5. Por último... Eres lo mas importante para mi, lo sabes ¿verdad? (si/no)';
            inputValue.value= "";

        }else{
            alert('Un... Pista.. La tengo en el microfono de mi cuarto. Pista 2 = Tienes que poner el nombre completo');
        }
    }
    
    if (valor.includes("5.")) {
        if (inputValue.value.toLowerCase() == 'si') {
            caja.remove();
            caja2.removeAttribute('hidden');
            textoFinal.removeAttribute('hidden');
        }else{
            alert('Espero que lo sepas... Si no ve al oculista reina');
        }
    }
}