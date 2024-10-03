# Bootcamp New Horizon - Exercícios de Nivelamento

Este repositório contém os exercícios desenvolvidos como parte do nivelamento no Bootcamp New Horizon. Os exercícios focam em manipulação de listas com arrays e contagem de vogais, implementados em TypeScript e JavaScript, além de uma interface web para visualização e teste das funções.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
.
├── dist
│   ├── exercicio1
│   │   └── script.js
│   ├── exercicio2
│   │   └── script.js
│   └── exercicio3
│       └── script.js
├── src
│   ├── css
│   │   ├── funcoes.css
│   │   └── index.css
│   ├── exercicio1
│   │   └── script.ts
│   ├── exercicio2
│   │   └── script.ts
│   └── exercicio3
│       └── script.ts
├── .gitignore
├── funcoes.html
├── index.html
└── tsconfig.json
```

- **/dist**: Contém os arquivos JavaScript gerados a partir dos scripts TypeScript.
- **/src**: Contém os arquivos TypeScript e CSS.
- **index.html**: Página principal que exibe o histórico de commits.
- **funcoes.html**: Página dedicada à explicação e testes das funções implementadas.

## Descrição dos Exercícios

### 1. Contador de Vogais
O exercício envolve a criação de uma função que conta quantas vogais existem em uma palavra. A função recebe uma string como parâmetro e retorna o número de vogais.

#### Exemplo de uso:
```typescript
function contarVogais(palavra: string): number {
    const vogais = "aeiouAEIOU";
    return Array.from(palavra).filter(letra => vogais.includes(letra)).length;
}
```

A função é testada tanto através de um exemplo direto no código quanto via um campo de formulário HTML, onde o usuário pode inserir uma palavra para verificar o número de vogais.

### 2. Gerenciamento de Lista por ID
Neste exercício, foi criado um sistema de gerenciamento de uma lista de pessoas, que permite:

- Exibir a biografia de uma pessoa a partir de um ID.
- Exibir o nome da pessoa pelo ID.
- Deletar um item da lista usando o ID.
- Atualizar o nome ou a biografia de uma pessoa através do ID.

#### Exemplo de Lista:
```typescript
let lista: Item[] = [
    { id: 1, name: "Ada Lovelace", bio: "Matemática e escritora inglesa, pioneira em algoritmos." },
    { id: 2, name: "Alan Turing", bio: "Pai da ciência da computação e da inteligência artificial." },
    { id: 3, name: "Nikola Tesla", bio: "Inventor e engenheiro conhecido por suas contribuições à eletricidade." },
    { id: 4, name: "Nicolau Copérnico", bio: "Astrônomo que desenvolveu a teoria heliocêntrica." }
];
```

A interação com a lista ocorre via um formulário HTML, onde o usuário pode inserir o ID e realizar as operações.

## Como Testar

1. Clone este repositório:
   ```bash
   git clone https://github.com/agleicesousa/bootcamp-new-horizon.git
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Compile os arquivos TypeScript:
   ```bash
   tsc
   ```

4. Abra o arquivo `index.html` no navegador para visualizar a página de histórico de commits, ou `funcoes.html` para testar as funções desenvolvidas.

## Tecnologias Utilizadas

- **TypeScript**: Para tipagem e desenvolvimento dos scripts principais.
- **JavaScript**: Código compilado para execução no navegador.
- **CSS**: Estilização das páginas web.
- **HTML**: Estruturação das páginas web.

## Autor

Desenvolvido por Agleice Sousa. Para mais informações, entre em contato:

- [LinkedIn](https://www.linkedin.com/in/agleice-sousa/)
