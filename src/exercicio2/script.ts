// Definindo o tipo para os itens da lista
interface Item {
    id: number;
    name: string;
    bio: string;
};

// Lista de biografias
let lista: Item[] = [
    { id: 1, name: "Ada Lovelace", bio: "Matemática e escritora inglesa, pioneira em algoritmos." },
    { id: 2, name: "Alan Turing", bio: "Pai da ciência da computação e da inteligência artificial." },
    { id: 3, name: "Nikola Tesla", bio: "Inventor e engenheiro conhecido por suas contribuições à eletricidade." },
    { id: 4, name: "Nicolau Copérnico", bio: "Astrônomo que desenvolveu a teoria heliocêntrica." }
];


//Função que retorna a bio do ID passado
function exibirBio(): void {
    const id = parseInt((document.getElementById('id') as HTMLInputElement).value);
    const resultadoDiv = document.getElementById('resultado') as HTMLDivElement;

    if (isNaN(id)) {
        resultadoDiv.innerText = 'Por favor, digite um ID válido.';
        return;
    };

    const item = lista.find(item => item.id === id);
    resultadoDiv.innerText = item ? `Biografia: ${item.bio}` : 'Nenhuma biografia encontrada para este ID.';
};


// Função que retorna o nome do ID passado
function exibirNome(): void {
    const id = parseInt((document.getElementById('id') as HTMLInputElement).value);
    const resultadoDiv = document.getElementById('resultado') as HTMLDivElement;

    if (isNaN(id)) {
        resultadoDiv.innerText = 'Por favor, digite um ID válido.';
        return;
    };

    const item = lista.find(item => item.id === id);
    resultadoDiv.innerText = item ? `Nome: ${item.name}` : 'Nenhum nome encontrado para este ID.';
};


// Função para renderizar a lista de biografias na página
function renderLista(): void {
    const listaUl = document.getElementById('listaPessoas') as HTMLUListElement;
    listaUl.innerHTML = ''; // Limpa a lista anterior

    lista.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.id}. ${item.name}: ${item.bio}`;
        listaUl.appendChild(li);
    });
}