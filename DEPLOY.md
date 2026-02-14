# 🚀 Nasazení na Vercel - Krok za Krokem

## Tvůj GitHub: https://github.com/polymorrr/Diagweb.git

---

## ⚡ RYCHLÉ NASAZENÍ (5 minut)

### 1️⃣ Nahraj soubory na GitHub

Otevři **PowerShell** v této složce (`Diagstranky`) a zadej:

```powershell
# Inicializuj Git
git init

# Přidej všechny soubory
git add .

# Commitni změny
git commit -m "VH Diagnostika - Modern 2026 Web"

# Připoj tvůj GitHub repository
git remote add origin https://github.com/polymorrr/Diagweb.git

# Nahraj na GitHub
git branch -M main
git push -u origin main --force
```

**Poznámka**: `--force` přepíše vše, co je teď na GitHubu. Pokud tam máš něco důležitého, odstraň `--force`.

---

### 2️⃣ Nasaď na Vercel

1. Jdi na: **https://vercel.com/login**
2. Přihlaš se přes **GitHub**
3. Klikni **"Add New"** → **"Project"**
4. Vyber repository: **`polymorrr/Diagweb`**
5. Nech nastavení výchozí (Vercel automaticky detekuje static site)
6. Klikni **"Deploy"**
7. Počkaj **30 sekund** ⏱️

---

## ✅ HOTOVO!

Dostaneš URL typu:
```
https://diagweb-xxx.vercel.app
```

Tuto adresu můžeš poslat bratrovi.

---

## 🔄 Aktualizace webu

Když něco změníš, stačí:

```powershell
git add .
git commit -m "Update: popis změny"
git push
```

Vercel **automaticky** znovu nasadí web (trvá ~20 sekund).

---

## 🎯 Custom doména (volitelné)

Pokud chceš vlastní doménu (např. `vh-diagnostika.cz`):

1. Jdi na Vercel → tvůj projekt → **Settings** → **Domains**
2. Přidej doménu
3. Nastav DNS u registrátora (Vercel ti ukáže jak)

---

## ⚠️ Řešení problémů

**Problem**: `git push` hlásí "rejected"
**Řešení**: 
```powershell
git pull origin main --rebase
git push
```

**Problem**: Vercel build failuje
**Řešení**: Zkontroluj, že všechny soubory jsou nahrané (hlavně `index.html`, `styles-2026.css`, `script-2026.js`)

---

**Kontakt**: vita.hanslik@seznam.cz | +420 735 824 130
