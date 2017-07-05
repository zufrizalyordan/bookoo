/**
 * ScraperController
 *
 * @description :: Server-side logic for managing scrapers
 *
 */
var Xray = require('x-ray');
var x = Xray();

module.exports = {
  search: (req, res) => {
    let appTitle = 'Search Results for ' + req.param('keyword');

    // Results.findAll().done(function(err, results) {
    //     res.view({
    //         results: results
    //     });
    // });

    return res.view({
      title: appTitle,
      results: sails.controllers.scraper.all(req.param('keyword')),
    });

  },
  all: (keyword) => {
    keyword = keyword.split(' ').join('+');
    const targetUrl = 'https://www.belbuk.com/hasil_pencarian.php?q='+ keyword;

    x(targetUrl, 'a', [{
      title: x('.listing'),
      href: x('.listing @href')
    }])(function(err, obj) {
      // obj
      console.log(obj);
    /*
      {
        main: 'Google',
        image: 'Google Images'
      }
    */
    })

    return {
      sites: 'belbuk',
      data: []
    }
  }
};