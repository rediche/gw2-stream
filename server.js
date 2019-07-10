const app = require('express')();
const port = process.env.PORT || 3000;

const routes = require('./api/routes');

app.use('/', routes);

app.listen(port, () => console.log("Listening on port:", port));