const inputs = document.querySelectorAll(".completar"); 
const boton = document.querySelector(".btn");
const texto = document.querySelector(".texto");

boton.addEventListener("click", () => {
  // sumamos los valores de los inputs
  let total = 0;
  inputs.forEach(input => {
    total += Number(input.value) || 0; 
  });

  if (total <= 10) {
    texto.textContent = "Llevas " + (total) + " stickers.";
  } else {
    texto.textContent = "Llevas demasiados stickers.";
  }
});  