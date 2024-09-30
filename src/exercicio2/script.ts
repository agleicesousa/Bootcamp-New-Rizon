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

// ========================== RESULTADO VIA CONSOLE ========================

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
};
// Teste
console.log(getNameById(1));


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
};
// Teste
console.log(getBioById(2));


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


// Função para deletar item por ID
const deleteItemById = (id: number): void => {
    const index = lista.findIndex(item => item.id === id);
    if (index !== -1) {
        lista.splice(index, 1);
        console.log(`Item com ID ${id} foi deletado com sucesso.`);
    } else {
        console.error(`Erro: Item com ID ${id} não foi encontrado para deleção.`);
    }
};
// Teste
deleteItemById(4);
console.log(lista);

// ====================== RESULTADO NO HTML?? ====================