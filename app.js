/* QuantumBrowser — Web Sitesi · Davranış */
(function () {
  'use strict';

  // Mobil menü
  var burger = document.getElementById('hamburger');
  var mobile = document.getElementById('mobile-menu');
  if (burger && mobile) {
    burger.addEventListener('click', function () {
      mobile.classList.toggle('open');
      burger.setAttribute('aria-expanded', mobile.classList.contains('open') ? 'true' : 'false');
    });
    mobile.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') mobile.classList.remove('open');
    });
  }

  // SHA256 kopyala
  var copyBtn = document.getElementById('copy-sha');
  var shaText = document.getElementById('sha-text');
  if (copyBtn && shaText && navigator.clipboard) {
    copyBtn.addEventListener('click', function () {
      navigator.clipboard.writeText(shaText.textContent.trim()).then(function () {
        copyBtn.textContent = 'Kopyalandı!';
        setTimeout(function () { copyBtn.textContent = 'Kopyala'; }, 1800);
      });
    });
  }

  // Gerçek ekran görüntüsü bırakılırsa hero otomatik yükselir (kullanıcı varliklar/ekran-goruntusu.png ekler)
  var heroImg = document.getElementById('hero-shot');
  var heroMock = document.getElementById('hero-mock');
  if (heroImg && heroMock) {
    heroImg.addEventListener('error', function () {
      heroImg.style.display = 'none';
      heroMock.style.display = 'block';
    });
    heroImg.addEventListener('load', function () {
      if (heroImg.naturalWidth > 0) {
        heroImg.style.display = 'block';
        heroMock.style.display = 'none';
      }
    });
  }

  // Footer yılı
  var y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
})();
