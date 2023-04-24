
//Obtener el texto del textarea1 con el boton y pegar el codigo codificado al textarea2
var boton1 = document.getElementById('encriptar');
var imagenContainer = document.getElementById('image-container');
var botonCopiar = document.getElementById('btn_copiar')


boton1.addEventListener('click', function() {
  const textarea1 = document.getElementById('mensajeOriginal');
  const texto1 = textarea1.value;

  imagenContainer.style.display = 'none';
  
  const textarea2 = document.getElementById('mensajeEncriptado');
  textarea2.style.display = 'block';
  botonCopiar.style.display = 'block';
  textarea2.value = encriptador(texto1);

  textarea1.value = "";
});

//Obtener el texto del textarea1 con el boton y pegar el codigo desencriptado en el textarea2
var boton2 = document.getElementById('desencriptar');

boton2.addEventListener('click',function(){
    const textarea1 = document.getElementById('mensajeOriginal');
    const texto1 = textarea1.value;

    const textarea2 = document.getElementById('mensajeEncriptado');
    textarea2.value = desencriptar(texto1);

    textarea1.value = "";
});

//Función para copiar
var boton3 = document.getElementById('btn_copiar');

boton3.addEventListener('click',function(){
    
    const textarea2 = document.getElementById("mensajeEncriptado");
    const texto2 = textarea2.value;

    // Copiar el texto al portapapeles
    navigator.clipboard.writeText(texto2);
  
    // Notificar al usuario que se ha copiado el texto
    swal("Texto copiado!", texto2, "success");
        
});
  


//Función para encriptar el mensaje
function encriptador(mensaje){
    
    var array = mensaje.split("");
    
    for(let i = 0; i <= array.length; i++){
        switch(array[i]){
            case 'a':
                array[i] = "ai";
                break;
            
            case 'e':
                array[i] = "enter";
                break;
        
            case 'i':
                array[i] = "imes";
                break;
            
            case 'o':
                array[i] = "ober";
                break;
        
            case 'u':
                array[i] = "ufat";
                break;
        };
    };

    let mensajeEncriptado = array.join("");
    return mensajeEncriptado;
};

// lineas para probar la función encriptador
// var mensaje = "gato con botas";
// console.log(encriptador(mensaje));


//Función para desencriptar el mensaje

function desencriptar(mensajeEncriptado){
    
    let buscarA = /ai/g;
    let vocalA = "a";
    
    let textoA = mensajeEncriptado.replace(buscarA, vocalA);
    
    let buscarE = /enter/g;
    let vocalE = "e";
    
    let textoE = textoA.replace(buscarE, vocalE);
    
    let buscarI = /imes/g;
    let vocalI = "i";
    
    let textoI = textoE.replace(buscarI, vocalI);
    
    let buscarO = /ober/g;
    let vocalO = "o";
    
    let textoO = textoI.replace(buscarO, vocalO);
    
    let buscarU = /ufat/g;
    let vocalU = "u";
    
    let textoU = textoO.replace(buscarU, vocalU);
    
    return textoU;
};

// lineas para probar la función desencriptador
// var mensajeEncriptado = "ai enter imes ober ufat";
// console.log(desencriptar(mensajeEncriptado));