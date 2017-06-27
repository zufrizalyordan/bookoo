/**
 * PagesController
 *
 * @description :: Server-side logic for managing Pages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	home: (req, res) => {
    return res.view({title: 'Homepage'})
  }
};

