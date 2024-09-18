let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById ('contrasena');
let btnLimpiar = document.getElementById ('limpiar');
let labelEstado = document.getElementById('password-strength-label');
let progressBarContainer = document.querySelector('.password-strength');
let containerProgress = document.getElementById('progress-bar');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!¡@#$%^&*()-_=+\|[]{};:/¿?,.<>';


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

         let strength = evaluarFortaleza(password);
    actualizarUI(strength);
    }

    //console.log('password generada:' + password);

    contrasena.value = password;

   
}

function limpiar(){
    document.getElementById ('contrasena').value = "";
    document.getElementById ('cantidad').value = "";

}
function generarPassword(longitud) {
    let password = '';
    for (let i = 0; i < longitud; i++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        password += caracterAleatorio;
    }
    return password;
}

// Función para evaluar la fortaleza de la contraseña
function evaluarFortaleza(password) {
    const longitud = password.length;
    const hasAlpha = isAlpha(password);
    const hasDigit = isDigit(password);
    const hasSpecial = isSpecialCharacter(password);

    if (longitud >= 6 && longitud <= 7) {
        if ((hasAlpha && !hasDigit && !hasSpecial) || (!hasAlpha && hasDigit && !hasSpecial)) {
            return 'weak';
        } else {
            return 'medium';
        }
    } else if (longitud >= 8 && longitud <= 9) {
        if ((hasAlpha && hasDigit && !hasSpecial) || (hasAlpha && hasSpecial && !hasDigit) || (hasDigit && hasSpecial && !hasAlpha)) {
            return 'medium';
        } else if (hasAlpha, hasDigit, hasSpecial) {
            return 'strong';
        } else {
            return 'weak';
        }
    } else if (longitud > 9) {
        if (hasAlpha && hasDigit && hasSpecial) {
            return 'strong';
        } else if ((hasAlpha && hasDigit && !hasSpecial) || (hasAlpha && hasSpecial && !hasDigit) || (hasDigit && hasSpecial && !hasAlpha)) {
            return 'medium';
        } else {
            return 'weak';
        }
    }
    return 'weak';  // Retorno por defecto si no cumple ninguna condición
}

// Función para actualizar la UI según la fortaleza
function actualizarUI(strength) {
    progressBarContainer.style.display = 'block';
    switch (strength) {
        case 'weak':
            labelEstado.textContent = "Contraseña Débil";
            containerProgress.className = 'weak';
            containerProgress.style.width = "33%";
            break;
        case 'medium':
            labelEstado.textContent = "Contraseña Media";
            containerProgress.className = 'medium';
            containerProgress.style.width = "66%";
            break;
        case 'strong':
            labelEstado.textContent = "Contraseña Fuerte";
            containerProgress.className = 'strong';
            containerProgress.style.width = "100%";
            break;
    }
}













