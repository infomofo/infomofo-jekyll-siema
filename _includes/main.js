/** Initialize Carousels */
var heads = new Flickity('#heads', {
  autoPlay: false,
  imagesLoaded: true,
  pageDots: false,
  prevNextButtons: false,
  setGallerySize: false,
  wrapAround: true,
});
var tops = new Flickity('#tops', {
  autoPlay: false,
  imagesLoaded: true,
  pageDots: false,
  prevNextButtons: false,
  setGallerySize: false,
  wrapAround: true,
});

var randomButton = document.querySelector('#randomButton');

var randomIndex = function(length) {
  var random = Math.random();
  var mult = random * length;
  return Math.floor(mult);
};

function shuffle() {
  randomButton.classList.add('fa-spin');
  randomButton.setAttribute('disabled', true);

  heads.selectCell(randomIndex(heads.cells.length));
  tops.selectCell(randomIndex(tops.cells.length));

  window.setTimeout(function() {
    randomButton.classList.remove('fa-spin');
    randomButton.removeAttribute('disabled');
  }, 800);
};

window.setTimeout(function() {
  shuffle();
}, 1000);