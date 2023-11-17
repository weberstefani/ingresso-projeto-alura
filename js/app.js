function comprar() {
    //recuperação de valores (tipo e quantidade)
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

    if (tipo.value == 'pista') {
        comprarPista(qtd);
    } else if (tipo.value == 'superior') {
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert('Quantidade indisponível para o tipo pista');
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(qtd) {
    let qtdPistaSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdPistaSuperior) {
        alert('Quantidade indisponível para o tipo pista');
    } else {
        qtdPistaSuperior = qtdPistaSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdPistaSuperior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarInferior(qtd) {
    let qtdPistaInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdPistaInferior) {
        alert('Quantidade indisponível para o tipo pista');
    } else {
        qtdPistaInferior = qtdPistaInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdPistaInferior;
        alert('Compra realizada com sucesso!');
    }
}