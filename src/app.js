import Fastify from "fastify";
import { prisma } from './db.js';
import booksRoutes from "./routes/books.js";

export function buildApp(){

    //looger -> logs automatizados no terminal
    const app = Fastify({ logger: true });

    // Adicionando propriedades disponível no Fastify
    app.decorate('prisma', prisma);

    // registro de rotas
    app.register(booksRoutes);
    
    // Fecha o prisma ao encerrar o app - tipo o close() do Java
    app.addHook('onClose', async (instance) => {
         await instance.prisma.$disconnect();
    });

    return app;
}
