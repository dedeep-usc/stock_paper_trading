const http = require('http');
const app = require('./app');

const port = process.env.PORT || 9080;

const server = http.createServer(app);

server.listen(port);

// app.listen(port, () => {
//     console.log(`Server listening on port ${port}...`);
// });