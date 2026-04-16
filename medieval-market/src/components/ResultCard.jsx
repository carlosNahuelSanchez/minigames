import { useLanguage } from '../context/LanguageContext'

function CoinIcon() {
  return (
    <span className="inline-block animate-float text-2xl" role="img" aria-label="coin">
      🪙
    </span>
  )
}

function SurvivalBar({ survival }) {
  const bg =
    survival > 60
      ? 'linear-gradient(90deg, #2d6a30, #4a9e4e)'
      : survival > 30
      ? 'linear-gradient(90deg, #a07830, #d4a843)'
      : 'linear-gradient(90deg, #8b1a1a, #c0392b)'

  return (
    <div className="relative w-full h-4 bg-medieval-border rounded-full overflow-hidden mb-2">
      <div
        className="h-full rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${survival}%`, background: bg, transitionDelay: '0.6s' }}
      />
    </div>
  )
}

export default function ResultCard({ result, onReset, onCopy, copied }) {
  const { lang, t } = useLanguage()
  const { coins, profession, survival, winterComment, narrative } = result

  const professionTitle = profession.title[lang] || profession.title.en
  const professionDesc = profession.desc[lang] || profession.desc.en

  return (
    <div className="animate-unroll">
      <div className="scroll-card rounded-2xl p-6 sm:p-8 relative animate-pulse-glow">
        <div className="corner-flourish corner-flourish--tl" />
        <div className="corner-flourish corner-flourish--tr" />
        <div className="corner-flourish corner-flourish--bl" />
        <div className="corner-flourish corner-flourish--br" />

        <div className="text-center mb-6 relative z-10">
          <p className="font-cinzel text-xs tracking-[0.3em] text-gold-dark uppercase mb-2">
            {t.marketSpoken}
          </p>
          <div className="gold-divider mb-4" />

          <div className="my-4">
            <p className="font-crimson text-sm text-parchment-dark mb-1">
              {t.estimatedValue}
            </p>
            <div className="flex items-center justify-center gap-3">
              <CoinIcon />
              <span className="animate-shimmer font-cinzel text-5xl sm:text-6xl font-black">
                {coins}
              </span>
              <CoinIcon />
            </div>
            <p className="font-cinzel text-sm text-gold-dark mt-1 tracking-wider">
              {t.silverCoins}
            </p>
          </div>
        </div>

        <div className="gold-divider mb-6" />

        <div
          className="text-center mb-6 relative z-10 animate-count"
          style={{ animationDelay: '0.2s', opacity: 0 }}
        >
          <p className="font-cinzel text-xs tracking-[0.2em] text-parchment-deep uppercase mb-2">
            {t.assignedProfession}
          </p>
          <h2 className="font-medieval text-2xl sm:text-3xl text-gold-light mb-1">
            ⚔️ {professionTitle}
          </h2>
          <p className="font-crimson text-sm text-parchment-dark italic">
            &ldquo;{professionDesc}&rdquo;
          </p>
        </div>

        <div className="gold-divider mb-6" />

        <div
          className="text-center mb-6 relative z-10 animate-count"
          style={{ animationDelay: '0.4s', opacity: 0 }}
        >
          <p className="font-cinzel text-xs tracking-[0.2em] text-parchment-deep uppercase mb-3">
            {t.winterSurvival}
          </p>
          <SurvivalBar survival={survival} />
          <p className="font-medieval text-2xl text-gold mb-1">
            {survival}%
          </p>
          <p className="font-crimson text-sm text-parchment-dark italic">
            {winterComment}
          </p>
        </div>

        <div className="gold-divider mb-6" />

        <div
          className="relative z-10 animate-count"
          style={{ animationDelay: '0.6s', opacity: 0 }}
        >
          <div className="bg-medieval-bg/50 rounded-xl p-4 border border-medieval-border/50">
            <p className="font-cinzel text-xs tracking-[0.2em] text-gold-dark uppercase mb-2 text-center">
              {t.chronicleSays}
            </p>
            <p className="font-crimson text-base sm:text-lg text-parchment leading-relaxed text-center italic">
              &ldquo;{narrative}&rdquo;
            </p>
          </div>
        </div>

        <div
          className="mt-8 flex flex-col sm:flex-row gap-3 relative z-10 animate-count"
          style={{ animationDelay: '0.8s', opacity: 0 }}
        >
          <button
            id="copy-result-btn"
            onClick={onCopy}
            className="btn-medieval flex-1 py-3 px-6 rounded-xl font-cinzel text-sm tracking-wider uppercase
              bg-medieval-border/80 text-parchment border border-gold-dark/30
              hover:bg-medieval-border cursor-pointer transition-colors"
          >
            {copied ? t.copiedBtn : t.copyBtn}
          </button>
          <button
            id="try-again-btn"
            onClick={onReset}
            className="btn-medieval flex-1 py-3 px-6 rounded-xl font-cinzel text-sm tracking-wider uppercase
              bg-gradient-to-r from-gold-dark to-gold text-medieval-bg font-bold
              hover:from-gold hover:to-gold-light cursor-pointer transition-all"
          >
            {t.tryAgainBtn}
          </button>
        </div>
      </div>
    </div>
  )
}
