import { valida } from "./script.js"

const inputs = document.querySelectorAll(".input");
console.log(inputs)

inputs.forEach( input => {
    input.addEventListener('focusout', (evento) => {
        valida(evento.target)
    })
})