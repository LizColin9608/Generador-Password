let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById ('contrasena');
let btnLimpiar = document.getElementById ('limpiar');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';


function generar(){

    let numeroDigitado = parseInt (cantidad.value);
    //console.log(numeroDigitado); //info sacada del código

    if( numeroDigitado < 8){
        alert("La cantidad de caracteres tiene que ser mayor que 8");
        return;
    }
    
    let password = '';

    for(let i = 0; i < numeroDigitado; i++){

        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password+=caracterAleatorio;
    }

    //console.log('password generada:' + password);

    contrasena.value = password;

    validar(password);
   
}

function validar(password){

const tieneMayuscula = /[A-Z]/.test(password);
const tieneMinuscula = /[a-z]/.test(password);
const tieneNumero = /[0-9]/.test(password);
const tieneSimbolo = /[!@#$%^&*()]/.test(password);

if (!tieneMayuscula) {
    alert("La contraseña debe contener al menos una letra mayúscula.");
}
if (!tieneMinuscula) {
   alert("La contraseña debe contener al menos una letra minúscula.");
}
if (!tieneNumero) {
    alert("La contraseña debe contener al menos un número.");
}
if (!tieneSimbolo) {
    alert("La contraseña debe contener al menos un símbolo especial.");
}
}

function limpiar(){
    document.getElementById ('contrasena').value = "";
    document.getElementById ('cantidad').value = "";

}













