idiomaNuevo()

//Capturamos los elementos
function cambiarTema() {
	let select = document.getElementById('select').value;
	let body = document.getElementById('body');

	if(select == 'oscuro'){
		body.classList.add('theme-dark');
		body.classList.remove('theme-light');
		body.classList.remove('theme-pink');
		localStorage.setItem('colorEscogido', 'oscuro');
	} else if (select == 'claro'){
		body.classList.add('theme-light');
		body.classList.remove('theme-pink');
		body.classList.remove('theme-dark');
		localStorage.setItem('colorEscogido', 'claro');
	} else if (select == 'rosa'){
		body.classList.add('theme-pink');
		body.classList.remove('theme-light');
		body.classList.remove('theme-dark');
		localStorage.setItem('colorEscogido', 'rosa');
	};
};

//Cambio de tema
try{
	const preferenciaUsuario = localStorage.getItem('colorEscogido');
	if(preferenciaUsuario === 'oscuro'){
		body.classList.add('theme-dark');
		body.classList.remove('theme-light');
		body.classList.remove('theme-pink');
	} else if (preferenciaUsuario === 'claro'){
		body.classList.add('theme-light');
		body.classList.remove('theme-pink');
		body.classList.remove('theme-dark');
	} else if(preferenciaUsuario === 'rosa'){
		body.classList.add('theme-pink');
		body.classList.remove('theme-light');
		body.classList.remove('theme-dark');
	}
}catch{}


//Se obtiene la información para cambiar de idioma
function idioma(){
     let dato1 = document.getElementById('parrafo1');
     let dato2 = document.getElementById('parrafo2');
     let dato3 = document.getElementById('parrafo3');
     let dato4 = document.getElementById('parrafo4');
     let dato5 = document.getElementById('parrafo5');
     let dato6 = document.getElementById('parrafo6');
     let dato7 = document.getElementById('parrafo7');
     let dato8 = document.getElementById('parrafo8');
     let idioma = document.getElementById('cambiarIdioma').value;
     console.log(localStorage.getItem('opcionEscogida'))


          let traducciones = {
               traduccionEspañol: {
                    en: {
                         parrafo1: 'BBQ Crunch Sandwich (1 breaded chicken fillet)',
                         parrafo2: '1 Kentucky hamburger / Sandwich (1 breaded chicken breast fillet, pickles...)',
                         parrafo3: '1 BBQ Crunch Sandwich (1 Breaded Chicken Fillet) + 1 Small Potato + 1 PET Soda...',
                         parrafo4: '1 Kentucky Colonel Burger / Sandwich (1 Breaded Chicken Breast Fillet, Salad...)',
                         parrafo5: '1 Kentucky hamburger / Sandwich (1 breaded chicken breast fillet, pickles...)',
                         parrafo6: '1 Kentucky Coronelhamburger / Sandwich (1 Breaded Chicken Breast Fillet, Salad...)',
                         parrafo7: '1 Crispy BBQ Sandwich (1 extra large breast fillet, triple breaded, crispy onion...)',
                         parrafo8: '1 Crispy BBQ Sandwich (1 extra large breast fillet, triple breaded, crispy onion...)'
                    },
                    es: {
                         parrafo1:'Sandwich BBQ Crunch (1 filete de pollo apanado)',
                         parrafo2:'1 Kentucky hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, pepinillos...)',
                         parrafo3:'1 Sandwich BBQ Crunch (1 Filete de pollo apanado) + 1 Papa Pequeña + 1 Gaseosa PET...',
                         parrafo4:'1 Kentucky Coronel hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, Ensalada...)',
                         parrafo5:'1 Kentucky hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, pepinillos...)',
                         parrafo6:'1 Kentucky Coronelhamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, Ensalada...)',
                         parrafo7:'1 Sandwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado, cebolla crisp...)',
                         parrafo8:'1 Sandwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado, cebolla crisp...)'
                    }
               }
          }



     if(idioma == 'español'){
          dato1.innerText = traducciones.traduccionEspañol.es.parrafo1;
          dato2.innerText = traducciones.traduccionEspañol.es.parrafo2;
          dato3.innerText = traducciones.traduccionEspañol.es.parrafo3;
          dato4.innerText = traducciones.traduccionEspañol.es.parrafo4;
          dato5.innerText = traducciones.traduccionEspañol.es.parrafo5;
          dato6.innerText = traducciones.traduccionEspañol.es.parrafo6;
          dato7.innerText = traducciones.traduccionEspañol.es.parrafo7;
          dato8.innerText = traducciones.traduccionEspañol.es.parrafo8;
          localStorage.setItem('opcionEscogida', 'español');
     } else if (idioma == 'ingles'){
          dato1.innerText = traducciones.traduccionEspañol.en.parrafo1;
          dato2.innerText = traducciones.traduccionEspañol.en.parrafo2;
          dato3.innerText = traducciones.traduccionEspañol.en.parrafo3;
          dato4.innerText = traducciones.traduccionEspañol.en.parrafo4;
          dato5.innerText = traducciones.traduccionEspañol.en.parrafo5;
          dato6.innerText = traducciones.traduccionEspañol.en.parrafo6;
          dato7.innerText = traducciones.traduccionEspañol.en.parrafo7;
          dato8.innerText = traducciones.traduccionEspañol.en.parrafo8;
          localStorage.setItem('opcionEscogida', 'ingles');
     };
     
     let seleccion = localStorage.getItem('opcionEscogida')
     try{
          if(seleccion == 'español'){
               dato1.innerText = traducciones.traduccionEspañol.es.parrafo1;
               dato2.innerText = traducciones.traduccionEspañol.es.parrafo2;
               dato3.innerText = traducciones.traduccionEspañol.es.parrafo3;
               dato4.innerText = traducciones.traduccionEspañol.es.parrafo4;
               dato5.innerText = traducciones.traduccionEspañol.es.parrafo5;
               dato6.innerText = traducciones.traduccionEspañol.es.parrafo6;
               dato7.innerText = traducciones.traduccionEspañol.es.parrafo7;
               dato8.innerText = traducciones.traduccionEspañol.es.parrafo8;
          } else {
               dato1.innerText = traducciones.traduccionEspañol.en.parrafo1;
               dato2.innerText = traducciones.traduccionEspañol.en.parrafo2;
               dato3.innerText = traducciones.traduccionEspañol.en.parrafo3;
               dato4.innerText = traducciones.traduccionEspañol.en.parrafo4;
               dato5.innerText = traducciones.traduccionEspañol.en.parrafo5;
               dato6.innerText = traducciones.traduccionEspañol.en.parrafo6;
               dato7.innerText = traducciones.traduccionEspañol.en.parrafo7;
               dato8.innerText = traducciones.traduccionEspañol.en.parrafo8;
          }
     }catch{}
};



function idiomaNuevo(){
     let dato1 = document.getElementById('parrafo1');
     let dato2 = document.getElementById('parrafo2');
     let dato3 = document.getElementById('parrafo3');
     let dato4 = document.getElementById('parrafo4');
     let dato5 = document.getElementById('parrafo5');
     let dato6 = document.getElementById('parrafo6');
     let dato7 = document.getElementById('parrafo7');
     let dato8 = document.getElementById('parrafo8');
     

     let traducciones = {
          traduccionEspañol: {
               en: {
                    parrafo1: 'BBQ Crunch Sandwich (1 breaded chicken fillet)',
                    parrafo2: '1 Kentucky hamburger / Sandwich (1 breaded chicken breast fillet, pickles...)',
                    parrafo3: '1 BBQ Crunch Sandwich (1 Breaded Chicken Fillet) + 1 Small Potato + 1 PET Soda...',
                    parrafo4: '1 Kentucky Colonel Burger / Sandwich (1 Breaded Chicken Breast Fillet, Salad...)',
                    parrafo5: '1 Kentucky hamburger / Sandwich (1 breaded chicken breast fillet, pickles...)',
                    parrafo6: '1 Kentucky Coronelhamburger / Sandwich (1 Breaded Chicken Breast Fillet, Salad...)',
                    parrafo7: '1 Crispy BBQ Sandwich (1 extra large breast fillet, triple breaded, crispy onion...)',
                    parrafo8: '1 Crispy BBQ Sandwich (1 extra large breast fillet, triple breaded, crispy onion...)'
               },
               es: {
                    parrafo1:'Sandwich BBQ Crunch (1 filete de pollo apanado)',
                    parrafo2:'1 Kentucky hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, pepinillos...)',
                    parrafo3:'1 Sandwich BBQ Crunch (1 Filete de pollo apanado) + 1 Papa Pequeña + 1 Gaseosa PET...',
                    parrafo4:'1 Kentucky Coronel hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, Ensalada...)',
                    parrafo5:'1 Kentucky hamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, pepinillos...)',
                    parrafo6:'1 Kentucky Coronelhamburguesa / Sandwich (1 Filete de pechuga de pollo apanado, Ensalada...)',
                    parrafo7:'1 Sandwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado, cebolla crisp...)',
                    parrafo8:'1 Sandwich Crispy BBQ (1 Filete de pechuga extra grande, triple empanizado, cebolla crisp...)'
               }
          }
     }
     //guardar la opción seleccionada
     let seleccion = localStorage.getItem('opcionEscogida')
     console.log(seleccion)
     try{
          if(seleccion == 'español'){
               console.log("a")
               dato1.innerText = traducciones.traduccionEspañol.es.parrafo1;
               dato2.innerText = traducciones.traduccionEspañol.es.parrafo2;
               dato3.innerText = traducciones.traduccionEspañol.es.parrafo3;
               dato4.innerText = traducciones.traduccionEspañol.es.parrafo4;
               dato5.innerText = traducciones.traduccionEspañol.es.parrafo5;
               dato6.innerText = traducciones.traduccionEspañol.es.parrafo6;
               dato7.innerText = traducciones.traduccionEspañol.es.parrafo7;
               dato8.innerText = traducciones.traduccionEspañol.es.parrafo8;
          } else if (seleccion == 'ingles'){
               console.log("b")
               dato1.innerText = traducciones.traduccionEspañol.en.parrafo1;
               dato2.innerText = traducciones.traduccionEspañol.en.parrafo2;
               dato3.innerText = traducciones.traduccionEspañol.en.parrafo3;
               dato4.innerText = traducciones.traduccionEspañol.en.parrafo4;
               dato5.innerText = traducciones.traduccionEspañol.en.parrafo5;
               dato6.innerText = traducciones.traduccionEspañol.en.parrafo6;
               dato7.innerText = traducciones.traduccionEspañol.en.parrafo7;
               dato8.innerText = traducciones.traduccionEspañol.en.parrafo8;
          }
     }catch{}
}







