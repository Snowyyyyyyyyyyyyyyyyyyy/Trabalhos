window.onload = function() {
    const userName = localStorage.getItem("username");
    if (userName) {
        document.getElementById("user-name").textContent = `Olá, ${userName}`;
        document.getElementById("login-form").style.display = "none"; // Esconde o formulário de login
        document.getElementById("logout-btn").style.display = "block"; // Exibe o botão de logout
    }
};

// Função para lidar com o login
function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const remember = document.getElementById("remember").checked;

    // Aqui você pode adicionar a validação de senha (simulada)
    if (username && password) {
        if (remember) {
            // Armazenar o nome de usuário no localStorage para lembrar os dados
            localStorage.setItem("username", username);
        }

        // Exibir o nome de usuário no header
        document.getElementById("user-name").textContent = `Olá, ${username}`;
        document.getElementById("login-form").style.display = "none"; // Esconde o formulário de login
        document.getElementById("logout-btn").style.display = "block"; // Exibe o botão de logout
    } else {
        alert("Preencha todos os campos.");
    }
}

// Função para lidar com o logout
function handleLogout() {
    // Remover o nome de usuário do localStorage
    localStorage.removeItem("username");

    // Limpar a mensagem de boas-vindas
    document.getElementById("user-name").textContent = "";

    // Exibir novamente o formulário de login
    document.getElementById("login-form").style.display = "block"; 

    // Esconder o botão de logout
    document.getElementById("logout-btn").style.display = "none"; 
}