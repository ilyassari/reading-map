# Goodreads Kitap Haritanızı 45 Dakikada Oluşturun

Bu rehber, Goodreads'teki kitaplarınızı görsel bir harita olarak web sitenize dönüştürmeniz için hazırlanmıştır. Hiçbir teknik bilgi gerektirmez!

---

## ⏱️ 30 Saniyede Ne Yapacağız?

1. **Hazır projeyi kopyalayacağız** (1 tık)
2. **Goodreads kitaplarınızı JSON'a çevireceğiz** (yapay zeka yapacak)
3. **Dosyayı GitHub'a yapıştıracağız** (kopyala-yapıştır)
4. **Ücretsiz yayınlayacağız** (2 tık)

**Hepsi bu.** Kod yazmak yok, terminal kullanmak yok.

---

## 👤 Bu Rehber Kimler İçin?

✅ Teknik bilgisi olmayanlar  
✅ Goodreads kullananlar  
✅ Kitaplarını haritada görmek isteyenler  
❌ Kod yazmak isteyenler  
❌ Backend / API öğrenmek isteyenler  

💻 **Gereksinim:** Bilgisayar (mobil telefondan yapılamaz)

---

## 📋 İhtiyacınız Olanlar

- Bir Goodreads hesabı (kitaplarınızın olduğu)
- Bir e-posta adresi (GitHub için)
- İnternet bağlantısı
- Yaklaşık 45 dakika - 1 saat zamanınız

**Maliyet:** Tamamen ücretsiz

---

## ✅ Başlamadan Önce Kontrol Edin

- [ ] Goodreads hesabımda en az 1 okuduğum kitap var
- [ ] Kullanacağım e-posta adresine erişimim var
- [ ] Bilgisayarda (Chrome/Firefox/Edge) çalışıyorum
- [ ] Yaklaşık 1 saat ayırabildim

❌ **Mobil telefondan yapmayı denemeyin** - bilgisayar gerekli!

---

## 🚀 Adım 1: GitHub Hesabı Oluşturun ⏱️ **5 dakika**

📍 **Bu adımda:**
- GitHub hesabı açacaksınız
- Web siteniz bu platformda ücretsiz yayınlanacak
- Hiçbir ödeme bilgisi istenmez

🚫 **Bu adımda YAPMANIZA GEREK YOK:**
- Kredi kartı bilgisi girmek
- Ücretli plan seçmek
- Teknik bilgi sahibi olmak

### 1.1: Hesap Açın

1. **GitHub'a gidin:** [github.com](https://github.com)
2. **"Sign up" (Kaydol)** butonuna tıklayın
3. **E-posta adresinizi** girin
4. **Güçlü bir şifre** oluşturun (en az 8 karakter)
5. **Kullanıcı adı seçin** (örnek: `john-doe`, `crazy-boy`, `sari-cizmeli-mehmet-aga`)
   - ⚠️ Bu isim site adresinizde görünecek: `kullaniciadi.github.io`
6. **E-posta doğrulamasını** tamamlayın (gelen kutunuza bakın)
7. **Ücretsiz planı** seçin

✅ Hesabınız hazır!

❌ **En sık yapılan hata:** Kullanıcı adına özel karakter koymak (sadece harf, rakam ve tire kullanın)

---

## 🍴 Adım 2: Projeyi Kopyalayın (Fork) ⏱️ **2 dakika**

📍 **Bu adımda:**
- GitHub hesabınız hazır
- Şimdi hazır projeyi kopyalayacaksınız
- Henüz dosya düzenleme yok, sadece kopyalama

🚫 **Bu adımda YAPMANIZA GEREK YOK:**
- Dosyaları indirmek
- Kod yazmak
- Ayar değiştirmek

### 2.1: Proje Sayfasına Gidin

1. Bu linke tıklayın: **[https://github.com/ilyassari/reading-map](https://github.com/ilyassari/reading-map)**

### 2.2: Fork Edin

1. Sayfanın **sağ üst köşesinde** "Fork" butonunu bulun
2. **"Fork"** butonuna tıklayın
3. Açılan sayfada:
   - Repository name (isim) olduğu gibi kalabilir: `reading-map`
   - "Copy the main branch only" kutucuğu işaretli kalsın
4. **"Create fork"** butonuna tıklayın

⏳ **Bekleyin...** (5-10 saniye sürer)

✅ Proje kopyalandı! Artık `github.com/KULLANICIADIN/reading-map` adresinde kendi kopyanız var.

❌ **En sık yapılan hata:** Repository adını değiştirmeye çalışmak (olduğu gibi bırakın)

---

## 📚 Adım 3: Goodreads'ten Kitaplarınızı İndirin ⏱️ **3 dakika**

📍 **Bu adımda:**
- Goodreads'teki kitaplarınızı dosya olarak alacaksınız
- Bu dosya CSV formatında olacak
- Bir sonraki adımda yapay zeka bunu kullanacak

### 3.1: Goodreads'e Giriş Yapın

1. [www.goodreads.com](https://www.goodreads.com) adresine gidin
2. Hesabınıza giriş yapın

### 3.2: Kitapları Dışa Aktarın

1. **Sağ üst köşedeki profil fotoğrafınıza** tıklayın
2. **"My Books"** (Kitaplarım) seçeneğine tıklayın
3. Sayfanın üstünde **"Import and export"** linkini bulun
4. **"Export Library"** butonuna tıklayın
5. Bir CSV dosyası inecek (örnek: `goodreads_library_export.csv`)
6. Dosyayı **Masaüstüne** veya kolay bulabileceğiniz bir yere kaydedin

✅ Kitap listeniz hazır!

### ✅ Bu Adımı Tamamladığınızı Nasıl Anlarsınız?

- ✓ Masaüstünüzde `goodreads_library_export.csv` dosyası var
- ✓ Dosyayı Excel/Not Defteri ile açtığınızda kitap listesini görüyorsunuz
- ✓ "Exclusive Shelf" sütununda "read" yazıyor

**İlerleyemiyorsanız:** Goodreads'e tekrar giriş yapın ve export butonunu bulun

---

## 📥 Adım 4: countries.json Dosyasını İndirin ⏱️ **1 dakika**

📍 **Bu adımda:**
- Ülke listesini indireceksiniz
- Yapay zeka bu listeyi kullanacak
- Dosyayı düzenlemenize gerek yok

### 4.1: Kendi Repository'nize Gidin

1. GitHub'da **kendi reading-map** repository'nize gidin
   - Adres: `https://github.com/KULLANICIADIN/reading-map`
2. `countries.json` dosyasına tıklayın

### 4.2: Dosyayı İndirin

1. Sağ üstteki **"Raw"** butonuna tıklayın
2. Açılan sayfada **Sağ tık → "Farklı Kaydet" / "Save As"** 
3. Dosyayı **Masaüstüne** kaydedin (isim: `countries.json`)

✅ Ülke listesi hazır!

---

## 🤖 Adım 5: CSV'yi JSON Formatına Dönüştürün ⏱️ **10-15 dakika**

📍 **Bu adımda:**
- Goodreads CSV dosyanız masaüstünde
- countries.json dosyası indirildi
- Şimdi yapay zeka bu dosyaları birleştirecek
- Hiçbir şey yazmanıza gerek yok, yapay zeka halleder

🚫 **Bu adımda YAPMANIZA GEREK YOK:**
- Kod yazmak
- JSON formatını bilmek
- Ülkeleri manuel eklemek (Claude halleder)
- Dosyayı düzenlemek

### 5.1: Claude'a Gidin

💡 **Not:** Bu rehberde Claude kullanıyoruz, ancak ChatGPT, Gemini gibi diğer yapay zeka araçlarını da kullanabilirsiniz. Talimatlar aynı şekilde çalışır.

1. [claude.ai](https://claude.ai) adresine gidin
2. Giriş yapın (veya ücretsiz hesap oluşturun)

### 5.2: Dosyaları Yükleyin

1. **Yeni bir sohbet** başlatın
2. **📎 (ataş) simgesine** tıklayın
3. **İki dosyayı birden** seçin:
   - `goodreads_library_export.csv` (Goodreads'ten indirdiğiniz dosya)
   - `countries.json` (Az önce indirdiğiniz dosya)

### 5.3: Dönüştürme Talimatını Verin

⚠️ **Bu adımda hata yapmanız mümkün değil.**  
Yanlış olursa dosyayı silip tekrar oluşturabilirsiniz. Rahat olun!

Aşağıdaki mesajı **kopyalayıp yapıştırın:**

```
Bu Goodreads CSV dosyasını JSON formatına dönüştür. 

SADECE "read" (okuduklarım) rafındaki kitapları al, diğerlerini görmezden gel. 

Her kitap için şu bilgileri çıkar:
- id (Book Id)
- title (kitap başlığı)
- author (yazar adı)
- year (okuma yılım, "Date Read" sütunundan, sadece yıl kısmı)
- country (yazarın ülkesi - countries.json dosyasındaki ülke isimlerini kullan)

countries.json dosyasına DOKUNMA, sadece referans olarak kullan.

Yazarın ülkesini sen bulacaksın; bulamazsan bana SOR. Emin olmadığın veya bulamadığın yazarların listesini çıkar, ben söyleyeceğim.

Çıktı formatı şöyle olsun:
[
  {
    "id": "12345",
    "title": "Kitap Adı",
    "author": "Yazar Adı",
    "year": 2024,
    "country": "Turkey"
  }
]

JSON dosyasını "books.json" adıyla oluştur.
```

### 5.4: Ülke Bilgilerini Tamamlayın

1. Claude size **bilmediği veya emin olmadığı yazarların listesini** gösterecek
2. Bu yazarlar için ülke bilgilerini **siz söyleyin** (örnek: "Orhan Pamuk - Turkey")
3. Bilmediğiniz yazarlar varsa **"bilmiyorum"** deyin, Claude araştırsın
4. Claude tüm bilgileri tamamlayıp `books.json` dosyasını oluşturacak

### 5.5: Dosyayı İndirin

1. **İndirme linkine** tıklayın
2. Dosyayı **Masaüstüne** kaydedin

✅ JSON dosyanız hazır!

💡 **İpucu:** Eğer bazı yazarların ülkesi yanlış çıktıysa, `books.json` dosyasını bir metin editörü ile açıp düzeltebilirsiniz. JSON dosyalarını düzenlemek için şu uygulamaları kullanabilirsiniz:
- **Windows:** [Notepad++](https://notepad-plus-plus.org/) (ücretsiz)
- **Mac & Linux:** [Visual Studio Code](https://code.visualstudio.com/) (ücretsiz)
- **Online:** [jsoneditoronline.org](https://jsoneditoronline.org/) (tarayıcıda açılır)

---

## 📝 Adım 6: Kitap Listenizi Ekleyin ⏱️ **3 dakika**

📍 **Bu adımda:**
- JSON dosyanız hazır
- Şimdi bunu GitHub'a yükleyeceğiz
- Sadece kopyala-yapıştır işlemi

### 6.1: books.json Dosyasını Bulun

1. Fork ettiğiniz projede (kendi hesabınızda) `books.json` dosyasına tıklayın

💡 **Direkt link:** `https://github.com/KULLANICIADI/reading-map/blob/main/books.json`  
(KULLANICIADI yerine kendi kullanıcı adınızı yazın)

### 6.2: Dosyayı Düzenleyin

1. **Sağ üstteki ✏️ (kalem) simgesine** tıklayın
2. **Tüm içeriği seçip silin** (Ctrl+A sonra Delete)
3. **Masaüstündeki `books.json` dosyasını açın** (Not Defteri veya herhangi bir metin editörü ile)
4. **Tüm içeriği kopyalayın** (Ctrl+A sonra Ctrl+C)
5. **GitHub'daki düzenleme ekranına yapıştırın** (Ctrl+V)

### 6.3: Değişiklikleri Kaydedin

1. Sayfanın **sağ üst köşesinde** yeşil "Commit changes..." butonunu bulun
2. Butona tıklayın
3. Açılan pencerede:
   - "Commit message" kısmına: `Kitap listemi ekledim` yazabilirsiniz
   - "Commit directly to the main branch" seçili kalsın
4. **"Commit changes"** butonuna tıklayın

✅ Kitaplarınız eklendi!

---

## 🌐 Adım 7: Sitenizi Yayınlayın (GitHub Pages) ⏱️ **5 dakika**

📍 **Bu adımda:**
- ✅ Kitap listeniz GitHub'da
- ✅ Dosyalar hazır
- 🎯 Şimdi sadece "yayınla" butonuna basacağız

🚫 **Bu adımda YAPMANIZA GEREK YOK:**
- Terminal kullanmak
- Kod yazmak
- Domain satın almak
- Ücret ödemek

❌ **En sık yapılan hatalar:**
- Branch olarak "gh-pages" aramak → **main kullanın**
- Repository adını değiştirmeye çalışmak → **gerek yok**
- Website alanını zorunlu sanmak → **opsiyonel**

---

### 7.1: Pages Ayarlarına Gidin

1. Fork ettiğiniz repository'ye gidin  
   (örnek: `https://github.com/KULLANICIADI/reading-map`)
2. Üst menüden **Settings** sekmesine tıklayın  
3. Sol menüden **Pages** seçeneğini bulun ve tıklayın

💡 **Direkt link:** `https://github.com/KULLANICIADI/reading-map/settings/pages`  
(KULLANICIADI yerine kendi kullanıcı adınızı yazın)

---

### 7.2: Yayın Kaynağını Seçin

1. **Build and deployment** bölümünde:
   - **Source:** `Deploy from a branch` seçin
2. **Branch:** açılır menüden `main` seçin
3. **Folder:** `/ (root)` olarak bırakın
4. **Save** butonuna tıklayın

💡 Bu ayar, `index.html` dosyasının bulunduğu yeri GitHub Pages'e söyler.  
Proje kök dizinde olduğu için `/ (root)` seçiyoruz.

---

### 7.3: Yayınlanmasını Bekleyin

1. Sayfayı **yenileyin** (F5 tuşuna basın)
2. 30 saniye – 2 dakika içinde üstte **yeşil bir kutu** belirecek
3. Şöyle bir mesaj göreceksiniz:

```
✅ Your site is live at https://KULLANICIADI.github.io/reading-map/
```

4. **Linke tıklayın** 🎉

⚠️ **İlk 1-2 dakika 404 hatası alırsanız bu normaldir!** Sayfayı yenilemeye devam edin.

---

### 🚀 Sitenizin Adresi

Siteniz her zaman şu formatta olur:

```
https://KULLANICIADI.github.io/reading-map/
```

`KULLANICIADI` yerine kendi GitHub kullanıcı adınızı yazın.

---

### 7.4 (İsteğe Bağlı): Repository Ana Sayfasına Link Ekleme

Bu adım zorunlu değildir, sadece kolay erişim içindir:

1. Repository ana sayfasına dönün  
2. Sağ taraftaki **About** bölümünde **⚙️ (dişli çark)** simgesine tıklayın  
3. **Website** alanına site adresinizi yapıştırın:  
   `https://KULLANICIADI.github.io/reading-map/`
4. **Save changes** butonuna tıklayın

✅ Artık repository'nizin üst kısmında sitenizin linki görünecek!

---

🎉 **TEBRİKLER!** Siteniz artık yayında!

---

## 🟡 Normaldir, Endişelenmeyin

Bu durumları görürseniz **sorun yok**, normaldir:

✅ **İlk 1-2 dakika 404 hatası almak** → GitHub Pages yayını hazırlıyor  
✅ **Bazı kapak resimlerinin görünmemesi** → Goodreads bazı resimleri korur  
✅ **İlk açılışta sitenin geç yüklenmesi** → Harita ve veriler yükleniyor  
✅ **JSON dosyasında bazı null değerler** → Eksik bilgiler normal  
✅ **Ülke koordinatlarının tam olmaması** → Yaklaşık konumlar kullanılır

❌ Bu durumlarda PANIK YAPMAYIN, bunlar beklenen davranışlardır.

---

## 🎨 Sitenizi Özelleştirin (İsteğe Bağlı)

Sitenizin görünümünü, renklerini ve ayarlarını değiştirmek isterseniz:

1. Repository'nizde **`config.js`** dosyasına gidin
2. Bu dosyada sitenin tüm ayarları bulunur:
   - Site başlığı
   - Renk temaları
   - Harita ayarları
   - Görünüm tercihleri

💡 **Detaylı rehber için:** [Site Ayarları Nasıl Yapılır?](CONFIGURATION.md)

⚠️ **Önemli:** Ayarları değiştirirken dikkatli olun. Bir şey bozulursa, dosyayı eski haline geri döndürebilirsiniz.

---

## 🔄 Tasarım Güncellemelerini Alma (Yılda 1 Kez)

Proje sahibi zaman zaman tasarımı güncelleyebilir (örneğin siteye yeni bir tema ekler). Bu güncellemeleri almayabilirsiniz; ancak almak isterseniz:

### Güncelleme Adımları

1. **Repository'nizin ana sayfasına** gidin
2. Sayfanın üstünde şöyle bir mesaj görürseniz:

```
This branch is X commits behind ilyassari:main
```

3. Yanındaki **"Sync fork"** butonuna tıklayın
4. **"Update branch"** butonuna tıklayın

### ⚠️ Eğer "Conflict" (Çakışma) Hatası Alırsanız

Bazen güncelleme yaparken "conflict" hatası alabilirsiniz. Panik yapmayın, çok basit!

**Sebep:** Hem siz `books.json`'u değiştirdiniz, hem de ana projede değişiklik olmuş.

**En Kolay Çözüm:**

1. GitHub size "Resolve conflicts" butonu gösterecek
2. Butona tıklayın
3. Açılan editörde conflict olan kısmı göreceksiniz
4. **Sağ üstte "Use mine" (Benimkini kullan)** butonuna tıklayın
5. **"Mark as resolved"** butonuna tıklayın
6. **"Commit merge"** butonuna tıklayın

✅ Güncelleme tamamlandı!

**Alternatif (Manuel) Çözüm:**

Eğer "Use mine" butonu yoksa, şunu yapın:

1. Conflict işaretlerini (`<<<<<<<`, `=======`, `>>>>>>>`) bulun
2. Sadece **kendi kitaplarınızı** bırakın, geri kalan her şeyi silin
3. "Mark as resolved" → "Commit merge"

**Not:** Bu işlemi **yılda 1 kez** yapmanız yeterli. Çoğu zaman conflict bile olmaz!

---

## 🆕 Yeni Kitap Ekleme

Goodreads'e yeni kitaplar eklediğinizde sitenizi güncellemek için iki yöntem var:

### Yöntem 1: Tarayıcıda Manuel Ekleme (En Hızlı) ⏱️ **2 dakika**

1. **GitHub'da `books.json` dosyasını** açın
2. **✏️ (kalem) simgesine** tıklayın
3. Dosyanın sonuna yeni kitabınızı ekleyin:

```json
  {
    "id": "12345",
    "title": "Yeni Kitap Adı",
    "author": "Yazar Adı",
    "year": 2026,
    "country": "Turkey"
  }
```

4. **Virgül (,) koymayı unutmayın** (son kitap hariç)
5. **"Commit changes"** butonuna tıklayın

⏱️ **1-2 dakika içinde** siteniz güncellenecek!

💡 **İpucu:** JSON formatını bozmamak için [jsoneditoronline.org](https://jsoneditoronline.org) üzerinden kontrol edebilirsiniz.

---

### Yöntem 2: Toplu Güncelleme (Birçok Kitap İçin) ⏱️ **10 dakika**

1. **Goodreads'ten yeni CSV** dosyasını indirin (Adım 3)
2. **Claude ile yeni JSON** oluşturun (Adım 5)
3. **GitHub'da `books.json` dosyasını** düzenleyin (Adım 6)
4. Eski içeriği silip yeni JSON'u yapıştırın
5. "Commit changes" butonuna tıklayın

⏱️ **2-5 dakika içinde** siteniz güncellenecek!

---

## 🔁 Ne Zaman Ne Yapmalıyım?

| Durum | Ne Yapmalısınız | Süre |
|-------|----------------|------|
| Yeni 1-2 kitap okudum | books.json'a manuel ekle | 2 dakika |
| 10+ kitap ekledim | CSV → JSON yeniden oluştur | 10 dakika |
| Site bozuk görünüyor | books.json formatını kontrol et | 5 dakika |
| Ana projede yeni özellik var | Sync fork yap | 2 dakika |
| Renkler değişsin | index.html düzenle | 5 dakika |

💡 **Öneri:** Ayda bir CSV'nizi yeniden oluşturun, en güncel hali olsun.

---

## 🎁 Sitenizi Paylaşın

Site adresiniz: `https://kullaniciadin.github.io/reading-map/`

Bu linki istediğiniz yerde paylaşabilirsiniz:
- Sosyal medya profillerinde
- E-posta imzanızda
- CV'nizde 🙃
- Arkadaşlarınızla

---

## 🆘 Sık Karşılaşılan Sorunlar

### 1. "Site 404 hatası veriyor" (Çok Normal!)

**Belirtiler:** Site açıldığında "404 Not Found" yazıyor

**Çözüm Adımları:**
1. ⏰ 5 dakika bekleyin (GitHub Pages yavaş olabilir)
2. 🔄 Tarayıcıyı yenileyin (Ctrl+Shift+R)
3. ⚙️ Settings > Pages'te "main" branch seçili mi kontrol edin
4. 📝 `books.json` dosyası repository'de var mı kontrol edin

**Hâlâ çözülmediyse:** GitHub'da "Issues" sekmesinden yardım isteyin

---

### 2. "Kitaplarım görünmüyor"

**Çözüm:**
- `books.json` dosyasının doğru yüklendiğini kontrol edin
- JSON formatının bozuk olup olmadığını Claude'a kontrol ettirin
- Tarayıcınızı tamamen kapatıp yeniden açın (Ctrl+Shift+R ile hard refresh)

---

### 3. "Kapak resimleri yüklenmiyor" (Normal Durum)

**Çözüm:**
- Bu normaldir. Goodreads'in bazı kapak resimleri harici sitelerde yüklenmeyebilir
- "Kapak Yok" placeholder göreceksiniz
- Sorun değil, site yine güzel görünür

---

### 4. "JSON dosyası oluşturulurken hata aldım"

**Belirtiler:** Claude dosya oluşturamıyor, hata veriyor

**Çözüm:**
- ✅ CSV dosyası 10MB'dan küçük mü? (kontrol edin)
- ✅ Dosya adında Türkçe karakter var mı? (İngilizce yapın)
- ✅ Farklı tarayıcı deneyin (Chrome öneriyoruz)
- Dosyayı Excel'de açıp kapattıysanız, yeniden Goodreads'ten indirin
- Claude'a dosyayı tekrar yükleyin

---

### 5. "Sync fork butonunu göremiyorum"

**Çözüm:**
- Ana projeye göre geride değilsiniz demektir
- Henüz güncelleme yok, her şey güncel

---

## 🆘 Yardım Nereden Bulabilirsiniz?

### 1. Bu Rehber
- Önce bu rehberi **baştan sona** okuyun
- Ctrl+F ile anahtar kelime arayın

### 2. Claude AI
- [claude.ai](https://claude.ai)'ye gidin
- **Bu rehberi** Claude'a verin
- "X adımında takıldım, ne yapmalıyım?" diye sorun

### 3. GitHub Issues
- Repository'de "Issues" sekmesi
- Yeni "Issue" açın
- Sorunuzu **detaylıca** anlatın (mümkünse ekran görüntüsü ekleyin)

### 4. Stack Overflow
- "GitHub Pages 404 error" gibi aramalar yapın
- İngilizce kaynak bol

❌ **Önemli:** Repository sahibi teknik destek **vermeyebilir**

---

## 📖 Terimler Sözlüğü

Teknik terimleri anlamıyorsanız:

- **Repository (Repo):** Projenizin GitHub'daki klasörü
- **Fork:** Bir projeyi kopyalama işlemi
- **Commit:** Değişiklikleri kaydetme
- **Branch:** Projenin farklı versiyonları (sizin için sadece "main" var)
- **JSON:** Bir veri formatı (endişelenmeyin, Claude halleder)
- **CSV:** Excel benzeri dosya formatı

💡 Bunları bilmeniz şart değil, sadece referans için!

---

## 📚 Ek Kaynaklar

- **GitHub Yardım:** [docs.github.com](https://docs.github.com)
- **Tasarım değişiklikleri için:** Claude'a "index.html dosyamda şu değişikliği yapabilir misin" diye sorun
- **Renk paletleri:** [coolors.co](https://coolors.co) veya [colorhunt.co](https://colorhunt.co)

---

## ✨ İpuçları

1. **Düzenli güncelleyin:** Ayda bir yeni kitaplarınızı ekleyin
2. **Sosyal medyada paylaşın:** Okuduğunuz kitapları Twitter/Instagram'da paylaşırken site linkinizi ekleyin
3. **Özelleştirin:** Renkleri, yazı tiplerini kendinize göre ayarlayın
4. **Yedekleyin:** `books.json` dosyanızın yedeğini bilgisayarınızda saklayın

---

## 📞 Destek

Takıldığınız bir yer olursa:

1. Bu kılavuzu baştan okuyun
2. "Sık Karşılaşılan Sorunlar" bölümüne bakın
3. Claude'a sorun: "GitHub Pages'te şu hatayı alıyorum, nasıl çözebilirim?"

---

**🎉 İyi okumalar ve keyifli kitap takibi! 📚✨**