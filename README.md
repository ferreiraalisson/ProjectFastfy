Projeto Fastify

Aula 1 
Comando no cmd para configurar o projeto

// inicializar um projeto node aceitando todas as configurações
- npm init -y

// instala os pacotes fastify (framework) e prisma (ORM)
- npm i fastify @prisma/client

// instala 3 pacotes devDependecies (-D), nodemon (reinicia automaticamente o node) e vitest (teste moderno) 
- npm i -D prisma nodemon vitest

// sqlite datasource
- npx prisma init --datasource-provider sqlite

// migração
- npx prisma migrate dev --name init

// generate
- npx prisma generate

//executa o prisma
- npx prisma studio

- No código
- Edição do package-json
- alteração no schema.prisma para criar modelos do banco 
- criação de arquivos routes, server, db e app

//executar o projeto
- npm run dev
