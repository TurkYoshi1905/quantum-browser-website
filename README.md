# QuantumBrowser — Web Sitesi

QuantumBrowser'ın resmi tanıtım sitesi. Saf statik HTML/CSS/JS — framework yok,
derleme adımı yok, izleme yok. Türkçe (`/`) ve İngilizce (`/en/`) sürümleri içerir.

- **Canlı adres:** https://quantum-browser-website.vercel.app
- **Kaynak kod (tarayıcı):** https://github.com/TurkYoshi1905/quantum-browser
- **Yayın:** Vercel (GitHub reposu içe aktarılır)

## Klasör yapısı

```
QuantumBrowser Web Sitesi/
├── index.html              # Ana sayfa (TR)
├── en/index.html           # İngilizce sürüm
├── stil.css                # Tasarım sistemi (tek dosya)
├── app.js                  # Tema/menü/kopyalama davranışı (vanilla JS)
├── 404.html                # Kayıp sayfa (TR+EN)
├── vercel.json             # Vercel: cleanUrls + güvenlik başlıkları + cache
├── manifest.webmanifest    # PWA manifest
├── robots.txt · sitemap.xml
├── release notları bu depoda DEĞİL — kaynak: ../release-notes/  (tarayıcı reposu)
└── varliklar/
    ├── logo.png            # Siyah Q monogram (kaynak: quantum-browser.png)
    └── ekran-goruntusu.png # (OPSİYONEL) Gerçek ekran görüntüsü — aşağıya bakın
```

## Vercel'de yayınlama (tek sefer)

1. Bu klasörü **yeni bir GitHub reposuna** yükleyin (ör. `TurkYoshi1905/quantum-browser-website`).
2. [vercel.com](https://vercel.com) → **Add New → Project** → repoyu seçin.
3. Framework Preset otomatik **Other** çıkar — hiçbir build komutu gerektirmez.
   - Build Command: *(boş)* · Output Directory: *(boş)* · Install Command: *(boş)*
4. **Deploy** — site ~40 saniyede yayında; `vercel.json` zaten yapılandırıldı
   (temiz URL'ler, güvenlik başlıkları, immutable varlık cache'i).
5. 404 hatası almayın diye: `cleanUrls: true` açık; `/en/` derin linkleri sorunsuz
   (Vercel statik dosya arar, `en/index.html` mevcut).
6. Özel alan adı eklerseniz (`quantumbrowser.com` gibi):
   - `index.html` ve `en/index.html` içindeki `quantum-browser-website.vercel.app`
     geçen tüm `canonical / og:url / hreflang / sitemap.xml / robots.txt` adreslerini
     yeni alan adınızla değiştirin (10 dakikalık iş).
7. Favicon ve OG görsel aynı dosyadan (`logo.png`) beslenir; ekstra ayar gerekmez.

## Gerçek ekran görüntüsünü ekleme (hero)

Sitenin hero'su şu an CSS ile çizilmiş bir pencere kompoziti gösterir.
Hazır olunca:

1. Tarayıcıyı açın → `Ctrl+Shift+S` (ya da Print Screen) ile yakalayın.
2. Dosyayı **`varliklar/ekran-goruntusu.png`** adıyla kaydedin.
3. Push — hero otomatik olarak gerçek görüntüye döner (app.js hata yakalayınca
   yedekten devralır; HTML'e dokunmanıza gerek yok).
4. Önerilen boyut: 1568×1010 civarı, karanlık tema + Türkçe UI.

## Sürüm notlarını güncelleme

- **Kanonik kaynak:** tarayıcı reposundaki `release-notes/<sürüm>.md`.
- Her sürümde: yeni not dosyasını yazın → CI, release gövdesine otomatik basar →
  bu sitedeki "Güncelleme Notları" bölümündeki `<details>` bloğuna aynı içeriği ekleyin
  (accordion yapısı hazır; kopyala-yapıştır yeterli).
- SHA256 kutusunu her release'te güncelleyin (CI `SHA256SUMS.txt` de üretiyor —
  indirilen dosyanın hash'ini oradan alın).

## Gizlilik taahhüdü

Bu site **hiçbir veri toplamaz**: çerez yok, analitik yok, CDN fontu yok,
üçüncü taraf script yok. Tasarım gereği QuantumBrowser'ın "sıfır telemetri"
vaadiyle bire bir tutarlıdır.

## Dosyalar değişse bile güvenli güncelleme

- `stil.css` → tüm sayfalar kırılmaz (tek dosya).
- `app.js` → progressive enhancement; JS kapalı olsa bile sayfa çalışır.
- `404.html` → Vercel otomatik sunar.
