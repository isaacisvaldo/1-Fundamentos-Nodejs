import http from 'http';

const server = http.createServer((request, response)=>{
return response.end("Primeira Aula de Ignite");
})
server.listen(3333)