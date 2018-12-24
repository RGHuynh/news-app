const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors({origin: true}));

app.get('/', (req, resp, next) => {
    resp.send('Hello World');
});

console.log('you are now in port 4000');

app.listen(PORT);

