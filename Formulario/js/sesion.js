
//Tomamos datos para agregarle el nombre de quien inicia sesión
let sesionGuardada = sessionStorage.getItem('nombre');
let usuario = document.querySelector('#user');
usuario.innerHTML = sesionGuardada;

//Darle la funcionalidad al botón salir
function sesionEnd(){
    let salirSesion = document.getElementById('salir');
    sessionStorage.clear();

    //redirigir a la página principal
    window.location.href = "index.html";

};


//verificar el inicio de sesión
if(!sesionGuardada){
    window.location.href = "./index.html"
}

