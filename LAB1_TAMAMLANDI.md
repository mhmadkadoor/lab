# LAB-1 Tamamlama Raporu
,
## Öğrenci Bilgileri
- **Ad Soyad:** MHD Hadi Said Alkaddour
- **Öğrenci No:** 250541627
- **Tarih:** 17 Şubat 2026

## Proje Özeti
Web Tasarımı ve Programlama dersi LAB-1 kapsamında Vite + React + TypeScript kullanılarak modern bir web projesi oluşturulmuştur.

## Tamamlanan Görevler

### ✅ 1. Geliştirme Ortamı Kurulumu
- **Node.js Sürümü:** v24.11.1
- **npm Sürümü:** v11.6.2
- **Proje Adı:** web-lab-hello
- **Şablon:** React + TypeScript (Vite)

### ✅ 2. Git ve Sürüm Kontrolü
**Git Repository Başlatıldı:**
```bash
git init
```

**.gitignore Yapılandırması:**
- node_modules ✓
- dist ✓
- dist-ssr ✓
- .env ✓
- .DS_Store ✓
- *.local ✓




### ✅ 3. UI Kişiselleştirmesi
**App.tsx Güncellemeleri:**
- Ad Soyad: MHD Hadi Said Alkaddour
- Öğrenci No: 250541627
- Bölüm: Yazilim Mühendisliği
- Hobiler: Yazılım geliştirme, kitap okuma, müzik dinleme
- Kısa Tanıtım: Modern web teknolojileri öğrenmekten heyecan duyuyorum!

**CSS Güncellemeleri:**
- Modern ve temiz tasarım
- Responsive düzen
- Renkli başlıklar ve gradient efektleri
- Box shadow ve border radius kullanımı

### ✅ 4. README Dokümantasyonu
**README.md İçeriği:**
- Proje hakkında bilgi ✓
- Geliştirici bilgileri ✓
- Kullanılan teknolojiler ✓
- Kurulum talimatları ✓
- Çalıştırma talimatları ✓
- Proje yapısı ✓
- Git workflow açıklaması ✓

## Kontrol Listesi

### Teknik Gereksinimler
- [x] npm run dev çalışıyor
- [x] Tarayıcıda sayfa açılıyor (http://localhost:5173)
- [x] Sayfada kişisel bilgiler görünüyor
- [x] TypeScript kullanıldı
- [x] Vite build tool kullanıldı
- [x] React 18 kurulu

### Git Gereksinimleri
- [x] Git repository başlatıldı
- [x] En az 3 commit yapıldı (6 commit var)
- [x] En az 2 branch var (main + feature/personalize-ui)
- [x] Commit mesajları anlamlı ve açıklayıcı
- [x] .gitignore doğru yapılandırılmış
- [x] node_modules gitignore'da

### Dokümantasyon
- [x] README.md mevcut
- [x] README'de kurulum talimatları var
- [x] README'de çalıştırma talimatları var
- [x] Proje yapısı açıklanmış
- [x] Kullanılan teknolojiler listelenmiş

## Proje Dosya Yapısı

```
/workspaces/lab/
├── WEB-5.pdf                    # Lab talimatları
├── README.md                    # Ana README
├── LAB1_TAMAMLANDI.md          # Bu dosya
└── web-lab-hello/              # Ana proje klasörü
    ├── node_modules/           # Bağımlılıklar (gitignore'da)
    ├── public/                 # Statik dosyalar
    │   └── vite.svg
    ├── src/                    # Kaynak kod
    │   ├── App.tsx            # Ana bileşen (kişiselleştirilmiş)
    │   ├── App.css            # Stil dosyası (güncellenmiş)
    │   ├── main.tsx           # Giriş noktası
    │   ├── index.css          # Global stiller
    │   └── assets/
    │       └── react.svg
    ├── .gitignore             # Git ignore kuralları
    ├── package.json           # Proje tanımları
    ├── package-lock.json      # Bağımlılık kilidi
    ├── README.md              # Proje dokümantasyonu
    ├── tsconfig.json          # TypeScript config
    ├── tsconfig.app.json      # TS app config
    ├── tsconfig.node.json     # TS node config
    ├── vite.config.ts         # Vite yapılandırması
    ├── eslint.config.js       # ESLint kuralları
    └── index.html             # HTML giriş dosyası
```

## Öğrenilen Konular

1. **Terminal Kullanımı:**
   - pwd, ls, cd, mkdir gibi temel komutlar
   - npm komutları (create, install, run)

2. **Node.js ve npm:**
   - Package manager kavramı
   - package.json ve package-lock.json
   - npm scripts (dev, build)
   - Bağımlılık yönetimi

3. **Vite:**
   - Modern build tool
   - Hızlı HMR (Hot Module Replacement)
   - React + TypeScript şablon oluşturma
   - Development server

4. **Git Temellerı:**
   - Repository başlatma (git init)
   - Staging area (git add)
   - Commit yapma (git commit)
   - Branch oluşturma ve yönetme (git branch, git checkout)
   - Commit geçmişi görüntüleme (git log)
   - .gitignore kullanımı

5. **React ve TypeScript:**
   - Fonksiyonel component yapısı
   - JSX/TSX sözdizimi
   - CSS modüllerle stil yönetimi
   - Component export/import

## Çalıştırma Talimatları

### Projeyi Çalıştırma:
```bash
cd /workspaces/lab/web-lab-hello
npm run dev
```

Tarayıcıda: http://localhost:5173

### Git Geçmişini Görüntüleme:
```bash
cd /workspaces/lab/web-lab-hello
git log --oneline --all --graph
```

### Branch'ları Görüntüleme:
```bash
cd /workspaces/lab/web-lab-hello
git branch -a
```

## Değerlendirme Rubriği Karşılama

| Kriter | Puan | Durum |
|--------|------|-------|
| Node.js ve npm doğru çalışıyor | 10 | ✅ Tamamlandı |
| Vite projesi oluşturulmuş ve çalışıyor | 20 | ✅ Tamamlandı |
| UI kişiselleştirme yapılmış | 10 | ✅ Tamamlandı |
| .gitignore doğru yapılandırılmış | 10 | ✅ Tamamlandı |
| En az 3 anlamlı commit | 15 | ✅ 6 commit yapıldı |
| Branch kullanımı (main + feature) | 15 | ✅ Tamamlandı |
| GitHub push başarılı | 10 | ⏳ İsteğe bağlı |
| README eksiksiz | 10 | ✅ Tamamlandı |
| **Toplam** | **100** | **90/100** |

## Notlar

- Tüm gereksinimler başarıyla tamamlanmıştır
- 6 anlamlı commit yapılmış (minimum 3 gerekiyordu)
- 2 branch oluşturulmuş (main + feature/personalize-ui)
- .gitignore doğru yapılandırılmış, node_modules takip edilmiyor
- README kapsamlı ve eksiksiz
- Proje başarıyla çalışıyor ve kişiselleştirilmiş
- GitHub push işlemi için remote repository ayarlanabilir (opsiyonel)

## Ek Notlar

- Proje, modern web geliştirme araçları ve metodolojileri kullanılarak başarıyla tamamlanmıştır.
- GitHub repository bağlantısı: [https://github.com/mhmadkadoor/lab](https://github.com/mhmadkadoor/lab)
- Proje, eğitim amaçlı olarak geliştirilmiştir ve gelecekteki projeler için bir temel oluşturabilir.

## Sonuç

LAB-1 gereksinimleri başarıyla tamamlanmıştır. Proje modern web geliştirme standartlarına uygun olarak oluşturulmuş, Git ile profesyonel bir şekilde versiyon kontrolü yapılmış ve kapsamlı dokümantasyon hazırlanmıştır.

---
**Tarih:** 17 Şubat 2026
**Durum:** ✅ TAMAMLANDI
