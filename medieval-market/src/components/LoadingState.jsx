import { useLanguage } from '../context/LanguageContext'

export default function LoadingState() {
  const { t } = useLanguage()

  return (
    <div className="text-center py-16 animate-result">
      <div className="text-5xl mb-4 animate-float">🔮</div>
      <p className="font-medieval text-xl text-gold animate-flicker">
        {t.loadingTitle}
      </p>
      <p className="font-crimson text-sm text-parchment-dark mt-2 italic">
        {t.loadingSubtitle}
      </p>
    </div>
  )
}
