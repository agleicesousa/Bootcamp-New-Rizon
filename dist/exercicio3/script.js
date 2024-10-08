"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
// Adiciona listener para envio do formulário de resposta
(_a = document.getElementById('responseForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (e) {
    e.preventDefault();
    const resposta = document.getElementById('resposta').value;
    if (resposta) {
        alert(`Resposta enviada: ${resposta}`);
        document.getElementById('resposta').value = '';
    }
    else {
        alert('Por favor, preencha o campo de resposta.');
    }
});
// Função assíncrona para obter os commits de um repositório com paginação
function obterCommits() {
    return __awaiter(this, arguments, void 0, function* (page = 1, per_page = 100) {
        try {
            const response = yield fetch(`https://api.github.com/repos/agleicesousa/bootcamp-new-horizon/commits?page=${page}&per_page=${per_page}`);
            if (!response.ok) {
                throw new Error('Erro ao buscar commits');
            }
            ;
            const commits = yield response.json();
            const listaCommits = document.getElementById('listaCommits');
            if (page === 1) {
                listaCommits.innerHTML = '';
            }
            ;
            commits.forEach(commit => {
                const itemLista = document.createElement('li');
                itemLista.textContent = `Commit: ${commit.commit.message} - Autor: ${commit.commit.author.name}`;
                listaCommits.appendChild(itemLista);
            });
            // Checa se ainda há mais commits para buscar
            if (commits.length === per_page) {
                yield obterCommits(page + 1, per_page);
            }
            ;
        }
        catch (error) {
            console.error('Erro ao obter commits:', error);
            alert('Não foi possível obter os commits. Tente novamente mais tarde.');
        }
        ;
    });
}
;
obterCommits();
