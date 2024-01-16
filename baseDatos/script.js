//Se obtienen los datos
let body = document.getElementById('body');
let root = document.getElementById('root');
let table = document.querySelector('#table table')
let button = document.querySelector('button');

//se obtienen datos para crear usuarios
let nameModal = document.querySelector('#name');
let emailModal = document.querySelector('#email');
let passwordModal = document.querySelector('#password');
let enviar = document.querySelector('#submit');



//Función 
let resultado = fetch("https://memin.io/public/api/users")
    .then(result => {

        return result.json()
    }).then(data => {
        data.forEach(function (element) {

            //se crea un tr 
            let tr = document.createElement('tr');
            tr.classList.add('border', 'border-2')
            tr.classList.add('tr');
            table.appendChild(tr);

            //se crea td para ID
            let id = document.createElement('td');
            id.classList.add('border', 'border-2')
            id.innerText = element.id;
            tr.appendChild(id);

            //se crea td para name
            let name = document.createElement('td');
            name.classList.add('border', 'border-2')
            name.id = 'nombreInformacion' + element.id;
            name.innerText = element.name;
            tr.appendChild(name);

            //se crea td para correo
            let correo = document.createElement('td');
            correo.classList.add('border', 'border-2')
            correo.id = 'correoInformacion' + element.id;
            correo.innerText = element.email;
            tr.appendChild(correo);



            //se crea un td para los botones
            let botones = document.createElement('td');
            botones.classList.add('border', 'border-2')
            tr.appendChild(botones);

            //se crea una etiqueta a para las acciones
            let accion = document.createElement('a');
            accion.setAttribute('href', '#');
            accion.innerText = 'Editar';
            accion.classList.add('editar');
            botones.appendChild(accion);

            let accion2 = document.createElement('a');
            accion2.setAttribute('href', '#');
            accion2.setAttribute('data-bs-toggle', 'modal');
            accion2.setAttribute('data-bs-target', '#exampleModal');
            accion2.innerText = 'Detalles';
            accion2.classList.add('m-2');
            accion2.addEventListener('click', function () {
                usuarioDelete(element.id);
            });
            botones.appendChild(accion2);

            let accion3 = document.createElement('a');
            accion3.setAttribute('href', '#');
            accion3.innerText = 'Eliminar';
            botones.appendChild(accion3);


            //Evento para el botón de eliminar usuario

            accion3.addEventListener('click', () => {
                /*         let resultadoId = localStorage.getItem('identificador'); */
                const eliminar = (accion3.parentElement).parentElement;
                const id = eliminar.children[0]


                let deleteFetch = fetch(`https://memin.io/public/api/users/${id.innerText}`, { method: 'DELETE' })
                .then(alert("Se eliminó con éxito"))

            });
        });



        //Evento para el botón detalles
        function usuarioDelete(userID) {
            fetch('https://memin.io/public/api/users/' + userID)
                .then(response => {
                    return response.json()
                }).then(data => {
                    let modal = document.getElementById('modal');
                    for (let datos in data) {
                        let p = document.createElement('p');
                        p.textContent = `${datos}:${data[datos]}`
                        modal.appendChild(p);

                        console.log(datos)
                        console.log(data)

                    }

                });
        }

        //Evento para mostrar información en el formulario al dar click en editar
        document.addEventListener('click', (event) => {
            if (event.target.classList.contains('editar')) {
                let row = event.target.closest('tr');
                console.log('Fila: ', row);

                if (row) {

                    let nombreInformacion = row.children[1].innerText;
                    let correoInformacion = row.children[2].innerText;

                    document.getElementById('nombre').value = nombreInformacion;
                    document.getElementById('correo').value = correoInformacion;
                    console.log(row.children[0].innerText)
                    localStorage.setItem('identificador', row.children[0].innerText);


                } else {
                    console.log('La fila no se pudo encontrar');

                }
            };

        });


        //Evento para el botón Agregar o Crear
        button.addEventListener('click', () => {
            let resultadoId = localStorage.getItem('identificador');

            //Definimos el objeto
            datos_nuevos = {
                name: document.getElementById('nombre').value,
                email: document.getElementById('correo').value,
            }

            fetch('https://memin.io/public/api/users/' + resultadoId, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(datos_nuevos)

            })
                .then(response => {
                    return response.json()
                }).then(data => {
                    console.log(data)
                })
        });
        
    });
    
    //Evento de buscar
    document.addEventListener('keyup', buscar => {

        if (buscar.target.matches('#buscar')) {
            let searchTerm = buscar.target.value.toLowerCase();
            document.querySelectorAll('[id^="nombreInformacion"]').forEach(dato => {
                let contenido = dato.textContent.toLowerCase();
                let fila = dato.parentElement;

                if (contenido.includes(searchTerm)) {
                    fila.style.display = 'table-row';
                } else {
                    fila.style.display = 'none';
                }
            });
        }
    });

    

    //Evento para crear un usuario nuevo 
    let crearUsuario = document.getElementById('crear');

    crearUsuario.setAttribute('data-bs-toggle', 'modal');
    crearUsuario.setAttribute('data-bs-target', '#formularioModal'); 

    //Se agarra el id


    function nuevoUsuario() {
        informacion = {
            name: nameModal.value,
            email: emailModal.value,
            password: passwordModal.value
        }
        console.log(informacion)
        fetch('https://memin.io/public/api/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(informacion)
            }).then(response => {
                return response.json()
            }).then( data => {
                if(data){
                    alert("Se agregó el usuario de forma correcta")
                }else{
                    alert("Ingre datos válidos")

                }
        })
    }

    //evento para refrescar la web
    window.addEventListener('keydown', (event)=>{
        if(event.ctrlKey){
            if(event.key == 'x'){
                alert("¿Desea refrescar la web?")
                window.location.href = 'index.html'
            }
        }        
    })