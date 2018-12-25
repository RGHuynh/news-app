const mocha = require('mocha');
const chai = require('chai');
const newsService = require('../server/helpers/newsService');
const expect = chai.expect
require('dotenv').config();

let params = {
    q: 'bitcoin',
    from: '2018-11-24',
    sortBy: 'publishedAt',
    apiKey: process.env.NEWS_API
};

describe('#setURL', () => {
    it('should return an url with paramaterString', () => {
        expect(newsService.setURL(params)).to.be.eql("https://newsapi.org/v2/everything?q=bitcoin&from=2018-11-24&sortBy=publishedAt&apiKey=" + process.env.NEWS_API);
    });
});

describe('#setParams', () => {
    let req = {
        q: 'bitcoin',
        from: '2018-11-24',
        sortBy: 'publishedAt',
        fake: 'tst',
        apiKey: process.env.NEWS_API
    };
    
    it('should return an object', () => {
        expect(newsService.setParams(req)).to.be.eql(params)
    });
});