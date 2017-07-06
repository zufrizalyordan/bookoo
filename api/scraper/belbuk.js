module.exports = {
  init: (keyword) => {
    const url = 'https://www.belbuk.com/hasil_pencarian.php?q=';
    const target = url + keyword;

    x(target, {
      title: ['title'],
      results: x('a.listing', [{
        title: '',
        href: '@href'
      }])
    })(function(err, obj) {
      console.log(obj);
    })
  }
}