let SesionGuardada = sessionStorage.getItem('nombre')

//Se determina la funcionalidad de salir al botón dentro del portafolio
let salir = function (event){
    console.log("funciona")
    sessionStorage.clear();
    //Se determinar la ventana objetivo
    window.location.href = "../login/login.html";

    event.preventDefault();
}
document.querySelector('button').addEventListener('click', salir);

//Se verifica la sesion iniciada
/* if(!SesionGuardada){
    window.location.href = "./index.html";
} */