import { motion } from 'framer-motion'

export function WaxSeal({ monogram, isCracking, onClick }) {
  return (
    <motion.button
      type="button"
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
      aria-label="Open Royal Wedding Invitation"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      animate={
        isCracking
          ? {
              scale: [1, 1.18, 0.85],
              opacity: [1, 1, 0],
              rotate: [0, -4, 6],
              filter: [
                'drop-shadow(0 0 18px rgba(243,229,171,0.5))',
                'drop-shadow(0 0 45px rgba(255,242,178,1))',
                'drop-shadow(0 0 0px rgba(212,175,55,0))',
              ],
            }
          : { scale: [1, 1.03, 1] }
      }
      transition={
        isCracking
          ? { duration: 0.75, ease: 'easeInOut' }
          : { duration: 3.2, repeat: Infinity, ease: 'easeInOut' }
      }
      className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F3E5AB] group z-30"
    >
      <motion.div
        animate={{ scale: [1, 1.28, 1], opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#996515] via-[#F3E5AB] to-[#D4AF37] blur-md pointer-events-none"
      />
      <svg
        viewBox="0 0 140 140"
        className="w-full h-full drop-shadow-[0_10px_18px_rgba(0,0,0,0.75)]"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="waxBody" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FFF2B2" />
            <stop offset="28%" stopColor="#E5C158" />
            <stop offset="68%" stopColor="#B8861B" />
            <stop offset="92%" stopColor="#7A520D" />
            <stop offset="100%" stopColor="#5C3B06" />
          </radialGradient>
          <radialGradient id="waxInner" cx="65%" cy="70%" r="70%">
            <stop offset="0%" stopColor="#F5DC84" />
            <stop offset="50%" stopColor="#C89B2B" />
            <stop offset="100%" stopColor="#855A10" />
          </radialGradient>
          <filter id="emboss">
            <feDropShadow dx="0.8" dy="1" stdDeviation="0.6" floodColor="#4A3004" floodOpacity="0.7" />
          </filter>
        </defs>

        <path
          d="M70,4 C86,3 102,9 114,20 C126,31 135,46 136,63 C137,80 132,98 121,111 C110,124 93,134 75,136 C57,138 38,132 25,120 C12,108 4,90 4,72 C4,54 11,35 23,22 C35,9 53,5 70,4 Z"
          fill="url(#waxBody)"
        />
        <circle cx="70" cy="70" r="53" fill="url(#waxInner)" stroke="#FFF3C4" strokeOpacity="0.45" strokeWidth="1.5" />
        <circle cx="70" cy="70" r="46" fill="none" stroke="#6E4909" strokeOpacity="0.65" strokeWidth="2" />
        <circle cx="70" cy="70" r="43" fill="none" stroke="#FCE89D" strokeOpacity="0.5" strokeWidth="0.9" strokeDasharray="2 2" />

        {/* Embossed crown */}
        <path d="M61 45 L60 38 L65 41 L70 35 L75 41 L80 38 L79 45 Z" fill="#FFF2B2" filter="url(#emboss)" />

        {/* Monogram */}
        <text
          x="70"
          y="77"
          textAnchor="middle"
          fill="#FFF4C2"
          filter="url(#emboss)"
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '22px',
            fontWeight: 700,
            letterSpacing: '0.08em',
          }}
        >
          {monogram}
        </text>
        <path d="M54 92 Q70 98 86 92" stroke="#FFF2B2" strokeWidth="1.2" fill="none" filter="url(#emboss)" />
      </svg>
    </motion.button>
  )
}
