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

// Função assíncrona para obter os commits de um repositório
async function obterCommits(): Promise<void> {
    try {
        const response = await fetch('https://api.github.com/repos/agleicesousa/bootcamp-new-horizon/commits');
        
        if (!response.ok) {
            throw new Error('Erro ao buscar commits');
        };

        const commits: Commit[] = await response.json();
        const listaCommits = document.getElementById('listaCommits') as HTMLUListElement;
        listaCommits.innerHTML = '';

        commits.forEach(commit => {
            const itemLista = document.createElement('li');
            itemLista.textContent = `Commit: ${commit.commit.message} - Autor: ${commit.commit.author.name}`;
            listaCommits.appendChild(itemLista);
        });

    } catch (error) {
        console.error('Erro ao obter commits:', error);
        alert('Não foi possível obter os commits. Tente novamente mais tarde.');
    };
};

obterCommits();