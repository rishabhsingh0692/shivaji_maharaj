# Chhatrapati Shivaji Maharaj | The Founder of Swarajya
### An Interactive Educational Tribute & Digital Museum

A modern, responsive, and educational website commemorating the life, military strategy, ethical statecraft, and eternal legacy of **Chhatrapati Shivaji Maharaj (1630–1680)**. Designed for a college **Digital Literacy Project**.

---

## 🚩 Features & Highlights

1. **Royal Visual Identity & Theme**:
   - Royal Maratha color palette: Royal Saffron (Kesari), Midnight Navy Fort, Heritage Cream/Parchment, and Regal Gold accents.
   - Dual Theme Support: Persistent **Dark Mode (Midnight Palace)** and **Light Mode (Warm Parchment)**.
   - Traditional typography using *Cinzel*, *Playfair Display*, and *Rozha One* for authentic Devanagari script.

2. **The Sacred Rajmudra Inspector**:
   - Interactive breakdown of the royal Sanskrit motto:
     *प्रतिपच्चंद्रलेखेव वर्धिष्णुर्विश्ववंदिता शाहसूनोः शिवस्यैषा मुद्रा भद्राय राजते।*
   - Word-by-word transliteration and philosophical meaning highlighting welfare-driven sovereignty.

3. **Major Historical Timeline (1630–1680)**:
   - Covers core milestones: Birth at Shivneri (1630), Capture of Torna (1645), Triumph over Afzal Khan (1659), Grand Coronation at Raigad (1674), and Departure (1680).
   - Filterable by era: *All*, *Early Foundations*, *Battles & Strategy*, and *Sovereign Empire*.

4. **Pillars of Swarajya & Major Achievements**:
   - 6 detailed achievement cards: Guerrilla Warfare (*Ganimi Kawa*), Fort Matrix (300+ forts), Father of the Indian Navy (400+ warships & sea forts), Democratic Governance (*Ashta Pradhan* & Ryotwari), and Civilian Protection/Secular Inclusivity.

5. **Famous Forts Interactive Gallery**:
   - Showcases Raigad, Shivneri, Pratapgad, Sinhagad, and Torna.
   - Deep-dive modal inspector displaying elevations, locations, defense features, and architectural milestones.

6. **Values & Leadership Philosophy**:
   - Two-column grid highlighting Dauntless Courage, Strategic Foresight, Impartial Justice, Self-Reliance, Servant Leadership, and Sanctity for Women & Pluralism.

7. **Legacy & Verified Historian Testimonials**:
   - Featured inspirational quote: *"His legacy lives on through courage, self-rule, and visionary leadership."*
   - Verified historical analyses from Sir Jadunath Sarkar, Mountstuart Elphinstone, Dennis Kincaid, Swami Vivekananda, and Rabindranath Tagore.

8. **Interactive 5-Question Educational Quiz**:
   - Multiple-choice questions testing key historical concepts.
   - Real-time scoring, detailed historical explanations, review mode, and celebratory confetti upon high achievement.

9. **Offline Royal Web Audio Synthesizer**:
   - Web Audio API generated royal fanfare and brass timbre (100% offline, zero asset lag, with mute/unmute control).

10. **Academic Integrity & Bibliography**:
    - Complete academic citations (Sir Jadunath Sarkar, G. S. Sardesai, S. N. Sen, Adnyapatra, Sabhasad Bakhar).

---

## 🚀 How to Run the Project

Ensure Node.js (v18+) is available in your environment.

### 1. Development Server
```bash
npm run dev
```
Open your browser at: `http://localhost:3000`

### 2. Production Build
```bash
npm run build
```
This generates an optimized static distribution in the `dist/` directory.

### 3. Preview Production Build
```bash
npm run preview
# OR using Python:
python3 -m http.server 3000 --directory dist
```

---

## 📂 Project Directory Structure

```
class work/
├── index.html                     # HTML5 entry with fonts, SEO tags & metadata
├── package.json                   # Dependencies: React 18, Vite, Tailwind, Lucide, Canvas-Confetti
├── vite.config.ts                 # Vite bundler configuration
├── tsconfig.json                  # TypeScript compiler settings
├── tailwind.config.js             # Custom royal color palette & animations
├── postcss.config.js              # PostCSS plugins
└── src/
    ├── main.tsx                   # React app entry point
    ├── App.tsx                    # Main container orchestrating all sections
    ├── index.css                  # Tailwind directives & royal utility classes
    ├── types/
    │   └── index.ts               # TypeScript interfaces for Forts, Timeline, Quiz, etc.
    ├── data/
    │   ├── fortsData.ts           # Authentic details for Raigad, Shivneri, Pratapgad, Sinhagad, Torna
    │   ├── timelineData.ts        # Chronological milestones (1630 to 1680)
    │   ├── achievementsData.ts    # Guerrilla warfare, Forts, Navy, Revenue, Human rights
    │   ├── valuesData.ts          # Core leadership pillars with icons & historical evidence
    │   ├── quotesData.ts          # Verified quotes from historians & Rajmudra breakdown
    │   └── quizData.ts            # 5 educational MCQs with answers & explanations
    ├── components/
    │   ├── Navbar.tsx             # Responsive nav with royal seal, mobile menu & theme toggle
    │   ├── Hero.tsx               # Hero section with portrait, parallax fort backdrop, CTA buttons
    │   ├── AboutSection.tsx       # Life summary cards & early inspiration (Jijabai, Dadoji, Swarajya)
    │   ├── RajmudraBanner.tsx     # Interactive Royal Seal (Sanskrit text & breakdown)
    │   ├── TimelineSection.tsx    # Interactive filterable milestone timeline
    │   ├── AchievementsSection.tsx# 6 major achievement cards with custom icons & stats
    │   ├── ValuesSection.tsx      # Two-column leadership & moral values grid
    │   ├── FortsGallery.tsx       # Filterable fort cards with detailed modal inspector
    │   ├── FortModal.tsx          # Fullscreen deep-dive modal for selected fort
    │   ├── LegacySection.tsx      # Legacy statement & verified historian testimonials
    │   ├── QuizSection.tsx        # Interactive 5-question quiz with score tracking
    │   ├── ReferencesModal.tsx    # Academic bibliography for college project submission
    │   └── Footer.tsx             # Digital literacy project footer, credits & back-to-top
    └── utils/
        └── soundEffects.ts        # Synthesized royal conch / fanfare using Web Audio API
```
