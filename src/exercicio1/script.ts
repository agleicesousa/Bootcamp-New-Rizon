// Função que retorne a quantidade de vogais da palavra passada
function contarVogais(palavra: string): number {
    return Array.from(palavra).filter(letra => "aeiouAEIOU".includes(letra)).length;
};
// teste
console.log(contarVogais("JavaScript"));


// Exemplo de uso com uma palavra recebida via parâmetros
const palavra = "exemplo";
const quantidadeVogais = contarVogais(palavra);
//teste
console.log(`A palavra "${palavra}" contém ${quantidadeVogais} vogais.`);