function login() {
    const loginBtn = document.getElementById("login");
    if (loginBtn.textContent.trim() === "Iniciar sesión") {
        loginBtn.textContent = "Cerrar sesión";
    } else {
        loginBtn.textContent = "Iniciar sesión";
    }
}

function hideAddDefinition() {
    const addBtn = document.getElementById("add-definition");
    if (addBtn) {
        addBtn.style.display = "none";
    } else {
        console.error("El botón 'Agregar Definición' no se encontró.");
    }
}

function addLike(button) {
    const likeCountSpan = button.querySelector(".like-count");
    if (likeCountSpan) {
        let likes = parseInt(button.getAttribute("data-likes")) || 0;
        likes += 1;
        button.setAttribute("data-likes", likes);
        likeCountSpan.textContent = likes;
        const definitionTitle = button.closest(".pet-item").querySelector("h2").textContent;
        alert(`Te gustó la definición: "${definitionTitle}"!`);
    } else {
        console.error("No se encontró el contador de 'Me gusta'.");
    }
}