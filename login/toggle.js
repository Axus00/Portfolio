let toggle = document.getElementById('images');
let body = document.querySelector('body');

toggle.onclick = function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
}