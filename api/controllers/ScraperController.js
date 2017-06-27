/**
 * ScraperController
 *
 * @description :: Server-side logic for managing scrapers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  search: (req, res) => {
    return res.view({title: 'Search Results'})
  }
};