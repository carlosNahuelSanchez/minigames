import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="text-center mt-8 relative z-10">
      <div className="gold-divider mb-4" />
      <p className="font-crimson text-xs text-parchment-deep/40 italic">
        {t.footerLine1}
        <br />
        {t.footerLine2}
      </p>
    </footer>
  )
}
