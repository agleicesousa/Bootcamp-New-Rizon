"use strict";
// Função auxiliar para verificar se um elemento do DOM existe
function getElementoPorId(id) {
    return document.getElementById(id);
}
// Função que retorna a quantidade de vogais da palavra passada
function contarVogais(palavra) {
    const vogais = "aeiouAEIOU";
    return Array.from(palavra).filter(letra => vogais.includes(letra)).length;
}
;
// Teste simples no console
console.log(contarVogais("JavaScript"));
// Exemplo de uso com uma palavra recebida via parâmetros
const palavra = "exemplo";
const quantidadeVogais = contarVogais(palavra);
// Teste
console.log(`A palavra "${palavra}" contém ${quantidadeVogais} vogais.`);
// Função para exibir resultado no HTML
function mostrarResultado() {
    var _a;
    const palavraInput = (_a = getElementoPorId('palavra')) === null || _a === void 0 ? void 0 : _a.value.trim();
    const resultadoDiv = getElementoPorId('resultado');
    if (!palavraInput) {
        atualizarResultado(resultadoDiv, 'Por favor, digite uma palavra.');
        return;
    }
    ;
    const resultado = contarVogais(palavraInput);
    atualizarResultado(resultadoDiv, `A palavra '${palavraInput}' tem ${resultado} vogais.`);
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
const botaoContar = getElementoPorId('contarBtn');
botaoContar === null || botaoContar === void 0 ? void 0 : botaoContar.addEventListener('click', function (event) {
    event.preventDefault();
    mostrarResultado();
});
