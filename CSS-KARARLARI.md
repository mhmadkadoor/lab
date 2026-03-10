# CSS Kararlari

## 1. Breakpoint Secimi
- 640px ve 1024px secimi, icerigin tek sutundan cok sutuna gectigi dogal kirilim noktalarina gore yapildi.
- 0-639 arasi mobil varsayilan, 640+ tablet, 1024+ masaustu duzeni uygulandi.

## 2. Layout Tercihleri
- Header ve navigasyon icin Flexbox secildi cunku tek eksende hizalama, sarma ve bosluk kontrolu daha dogrudan.
- Proje kartlari icin Grid secildi cunku iki boyutlu bir kart izgarasi gerekiyor.
- `repeat(auto-fit, minmax(280px, 1fr))` kullanildi; bos alani verimli doldurup media query yazmadan akici sutun sayisi sagliyor.

## 3. Design Tokens
- Renk paleti sakin bir turkuaz-amber dengesiyle secildi; odak elemanlari icin primary/secondary ayrimi korundu.
- Spacing skalasi `--space-xs` ile `--space-3xl` arasinda tutarli bir ritim kuracak sekilde tanimlandi.
- Fluid typography icin `clamp(min, rem+vw, max)` modeli kullanildi; erisilebilirlik icin yalnizca `vw` tercih edilmedi.

## 4. Responsive Stratejiler
- Mobile-first yaklasimla once mobil kurallar yazildi, sonra `@media (min-width: 640px)` ve `@media (min-width: 1024px)` ile gelistirildi.
- Breakpoint'lerde header dizilimi, hakkimda bolumu, buton genisligi ve proje grid sutunlari degisiyor.
- Gorsellerde `max-width: 100%`, proje kartlarinda `object-fit: cover` kullanilarak farkli ekranlarda duzgun gorunum korundu.
