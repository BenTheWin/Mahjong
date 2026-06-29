(function () {
  document.body.insertAdjacentHTML('afterbegin',
    '<nav class="nav">' +
      '<a class="nav__logo" href="index.html">' +
        '<img src="Images/NavBarMahjongTempLogo-removebg-preview.png" alt="Mahjong Social at Solara">' +
      '</a>' +
      '<ul class="nav__links">' +
        '<li><a href="booking.html">Booking</a></li>' +
        '<li><a href="location.html">Location</a></li>' +
        '<li><a href="about.html">About</a></li>' +
        '<li><a href="travel-tiles.html">Travel &amp; Tiles</a></li>' +
        '<li><a href="faq.html">FAQ</a></li>' +
        '<li><a href="contact.html">Contact</a></li>' +
      '</ul>' +
    '</nav>'
  );

  var current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach(function (link) {
    if (link.getAttribute('href') === current) link.setAttribute('aria-current', 'page');
  });

  var favicon = document.createElement('link');
  favicon.rel = 'icon';
  favicon.href = 'Images/piece.svg';
  favicon.type = 'image/svg+xml';
  document.head.appendChild(favicon);
})();
