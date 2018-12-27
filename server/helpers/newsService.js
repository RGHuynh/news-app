const axios = require('axios');
require('dotenv').config();

let service = {
    getNewsArticle: getNewsArticle,
    setParams: setParams,
    setURL: setURL
}

/////

function getNewsArticle(params) {
    return (axios.get("https://newsapi.org/v2/everything?" + params)
        .then(response => {
            return response;
        }))
}

function setParams(req) {
    let params = {
        q: '',
        from: '',
        sortBy: '',
        apiKey: process.env.NEWS_API
    };
    for(let param in params) {
        params[param] = req[param];
    }
    return params;
}

function setURL(params) {
    let paramaters = [];
    for(let key in params) {    
        paramaters.push(key + "=" + params[key])
        if(key != "apiKey") {
            paramaters.push("&");
        }
    }
    let paramaterString = paramaters.join('')
    return (paramaterString);
}

module.exports = service;