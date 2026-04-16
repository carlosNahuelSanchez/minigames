import { useLanguage } from '../context/LanguageContext'

export default function Header() {
  const { t } = useLanguage()

  return (
    <header className="text-center mb-8">
      <div className="text-4xl mb-3 animate-float">🏰</div>
      <h1 className="font-cinzel text-2xl sm:text-3xl font-bold text-gold tracking-wider leading-tight">
        {t.headerTitle}
      </h1>
      <p className="font-medieval text-lg sm:text-xl text-gold-dark mt-1">
        {t.headerSubtitle}
      </p>
      <div className="gold-divider mt-4" />
    </header>
  )
}
