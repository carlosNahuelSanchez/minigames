import { useLanguage } from '../context/LanguageContext'

export default function LanguageToggle() {
  const { t, toggleLanguage } = useLanguage()

  return (
    <div className="mt-4 flex justify-center relative z-10">
      <button
        id="language-toggle-btn"
        onClick={toggleLanguage}
        className="btn-medieval py-2 px-5 rounded-xl
          font-cinzel text-xs tracking-wider uppercase
          bg-medieval-card text-parchment border border-medieval-border
          hover:border-gold-dark/50 cursor-pointer backdrop-blur-sm transition-all
          shadow-lg shadow-black/50"
      >
        {t.langToggle}
      </button>
    </div>
  )
}
