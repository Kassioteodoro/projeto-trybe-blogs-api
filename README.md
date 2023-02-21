# My Awesome Project

# Contexto
Este projeto trata-se de uma API para a produção de conteudo para um blog.

Esse projeto e desenvolvido pela trybe, o objetivo é poder testar a capacidade de seus alunos de construir uma API com acesso aum banco MySQL utilizando a ORM sequelize e ferramentas como express e Docker.

### os arquivos aos quais eu sou responsavel:
* os presentes na pasta `src`

### :construction: Este projeto ainda sera refatorado :construction:

## Técnologias usadas

Back-end:
> Desenvolvido usando: NodeJS , JavaScript MySQL, Sequelize, Express, jsonwebtoken 


## Instalando Dependências
  - Lembre-se de parar o mysql se estiver usando localmente na porta padrão (3306), ou adapte, caso queria fazer uso da aplicação em containers
  - Esses serviços irão inicializar um container chamado blogs_api e outro chamado blogs_api_db
```bash
docker-compose up -d
``` 
```bash
docker exec -it blogs_api bash
``` 
```bash
npm install
``` 

## Executando aplicação

  ```
  npm start
  ```
