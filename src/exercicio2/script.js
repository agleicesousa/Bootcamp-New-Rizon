;
// Lista de biografias
var lista = [
    { id: 1, name: "Ada Lovelace", bio: "Matemática e escritora inglesa, pioneira em algoritmos." },
    { id: 2, name: "Alan Turing", bio: "Pai da ciência da computação e da inteligência artificial." },
    { id: 3, name: "Nikola Tesla", bio: "Inventor e engenheiro conhecido por suas contribuições à eletricidade." },
    { id: 4, name: "Nicolau Copérnico", bio: "Astrônomo que desenvolveu a teoria heliocêntrica." }
];
// Função que retorna a bio do ID passado
function exibirBio() {
    var id = parseInt(document.getElementById('id').value);
    var resultadoDiv = document.getElementById('resultado');
    if (isNaN(id)) {
        resultadoDiv.innerText = 'Por favor, digite um ID válido.';
        return;
    }
    ;
    var item = lista.find(function (item) { return item.id === id; });
    resultadoDiv.innerText = item ? "Biografia: ".concat(item.bio) : 'Nenhuma biografia encontrada para este ID.';
}
;
// Função que retorna o nome do ID passado
function exibirNome() {
    var id = parseInt(document.getElementById('id').value);
    var resultadoDiv = document.getElementById('resultado');
    if (isNaN(id)) {
        resultadoDiv.innerText = 'Por favor, digite um ID válido.';
        return;
    }
    ;
    var item = lista.find(function (item) { return item.id === id; });
    resultadoDiv.innerText = item ? "Nome: ".concat(item.name) : 'Nenhum nome encontrado para este ID.';
}
;
// Função para renderizar a lista de biografias na página
function renderLista() {
    var listaUl = document.getElementById('listaPessoas');
    listaUl.innerHTML = ''; // Limpa a lista anterior
    lista.forEach(function (item) {
        var li = document.createElement('li');
        li.innerText = "".concat(item.id, ". ").concat(item.name, ": ").concat(item.bio);
        listaUl.appendChild(li);
    });
}
;
// Função para atualizar um item com base no ID fornecido
function atualizarItem() {
    var id = parseInt(document.getElementById('id').value);
    var newName = document.getElementById('novoNome').value.trim();
    var newBio = document.getElementById('novaBio').value.trim();
    var resultadoDiv = document.getElementById('resultado');
    if (isNaN(id) || (!newName && !newBio)) {
        resultadoDiv.innerText = 'Por favor, digite um ID válido e pelo menos um campo para atualizar.';
        return;
    }
    ;
    var item = lista.find(function (item) { return item.id === id; });
    if (item) {
        if (newName)
            item.name = newName;
        if (newBio)
            item.bio = newBio;
        resultadoDiv.innerText = "Item com ID ".concat(id, " foi atualizado.");
        renderLista();
    }
    else {
        resultadoDiv.innerText = 'Item não encontrado.';
    }
    ;
}
;
// Função para deletar um item com base no ID fornecido
function deletarItem() {
    var id = parseInt(document.getElementById('id').value);
    var resultadoDiv = document.getElementById('resultado');
    if (isNaN(id)) {
        resultadoDiv.innerText = 'Por favor, digite um ID válido.';
        return;
    }
    ;
    var index = lista.findIndex(function (item) { return item.id === id; });
    if (index !== -1) {
        lista.splice(index, 1);
        resultadoDiv.innerText = "Item com ID ".concat(id, " foi deletado.");
        renderLista();
    }
    else {
        resultadoDiv.innerText = 'Item não encontrado.';
    }
    ;
}
;
// Renderiza a lista na inicialização
document.addEventListener('DOMContentLoaded', renderLista);
