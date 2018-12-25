const newsService = require('../helpers/newsService');

exports.getNews = async function(req, res, next) {
    try {
        let params = newsService.setParams(req);
        let urlParams = newsService.setURL(params);
        let result = await newsService.getNewsArticle(urlParams);
        return result
    } catch(error) {
        return error;
    }
};