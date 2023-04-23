import http from 'http';

const users=[]
const server = http.createServer((request, response)=>{
const {method, url} = request
console.log(method,url)
if(method == 'GET' && url == '/users'){
return response
.setHeader('Content-Type', 'application/json')
.end(JSON.stringify(users));
}
if(method === 'POST' && url === '/users'){
    users.push({
        id:1,
        nome:"Isaac Isvaldo",
        email:"isaac.isvaldo@gmail.com"
    })
 return response.writeHead(201).end();
}
return response.writeHead(404).end("Paginas Não Encontrada");
})

server.listen(3333)