import { useLanguage } from '../context/LanguageContext'
import SliderInput from './SliderInput'

function getAgeComment(age, t) {
  if (age === '' || age === 0) return '⏳'
  if (age <= 12) return t.ageChild
  if (age <= 18) return t.ageYoung
  if (age <= 35) return t.agePrime
  if (age <= 50) return t.ageSeasoned
  if (age <= 65) return t.ageElder
  return t.ageLegend
}

export default function InputCard({
  age,
  setAge,
  strength,
  setStrength,
  intelligence,
  setIntelligence,
  skills,
  setSkills,
  onCalculate,
  isCalculating,
}) {
  const { t } = useLanguage()

  return (
    <div className="scroll-card rounded-2xl p-6 sm:p-8 space-y-6 animate-result relative">
      <div className="corner-flourish corner-flourish--tl" />
      <div className="corner-flourish corner-flourish--tr" />
      <div className="corner-flourish corner-flourish--bl" />
      <div className="corner-flourish corner-flourish--br" />

      <div className="space-y-2 relative z-10">
        <label
          htmlFor="age-input"
          className="font-cinzel text-sm tracking-wider text-parchment-dark uppercase block"
        >
          🎂 {t.ageLabel}
        </label>
        <input
          id="age-input"
          type="number"
          min="1"
          max="120"
          value={age}
          onChange={(e) => {
            const raw = e.target.value
            if (raw === '') {
              setAge('')
              return
            }
            const num = parseInt(raw, 10)
            if (!isNaN(num)) {
              setAge(Math.min(120, Math.max(0, num)))
            }
          }}
          onBlur={() => {
            if (age === '' || age < 1) setAge(1)
          }}
          className="w-full px-4 py-3 rounded-xl bg-medieval-bg/70 border border-medieval-border text-parchment
            font-medieval text-xl text-center focus:outline-none focus:border-gold-dark
            focus:ring-1 focus:ring-gold-dark/50 transition-all placeholder:text-parchment-deep/30"
          placeholder={t.agePlaceholder}
        />
        <p className="text-xs text-parchment-deep/40 font-crimson text-center">
          {getAgeComment(age, t)}
        </p>
      </div>

      <div className="gold-divider" />

      <div className="space-y-5 relative z-10">
        <SliderInput id="strength-slider" label={t.strengthLabel} value={strength} onChange={setStrength} emoji="💪" />
        <SliderInput id="intelligence-slider" label={t.intelligenceLabel} value={intelligence} onChange={setIntelligence} emoji="🧠" />
        <SliderInput id="skills-slider" label={t.skillsLabel} value={skills} onChange={setSkills} emoji="🎯" />
      </div>

      <div className="gold-divider" />

      <button
        id="calculate-btn"
        onClick={onCalculate}
        disabled={isCalculating}
        className="btn-medieval w-full py-4 rounded-xl font-cinzel text-base sm:text-lg tracking-wider uppercase font-bold
          bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-medieval-bg
          hover:from-gold hover:via-gold-light hover:to-gold
          disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer
          relative z-10 transition-all"
      >
        {isCalculating ? (
          <span className="flex items-center justify-center gap-2">
            <span className="animate-spin inline-block">⚙️</span>
            {t.calculatingBtn}
          </span>
        ) : (
          t.calculateBtn
        )}
      </button>
    </div>
  )
}
