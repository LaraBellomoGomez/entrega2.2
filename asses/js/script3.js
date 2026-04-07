const number1 = document.querySelector(".numero1");
const number2 = document.querySelector(".numero2");
const number3 = document.querySelector(".numero3");
const boton = document.querySelector(".boton");
const texto = document.querySelector(".texto");

function limitarNumero(input) {
    if (input.value > 9) input.value = 9;
    if (input.value < 0) input.value = 0;
}

number1.addEventListener("input", () => limitarNumero(number1));
number2.addEventListener("input", () => limitarNumero(number2));
number3.addEventListener("input", () => limitarNumero(number3));
   
boton.addEventListener("click", () => {
    const n1 = Number(number1.value);
    const n2 = Number(number2.value);
    const n3 = Number(number3.value);

    if (n1 === 9 && n2 === 1 && n3 === 1) {
        texto.textContent = "Password 1 correcto";
    } else if (n1 === 7 && n2 === 1 && n3 === 4) {
        texto.textContent = "Password 2 correcto";
    } else {
        texto.textContent = "Password incorrecto";
    }
});