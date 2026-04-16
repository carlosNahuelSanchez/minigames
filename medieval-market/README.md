# ⚔️ Medieval Market Value Calculator

> *How much would you be worth in a medieval market?*

A fun, viral micro-tool that calculates your fictional value in silver coins based on your personal stats. Designed to generate hilarious, shareable results perfect for social media.

---

## 🇬🇧 English

### 🏰 About

This is a single-page web application built as a humorous "value calculator" set in a medieval fantasy context. Users input their age and rate their strength, intelligence, and skills — the app then generates:

- 🪙 **Estimated value** in silver coins
- 👤 **A random medieval profession** (from 20+ humorous options)
- ❄️ **Winter survival probability** (%)
- 📜 **A generated narrative** describing your fate

Results are intentionally absurd, ironic, and shareable.

### ✨ Features

| Feature | Description |
|---------|-------------|
| 🎨 Dark medieval aesthetic | Parchment textures, gold accents, serif typography (Cinzel, Crimson Text, MedievalSharp) |
| 📱 Mobile-first design | Optimized for vertical screens (TikTok, Instagram Stories) |
| 🎭 20 humorous professions | From "Court Jester" to "Peasant Influencer" |
| 🎲 Randomized results | Slight randomness ensures varied outcomes each time |
| 📋 Copy to clipboard | One-tap sharing of results |
| 🌐 Bilingual (EN/ES) | Full English and Spanish translation with toggle button |
| 🎬 Smooth animations | Scroll unroll, shimmer effects, floating coins, staggered reveals |
| 🔄 Try again | Reset and recalculate without reloading |

### 🛠️ Tech Stack

- **React** — Functional components with hooks (`useState`, `useCallback`, `useContext`)
- **TailwindCSS v4** — Utility-first styling via Vite plugin
- **Vite** — Fast development server and build tool
- **No backend** — 100% client-side logic

### 📁 Project Structure

```
medieval-market/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Footer.jsx          # Footer with disclaimer
│   │   ├── Header.jsx          # App title and subtitle
│   │   ├── InputCard.jsx       # Age input + stat sliders + calculate button
│   │   ├── LanguageToggle.jsx  # EN/ES floating toggle button
│   │   ├── LoadingState.jsx    # "Consulting the Oracle" animation
│   │   ├── ResultCard.jsx      # Full results display (scroll card)
│   │   └── SliderInput.jsx     # Reusable range slider component
│   ├── context/
│   │   └── LanguageContext.jsx  # i18n context provider and hook
│   ├── utils/
│   │   ├── calculations.js     # Value, survival, narrative generation logic
│   │   ├── data.js             # Professions, narrative templates, winter comments
│   │   └── translations.js     # UI text translations (EN/ES)
│   ├── App.jsx                 # Main app orchestrator
│   ├── index.css               # Global styles, theme, animations
│   └── main.jsx                # React entry point
├── index.html
├── vite.config.js
└── package.json
```

### 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The app will be available at `http://localhost:5173/`.

### 🧮 How the Calculation Works

| Factor | Formula |
|--------|---------|
| **Age Factor** | 1–12 yrs: ×0.4 · 13–18: ×0.7 · 19–35: ×1.0 · 36–50: ×0.75 · 51–65: ×0.45 · 66+: ×0.2 |
| **Base Value** | `(strength × 12 + intelligence × 10 + skills × 14) × ageFactor` |
| **Randomness** | `× (0.8 to 1.2)` random multiplier |
| **Minimum** | 3 silver coins |

Winter survival uses a similar formula with strength weighted heavily and age penalties applied.

---

## 🇪🇸 Español

### 🏰 Acerca de

Esta es una aplicación web de una sola página construida como un "calculador de valor" humorístico ambientado en un contexto de fantasía medieval. Los usuarios ingresan su edad y califican su fuerza, inteligencia y habilidades — la app luego genera:

- 🪙 **Valor estimado** en monedas de plata
- 👤 **Una profesión medieval aleatoria** (de 20+ opciones humorísticas)
- ❄️ **Probabilidad de sobrevivir al invierno** (%)
- 📜 **Una narrativa generada** describiendo tu destino

Los resultados son intencionalmente absurdos, irónicos y compartibles.

### ✨ Características

| Característica | Descripción |
|---------------|-------------|
| 🎨 Estética medieval oscura | Texturas de pergamino, acentos dorados, tipografía serif (Cinzel, Crimson Text, MedievalSharp) |
| 📱 Diseño mobile-first | Optimizado para pantallas verticales (TikTok, Instagram Stories) |
| 🎭 20 profesiones humorísticas | Desde "Bufón de la Corte" hasta "Influencer Campesino" |
| 🎲 Resultados aleatorios | Un factor de aleatoriedad asegura resultados variados cada vez |
| 📋 Copiar al portapapeles | Compartir resultados con un solo toque |
| 🌐 Bilingüe (EN/ES) | Traducción completa inglés y español con botón de cambio |
| 🎬 Animaciones suaves | Desenrollo de pergamino, efectos shimmer, monedas flotantes, revelados escalonados |
| 🔄 Intentar de nuevo | Reiniciar y recalcular sin recargar la página |

### 🛠️ Stack Técnico

- **React** — Componentes funcionales con hooks (`useState`, `useCallback`, `useContext`)
- **TailwindCSS v4** — Estilos utility-first vía plugin de Vite
- **Vite** — Servidor de desarrollo rápido y herramienta de build
- **Sin backend** — 100% lógica del lado del cliente

### 🚀 Cómo empezar

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build
```

La aplicación estará disponible en `http://localhost:5173/`.

### 🧮 Cómo funciona el cálculo

| Factor | Fórmula |
|--------|---------|
| **Factor de edad** | 1–12 años: ×0.4 · 13–18: ×0.7 · 19–35: ×1.0 · 36–50: ×0.75 · 51–65: ×0.45 · 66+: ×0.2 |
| **Valor base** | `(fuerza × 12 + inteligencia × 10 + habilidades × 14) × factorEdad` |
| **Aleatoriedad** | `× (0.8 a 1.2)` multiplicador aleatorio |
| **Mínimo** | 3 monedas de plata |

La supervivencia al invierno usa una fórmula similar con la fuerza más ponderada y penalizaciones por edad.

<p align="center">
  <em>No actual medieval merchants were consulted in making this tool.<br>
  Results may vary depending on plague season. 🏴</em>
</p>
