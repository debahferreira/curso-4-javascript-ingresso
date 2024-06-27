function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeIngresso = parseInt(document.getElementById('qtd').value);

    if(tipoIngresso == 'pista') {
        comprarPista(quantidadeIngresso);
    } else if(tipoIngresso == 'superior') {
        comprarSuperior(quantidadeIngresso);
    } else {
        comprarInferior(quantidadeIngresso);
    }
}

function comprarPista(quantidadeIngresso) {
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
    
    if(document.getElementById('qtd').value == '' || quantidadeIngresso == 0) {
        alert('Insira uma quantidade válida de ingressos.');
        return;
    }
    
    if(quantidadePista == 0) {
        alert('Não há mais ingressos disponíveis para a pista. Escolha outro tipo de ingresso.');
        return;
    }

    if(quantidadeIngresso > quantidadePista) {
        alert('A quantidade desejada de ingressos para a pista é maior que a disponível. Escolha um número menor de ingressos.');
    } else {
        alert('Compra realizada com sucesso!');
        quantidadePista = quantidadePista - quantidadeIngresso;
        document.getElementById('qtd-pista').textContent = quantidadePista;
    }
}

function comprarSuperior(quantidadeIngresso) {
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if(document.getElementById('qtd').value == '' || quantidadeIngresso == 0) {
        alert('Insira uma quantidade válida de ingressos.');
        return;
    }

    if(quantidadeSuperior == 0) {
        alert('Não há mais ingressos disponíveis para as cadeiras superiores. Escolha outro tipo de ingresso.');
        return;
    }

    if(quantidadeIngresso > quantidadeSuperior) {
        alert('A quantidade desejada de ingressos para as cadeiras superiores é maior que a disponível. Escolha um número menor de ingressos.');
    } else {
        alert('Compra realizada com sucesso!');
        quantidadeSuperior = quantidadeSuperior - quantidadeIngresso;
        document.getElementById('qtd-superior').textContent = quantidadeSuperior;
    }
}

function comprarInferior(quantidadeIngresso) {
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if(document.getElementById('qtd').value == '' || quantidadeIngresso == 0) {
        alert('Insira uma quantidade válida de ingressos.');
        return;
    }

    if(quantidadeInferior == 0) {
        alert('Não há mais ingressos disponíveis para as cadeiras inferiores. Escolha outro tipo de ingresso.');
        return;
    }

    if(quantidadeIngresso > quantidadeInferior) {
        alert('A quantidade desejada de ingressos para as cadeiras inferiores é maior que a disponível. Escolha um número menor de ingressos.');
    } else {
        alert('Compra realizada com sucesso!');
        quantidadeInferior = quantidadeInferior - quantidadeIngresso;
        document.getElementById('qtd-inferior').textContent = quantidadeInferior;
    }
}