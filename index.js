const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({origin: true}));

app.get('/', (req, resp, next) => {
    resp.send('Hello World');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Mixing it up on port ${PORT}`);
});

