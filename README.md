# Net Flow — netflw.com

Endüstriyel debimetre, seviye ve proses cihazları web sitesi.
Tamamen statik (HTML/CSS/JS) — herhangi bir hosting'e yüklenebilir.

## Dosyalar
- `index.html` — Ana sayfa
- `products.html` — Ürün kataloğu (19 ürün, filtreli)
- `product.html` — Genel ürün sayfası (`product.html?p=NT-MLI` gibi açılır)
- `electromagnetic-flow-meter.html` — Amiral gemisi ürün sayfası (3D tur)
- `quote-builder.html` — **ADMIN: Teklif hazırlama paneli**
- `assets/` — CSS, JS, çeviriler, ürün verisi

## Yayına alma
1. `netflw.com` domainini al.
2. Tüm dosyaları bir hosting'e yükle (Netlify / Vercel / Cloudflare Pages ücretsiz; ya da cPanel `public_html`).
3. Domaini hosting'e bağla. Site yayında.

İsteğe bağlı: `info@netflw.com` maili için Zoho Mail (ücretsiz) veya Google Workspace.

---

## 🔑 ADMIN PANELİNE GİRİŞ (Teklif Hazırlama)

Admin paneli **gizli bir sayfadır** — ana menüde linki yoktur, sadece adresi bilen girer.

**Adres:**
```
https://netflw.com/quote-builder.html
```
(Yerel test için: `quote-builder.html` dosyasını tarayıcıda aç.)

### Nasıl kullanılır
1. **Soldan ürün seç** → "+" ile teklife ekle.
2. Her ürün için **konfigürasyon** seç (çap, astar, elektrot, çıkış…).
3. **Adet ve birim fiyatı gir** (mavi kutular — senin alanın).
4. Müşteri bilgisi + teklif no/tarih otomatik gelir, düzenlenebilir.
5. Sağ üstten **dil** (EN/TR/AR/RU) ve **para birimi** (USD/EUR/TRY) seç.
6. **"Preview & Print"** → profesyonel teklif çıkar → **Print / Save PDF**.
7. **"Save Draft"** → çalışman tarayıcıda saklanır.

> Not: TÜRKAK sadece elektromanyetik debimetrede; diğer ürünlerde otomatik "Yerli Malı" rozeti çıkar.

### Güvenlik önerisi
Panel herkese açık adreste durur. Gerçek koruma istersen hosting'de bu sayfaya **şifre** koy:
- **Netlify:** Site settings → Visitor access → Password protection, ya da `quote-builder.html` için bir `_headers` / Netlify Identity kuralı.
- **cPanel:** "Directory Privacy" ile `quote-builder.html`'i ayrı klasöre alıp şifrele.
- **Cloudflare:** Access (Zero Trust) ile sadece senin mailine izin ver.

---

© 2026 Net Flow · netflw.com · VFA Elektronik ihracat markası
