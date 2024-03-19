function toggleMenu() {
  const menu = document.querySelector(".cabecalho");
  menu.classList.toggle("active");
}
/* const menu = document.querySelector(".cabecalho");
const botaoMenu = document.querySelector(".cabecalho__botao");

function toggleMenu() {
  menu.classList.toggle("active");
}

function fecharMenuForaDoMenu(event) {
  if (!menu.contains(event.target) && event.target !== botaoMenu) {
    menu.classList.remove("active");
  }
}

document.addEventListener("click", fecharMenuForaDoMenu); */
