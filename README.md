# VH Diagnostika & Kódování

Profesionální diagnostika a kódování vozů VW, Škoda, Audi, Seat s originálním VCDS (podpora do roku 2026).

## 🚀 Deployment na Vercel

### Metoda 1: Vercel CLI (Nejrychlejší)

1. **Nainstaluj Vercel CLI**:
```bash
npm install -g vercel
```

2. **Přihlas se do Vercelu**:
```bash
vercel login
```

3. **Nasaď projekt** (z této složky):
```bash
vercel
```

4. **Pro produkci**:
```bash
vercel --prod
```

### Metoda 2: GitHub + Vercel Web (Doporučeno pro bratrovy testy)

1. **Vytvoř Git repository**:
```bash
cd Diagstranky
git init
git add .
git commit -m "Initial commit - VH Diagnostika"
```

2. **Nahraj na GitHub**:
   - Jdi na https://github.com/new
   - Vytvoř nový repository (např. "vh-diagnostika")
   - Spusť:
```bash
git remote add origin https://github.com/TVOJE_JMENO/vh-diagnostika.git
git branch -M main
git push -u origin main
```

3. **Připoj na Vercel**:
   - Jdi na https://vercel.com
   - Klikni "Add New" → "Project"
   - Importuj tvůj GitHub repository
   - Klikni "Deploy"
   - Hotovo! Dostaneš URL typu: `vh-diagnostika.vercel.app`

## 📁 Struktura projektu

```
Diagstranky/
├── index.html          # Hlavní stránka
├── styles-2026.css     # Moderní CSS styly (2026 trendy)
├── script-2026.js      # JavaScript s GSAP animacemi
├── vercel.json         # Vercel konfigurace
├── package.json        # NPM konfigurace
└── README.md           # Tento soubor
```

## 🎨 Technologie

- **HTML5** - Sémantická struktura
- **CSS3** - Glassmorphism, Bento Grid, Organic Shapes
- **JavaScript** - Vanilla JS + GSAP + Anime.js
- **GSAP 3.12** - Pokročilé animace a ScrollTrigger
- **Anime.js 3.2** - Smooth micro-interactions
- **Alpine.js** - Reaktivní tabs
- **Font Awesome 6.5** - Ikony

## 📱 Kontakt

- **Telefon**: +420 735 824 130
- **Email**: vita.hanslik@seznam.cz
- **Lokalita**: Budišov nad Budišovkou a okolí (Vítkov, Fulnek, Odry, Opava, Ostrava, Šternberk, Uničov)

## ✨ Features

- ✅ Ultra-modern 2026 design
- ✅ Dark mode s Cyber Teal akcenty
- ✅ Pokročilé GSAP animace
- ✅ 3D particle system
- ✅ Magnetic buttons
- ✅ Kinetic typography
- ✅ Bento Grid layout
- ✅ Glassmorphism efekty
- ✅ Plně responzivní
- ✅ SEO optimalizované
- ✅ Kontaktní formulář
- ✅ Brand-specific loga s animacemi

## 🔧 Služby

- **Oprava SOS / eCall** - Reset a dobití baterie
- **Kódování & Komfort** - Start/Stop, Needle Sweep, Mirror Dip
- **Servisní Diagnostika** - BEM, EPB, DPF, Auto-Scan

## 💰 Cena

- Diagnostika od **300 Kč**
- Ostatní služby dle domluvy
- ⚠️ U vozů 2020+ ověření SFD ochrany

---

Made with 💙 by VH Diagnostika © 2026
