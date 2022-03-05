const listaDePEcas = ['pecas de tete', 'AB', 'peca B'];

    console.log('quantidade de caractees')

 if(listaDePEcas.length <= 10) {
    console.log('as peças pode, ser cadastradas');
} 
        console.log('quantidade de caractees');

    for(let index = 0; index < listaDePEcas.length; index ++) {
        const pecaAtual = listaDePEcas[index];

        if(pecaAtual.length < 3){
            console.log(pecaAtual +': A peça possui nome inferior a 3 caracteres e não pode ser cadastrda');

        } else {
            console.log(pecaAtual + ': a peca pode ser cadastrda');
        }
            console.log('peso da peca');

        const pesoDaPecaEmGramas = 50; 

            if(pesoDaPecaEmGramas >=100){
                console.log('peso suficiente')
            } else { 
                console.log('peso insulficiete'); 
            }
    }