;
// Lista de biografias
var lista = [
    { id: 1, name: "Ada Lovelace", bio: "Matemática e escritora inglesa, pioneira em algoritmos." },
    { id: 2, name: "Alan Turing", bio: "Pai da ciência da computação e da inteligência artificial." },
    { id: 3, name: "Nikola Tesla", bio: "Inventor e engenheiro conhecido por suas contribuições à eletricidade." },
    { id: 4, name: "Nicolau Copérnico", bio: "Astrônomo que desenvolveu a teoria heliocêntrica." }
];
// ========================== VIA CONSOLE ========================
//Função que retorna o nome do ID passado
var getNameById = function (id) {
    var _a;
    return (_a = lista.find(function (item) { return item.id === id; })) === null || _a === void 0 ? void 0 : _a.name;
};
// Teste
console.log(getNameById(1));
// Função que retorna a bio do ID passado
var getBioById = function (id) {
    var _a;
    return (_a = lista.find(function (item) { return item.id === id; })) === null || _a === void 0 ? void 0 : _a.bio;
};
// Teste
console.log(getBioById(2));
// Função para atualizar bio e nome pelo ID passado
var updateBioAndName = function (id, newName, newBio) {
    var item = lista.find(function (item) { return item.id === id; });
    if (item) {
        item.name = newName;
        item.bio = newBio;
    }
    else {
        console.log("Item with ID ".concat(id, " not found."));
    }
    ;
};
// teste
updateBioAndName(3, "Agleice Sousa", "Este é um teste!");
console.log(lista);
// Função para deletar item por ID
var deleteItemById = function (id) {
    var index = lista.findIndex(function (item) { return item.id === id; });
    if (index !== -1) {
        lista.splice(index, 1);
    }
    else {
        console.log("Item with ID ".concat(id, " not found."));
    }
    ;
};
// Teste
deleteItemById(4);
console.log(lista);
