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

// ========================== VIA CONSOLE ========================

//Função que retorna o nome do ID passado
const getNameById = (id: number): string | undefined => {
    return lista.find(item => item.id === id)?.name;
};
// Teste
console.log(getNameById(1));