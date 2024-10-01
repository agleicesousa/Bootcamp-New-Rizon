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


<<<<<<< HEAD
// Função que retorna o nome do ID passado
const getNameById = (id: number): string | undefined => {
    // Checando se o ID é válido
    if (id <= 0) {
        console.log('ID inválido. O ID deve ser maior que zero.');
        return undefined;
    }
    
    // Procurando o item com o ID correspondente
    const item = lista.find(item => item.id === id);

    // Retornando o nome do item, ou undefined caso não encontrado
    return item ? item.name : undefined;
=======
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
>>>>>>> exercicio-2
};


<<<<<<< HEAD
// Função que retorna a bio do ID passado
const getBioById = (id: number): string | undefined => {
    if (id <= 0) {
        console.error('Erro: ID fornecido é inválido.');
        return undefined;
    }

    const item = lista.find(item => item.id === id);
    if (!item) {
        console.warn(`Aviso: Item com ID ${id} não foi encontrado.`);
    }

    return item?.bio;
=======
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
>>>>>>> exercicio-2
};


<<<<<<< HEAD
// Função para atualizar bio e nome pelo ID passado
const updateBioAndName = (id: number, newName: string, newBio: string): void => {
    if (!newName || !newBio) {
        console.error('Erro: Nome e biografia não podem estar vazios.');
        return;
    }

    const item = lista.find(item => item.id === id);
    if (item) {
        item.name = newName;
        item.bio = newBio;
        console.log(`Item com ID ${id} atualizado com sucesso.`);
    } else {
        console.error(`Erro: Item com ID ${id} não foi encontrado para atualização.`);
    }
};
// Teste
updateBioAndName(3, "Agleice Sousa", "Este é um teste!");
console.log(lista);
=======
// Função para renderizar a lista de biografias na página
function renderLista(): void {
    const listaUl = document.getElementById('listaPessoas') as HTMLUListElement;
    listaUl.innerHTML = ''; // Limpa a lista anterior

    lista.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.id}. ${item.name}: ${item.bio}`;
        listaUl.appendChild(li);
    });
};

// Renderiza a lista na inicialização
document.addEventListener('DOMContentLoaded', renderLista);


// Função para atualizar um item com base no ID fornecido
function atualizarItem(): void {
    const id = parseInt((document.getElementById('id') as HTMLInputElement).value);
    const newName = (document.getElementById('novoNome') as HTMLInputElement).value.trim();
    const newBio = (document.getElementById('novaBio') as HTMLInputElement).value.trim();
    const resultadoDiv = document.getElementById('resultado') as HTMLDivElement;

    if (isNaN(id) || (!newName && !newBio)) {
        resultadoDiv.innerText = 'Por favor, digite um ID válido e pelo menos um campo para atualizar.';
        return;
    };

    const item = lista.find(item => item.id === id);
    if (item) {
        if (newName) item.name = newName;
        if (newBio) item.bio = newBio;
        resultadoDiv.innerText = `Item com ID ${id} foi atualizado.`;
        renderLista();
    } else {
        resultadoDiv.innerText = 'Item não encontrado.';
    };
};
>>>>>>> exercicio-2


// Função para deletar um item com base no ID fornecido
function deletarItem(): void {
    const id = parseInt((document.getElementById('id') as HTMLInputElement).value);
    const resultadoDiv = document.getElementById('resultado') as HTMLDivElement;

    if (isNaN(id)) {
        resultadoDiv.innerText = 'Por favor, digite um ID válido.';
        return;
    };

    const index = lista.findIndex(item => item.id === id);
    if (index !== -1) {
        lista.splice(index, 1);
<<<<<<< HEAD
        console.log(`Item com ID ${id} foi deletado com sucesso.`);
    } else {
        console.error(`Erro: Item com ID ${id} não foi encontrado para deleção.`);
    }
};
// Teste
deleteItemById(4);
console.log(lista);

// ====================== RESULTADO NO HTML?? ====================
=======
        resultadoDiv.innerText = `Item com ID ${id} foi deletado.`;
        renderLista();
    } else {
        resultadoDiv.innerText = 'Item não encontrado.';
    };
};
>>>>>>> exercicio-2
