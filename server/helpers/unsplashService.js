const axios = require('axios');
require('dotenv').config();

let service = {
    getImage: getImage
}

//////
function getImage() {
    let params = {
        query: 'text'
    }

    let headers = {
        "Accept-Versioin": "v1",
        "Authorization": "Client-ID " + process.env.APP_ACCESS_KEY
    }

    return (axios({
        method: 'get',
        url: 'https://api.unsplash.com/search/photos',
        params: params,
        headers: headers
    }).then(resp => { return resp.data.results }))
}

module.exports = service;
