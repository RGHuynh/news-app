const axios = require('axios');
require('dotenv').config();

let service = {
    getNews: getNews,
    setParams: setParams,
    setURL: setURL
}

function getNews(params) {
    return axios.get("https://newsapi.org/v2/everything?" + params);
}

function setParams(req) {
    let params = {
        q: '',
        from: '',
        sortBY: '',
        apiKey: process.env.NEWS_API
    };

    for(let param in params) {
        params[param] = req[param];
    }
    return params;
}

function setURL(params) {
    let url = "https://newsapi.org/v2/everything?";
    let paramaters = [];
    for(let key in params) {    
        paramaters.push(key + "=" + params[key])
        if(key != "apiKey") {
            paramaters.push("&");
        }
    }
    let paramaterString = paramaters.join('')
    return (url + paramaterString);
}

module.exports = service;