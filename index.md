---
layout: page
title: Infomofo
heads:
  - heads/head1.jpg
  - heads/head2.jpg
  - heads/head3.jpg
  - heads/head4.jpg
  - heads/head5.jpg
  - heads/head6.jpg
  - heads/head7.png
tops:
  - tops/shirt1.jpg
  - tops/shirt2.jpg
  - tops/shirt3.jpg
  - tops/shirt4.jpg
  - tops/shirt5.jpg
  - tops/shirt6.jpg
  - tops/shirt7.jpg
  - tops/shirt8.jpg
  - tops/shirt9.jpg
  - tops/shirt10.jpg
  - tops/shirt11.png
---
<div class="main">
<div id="heads" class="siemaSlider">
{% for head in page.heads %}
<img src="{{ head }}" class="siemaSlider--slide"/>
{% endfor %}
</div>

<div id="tops" class="siemaSlider">
{% for top in page.tops %}
<img src="{{ top }}" class="siemaSlider--slide" />
{% endfor %}
</div>
</div>

<button onClick="shuffle()">randomize</button>

<script>
  var heads = new Flickity('#heads', {
    wrapAround: true,
    autoPlay: false,
  });

  var tops = new Flickity('#tops', {
    wrapAround: true,
    autoPlay: false,
  });

  var randomIndex = function(length) {
    var random = Math.random();
    var mult = random * length;
    return Math.floor(mult);
  };

  var shuffling = false;

  function shuffle() {
    var randomHead = randomIndex(heads.cells.length);
    shuffling = true;
    heads.select(randomHead);
    tops.select(randomIndex(tops.cells.length), function() {
      console.log(tops.selectedIndex);
      shuffling = false;
    });
  };

  window.setTimeout(function() {
      shuffle();
    }, 2000);
</script>