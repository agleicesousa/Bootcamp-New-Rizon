// Função que retorne a quantidade de vogais da palavra passada
function contarVogais(palavra) {
    return Array.from(palavra).filter(function (letra) { return "aeiouAEIOU".includes(letra); }).length;
}
;
// teste
console.log(contarVogais("JavaScript"));
// Exemplo de uso com uma palavra recebida via parâmetros
var palavra = "exemplo";
var quantidadeVogais = contarVogais(palavra);
//teste
console.log("A palavra \"".concat(palavra, "\" cont\u00E9m ").concat(quantidadeVogais, " vogais."));
