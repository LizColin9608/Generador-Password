let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById ('contrasena');
let btnLimpiar = document.getElementById ('limpiar');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!¡@#$%^&*()-_=+\|[]{};:/¿?,.<>';


function generar(){

    let numeroDigitado = parseInt (cantidad.value);
    //console.log(numeroDigitado); //info sacada del código

    if( numeroDigitado < 8){
        alert("La cantidad de caracteres tiene que ser mayor que 8");
    }
    
    let password = '';

    for(let i = 0; i < numeroDigitado; i++){

        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password+=caracterAleatorio;
    }

    //console.log('password generada:' + password);

    contrasena.value = password;

   
}

function limpiar(){
    document.getElementById ('contrasena').value = "";
    document.getElementById ('cantidad').value = "";

}













