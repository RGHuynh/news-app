const newsService = require('../helpers/newsService');
const unsplashService = require('../helpers/unsplashService');

exports.getNews = async function(req, res, next) {
    try {
        let result = {}
        let params = newsService.setParams(req);
        let urlParams = newsService.setURL(params);
        let news = await newsService.getNewsArticle(urlParams);
        let unsplash = await unsplashService.getImage(req);

        result["news"] = news;
        result["unsplash"] = unsplash;
        return result
    } catch(error) {
        return error;
    }
};