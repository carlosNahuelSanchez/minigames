import { useState, useCallback } from 'react'
import { useLanguage } from './context/LanguageContext'
import { PROFESSIONS } from './utils/data'
import {
  getRandomItem,
  calculateValue,
  calculateSurvival,
  getWinterComment,
  generateNarrative,
} from './utils/calculations'

import LanguageToggle from './components/LanguageToggle'
import Header from './components/Header'
import Footer from './components/Footer'
import InputCard from './components/InputCard'
import LoadingState from './components/LoadingState'
import ResultCard from './components/ResultCard'

export default function App() {
  const { lang } = useLanguage()

  const [age, setAge] = useState(25)
  const [strength, setStrength] = useState(5)
  const [intelligence, setIntelligence] = useState(5)
  const [skills, setSkills] = useState(5)
  const [result, setResult] = useState(null)
  const [copied, setCopied] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)

  const handleCalculate = useCallback(() => {
    setIsCalculating(true)
    setResult(null)
    setCopied(false)

    setTimeout(() => {
      const coins = calculateValue(age, strength, intelligence, skills)
      const profession = getRandomItem(PROFESSIONS)
      const survival = calculateSurvival(age, strength, intelligence, skills)
      const winterComment = getWinterComment(survival, lang)
      const professionTitle = profession.title[lang] || profession.title.en
      const narrative = generateNarrative(professionTitle, coins, lang)

      setResult({ coins, profession, survival, winterComment, narrative })
      setIsCalculating(false)
    }, 1200)
  }, [age, strength, intelligence, skills, lang])

  const handleReset = useCallback(() => {
    setResult(null)
    setCopied(false)
  }, [])

  const handleCopy = useCallback(async () => {
    if (!result) return

    const profTitle = result.profession.title[lang] || result.profession.title.en
    const text =
      lang === 'es'
        ? `⚔️ Calculador de Valor Medieval ⚔️\n\n🪙 Mi valor: ${result.coins} Monedas de Plata\n👤 Profesión: ${profTitle}\n❄️ Supervivencia invernal: ${result.survival}%\n\n📜 "${result.narrative}"\n\n¡Descubrí el tuyo! 🏰`
        : `⚔️ Medieval Market Value Calculator ⚔️\n\n🪙 My value: ${result.coins} Silver Coins\n👤 Profession: ${profTitle}\n❄️ Winter survival: ${result.survival}%\n\n📜 "${result.narrative}"\n\nFind out yours! 🏰`

    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = text
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }, [result, lang])

  return (
    <div className="parchment-bg min-h-screen flex flex-col items-center justify-start py-8 px-4 sm:py-12">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/[0.03] rounded-full blur-3xl pointer-events-none animate-flicker" />

      <main className="relative z-10 w-full max-w-md">
        <Header />

        {!result && !isCalculating && (
          <InputCard
            age={age}
            setAge={setAge}
            strength={strength}
            setStrength={setStrength}
            intelligence={intelligence}
            setIntelligence={setIntelligence}
            skills={skills}
            setSkills={setSkills}
            onCalculate={handleCalculate}
            isCalculating={isCalculating}
          />
        )}

        {isCalculating && <LoadingState />}

        {result && !isCalculating && (
          <ResultCard
            result={result}
            onReset={handleReset}
            onCopy={handleCopy}
            copied={copied}
          />
        )}

        <Footer />
        <LanguageToggle />

        <div className="mt-4 mb-2 flex justify-center relative z-10">
          <a
            id="github-source-btn"
            href="https://github.com/carlosNahuelSanchez/minigames/tree/main/medieval-market"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-medieval inline-flex items-center gap-2 py-2 px-5 rounded-xl
              font-cinzel text-xs tracking-wider uppercase
              bg-medieval-card text-parchment-dark border border-medieval-border
              hover:border-gold-dark/50 hover:text-parchment cursor-pointer transition-all"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            Source Code
          </a>
        </div>
      </main>
    </div>
  )
}
