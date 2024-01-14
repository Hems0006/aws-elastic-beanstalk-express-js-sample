const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hey, I am Hemanth Singh. This is the changes made and checking out the pipeline whether it is working fine.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
