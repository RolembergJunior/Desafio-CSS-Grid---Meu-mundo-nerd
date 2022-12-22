import { valida } from "./script.js"




const inputs = document.querySelectorAll(".input");


inputs.forEach( input => {
    input.addEventListener('focusout', (evento) => {
        valida(evento.target)
    })
})




let filmes = [];
const elementoParaInserirFilmes = document.getElementById("filmes");


getFilmesAPI();

async function getFilmesAPI () {
    const url =  await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=4e9cbdb6188d564ab3062e486d67953a&language=pt-BR&page=1`);
    filmes = await url.json();
    exibirFilmesNaTela(filmes.results);
}



 function exibirFilmesNaTela(listaDeFilmes) {
    elementoParaInserirFilmes.innerHTML = '';
    listaDeFilmes.forEach(elemento => {
        elementoParaInserirFilmes.innerHTML += 
        `<div class="filmesCards">
        <img class="imagemFilme" src=https://image.tmdb.org/t/p/w300/${elemento.poster_path} alt="" >
        <h2 class="tituloFilme">${elemento.title}</h2>
    </div>`

})
}










const botoes = document.querySelectorAll(".btn");

botoes.forEach(btn => btn.addEventListener("click", filtrarfilmes))



function filtrarfilmes() {
    const elementoBtn = document.getElementById(this.id);
    const categoria = elementoBtn.id;


    let filmesFiltrados = (filmes.results).filter(filme => filme.genre_ids == categoria);
    console.log(filmesFiltrados)
    console.log("genero", filmes.title)

    exibirFilmesNaTela(filmesFiltrados);


}










