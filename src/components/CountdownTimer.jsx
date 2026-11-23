import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function getTimeRemaining(targetISO) {
  const diff = new Date(targetISO).getTime() - Date.now()
  if (Number.isNaN(diff) || diff <= 0) {
    return { finished: true, days: 0, hours: 0, minutes: 0, seconds: 0 }
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  return { finished: false, days, hours, minutes, seconds }
}

function padTwo(num) {
  return String(num).padStart(2, '0')
}

export function CountdownTimer({ targetISO }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeRemaining(targetISO))

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeRemaining(targetISO))
    }, 1000)
    return () => window.clearInterval(timer)
  }, [targetISO])

  const units = [
    { label: 'Days', value: padTwo(timeLeft.days) },
    { label: 'Hours', value: padTwo(timeLeft.hours) },
    { label: 'Minutes', value: padTwo(timeLeft.minutes) },
    { label: 'Seconds', value: padTwo(timeLeft.seconds) },
  ]

  return (
    <motion.section
      id="countdown"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75 }}
      className="py-10 px-5 sm:px-9 border-t border-[#D4AF37]/40 bg-[#24050E] text-center text-[#F3E5AB] relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 50% 0%, rgba(212,175,55,0.28) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10">
        <p className="font-royal text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase">
          Counting Down To The Celebrations
        </p>
        <h2 className="font-calligraphy text-4xl sm:text-5xl text-[#F3E5AB] mt-1">
          Save the Dates
        </h2>

        {timeLeft.finished ? (
          <p className="font-serif-luxury italic text-xl text-[#F3E5AB] mt-4">
            Alhamdulillah — The wedding celebrations have begun!
          </p>
        ) : (
          <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-sm mx-auto mt-5">
            {units.map((unit) => (
              <div
                key={unit.label}
                className="rounded-xl bg-[#350915]/90 border border-[#D4AF37]/50 py-3 px-1.5 shadow-[0_6px_18px_rgba(0,0,0,0.4)]"
              >
                <span className="block font-royal text-xl sm:text-2xl font-bold text-[#FFF2B2] tabular-nums">
                  {unit.value}
                </span>
                <span className="block font-royal text-[8px] sm:text-[9px] tracking-[0.18em] text-[#D4AF37] uppercase mt-1">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  )
}
