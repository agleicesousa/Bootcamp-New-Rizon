var _a;
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
// Exemplo de uso com uma palavra recebida via input
function mostrarResultado() {
    var _a;
    var palavraInput = (_a = document.getElementById('palavra')) === null || _a === void 0 ? void 0 : _a.value.trim();
    var resultadoDiv = document.getElementById('resultado');
    // Verifica se o input e o div de resultado existem antes de continuar
    if (palavraInput && resultadoDiv) {
        var resultado = contarVogais(palavraInput);
        resultadoDiv.innerText = "A palavra '".concat(palavraInput, "' tem ").concat(resultado, " vogais.");
        resultadoDiv.style.display = 'block';
    }
    else if (resultadoDiv) {
        resultadoDiv.innerText = 'Por favor, digite uma palavra.';
        resultadoDiv.style.display = 'block';
    }
}
// Adiciona o evento de clique ao botão do formulário
(_a = document.getElementById('contarBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', mostrarResultado);
