// script.js

let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let passwordElement = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%'&_-=<>.*()!";
let novaSenha = "";  // Variável global para armazenar a senha gerada

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function () {
    sizePassword.innerHTML = this.value;
    sliderElement.value = pass.length;
    sizePassword.innerHTML = pass.length;
}


function generatePassword() {
    novaSenha = "";  // Limpa a senha anterior ao gerar uma nova
    let pass = "";
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    novaSenha = pass;  // Armazena a nova senha na variável global

    // Atualiza o conteúdo do elemento 'password'
    passwordElement.innerHTML = pass;

    // Exibe o container de senha
    containerPassword.classList.remove("hide");
}

function copyPassword() {
    if (novaSenha) {
        navigator.clipboard.writeText(novaSenha)
            .then(() => {
                alert("Senha copiada.");
            })
            .catch((error) => {
                console.error("Erro ao copiar senha:", error);
                alert("Erro ao copiar senha. Consulte o console para obter mais detalhes.");
            });
    }
}