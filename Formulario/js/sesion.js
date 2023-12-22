
//Tomamos datos para agregarle el nombre de quien inicia sesión
let sesionGuardada = sessionStorage.getItem('nombre');
let genero = sessionStorage.getItem('genero');
let usuario = document.querySelector('#user');

usuario.innerHTML = sesionGuardada;

console.log(genero)
//Validación de género
if(genero == 'masculino'){
    console.log("existe");
    let body = document.querySelector('body');
    body.style.backgroundColor = 'lightblue';
    //se crea estilos
    var contenedor = document.createElement("div");
    contenedor.id = "miContenedor";




    //se crea un párrafo
    var titulo = document.createElement("h2");
    titulo.textContent = "Tus recuerdos de hace 1 año";

    titulo.style.marginTop = "100px";
    titulo.style.fontFamily = "Poppins";
    titulo.style.fontSize = "50px";
    titulo.style.textAlign = "center";
    titulo.style.marginBottom = "50px";

    //se añade el párrafo al contenedor
    contenedor.appendChild(titulo);

    //Se crea una galería
    var imagen1 = document.createElement("img");
    imagen1.id = "miImagen1";
    imagen1.src = "./images/usuario1.jpg";
    imagen1.alt = "Perro";

    imagen1.style.width ="300px";
    imagen1.style.height ="300px";
    imagen1.style.objectFit ="cover";
    imagen1.style.boxShadow ="2px 2px 2px black";

    //añadir imagen al contenedor
    contenedor.appendChild(imagen1);

    //imagen 2
    var imagen2 = document.createElement("img");
    imagen2.id = "miImagen2";
    imagen2.src = "./images/usuario1.1.jpg";
    imagen2.alt = "Perro2";

    imagen2.style.width = "300px";
    imagen2.style.height = "300px";
    imagen2.style.objectFit = "cover";
    imagen2.style.boxShadow ="2px 2px 2px black";

    //imagen 3
    var imagen3 = document.createElement("img");
    imagen3.id = "miImagen3";
    imagen3.src = "./images/usuario1.1.1.jpg";
    imagen3.alt = "Naturaleza";

    imagen3.style.width = "300px";
    imagen3.style.height = "300px";
    imagen3.style.objectFit = "cover";
    imagen3.style.boxShadow ="2px 2px 2px black";
    imagen3.style.margin ="20px";

    //se agrega al contenedor
    contenedor.appendChild(imagen3);

    //se añade imagen2 al contenedor
    contenedor.appendChild(imagen2);

    //se añade lo creado al cuerpo del elemento
    document.body.appendChild(contenedor);
}else if(genero == 'femenino'){
    let body = document.querySelector('body');
    body.style.backgroundColor = 'lightpink';
    body.backgroundColorImage = "url(./images/images/icons8-social-24.png)";

    var contenedor = document.createElement("div");
    contenedor.id = "miContenedor";




    //se crea un párrafo
    var titulo = document.createElement("h2");
    titulo.textContent = "Tus recuerdos de hace 1 año";

    titulo.style.marginTop = "100px";
    titulo.style.fontFamily = "Poppins";
    titulo.style.fontSize = "50px";
    titulo.style.textAlign = "center";
    titulo.style.marginBottom = "50px";

    //se añade el párrafo al contenedor
    contenedor.appendChild(titulo);

    //Se crea una galería
    var imagen1 = document.createElement("img");
    imagen1.id = "miImagen1";
    imagen1.src = "./images/usuario2.jpg";
    imagen1.alt = "Novios";

    imagen1.style.width ="300px";
    imagen1.style.height ="300px";
    imagen1.style.objectFit ="cover";
    imagen1.style.boxShadow ="2px 2px 2px black";

    //añadir imagen al contenedor
    contenedor.appendChild(imagen1);

    //imagen 2
    var imagen2 = document.createElement("img");
    imagen2.id = "miImagen2";
    imagen2.src = "./images/usuario2.1.jpg";
    imagen2.alt = "Perro2";

    imagen2.style.width = "300px";
    imagen2.style.height = "300px";
    imagen2.style.objectFit = "cover";
    imagen2.style.boxShadow ="2px 2px 2px black";

    //imagen 3
    var imagen3 = document.createElement("img");
    imagen3.id = "miImagen3";
    imagen3.src = "./images/usuario2.1.1.jpg";
    imagen3.alt = "Naturaleza";

    imagen3.style.width = "300px";
    imagen3.style.height = "300px";
    imagen3.style.objectFit = "cover";
    imagen3.style.boxShadow ="2px 2px 2px black";
    imagen3.style.margin ="20px";

    //se agrega al contenedor
    contenedor.appendChild(imagen3);

    //se añade imagen2 al contenedor
    contenedor.appendChild(imagen2);

    //se añade lo creado al cuerpo del elemento
    document.body.appendChild(contenedor);
};


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


