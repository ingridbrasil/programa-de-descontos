document.addEventListener("DOMContentLoaded", function () {
  const formSection = document.querySelector(".form-section");
  formSection.classList.add("fade-in");

  const formulario = document.querySelector(".formulario");
  const botaoEnviar = document.querySelector(".botao-form");
  const inputNome = document.getElementById("nome");
  const inputEmail = document.getElementById("email");

  function validarFormulario() {
    const nomeValido = inputNome.value.trim() !== "";
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail.value.trim());
    botaoEnviar.disabled = !(nomeValido && emailValido);
  }

  inputNome.addEventListener("input", validarFormulario);
  inputEmail.addEventListener("input", validarFormulario);

  validarFormulario();

  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nome = inputNome.value;
    const email = inputEmail.value;

    alert(`Olá, ${nome}! Recebemos seu e-mail (${email}). Em breve você receberá seus descontos 😉`);

    formulario.reset();
    validarFormulario();
  });

  const botaoTopo = document.getElementById("botaoTopo");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      botaoTopo.style.display = "block";
    } else {
      botaoTopo.style.display = "none";
    }
  });

  botaoTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const botaoDark = document.getElementById("alternarModo");
  const body = document.body;

  function toggleDarkMode() {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("darkMode", "enabled");
      botaoDark.textContent = "☀️";
    } else {
      localStorage.setItem("darkMode", "disabled");
      botaoDark.textContent = "🌙";
    }
  }

  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    botaoDark.textContent = "☀️";
  } else {
    botaoDark.textContent = "🌙";
  }

  botaoDark.addEventListener("click", toggleDarkMode);
});
