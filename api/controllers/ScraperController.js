/**
 * ScraperController
 *
 * @description :: Server-side logic for managing scrapers
 *
 */
var scraperMizanstore = require('../scraper/mizanstore');

module.exports = {
  search: (req, res) => {
    sails.controllers.scraper.init(req)

    let appTitle = 'Search Results for ' + req.param('keyword');
    return res.view({
      title: appTitle,
    });

  },
  init: (req, res) => {
    let keyword = req.param('keyword');
    keyword = keyword.split(' ').join('+');

    const io = sails.io;
    io.sockets.emit('searching', {
      message: 'searching sites...'
    });

    // scraper list
    scraperMizanstore.init(keyword, res);
  }
};