// Adiciona listener para envio do formulário de resposta
document.getElementById('responseForm')?.addEventListener('submit', function (e: Event) {
    e.preventDefault();
    
    const resposta = (document.getElementById('resposta') as HTMLInputElement).value;
    if (resposta) {
        alert(`Resposta enviada: ${resposta}`);
        (document.getElementById('resposta') as HTMLInputElement).value = '';
    } else {
        alert('Por favor, preencha o campo de resposta.');
    }
});

// Interface para o formato dos commits da API do GitHub
interface Commit {
    commit: {
        message: string;
        author: {
            name: string;
        };
    };
}

// Função assíncrona para obter os commits de um repositório com paginação
async function obterCommits(page: number = 1, per_page: number = 100): Promise<void> {
    try {
        const response = await fetch(`https://api.github.com/repos/agleicesousa/bootcamp-new-horizon/commits?page=${page}&per_page=${per_page}`);
        
        if (!response.ok) {
            throw new Error('Erro ao buscar commits');
        };

        const commits: Commit[] = await response.json();
        const listaCommits = document.getElementById('listaCommits') as HTMLUListElement;
        
        if (page === 1) {
            listaCommits.innerHTML = '';
        };

        commits.forEach(commit => {
            const itemLista = document.createElement('li');
            itemLista.textContent = `Commit: ${commit.commit.message} - Autor: ${commit.commit.author.name}`;
            listaCommits.appendChild(itemLista);
        });

        // Checa se ainda há mais commits para buscar
        if (commits.length === per_page) {
            await obterCommits(page + 1, per_page);
        };

    } catch (error) {
        console.error('Erro ao obter commits:', error);
        alert('Não foi possível obter os commits. Tente novamente mais tarde.');
    };
};

obterCommits();