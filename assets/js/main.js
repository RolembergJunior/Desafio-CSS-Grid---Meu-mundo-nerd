import { valida } from "./script.js"
import { exibirFilmesNaTela } from "./script.js";



let filmes = [];
const inputs = document.querySelectorAll(".input");
const botoes = document.querySelectorAll(".btn");

//Validando os Inputs

inputs.forEach( input => {
    input.addEventListener('focusout', (evento) => {
        valida(evento.target)
    })
})


//Chamando e consumindo a API

getFilmesAPI();

async function getFilmesAPI () {
    const url =  await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=4e9cbdb6188d564ab3062e486d67953a&language=pt-BR&page=1`);
    filmes = await url.json();
    const listaDeFilmes = filmes.results;

    exibirFilmesNaTela(listaDeFilmes);


}

//Filtrando os filmes a partir do click dos botões

botoes.forEach(btn => btn.addEventListener("click", filtroDeFilmes))

export function filtroDeFilmes() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.id;

    let filmesFiltrados = filmes.results.filter(elemento => elemento.genre_ids.some(id => id == categoria))
    

    exibirFilmesNaTela(filmesFiltrados)
}



