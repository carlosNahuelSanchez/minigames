import { NARRATIVE_TEMPLATES, WINTER_COMMENTS } from './data'

export function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

export function calculateValue(age, strength, intelligence, skills) {
  const ageFactor =
    age <= 12 ? 0.4 :
    age <= 18 ? 0.7 :
    age <= 35 ? 1.0 :
    age <= 50 ? 0.75 :
    age <= 65 ? 0.45 : 0.2

  const baseValue = (strength * 12 + intelligence * 10 + skills * 14) * ageFactor
  const randomness = 0.8 + Math.random() * 0.4
  return Math.max(3, Math.round(baseValue * randomness))
}

export function calculateSurvival(age, strength, intelligence, skills) {
  let base = strength * 5 + intelligence * 3 + skills * 2
  if (age < 10 || age > 60) base *= 0.5
  else if (age > 45) base *= 0.7
  const randomness = 0.85 + Math.random() * 0.3
  return Math.min(99, Math.max(3, Math.round(base * randomness)))
}

export function getWinterComment(survival, lang = 'en') {
  const comments = WINTER_COMMENTS[lang] || WINTER_COMMENTS.en
  return comments.find((w) => survival >= w.min && survival <= w.max)?.text || '???'
}

export function generateNarrative(professionTitle, coins, lang = 'en') {
  const templates = NARRATIVE_TEMPLATES[lang] || NARRATIVE_TEMPLATES.en
  const template = getRandomItem(templates)
  return template
    .replace(/{profession}/g, professionTitle)
    .replace(/{coins}/g, coins)
}
