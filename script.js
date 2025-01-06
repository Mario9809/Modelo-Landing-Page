// Seleção de elementos
var btn = document.getElementById("submitButton");
var message = document.getElementById("form-response");
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");

// Evento de clique para validar o formulário e exibir a mensagem
btn.addEventListener("click", function () {
    if (nameInput.value.trim() === "" || emailInput.value.trim() === "") {
        alert("Por favor, preencha todos os campos antes de enviar.");
        return;
    }
    message.style.display = "block"; // Exibe a mensagem de agradecimento
});

// Configuração inicial do estilo de exibição
document.addEventListener("DOMContentLoaded", function () {
    if (message) {
        message.style.display = "none"; // Garante que esteja oculto no início
    }

    // Criar o botão de fechar na caixa de mensagem
    const closeButton = document.createElement("button");
    closeButton.textContent = "OK";
    closeButton.className = "close-btn"; // Classe para estilizar o botão de fechar
    message.appendChild(closeButton);

    // Evento para fechar a mensagem
    closeButton.addEventListener("click", function () {
        message.style.display = "none";
    });
});
