var Xray = require('x-ray');
var x = Xray();

module.exports = {
  init: (keyword, res) => {
    const io = sails.io;
    const publisher = 'mizanstore.com';

    io.sockets.emit('search-site', {
      message: publisher
    });

    const target = 'https://www.mizanstore.com/search/result?k='+ keyword +'&search=+';

    console.log("Scraping: " + target);

    x(target, {
      title: ['title'],
      counter: x('.box-m-title em:nth-child(2)'),
      results: x('div.box-m-c1', [{
        title: '.detail-info .title a',
        author: '.detail-info .title em',
        href: '.detail-info .title a@href',
        priceOld: '.detail-price .harga_lama',
        priceNew: '.detail-price .harga_baru',
      }])
    })(function(err, obj) {
      if (!err) {
        const newObj = Object.assign({}, obj, {
          publisher: publisher
        });
        io.sockets.emit('search-results', {
          message: newObj
        });

        const mssg = 'search done';
        io.sockets.emit('search-done', {
          publisher: publisher,
          message: mssg
        });

        console.log(publisher + ' ' + mssg);
      }
    })

  },
}