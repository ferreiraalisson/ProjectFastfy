// passamos o app como parametro para ter a importação do fastify
export default async function booksRoutes(app){
//Schemas simples de validação (JSON Schema)

const bookBodySchema = {
    type: 'object',
    required: ['title', 'author'],
    properties: {
        title: { type: 'string', minLength: 1},
        author: { type: 'string', minLength: 1}
    }
};

const idParamSchema = {
    type: 'object',
    required: ['id'],
    properties: {
        id:{ type: 'string', pattern: '^[0-9]+$' }
    }
};

//CREATE
app.post('/books', { schema: { body: bookBodySchema}}, async (req, reply) => {
    const {title, author } = req.body;
    const book = await app.prisma.book.create({data: {title, author}});
    return reply.code(201). send(book);
});

//READ
app.get('/books',async (req, reply)=> {
    const books = await app.prisma.book.findMany({
        orderBy: {id: 'asc'}
    });
    return reply.send(books);
});

//UPDATE

app.put('/books/:id', { schema: { body: bookBodySchema, params: idParamSchema}}, async (req, reply) => {
    const {title, author } = req.body;
    let { id } = req.params;

    const book = await app.prisma.book.update({
        where: { id: Number(id) },
        data: { title, author }
    });

    return reply.send(book);
})

// DELETE

app.delete('/books/:id', {schema: { body: bookBodySchema, params: idParamSchema}}, async (req, reply) => {
    let { id } = req.params;
    const book = await app.prisma.book.delete({
        where: {id: Number(id)}
    });
    return reply.send(book)
})

}