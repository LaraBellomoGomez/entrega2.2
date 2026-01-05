precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio


const cantidad = document.querySelector(".cantidad");
const mas = document. querySelector(".mas");
const menos = document. querySelector(".menos");



mas.addEventListener ("click", () => {

    let contador = Number(cantidad.innerHTML)

    contador = contador +1
    cantidad.innerHTML = contador

})

menos.addEventListener ("click", () => {

    let contador = Number(cantidad.innerHTML)

    contador = contador -1
    cantidad.innerHTML = contador

})
