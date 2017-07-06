let sites = [];

io.socket.on('search-site', function(obj){
  if ( sites.indexOf(obj.message) === -1) {
    sites.push(obj.message);
    const siteSearched = document.getElementsByClassName('sites');
    const sitesString = (sites.length > 1) ? sites.join() : obj.message;
    siteSearched[0].innerHTML += sitesString;
    console.log(sitesString);
  }
});

io.socket.on('search-results', function(obj) {
  // we can use the json obj to hydrate single page apps
  const items = obj.message
    .results.map(function(elem, idx) {
      const author = (elem.author === undefined) ?
        '': `by ${elem.author}`;
      return `<li><p>${elem.title} ${author}</p>
          <p>${obj.message.publisher}</p>
        </li>`
    })

  const searchResult = document
    .getElementsByClassName('search-result');
  // convert items to string before assignment to innerHTML
  searchResult[0].innerHTML = items.join("");
});

io.socket.on('search-done', function(obj){
  // console.log(obj.message);
});