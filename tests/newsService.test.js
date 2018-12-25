const mocha = require('mocha');
const chai = require('chai');
const newsService = require('../server/helpers/newsService');
const chaiHttp = require('chai-http');
const expect = chai.expect;
require('dotenv').config();

chai.use(chaiHttp);

let params = {
    q: 'bitcoin',
    from: '2018-12-24',
    sortBy: 'publishedAt',
    apiKey: process.env.NEWS_API
};

describe('#setURL', () => {
    it('should return an url with paramaterString', () => {
        expect(newsService.setURL(params)).to.be.eql("q=bitcoin&from=2018-12-24&sortBy=publishedAt&apiKey=" + process.env.NEWS_API);
    });
});

describe('#setParams', () => {
    let req = {
        q: 'bitcoin',
        from: '2018-12-24',
        sortBy: 'publishedAt',
        fake: 'tst',
        apiKey: process.env.NEWS_API
    };
    
    it('should return an object', () => {
        expect(newsService.setParams(req)).to.be.eql(params);
    });
});

describe('#getNews', () => {
    it('should return a status 200', async () => {
        const paramaters = newsService.setParams(params);
        const url = newsService.setURL(paramaters);
        const result = await newsService.getNews(url);
        expect(result.status).to.be.eq(200)
    });
});