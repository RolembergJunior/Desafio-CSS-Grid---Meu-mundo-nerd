
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
            mensagem = mensagensDeErro[tiposDeInput][Erro]

            console.log(Erro)
        }
    })

    return mensagem
}