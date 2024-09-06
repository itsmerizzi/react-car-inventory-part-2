# Name: Augusto José Rizzi
Created using only React and CSS, this repository is for my college project. The college subject is "Front-end Systems Development".

:globe_with_meridians:

Agora em português...

A pedido dos professores, a pasta node_modules foi retirada.

### Para executar o projeto:
1. Entre pasta react-car-inventory no terminal:

```
cd {caminhoDaPasta}/react-car-inventory
```

2. Rode npm install para instalar as dependências do projeto:

```
npm install
```

3. É necessário instalar o react-router-dom para dar podermos utilizar as rotas:

``` 
npm install react-router-dom
```

4. Já que estamos trabalhando com API, uma biblioteca que facilita o controle das requisições é o Axios:

``` 
npm install axios
```

5. Agora vamos instalar algumas dependências da biblioteca Material UI

```
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/material@latest @emotion/react@latest @emotion/styled@latest
```

6. Dentro da pasta app rode o comando npm start para iniciar a execução do projeto.

```
cd ./app/
npm start
```

### Com o projeto rodando...
Você vai poder navegar entre os tópicos: 
  - **Home**;
  - **Sobre**;
  - **Carros**;
  - **Adicionar Carro**

## Introdução

Neste projeto, foi desenvolvida uma aplicação front-end utilizando o React e as bibliotecas: React Router e Material UI. O objetivo é criar um sistema básico de gerenciamento de listas de carros via API. O projeto foi iniciado utilizando o Create React App, que facilitou a configuração inicial e a estruturação do ambiente de desenvolvimento. A aplicação foi dividida em componentes reutilizáveis, a navegação entre eles foi feita com React Router e Axios para facilitar o controle de requisições.

Uma breve explicação de Axios, caso não estejam familiarizados. É uma biblioteca 'promise-based' que permite fazer requisições HTTP de forma simples e eficiente. Como o Axios tem recursos como interceptadores de solicitações e respostas, o controle de requisições tanto de forma síncrono ou assíncrono é feito por 'debaixo dos panos' e o seu código fica mais simples e intuitivo, o que facilita tanto o desenvolvimento quanto possíveis refatorações que serão necessárias no futuro.

## Componentes

Os componentes estão no diretório `./src/components` e eles possuem as seguintes características:
- HomeComponent:
  - Componente com HTML simples para a página inicial do projeto;
 
- AboutComponent:
  - Componente também apenas com HTML que explica brevemente o intuito do projeto;
 
- NavBarComponent:
  - Ajuda a montar o HTML da NavBar do projeto. Aqui é somente a construção do component porque a "mágica" é feita pelo DOM do React Router;

- CarFormComponent:
  - Formulário de cadastro de carro, utilizando o método POST e acessando a URL 'http://localhost:5000/cars', esse componente é responsável por cadastrar os carros na API;
 
- CarsListComponent:
  - Lista todos os carros, com a possibilidade de removê-los também. Para listar é usado o método GET na URL 'http://localhost:5000/cars' e para remover é usado o método DELETE na URL 'http://localhost:5000/cars/{id}';

## Conclusão

Este projeto utilizou React e suas bibliotecas auxiliares, como React Router, Material UI e Axios, para criar uma aplicação simples de gerenciamento de carros. A aplicação permite adicionar, listar e remover carros, proporcionando uma interface amigável e fácil de navegar.

Com a utilização de componentes reutilizáveis e um design modular, o projeto demonstra boas práticas de desenvolvimento front-end, sendo uma base sólida para futuras melhorias e expansões.