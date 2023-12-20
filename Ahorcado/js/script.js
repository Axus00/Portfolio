//Se obtiene la interacción por ID del HTML 
const wordContainer = document.getElementById('wordContainer');
const startButton = document.getElementById('startButton');
const usedLettersElement = document.getElementById('usedLetters');

//Se utiliza canvas para realizar la animación cuando el usuario no ingrese la letra correcta
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d')
ctx.canvas.width = 0;
ctx.canvas.height = 0;

//Se define las partes en que se va a componer nuestro gráfico de ahorcado
const partesCuerpo = [
    [4,2,1,1],
    [4,3,1,2],
    [3,5,1,1],
    [5,5,1,1],
    [3,3,1,1],
    [5,3,1,1]
];


let selectedWord;
let usedLetters;
let mistakes;
let accerts;

//Se determina las palabras correctas
const agregarLetra = letra => {
    const letraElement = document.createElement('span');
    letraElement.innerHTML = letra.toUpperCase();
    usedLettersElement.appendChild(letraElement);
};

const parteCuerpo = bodyPart => {
    ctx.fillStyle = '#fff';
    ctx.fillRect(...bodyPart);
};

//Función para determinar una palabra incorrecta que se ingresa
const palabraIncorrecta = () => {
    parteCuerpo(partesCuerpo[mistakes]);
    mistakes++;
    if(mistakes === partesCuerpo.length) finJuego();
};

//Función para determinar si ya se acabó la partida
const finJuego = () => {
    document.removeEventListener('keydown', palabraEvento);
    startButton.style.display = 'block';
};

//Se define la letra correcta para la comparación
const letraCorrecta = letra => {
    const { children } = wordContainer;
    for(i = 0; i < children.length; i++) {
        if(children[i].innerHTML === letra){
            children[i].classList.toggle('hidden');
            accerts++;
        }
    }
    if(accerts === selectedWord.length) finJuego();
};

const letraEntrada = letra => {
    if(selectedWord.includes(letra)) {
        letraCorrecta(letra);
    } else {
        palabraIncorrecta()
    }
    agregarLetra(letra);
    usedLetters.push(letra);
};

const palabraEvento = event => {
    let nuevaPalabra = event.key.toUpperCase();
    //Expresión regular para hacer una comparación
    if(nuevaPalabra.match(/^[a-zñ]$/i) && !usedLetters.includes(nuevaPalabra)) {
        letraEntrada(nuevaPalabra);
    };
};

// se muestra la palabra debajo del dibujo
const dibujarPalabra = () => {
    selectedWord.forEach(letter => {
        const letterElement = document.createElement('span');
        letterElement.innerHTML = letter.toUpperCase();
        letterElement.classList.add('letter');
        letterElement.classList.add('hidden');    
        wordContainer.appendChild(letterElement);
    });
}

//Se llama el arreglo de palabras.js para darle un random y se escoja una palabra al azar, después se le da un split para dividir esa palabra por índice.
const palabraAleatoria = () => {
    let word = words[Math.floor((Math.random() * words.length))].toUpperCase();
    selectedWord = word.split('');
};

//Se empieza a determinar los pixeles que el ahorcado tendrá en la web
const ahorcado = () => {
    ctx.canvas.width = 120;
    ctx.canvas.height = 160;
    ctx.scale(20, 20);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#d95d39';
    ctx.fillRect(0, 7, 4, 1);
    ctx.fillRect(1, 0, 1, 8);
    ctx.fillRect(2, 0, 3, 1);
    ctx.fillRect(4, 1, 1, 1);
};

//Se reinician los parámetros del juego antes de que le den en el botón start
const startGame = () => {
    usedLetters = [];
    mistakes = 0;
    accerts = 0;
    wordContainer.innerHTML = '';
    usedLettersElement.innerHTML = '';
    startButton.style.display = 'none';
    ahorcado();
    palabraAleatoria();
    dibujarPalabra();
    document.addEventListener('keydown', palabraEvento);
}
startButton.addEventListener('click', startGame);