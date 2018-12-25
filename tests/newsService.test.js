const mocha = require('mocha');
const chai = require('chai');
const newsService = require('../server/helpers/newsService');
const expect = chai.expect
require('dotenv').config();

describe('#setURL', () => {
    it('should return an url with paramaterString', () => {
        let params = {
            q: 'bitcoin',
            from: '2018-11-24',
            sortBy: 'publishedAt',
            apiKey: process.env.NEWS_API
        }
        expect(newsService.setURL(params)).to.be.eql("https://newsapi.org/v2/everything?q=bitcoin&from=2018-11-24&sortBy=publishedAt&apiKey=" + process.env.NEWS_API);
    });
})