# 🚀 API Node.js com Typescript, POO e SOLID  
[![NPM](https://img.shields.io/npm/l/react)]([(https://github.com/PeusodaTI/autenticacao-jwt/blob/main/LICENSE)]) 

# Sobre o projeto

https://solid-api-be2r.onrender.com/docs-api/

SOLID-API é uma aplicação desenvolvida com o objetivo de aprimorar meus conhecimentos em desenvolvimento de APIs RESTful, além de praticar os princípios do SOLID, Design Patterns e Clean Architecture.

A aplicação consiste em uma ferramenta simples para realizar operações básicas de banco de dados: cadastro, leitura, atualização e exclusão (CRUD).

🏗️ Arquitetura baseada em Casos de Uso

Durante o desenvolvimento, optei por uma arquitetura baseada em Casos de Uso, onde a lógica de negócio é centralizada em classes específicas para cada ação da aplicação. Essa abordagem torna o código mais modular e organizado, facilitando a reutilização, testes e manutenção da API.

🔹 Aplicação dos Princípios SOLID

Ao longo do projeto, percebi na prática a importância dos princípios SOLID, principalmente:

S — Single Responsibility Principle (Princípio da Responsabilidade Única): Cada classe tem uma única responsabilidade, evitando acoplamentos desnecessários e facilitando a manutenção do código.

D — Dependency Inversion Principle (Princípio da Inversão da Dependência): A aplicação utiliza injeção de dependências, tornando os componentes menos dependentes de implementações concretas e mais flexíveis a mudanças.

📄 Documentação e Testes

Para facilitar a interação com a API, a documentação foi gerada automaticamente com Swagger UI, permitindo que qualquer usuário teste os endpoints de forma intuitiva e sem a necessidade de ferramentas externas.

## Layout Swagger
![Swagger](https://github.com/PeusodaTI/CRUD-SOLID-API/blob/main/assets/swagger.png)

# 📌 Tecnologias utilizadas 
## Back end
- **Node.js** + **Express** 🚀  
- **TypeScript** ⏳  
- **Prisma ORM** 🗄️  
- **Zod** (validação de dados) 🛡️  
- **Docker** 🐳  

## UI
- **Swagger** (documentação automática) 📖  

## Implantação em produção
- **Render** (deploy da API) 🌍
- **PostgreSQL** / **MySQL** 🏛️  

# 📂 Estrutura do Projeto

```plaintext
📦 SOLID-API
 ┣ 📂 src
 ┃ ┣ 📂 config             # Database e SwaggerUI
 ┃ ┣ 📂 entities           # Entidades da regra de negócio
 ┃ ┣ 📂 errors             # Organização dos erros da API
 ┃ ┣ 📂 repositories       # Camada de acesso a dados
 ┃ ┣ 📂 routes             # Rotas de acesso a API
 ┃ ┣ 📂 useCase            # Casos de uso (regras de negócio)
 ┃ ┣ 📜 app.ts             # Configuração da API
 ┃ ┣ 📜 server.ts          # Ponto de entrada da API
 ┣ 📂 prisma               # Migrations e esquema do banco
 ┣ 📜 .env.example         # Arquivo exemplo .env
 ┣ 📜 docker-compose.yml   # Subida do banco com Docker
 ┣ 📜 README.md            # Documentação do projeto
 ┣ 📜 package.json         # Dependências e scripts
 ┗ 📜 tsconfig.json        # Configuração do TypeScript

# Como executar o projeto

## Back end
Pré-requisitos: Docker, Node v20.16.0, Npm v10.8.1 

```bash
# clonar repositório
git clone https://github.com/PeusodaTI/CRUD-SOLID-API.git

# entrar na pasta do projeto back end
cd crud-solid-api

# instalar dependências
npm install

# iniciar o docker para criação do container para utilização de uma instância do banco de dados PostgreSql e da API
docker compose up --build

# executar as migrations
obs: é necessário criar o arquivo .env e copiar as informações de configurações do DB dentro do arquivo .env.example para o arquivo .env. após isso, execute o comando:

# rode as migrations
npx prisma migrate dev 

# executar o projeto
npm run dev

# utilizar interface do Prisma para acompanhamento das persistências de dados
npx prisma studio

# acessar a interface da API usando o SwaggerUI
http://localhost:3333/docs-api

```

📬 Contribuição

Sinta-se à vontade para abrir issues e pull requests para melhorias no projeto.

# Autor

Pedro Henrique Sousa Nascimento

https://www.linkedin.com/in/peusodati

