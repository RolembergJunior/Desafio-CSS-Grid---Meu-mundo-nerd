
 export function valida (input) {
    const tiposDeInput = input.dataset.tipo;


    if(input.validity.valid) {
        input.parentElement.ClassList.remove('input-container--invalido');
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = '';
    } else {
        input.parentElement.classList.add('input-container--invalido');
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemErro(tiposDeInput, input);
    }

}

const tiposDeErro = [
    'valueMissing',
    'typeMismactch',
    'patternMismatch',
    'customError'
]

const mensagensDeErro = {
    nome : {
        valueMissing : 'O campo nome não pode estar vazio'    
    },

    email : {
        valueMissing : 'O campo email não pode estar vazio',
        typeMismatch : 'O email não é valido'
    },

    senha : {
        valueMissing : 'O campo senha não pode estar vazio',
        patternMismatch : 'A senha deve estar de acordo com os padrões'
    },

    data : {
        valueMissing : 'O campo data não pode estar vazio',
        customError : 'Voce deve ser maior de 18 anos'
    },
    telefone : {
        valueMissing : 'O campo data não pode estar vazio', 
        patternMismatch : 'O telefone deve estar de acordo com os padrões'
    }
}


function mostraMensagemErro (tiposDeInput, input) {
    let mensagem = '';

    tiposDeErro.forEach( Erro => {
        if(input.validity[Erro]) {
            mensagem = mensagensDeErro[tiposDeInput][Erro];
        }
    })

    return mensagem;
}

export function exibirFilmesNaTela(listaDeFilmes) {
    const elementoParaInserirFilmes = document.getElementById("filmes");
    elementoParaInserirFilmes.innerHTML = '';
    listaDeFilmes.forEach(elemento => {
        elementoParaInserirFilmes.innerHTML += 
        `<div class="filmesCards">
        <img class="imagemFilme" src=https://image.tmdb.org/t/p/w300/${elemento.poster_path} alt="" >
        <h2 class="tituloFilme">${elemento.title}</h2>
    </div>`

})
}













