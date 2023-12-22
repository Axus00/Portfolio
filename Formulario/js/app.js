function iniciarSesion(){

//Se obtiene datos
let correo = document.getElementById('correo');
let password = document.getElementById('contraseña');
/* let genero = document.getElementById('select').value; */




//objeto con usuarios
const objetoUsuarios = [
    {
        nombre: 'fernando',
        correo: 'correo@correo.com',
        password: 'Fernando2000.',
        genero: 'masculino'
    },
    {
        nombre: 'alberto',
        correo: 'alberto23@gmail.com',
        password: '12345678',
        genero: 'masculino'
    },
    {
        nombre: 'juana',
        correo: 'juanalamejor@gmail.com',
        password: 'Colombia2000',
        genero: 'femenino'
    },
    {
        nombre: 'roberto',
        correo: 'medellin12@gmail.com',
        password: 'aguacatefresco',
        genero: 'masculino'
    },
    {
        nombre: 'mariana',
        correo: 'mariana22@gmail.com',
        password: 'marianalamejor',
        genero: 'femenino'
    },
    {
        nombre: 'juliana',
        correo: 'julimor@gmail.com',
        password: 'j2022',
        genero: 'femenino'
    }

];

//Condicional para verificar la información ingresada en el formulario

for (const objetoUsuario of objetoUsuarios) {
    if(correo.value === objetoUsuario.correo && password.value === objetoUsuario.password){
        console.log("funciona");
        window.location.href = "respaldo.html";
        sessionStorage.setItem('nombre', objetoUsuario.nombre.toUpperCase());
        sessionStorage.setItem('genero', objetoUsuario.genero);
        return
    }
    //validación is-valid
    if(correo.value == objetoUsuario.correo){
        correo.classList.add('is-valid');
        correo.classList.remove('is-invalid');
        alert("Ingrese datos válidos");
        return
        /* console.log(objetoUsuarios.correo)
        console.log(correo.value) */
    }else{
        correo.classList.add('is-invalid');
        correo.classList.remove('is-valid');
    };

    
};

};




/* objetoUsuarios.forEach(function (objetoUsuario) {
    if(correo.value === objetoUsuario.correo && password.value === objetoUsuario.password){
        console.log("funciona");
        window.location.href = "respaldo.html";
        sessionStorage.setItem('nombre', objetoUsuario.nombre.toUpperCase());
        return
    }
    return
}); */


/* document.querySelector('button').addEventListener('click', iniciarSesion()); */


//verificar sesion

    if(sessionStorage.getItem("nombre")){
        document.getElementById("yatamos").innerText = "Ya estás loggeado";
    }


/* if(sessionStorage.getItem("nombre")){
    document.getElementById("yatamos").innerText = "ya estas loggeado";
} */