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


// Função para atualizar bio e nome pelo ID passado
const updateBioAndName = (id: number, newName: string, newBio: string): void => {
    const item = lista.find(item => item.id === id);
    if (item) {
        item.name = newName;
        item.bio = newBio;
    } else {
        console.log(`Item with ID ${id} not found.`);
    };
};
// teste
updateBioAndName(3, "Agleice Sousa", "Este é um teste!");
console.log(lista);


// Função para deletar item por ID
const deleteItemById = (id: number): void => {
    const index = lista.findIndex(item => item.id === id);
    if (index !== -1) {
        lista.splice(index, 1);
    } else {
        console.log(`Item with ID ${id} not found.`);
    };
};
// Teste
deleteItemById(4);
console.log(lista);