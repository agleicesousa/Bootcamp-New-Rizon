"use strict";
// Função auxiliar para verificar se um elemento do DOM existe
function getElementoPorId(id) {
    return document.getElementById(id);
}
// Função que retorna a quantidade de vogais da palavra passada
function contarVogais(palavra) {
    var vogais = "aeiouAEIOU";
    return Array.from(palavra).filter(function (letra) { return vogais.includes(letra); }).length;
}
;
// Teste simples no console
console.log(contarVogais("JavaScript"));
// Exemplo de uso com uma palavra recebida via parâmetros
var palavra = "exemplo";
var quantidadeVogais = contarVogais(palavra);
// Teste
console.log("A palavra \"".concat(palavra, "\" cont\u00E9m ").concat(quantidadeVogais, " vogais."));
// Função para exibir resultado no HTML
function mostrarResultado() {
    var _a;
    var palavraInput = (_a = getElementoPorId('palavra')) === null || _a === void 0 ? void 0 : _a.value.trim();
    var resultadoDiv = getElementoPorId('resultado');
    if (!palavraInput) {
        atualizarResultado(resultadoDiv, 'Por favor, digite uma palavra.');
        return;
    }
    ;
    var resultado = contarVogais(palavraInput);
    atualizarResultado(resultadoDiv, "A palavra '".concat(palavraInput, "' tem ").concat(resultado, " vogais."));
}
;
// Função para atualizar o conteúdo e a visibilidade de um elemento HTML
function atualizarResultado(elemento, mensagem) {
    if (elemento) {
        elemento.innerText = mensagem;
        elemento.style.display = 'block';
    }
    ;
}
;
// Adiciona o evento de clique ao botão do formulário
var botaoContar = getElementoPorId('contarBtn');
botaoContar === null || botaoContar === void 0 ? void 0 : botaoContar.addEventListener('click', mostrarResultado);
