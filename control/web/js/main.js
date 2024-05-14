alert("Hola Mundo");

let adelante = document.getElementById("adelante");
let atras = document.getElementById("atras");
let derecha = document.getElementById("derecha");
let izquierda = document.getElementById("izquierda"); 
let detener = document.getElementById("detener");

let mensaje=document.getElementById("mensaje");

function CallApi(estatus){
    // Hacer una petición para un usuario con ID especifico
axios.get('http://localhost/iot-car-control/back-end/apis/setRegistro.php?valorEstatus='+estatus)
.then(function (response) {
  // manejar respuesta exitosa
  console.log(response);
  mensaje.innerHTML="Respuesta: <strong>"+response.data+"</strong>";
})
.catch(function (error) {
  // manejar error
  console.log(error);
})
.finally(function () {
  // siempre sera executado
});
}
adelante.addEventListener("click", function(){

    CallApi('F');
});

atras.addEventListener("click", function(){

  CallApi('B');
});

derecha.addEventListener("click", function(){

  CallApi('R');
});
izquierda.addEventListener("click", function(){

  CallApi('L');
});
detener.addEventListener("click", function(){

  CallApi('S');

});