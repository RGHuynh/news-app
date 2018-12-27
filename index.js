const express = require('express');
const cors = require('cors');
const app = express();
const controllers = require('./server/controllers');
const path = require('path');

app.use(cors({origin: true}));

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, resp, next) => {
    resp.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.get('/news', async (req, resp, next) => {
    let result = await controllers.news.getNews(req.query);
    resp.json(result.data); 
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Mixing it up on port ${PORT}`);
});

