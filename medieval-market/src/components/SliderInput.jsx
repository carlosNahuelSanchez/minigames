import { useLanguage } from '../context/LanguageContext'

export default function SliderInput({ id, label, value, onChange, emoji }) {
  const { t } = useLanguage()

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className="font-cinzel text-sm tracking-wider text-parchment-dark uppercase"
        >
          {emoji} {label}
        </label>
        <span className="font-medieval text-xl text-gold min-w-[2ch] text-right">
          {value}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min="1"
        max="10"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full cursor-pointer"
      />
      <div className="flex justify-between text-xs text-parchment-deep/50 font-crimson">
        <span>{t.sliderMin}</span>
        <span>{t.sliderMax}</span>
      </div>
    </div>
  )
}
