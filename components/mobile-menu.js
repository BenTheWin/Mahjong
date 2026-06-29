(function () {
  var nav = document.querySelector('.nav');
  if (!nav) return;

  // --- Hamburger button ---
  var btn = document.createElement('button');
  btn.className = 'nav__hamburger';
  btn.setAttribute('aria-label', 'Open navigation menu');
  btn.setAttribute('aria-expanded', 'false');
  btn.innerHTML =
    '<span></span><span></span><span></span>';
  nav.appendChild(btn);

  // --- Overlay ---
  var overlay = document.createElement('div');
  overlay.className = 'mobile-menu';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Navigation menu');
  overlay.setAttribute('aria-hidden', 'true');
  overlay.innerHTML =
    '<div class="mobile-menu__header">' +
      '<img class="mobile-menu__logo" src="Images/circle.svg" alt="Mahjong Social at Solara">' +
      '<button class="mobile-menu__close" aria-label="Close navigation menu">&times;</button>' +
    '</div>' +
    '<nav class="mobile-menu__nav">' +
      '<a href="index.html">Home</a>' +
      '<a href="booking.html">Booking</a>' +
      '<a href="location.html">Location</a>' +
      '<a href="about.html">About</a>' +
      '<a href="faq.html">FAQ</a>' +
      '<a href="contact.html">Contact</a>' +
      '<a href="travel-tiles.html">Tiles &amp; Travel</a>' +
    '</nav>' +
    '';

  document.body.appendChild(overlay);

  // Mark active link
  var current = window.location.pathname.split('/').pop() || 'index.html';
  overlay.querySelectorAll('.mobile-menu__nav a').forEach(function (link) {
    if (link.getAttribute('href') === current) {
      link.setAttribute('aria-current', 'page');
    }
  });

  function openMenu() {
    overlay.classList.add('mobile-menu--open');
    overlay.setAttribute('aria-hidden', 'false');
    btn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    overlay.classList.remove('mobile-menu--open');
    overlay.setAttribute('aria-hidden', 'true');
    btn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', openMenu);
  overlay.querySelector('.mobile-menu__close').addEventListener('click', closeMenu);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('mobile-menu--open')) closeMenu();
  });
})();
