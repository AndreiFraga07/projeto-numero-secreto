let listaDeNumerosSorteados = []
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//let numeroSecreto = 7;

//let titulo = document.querySelector('h1');  
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número de 1 a 10';


function exibirTextoNaTela(tag, texto)   {

    let campo = document.querySelector(tag);
    campo.innerHTML= texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});

}
exibirTextoNaTela ('h1' , 'Jogo do Número Secreto');
exibirTextoNaTela ('p' , 'Escolha um número entre 1 a 10');

function verificarChute() {

let chute = document.querySelector('input').value;

if (chute == numeroSecreto) {
    exibirTextoNaTela('h1','Meus parabéns você Acertou!');

    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas =  `Você acertou o número Secreto com ${tentativas} ${palavraTentativa} !`;

     exibirTextoNaTela ('p' , mensagemTentativas);

     document.getElementById ('reiniciar').removeAttribute ('disabled');
}   
    else {
     
    if (chute > numeroSecreto) {
    exibirTextoNaTela('p', 'O numero secreto é menor');
    
 }  else {
    exibirTextoNaTela('p', 'O numero secreto é maior');
    }
    //tentativas = tentativas + 1;
    tentativas++;
    limparCampo();
}
}
 function exibirMensagemInicial()  {
    exibirTextoNaTela ('h1' , 'Jogo do Número Secreto');
    exibirTextoNaTela ('p' , 'Escolha um número entre 1 a 10');

 }
 exibirMensagemInicial()

function gerarNumeroAleatorio(){
        let numeroEscolhido = parseInt(Math.random()* numeroLimite + 1); 
        let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
chute = document.querySelector('input');
chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial()
    document.getElementById ('reiniciar').setAttribute('disabled', true);
}

