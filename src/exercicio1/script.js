// Função que retorne a quantidade de vogais da palavra passada
function contarVogais(palavra) {
    return Array.from(palavra).filter(function (letra) { return "aeiouAEIOU".includes(letra); }).length;
}
;
// teste
console.log(contarVogais("JavaScript"));
