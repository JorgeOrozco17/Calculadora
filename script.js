//Agregar el valor del botón que pulsamos como elemento de nuestra operación en el input 'pantalla':
function elemento(valor) {
    document.getElementById('pantalla').value += valor;
}
//Transforma el valor del elemento con id"pantalla" en vacío:
function limpiar() {
    document.getElementById('pantalla').value = '';
}

function procesar() {
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla); //<- Función 'eval' evalua y procesa un string matemáticamente.
    document.getElementById('pantalla').value = resultado;
}