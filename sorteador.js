let botaoSortear = document.querySelector(".botao-sortear");
let botaoLimpar = document.querySelector(".limpar-numeros");
let inputMin = document.querySelector(".input-min");
let inputMax = document.querySelector(".input-max");
let resultado = document.querySelector(".resultado");

function sortearNumero() {
  let min = Math.ceil(inputMin.value);
  let max = Math.floor(inputMax.value);
  let numeroSorteado = isNaN(min) || isNaN(max) ? "Valor Inválido" : Math.floor(Math.random() * (max - min + 1)) + min;

  resultado.textContent = numeroSorteado;
}

function limparCampos() {
  inputMin.value = "";
  inputMax.value = "";
  resultado.textContent = "--";
}

botaoSortear.addEventListener("click", sortearNumero);
botaoLimpar.addEventListener("click", limparCampos);
