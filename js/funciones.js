// Funciones para verificar ingreso de usuario

function validarCorreo(mail) {
    while (mail == "") {
        mail = prompt("Ingrese su email");
    }
return mail;
}

function validarUsuario(username) {
    while (username == "") {
        username = prompt("Ingrese nombre de usuario");
    }
return username;
}

function validarContrasena(password) {
    while (password == "") {
        password = prompt("Ingrese contraseña");
    }
return password;
}

// Creacion de usuario

let mail1 = prompt("Ingrese su email");
mail1 = validarCorreo(mail1);
alert(mail1);

let user1 = prompt("Ingrese nombre de usuario");
user1 = validarUsuario(user1);
alert(user1);

let password1 = prompt("Ingrese contraseña");
password1 = validarContrasena(password1);
alert(password1);
let password2 = prompt("Ingrese contraseña nuevamente");

// Validacion de Password
while (password1 !== password2) {
    password2 = prompt("Las contraseñas no coinciden")
}

