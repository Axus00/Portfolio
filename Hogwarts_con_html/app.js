//Taller de Hogwarts
//1

//Condicional de las casas
function show(event){
	event.preventDefault();

	let datos1 = document.getElementById('name').value;
	let datos2 = parseInt(document.getElementById('age').value, 10);
	let datos3 = document.getElementById('family').value;
	let datos4 = document.getElementById('linaje').value;
	let datos5 = document.getElementById('cualidad').value;
	let cualidades2 = datos5.split(',').map(cualidad => cualidad.trim());


	//Asignación de valores al objeto student
	let student = {
		name: datos1,
		age: datos2,
		family: datos3,
		linaje: datos4,
		cualidades: cualidades2,
		house: '',
		animalPatronus: ''
	};
	console.log(student);

// 2
let clases = {
	transformaciones: 'Kevin Slughorn',
	herbologia: 'Maria Umbridge',
	pociones: 'Liliana McGonagall',
	encantamientos: 'Jackie',
	defensaContraLasArtesOscuras: 'Robinson Snape',
	animalesMagicos: 'David Filch',
	historiaDeMagia: 'Ronald Sprout'
};

// 3

//condiciones para determinar la casa de Hogwarts para el estudiante

//Se determina la casa Gryffindor
if(student.cualidades.includes('valor') && student.cualidades.includes('fuerza') && student.cualidades.includes('audacia')){
	
	if(student.linaje.includes('mestizo') || student.linaje.includes('muggle') || student.linaje.includes('sangre pura')){
		
		Object.assign(student,{
			house: 'Gryffindor'
		});
		
	}
}

//Se determina la casa Hufflepuff
if(student.cualidades.includes('justicia') && student.cualidades.includes('lealtad') && student.cualidades.includes('paciencia')){
	
	if(student.linaje.includes('mestizo') || student.linaje.includes('muggle')){
		
		Object.assign(student,{
			house: 'Hufflepuff'
		});
	}
}

//Se determina la casa Ravenclaw
if(student.cualidades.includes('creatividad') && student.cualidades.includes('erudicion') && student.cualidades.includes('inteligencia')){
	
	if(student.linaje.includes('mestizo') || student.linaje.includes('muggle') || student.linaje.includes('sangre pura')){
		
		Object.assign(student,{
			house: 'Ravenclaw'
		});
	}
}

//Se determina la casa Slytherin
if(student.cualidades.includes('ambicion') && student.cualidades.includes('determinacion') && student.cualidades.includes('astucia')){
	
	if(student.linaje.includes('sangre pura')){
		
		Object.assign(student,{
			house: 'Slytherin'
		});
	}
}

console.log(student);

// 4
let claseTransformaciones = {
	nombre: 'Kevin Slughorn',
	horario: 9,
	boggart: 'payasos',
};

let regex = /[a-zA-Z]/g;

//Función para determinar si hay un boggart
claseTransformaciones.realizarTransformacionRiddikulus = function(){
	if(regex.test(this.boggart)){
		console.log(`Existe un boggart ${claseTransformaciones.boggart}, Riddikulus`);
	} else {
		console.log("No hay ningún boggart");
	}
}

claseTransformaciones.realizarTransformacionRiddikulus();
console.log(claseTransformaciones);

//Función para enfrentar a un boggart
let transformacionesBoggarts = ['moscas', 'abejas', 'gatos', 'burbujas', 'sabados felices', 'helado', 'globos', 'play 5'];



claseTransformaciones.enfrentarBoggart = function(){
	if(regex.test(this.boggart)){
		console.log(`Existe un boggart ${claseTransformaciones.boggart}`);
		let randomBoggart = transformacionesBoggarts[(Math.floor(Math.random() * transformacionesBoggarts.length))];
		claseTransformaciones.boggart = randomBoggart;
		console.log(`El boggart se ha tranformado en ${claseTransformaciones.boggart}`)
	}
}
claseTransformaciones.enfrentarBoggart();
console.log(claseTransformaciones);

//Nuevo objeto enfrentamiento boggart

let boggartEjemplo = {
	enfrentar: claseTransformaciones.enfrentarBoggart.bind(claseTransformaciones)
};

boggartEjemplo.enfrentar();

/* let boggartEjemplo = {
	enfrentar: structuredClone(...enfrentarBoggart)
};

console.log(boggartEjemplo.enfrentar); */


// 5


let animales = ['raton', 'algo gigante', 'algo con cuernos', 'cisne', 'cabra', 'fenix', 'zorro', 'mamut lanudo', 'nutria', 'ciervo', 'liebre', 'jabalí', 'gato', 'cierva', 'mariquita', 'lince', 'lobo', 'comadreja', 'caballo', 'terrier', 'urracas', '', '', '', '', '', ''];



let defensaContraLasArtesOscuras = {
	animalPatronus: ''
}

let animal = animales[Math.floor(Math.random() * animales.length)];
defensaContraLasArtesOscuras.animalPatronus = animal;

console.log(defensaContraLasArtesOscuras);


//se agrega la propiedad de animalPatronus al objeto principal

student.animalPatronus = defensaContraLasArtesOscuras.animalPatronus;
console.log(student);



function apareceDementor(student){
	let fantasma = 'dementores';

	if(fantasma === 'dementores' && student.animalPatronus !== '' ){
		console.log("El animalPatronus detiene al dementor");

	} else {
		console.log("El estudiante será absorbido, se va para enfermería");
		return false
	}
}

apareceDementor(student);


// 6

console.log("Los resultados del estudiante son los siguientes: ", student)

//Mostrar el contenido del div con los resultados 
document.getElementById('showInformation').innerHTML = `
	
	<p>Existe un boggart, Riddikulus: el boggart se ha transformado en, ${claseTransformaciones.boggart}</p>
	<p>--------------------------------------------</p>
	<p>Los resultados finales del estudiante son:</p>
	<p>Nombre: ${student.name}</p>
	<p>Edad: ${student.age}</p>
	<p>Familia: ${student.family}</p>
	<p>Linaje: ${student.linaje}</p>
	<p>Cualidades: ${student.cualidades.join(', ')}</p>
	<p>Casa en Hogwarts: ${student.house}</p>
	<p>Animal Patronus: ${student.animalPatronus}</p>
`
}

document.querySelector('form').addEventListener('submit', show)
/* let datos1 = prompt("Ingrese su nombre: ");
let datos2 = parseInt(prompt("Ingrese su edad: "));
let datos3 = prompt("Ingrese su familia: ");
let datos4 = prompt("Ingrese el linaje: ");
let datos5 = prompt("Ingrese sus cualidades separadas por una (,): ");
let cualidades2 = datos5.split(',').map(cualidad => cualidad.trim());
console.log(cualidades2); */


/* let nombre = datos1;
let edad = datos2;
let familia = datos3;
let linaje2 = datos4;
let cualidades2 = datos5.split(',').map(cualidad => cualidad.trim()); */

/* let student = {
	name: nombre,
	age: edad,
	family: familia,
	linaje: linaje2,
	cualidades: cualidades2,
	house: '',
	animalPatronus: ''
} */




