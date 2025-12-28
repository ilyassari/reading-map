# Site Ayarları Rehberi (CONFIGURATION.md)

Bu rehber, `config.js` dosyasındaki ayarları değiştirerek sitenizi özelleştirmenizi sağlar.

---

## 📍 config.js Dosyasına Nasıl Ulaşırım?

1. GitHub'da kendi repository'nize gidin
2. Ana dizinde `config.js` dosyasına tıklayın
3. Sağ üstteki **✏️ (kalem)** simgesine tıklayın
4. Ayarları değiştirin
5. **"Commit changes"** butonuna tıklayın

💡 **Direkt link:** `https://github.com/KULLANICIADI/reading-map/blob/main/config.js`

---

## ⚙️ Ayar Kategorileri

### 1. 🎨 UI Settings (Arayüz Ayarları)

#### `showStats`
- **Ne işe yarar:** Sayfanın üstündeki istatistik çubuğunu gösterir/gizler
- **Varsayılan:** `true` (göster)
- **Seçenekler:** `true` veya `false`

**Örnek:**
```javascript
showStats: false,  // İstatistikleri gizle
```

#### `filters.inactiveOpacity`
- **Ne işe yarar:** Seçili olmayan yıl/yazar filtre butonlarının saydamlığını ayarlar
- **Varsayılan:** `0.4` (% 40 opak)
- **Seçenekler:** `0` (tamamen şeffaf) - `1` (tamamen opak)

**Örnek:**
```javascript
inactiveOpacity: 0.2  // Daha saydam yap
```

---

### 2. 🎨 Theme Settings (Tema Ayarları)

#### `theme.default`
- **Ne işe yarar:** Sayfanın genel görünüm temasını belirler
- **Varsayılan:** `'retro'`
- **Seçenekler:** 
  - `'default'` - Standart tema
  - `'retro'` - Retro/nostaljik tema
  - `'minimal'` - Minimalist tema

**Örnek:**
```javascript
default: 'minimal',  // Minimalist temayı kullan
```

#### `theme.showSwitcher`
- **Ne işe yarar:** Tema değiştirme butonunu (🎨) gösterir/gizler
- **Varsayılan:** `true` (göster)
- **Seçenekler:** `true` veya `false`

**Örnek:**
```javascript
showSwitcher: false,  // Tema değiştirme butonunu gizle
```

#### `theme.mode`
- **Ne işe yarar:** Açık veya koyu renk modunu seçer
- **Varsayılan:** `'dark'` (koyu mod)
- **Seçenekler:** 
  - `'light'` - Açık renk mod
  - `'dark'` - Koyu renk mod

**Örnek:**
```javascript
mode: 'light',  // Açık renk modu kullan
```

#### `theme.showModeToggle`
- **Ne işe yarar:** Koyu renk mod değiştirme butonunu (🌙) gösterir/gizler
- **Varsayılan:** `true` (göster)
- **Seçenekler:** `true` veya `false`

**Örnek:**
```javascript
showModeToggle: false,  // Koyu renk mod butonunu gizle
```

---

### 3. 🗺️ Map Settings (Harita Ayarları)

#### `map.initialCenter`
- **Ne işe yarar:** Haritanın başlangıç konumunu belirler
- **Varsayılan:** `[20, 0]` (Enlem, Boylam)
- **Format:** `[latitude, longitude]`

**Örnek:**
```javascript
initialCenter: [39, 35],  // Türkiye'yi merkezle
initialCenter: [40, -100],  // ABD'yi merkezle
initialCenter: [51, 10],  // Avrupa'yı merkezle
```

💡 **İpucu:** Koordinatları bulmak için [latlong.net](https://www.latlong.net/) kullanabilirsiniz.

#### `map.initialZoom`
- **Ne işe yarar:** Haritanın başlangıç yakınlaştırma seviyesini belirler
- **Varsayılan:** `2`
- **Seçenekler:** `1` (en uzak) - `18` (en yakın)

**Örnek:**
```javascript
initialZoom: 3,  // Biraz daha yakın başlat
initialZoom: 1,  // Tüm dünyayı göster
```

#### `map.markers.size`
- **Ne işe yarar:** Haritadaki işaretçilerin boyutunu ayarlar
- **Varsayılan:** `48` (piksel)
- **Seçenekler:** Herhangi bir sayı (önerilen: 24-72)

**Örnek:**
```javascript
size: 36,  // Daha küçük işaretçiler
size: 64,  // Daha büyük işaretçiler
```

#### `map.markers.bookIconMode`
- **Ne işe yarar:** Kitap ikonlarının nasıl gösterileceğini belirler
- **Varsayılan:** `'auto'`
- **Seçenekler:**
  - `'auto'` - Tek kitap → tek ikon, birden fazla → yığın ikon
  - `'always-stack'` - Her zaman yığın ikon göster
  - `'always-single'` - Her zaman tek ikon göster

**Örnek:**
```javascript
bookIconMode: 'always-single',  // Her zaman tek ikon
```

#### `map.markers.inactiveOpacity`
- **Ne işe yarar:** Seçili olmayan kitap ikonlarının saydamlığını ayarlar
- **Varsayılan:** `0.15` (% 15 opak)
- **Seçenekler:** `0` (görünmez) - `1` (tamamen görünür)

**Örnek:**
```javascript
inactiveOpacity: 0.3,  // Biraz daha belirgin yap
```

---

### 4. 🚩 Flag Settings (Bayrak Ayarları)

#### `map.flags.showOnHover`
- **Ne işe yarar:** İşaretçilerin üzerine gelince ülke bayrağını gösterir
- **Varsayılan:** `true` (göster)
- **Seçenekler:** `true` veya `false`

**Örnek:**
```javascript
showOnHover: false,  // Hover efektini kapat
```

#### `map.flags.replaceBooks`
- **Ne işe yarar:** Kitap ikonları yerine kalıcı olarak bayrak gösterir
- **Varsayılan:** `true` (bayrakları göster)
- **Seçenekler:** `true` veya `false`

**Örnek:**
```javascript
replaceBooks: false,  // Kitap ikonlarını kullan
```

#### `map.flags.height`
- **Ne işe yarar:** Bayrak yüksekliğini ayarlar (genişlik otomatik)
- **Varsayılan:** `30` (piksel)
- **Seçenekler:** Herhangi bir sayı (önerilen: 20-50)

**Örnek:**
```javascript
height: 40,  // Daha büyük bayraklar
```

#### `map.flags.inactiveOpacity`
- **Ne işe yarar:** Seçili olmayan bayrakların saydamlığını ayarlar (sadece replaceBooks: true ise)
- **Varsayılan:** `0.15`
- **Seçenekler:** `0` (görünmez) - `1` (tamamen görünür)

**Örnek:**
```javascript
inactiveOpacity: 0.25,  // Biraz daha görünür yap
```

---


## ⚠️ Dikkat Edilmesi Gerekenler

### ✅ Yapın:
- Değişiklik yapmadan önce orijinal değerleri not edin
- Bir seferde bir ayarı değiştirin ve test edin
- Sayısal değerler için makul aralıklarda kalın (örn: opacity 0-1 arası)

### ❌ Yapmayın:
- Virgülleri (,) silmeyin
- Tırnak işaretlerini (' veya ") kaldırmayın
- Küme parantezlerini ({ }) bozmayın
- Aynı anda çok fazla değişiklik yapmayın

---

## 🔄 Ayarları Sıfırlama

Eğer bir şeyleri bozarsanız:

1. Repository'nizde **Actions** sekmesine gidin
2. **History** kısmından son çalışan versiyona dönün
3. **VEYA** ana projeyi yeniden fork edin

💡 **Daha kolay yol:** Değişiklik yapmadan önce `config.js` dosyasının bir kopyasını bilgisayarınıza kaydedin.

---

## 🆘 Sorun Giderme

### "Site bozuldu, harita görünmüyor"
**Çözüm:** Muhtemelen virgül veya parantez hatası var. config.js dosyasını Claude'a gösterin, kontrol etsin.

### "Değişiklikler görünmüyor"
**Çözüm:** 
1. 2-3 dakika bekleyin (GitHub Pages güncelleme süresi)
2. Tarayıcınızı hard refresh yapın (Ctrl+Shift+R)
3. Gizli mod/incognito'da deneyin

### "Hangi değerleri kullanmalıyım?"
**Çözüm:** 
1. Önce varsayılan değerlerle başlayın
2. Bir ayarı değiştirin, sonucu görün
3. Beğenmezseniz geri alın

---

## 📚 Ek Kaynaklar

- **Koordinat bulma:** [latlong.net](https://www.latlong.net/)

---

💡 Sorularınız için: [GitHub Issues](https://github.com/ilyassari/reading-map/issues)