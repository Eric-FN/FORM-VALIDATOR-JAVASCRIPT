const form = document.querySelector(".form");
const usuario = form.querySelector(".usuario");
const email = form.querySelector(".email");
const senha = form.querySelector(".senha");
const confirmarSenha = form.querySelector(".confirmarSenha");
const mensagemU = form.querySelector(".mensagemU");
const mensagemE = form.querySelector(".mensagemE");
const mensagemS = form.querySelector(".mensagemS");
const mensagemSC = form.querySelector(".mensagemSC");
const button = document
  .querySelector(".enviar")
  .addEventListener("click", function (event) {
    event.preventDefault();

    if (usuario.value.length < 4) {
      mensagemU.textContent = "Mínimo de 4 caracteres.";
      mensagemU.style.color = "rgb(195, 0, 0)";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value)) {
      mensagemE.textContent = "Você precisa inserir um email válido";
      mensagemE.style.color = "rgb(195, 0, 0)";
    }
    if (
      !/^(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,12}$/.test(
        senha.value
      )
    ) {
      mensagemS.textContent =
        "Senha fraca, exemplo de senha forte: SenhaF0rte$ ";
      mensagemS.style.color = "rgb(195, 0, 0)";
    }
    if (senha.value !== confirmarSenha.value) {
      mensagemSC.textContent = "As senhas precisam ser iguais.";
      mensagemSC.style.color = "rgb(195, 0, 0)";
    }
  });
