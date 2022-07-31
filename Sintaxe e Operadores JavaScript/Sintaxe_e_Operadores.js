// criação das variáveis com const pois não tem alteração nos valores
    function comparaValores(valor1, valor2) {

        const primeiraFrase = primeiraPart(valor1, valor2);
        const segundaFrase = segundaPart(valor1, valor2);

        return `${primeiraFrase} ${segundaFrase}`;
    }

// verificação se valores são iguais e cria a primeira parte da frase
    function primeiraPart(valor1, valor2) {
        let primeiraFrase = `Os números ${valor1} e ${valor2}`;
        let simNao = 'não';

        if (valor1 === valor2) {
            simNao = '';
        }

        return `${primeiraFrase} ${simNao} são iguais.`;
    }

// verificação se a soma é maior ou menor que 10 e 20 e cria a segunda parte da frase
    function segundaPart(valor1, valor2) {
        const soma = valor1 + valor2;
        let comparaDez = 'menor';
        let comparaVinte = 'menor';

        if (soma > 10) {
            comparaDez = 'maior';
        }

        if (soma > 20) {
            comparaVinte = 'maior';
        }

        return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
    }

console.log(comparaValores(2, 10));