// Função que retorne a quantidade de vogais da palavra passada
function contarVogais(palavra: string): number {
    return Array.from(palavra).filter(letra => "aeiouAEIOU".includes(letra)).length;
};

// teste
console.log(contarVogais("JavaScript"));