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


// Exemplo de uso com uma palavra recebida via input
function mostrarResultado(): void {
    const palavraInput = (document.getElementById('palavra') as HTMLInputElement)?.value.trim();
    const resultadoDiv = document.getElementById('resultado');

    // Verifica se o input e o div de resultado existem antes de continuar
    if (palavraInput && resultadoDiv) {
        const resultado = contarVogais(palavraInput);
        resultadoDiv.innerText = `A palavra '${palavraInput}' tem ${resultado} vogais.`;
        resultadoDiv.style.display = 'block';
    } else if (resultadoDiv) {
        resultadoDiv.innerText = 'Por favor, digite uma palavra.';
        resultadoDiv.style.display = 'block';
    }
}
// Adiciona o evento de clique ao botão do formulário
document.getElementById('contarBtn')?.addEventListener('click', mostrarResultado);