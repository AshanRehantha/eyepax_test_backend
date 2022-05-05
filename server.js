const http = require('http');
const server = require('./app');
const { mongoConnect } = require('./services/mongo');
require('dotenv/config');

const server_port = process.env.TEST_SERVER_PORT;
const servers = http.createServer(server);

async function startServer(){
    await mongoConnect();
    servers.listen(server_port, () => {
        console.log(`Port Listening on ${server_port}`)
    });
}

startServer()