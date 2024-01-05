//Solicitud de información para perfil de github
const username = "Axus00";
const token = "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";

fetch(`https://api.github.com/users/${username}`, {
    headers: {
        Authorization: `Bearer ${token}`
    }
})
.then(response => response.json())
.then(data => {
    document.getElementById("avatar").src = data.avatar_url;
    document.getElementById("username").textContent = `Usuario: ${data.login}`;
    document.getElementById("bio").textContent = `Biografía: ${data.bio}`;
    document.getElementById("followers").textContent = `Seguidores: ${data.followers}`;
    document.getElementById("repos").textContent = `Repositorios públicos: ${data.public_repos}`;
})
.catch(error => console.error('Error al recuperar datos: ', error));