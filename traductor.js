//Se hace la funcionalidad para traducir la web
function traducir(){
    console.log("funciona");
    //Se obtiene lo que se va a traducir
    let t1 = document.getElementsByClassName('traduccion1');
    let t2 = document.getElementById('traduccion2');
    let t3 = document.getElementById('salir');
    let t4 = document.getElementById('traduccion3');
    let t5 = document.getElementById('traduccion4');
    let t6 = document.getElementById('traduccion5');
    let t7 = document.getElementById('traduccion6');
    let t8 = document.getElementById('traduccion7');
    let t9 = document.getElementById('traduccion8');
    let slider = document.getElementById('slider').value;
    //Objeto con las traducciones
    const traducciones = {
        traduccionEspañol: {
            en:{
                t1: 'Projects',
                t2: 'About me',
                t3: 'log out',
                t4: 'A hangman-type game is made with the Riwi theme.',
                t5: 'You will be able to enjoy the experience of Hogwarts and its dementor.',
                t6: 'Website about KFC, with the functionality to change the language and theme of the website.',
                t7: 'Page with a login that validades the users input, the localStorage and sesionStorage properties',
                t8: 'Facebook login is recreated, using only html and css. Its just a loyout and styling project.',
                t9: 'This project is about de recreate the social page of Instagram.',
            },
            es:{
                t1: 'Proyectos',
                t2: 'Sobre mí',
                t3: 'Salir',
                t4: 'Se ha creado un juego tipo ahorcado con el tema Riwi.',
                t5: 'Puedes disfrutar de la experiencia de Hogwarts y sus Dementores.',
                t6: 'Sitio web sobre KFC con la funcionalidad de cambiar el idioma y el tema del sitio.',
                t7: 'Página con un inicio de sesión que valida la entrada del usuario, utilizando las propiedades localStorage y sessionStorage.',
                t8: 'Se recrea el inicio de sesión de Facebook utilizando solo HTML y CSS. Es solo un proyecto de diseño y estilo.',
                t9: 'Este proyecto trata sobre recrear la página social de Instagram.',
            },
        },
    };

    //Condicional para cambio de idioma
    if(slider >= 50){
        t1.innerText = traducciones.traduccionEspañol.es.t1;
        t2.innerText = traducciones.traduccionEspañol.es.t2;
        t3.innerText = traducciones.traduccionEspañol.es.t3;
        t4.innerText = traducciones.traduccionEspañol.es.t4;
        t5.innerText = traducciones.traduccionEspañol.es.t5;
        t6.innerText = traducciones.traduccionEspañol.es.t6;
        t7.innerText = traducciones.traduccionEspañol.es.t7;
        t8.innerText = traducciones.traduccionEspañol.es.t8;
        t9.innerText = traducciones.traduccionEspañol.es.t9;
        
    }else if(slider <= 50) {
        t1.innerText = traducciones.traduccionEspañol.en.t1;
        t2.innerText = traducciones.traduccionEspañol.en.t2;
        t3.innerText = traducciones.traduccionEspañol.en.t3;
        t4.innerText = traducciones.traduccionEspañol.en.t4;
        t5.innerText = traducciones.traduccionEspañol.en.t5;
        t6.innerText = traducciones.traduccionEspañol.en.t6;
        t7.innerText = traducciones.traduccionEspañol.en.t7;
        t8.innerText = traducciones.traduccionEspañol.en.t8;
        t9.innerText = traducciones.traduccionEspañol.en.t9;
        
    }
};
document.querySelector('span').addEventListener('slider', traducir);