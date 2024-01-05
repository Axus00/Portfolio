//Se obtienen los datos
let nombre = document.getElementById('datos1');
let password = document.getElementById('datos2');


function login(event){
    event.preventDefault();
    //Definimos el objeto de inicio de sesión
    const ingreso = [
        {
            nombre: 'fernando',
            password: 'portafolio'
        },
    ];

    //Bucle para validar información de ingreso de sesión
    console.log("ingresa")
    ingreso.forEach(element => {
        if(nombre.value === element.nombre && password.value === element.password){
            console.log("funciona")
            window.location.href = "../portafolio.html";
            sessionStorage.setItem('nombre', ingreso.nombre);
        }
        
    });

}
document.querySelector('button').addEventListener('click', login);

//Validar el is-valid o is-invalid
/* function validarFormulario(){
    if(nombre.trim == ""){
        document.getElementById('nombreError').style.display = "block";
        nombre.classList.add('is-invalid');
    }else {
        document.getElementById('nombreError').style.display = "none";
        nombre.classList.remove('is-invalid');
    }

} */

/* if(nombre.value == ingreso.nombre){
    nombre.classList.add('is-valid');
    nombre.classList.remove('is-invalid');
    alert('agrega un nombre correcto');

}else{
    nombre.classList.add('is-invalid');
    nombre.classList.remove('is-valid');
} */