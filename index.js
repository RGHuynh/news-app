const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({origin: true}));

app.get('/', (req, resp, next) => {
    resp.send('Hello World');
});

app.get('/news', (req, resp, next) => {
    resp.send('news api')
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Mixing it up on port ${PORT}`);
});

