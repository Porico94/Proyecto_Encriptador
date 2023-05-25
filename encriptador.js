
//********** Funciones encriptar y desencriptar *************
var texto = "Hola este es mi a e i o u";
var array = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];

function encriptador(texto){

    for(let i = 0; i < array.length; i++){
        
        let encriptado = texto.replaceAll(array[i][0],array[i][1]);
        texto = encriptado;
        
    };

    return texto;

};


function desencriptador(texto){

    for(let i = array.length-1; i >= 0; i--){
        
        let desencriptado = texto.replaceAll(array[i][1],array[i][0]);
        texto = desencriptado;
        
    };

    return texto;
};

//Obtenemos todos los elementos necesarios para activar los eventos

var boton_encriptar = document.getElementById('boton_encriptar');       //Elemento del boton encriptar
var boton_desencriptar = document.getElementById('boton_desencriptar'); //Elemento del boton desencriptar
var boton_copiar = document.getElementById('boton_copiar');             //Elemento del boton desencriptar
var texto1= document.getElementById('texto1');                          //Elemento del textarea1
var texto2 = document.getElementById('texto2');                         //Elemento del textarea2
var imagen = document.getElementById('imgMuñeco');                      //Elemento de la imagen del muñeco
var mensaje1 = document.getElementById('mensaje_1');                    //Elemento del mensaje_1
var mensaje2 = document.getElementById('mensaje_2');                    //Elemento del mensaje_2



boton_encriptar.addEventListener('click',function(){                    //Agregamos al elemento boton_encriptar un evento la hacer click
    
    if(texto1.value === ""){
    
        swal("No hay ningún texto!", "Es necesario escribir un texto");
        texto2.value ="";

      } else {

    imagen.style.display = 'none';                                      //Ocultamos la imagen del muñeco
    mensaje1.style.display = 'none';                                    //Ocultamos el mensaje1
    mensaje2.style.display = 'none';                                    //Ocultamos el mensaje1
    texto2.style.display = 'block';                                     //Mostramos el textarea2
    boton_copiar.style.display = 'block';                               //Mostramos el boton copiar

    var mensaje_encriptado = encriptador(texto1.value);                 //Encriptamos el value del textarea1

    texto2.value = mensaje_encriptado;                                  //Colocamos el mensaje encriptado en el textare2.value
    texto1.value = "";                                                  //Limpiamos el texto del textarea1
    texto2.readOnly = true;
      };

});

boton_desencriptar.addEventListener('click',function(){                    //Agregamos al elemento boton_desencriptar un evento la hacer click
    
    if(texto1.value === ""){
    
        swal("No hay ningún texto!", "Es necesario escribir un texto");
        texto2.value="";

      } else {

    imagen.style.display = 'none';                                      //Ocultamos la imagen del muñeco
    mensaje1.style.display = 'none';                                    //Ocultamos el mensaje1
    mensaje2.style.display = 'none';                                    //Ocultamos el mensaje1
    texto2.style.display = 'block';                                     //Mostramos el textarea2
    boton_copiar.style.display = 'block';                               //Mostramos el boton copiar

    var mensaje_desencriptado = desencriptador(texto1.value);           //Desencriptamos el value del textarea1

    texto2.value = mensaje_desencriptado;                               //Colocamos el mensaje encriptado en el textare2.value
    texto1.value = "";                                                  //Limpiamos el texto del textarea1
    texto2.readOnly = true;
      };

});

//********* Copiar el textarea2 **********

boton_copiar.addEventListener('click',function(){

    navigator.clipboard.writeText(texto2.value);                        // Copiar el texto al portapapeles
    swal("Texto copiado!", "" , "success");                   // Notificar al usuario que se ha copiado el texto
    texto2.value = "";

});

  

