import { useId } from 'react'
import { motion } from 'framer-motion'

export function CornerFiligree({ className = '' }) {
  return (
    <svg
      viewBox="0 0 180 180"
      className={`pointer-events-none select-none ${className}`}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="goldLeafGrad" x1="0" y1="0" x2="180" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8C6218" />
          <stop offset="45%" stopColor="#D4AF37" />
          <stop offset="70%" stopColor="#F3E5AB" />
          <stop offset="100%" stopColor="#996515" />
        </linearGradient>
      </defs>

      {/* Outer L-frame flourish */}
      <path
        d="M12 12 L145 12 M12 12 L12 145"
        stroke="url(#goldLeafGrad)"
        strokeWidth="1.2"
        strokeOpacity="0.65"
      />
      <path
        d="M20 20 L118 20 M20 20 L20 118"
        stroke="url(#goldLeafGrad)"
        strokeWidth="0.7"
        strokeOpacity="0.45"
      />

      {/* Sweeping royal botanical vines */}
      <path
        d="M18 18 C48 18, 62 34, 82 26 C96 20, 114 22, 132 16"
        stroke="url(#goldLeafGrad)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M18 18 C18 48, 34 62, 26 82 C20 96, 22 114, 16 132"
        stroke="url(#goldLeafGrad)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M24 24 C45 32, 54 52, 46 68 C40 80, 28 74, 34 60"
        stroke="url(#goldLeafGrad)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeOpacity="0.8"
      />
      <path
        d="M24 24 C32 45, 52 54, 68 46 C80 40, 74 28, 60 34"
        stroke="url(#goldLeafGrad)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeOpacity="0.8"
      />

      {/* Delicate leaves & dots */}
      <ellipse cx="62" cy="24" rx="6" ry="2.4" transform="rotate(-14 62 24)" fill="url(#goldLeafGrad)" fillOpacity="0.55" />
      <ellipse cx="96" cy="21" rx="5.5" ry="2.2" transform="rotate(10 96 21)" fill="url(#goldLeafGrad)" fillOpacity="0.55" />
      <ellipse cx="24" cy="62" rx="2.4" ry="6" transform="rotate(14 24 62)" fill="url(#goldLeafGrad)" fillOpacity="0.55" />
      <ellipse cx="21" cy="96" rx="2.2" ry="5.5" transform="rotate(-10 21 96)" fill="url(#goldLeafGrad)" fillOpacity="0.55" />

      <circle cx="18" cy="18" r="3" fill="url(#goldLeafGrad)" />
      <circle cx="136" cy="22" r="2.2" fill="url(#goldLeafGrad)" />
      <circle cx="152" cy="16" r="1.6" fill="url(#goldLeafGrad)" />
      <circle cx="22" cy="136" r="2.2" fill="url(#goldLeafGrad)" />
      <circle cx="16" cy="152" r="1.6" fill="url(#goldLeafGrad)" />
    </svg>
  )
}

export function RoyalCrest({ monogram }) {
  const uid = useId().replace(/:/g, '')
  const goldGradId = `crestGold-${uid}`

  return (
    <div className="relative flex flex-col items-center justify-center my-2">
      <svg
        viewBox="0 0 220 120"
        className="w-44 sm:w-52 h-auto overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={`Monogram ${monogram}`}
      >
        <defs>
          {/* Animated shimmering gold foil gradient matching the grooms' names (.gold-foil-text) */}
          <linearGradient
            id={goldGradId}
            x1="0"
            y1="0"
            x2="220"
            y2="40"
            gradientUnits="userSpaceOnUse"
            spreadMethod="repeat"
          >
            <stop offset="0%" stopColor="#8A5D12" />
            <stop offset="22%" stopColor="#C89B2B" />
            <stop offset="48%" stopColor="#F3E5AB" />
            <stop offset="72%" stopColor="#AA771C" />
            <stop offset="100%" stopColor="#8A5D12" />
            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              from="0 0"
              to="220 0"
              dur="6s"
              repeatCount="indefinite"
            />
          </linearGradient>
        </defs>

        {/* Crown */}
        <g transform="translate(92, 6)">
          <path
            d="M4 22 L2 8 L11 15 L18 4 L25 15 L34 8 L32 22 Z"
            stroke={`url(#${goldGradId})`}
            strokeWidth="1.5"
            fill={`url(#${goldGradId})`}
            fillOpacity="0.22"
          />
          <line x1="4" y1="25" x2="32" y2="25" stroke={`url(#${goldGradId})`} strokeWidth="1.5" />
          <circle cx="18" cy="2" r="1.6" fill={`url(#${goldGradId})`} />
          <circle cx="2" cy="6" r="1.3" fill={`url(#${goldGradId})`} />
          <circle cx="34" cy="6" r="1.3" fill={`url(#${goldGradId})`} />
        </g>

        {/* Left wreath */}
        <path d="M72 95 C42 92, 26 70, 34 45 C39 30, 54 24, 66 28" stroke={`url(#${goldGradId})`} strokeWidth="1.4" strokeLinecap="round" />
        <path d="M66 102 C32 98, 14 72, 24 42" stroke={`url(#${goldGradId})`} strokeWidth="0.75" strokeDasharray="2 3" />
        <ellipse cx="32" cy="66" rx="5" ry="2.2" transform="rotate(-35 32 66)" fill={`url(#${goldGradId})`} fillOpacity="0.65" />
        <ellipse cx="36" cy="52" rx="5" ry="2.2" transform="rotate(-15 36 52)" fill={`url(#${goldGradId})`} fillOpacity="0.65" />
        <ellipse cx="45" cy="39" rx="5" ry="2.2" transform="rotate(15 45 39)" fill={`url(#${goldGradId})`} fillOpacity="0.65" />
        <ellipse cx="38" cy="80" rx="5" ry="2.2" transform="rotate(-55 38 80)" fill={`url(#${goldGradId})`} fillOpacity="0.65" />

        {/* Right wreath */}
        <path d="M148 95 C178 92, 194 70, 186 45 C181 30, 166 24, 154 28" stroke={`url(#${goldGradId})`} strokeWidth="1.4" strokeLinecap="round" />
        <path d="M154 102 C188 98, 206 72, 196 42" stroke={`url(#${goldGradId})`} strokeWidth="0.75" strokeDasharray="2 3" />
        <ellipse cx="188" cy="66" rx="5" ry="2.2" transform="rotate(35 188 66)" fill={`url(#${goldGradId})`} fillOpacity="0.65" />
        <ellipse cx="184" cy="52" rx="5" ry="2.2" transform="rotate(15 184 52)" fill={`url(#${goldGradId})`} fillOpacity="0.65" />
        <ellipse cx="175" cy="39" rx="5" ry="2.2" transform="rotate(-15 175 39)" fill={`url(#${goldGradId})`} fillOpacity="0.65" />
        <ellipse cx="182" cy="80" rx="5" ry="2.2" transform="rotate(55 182 80)" fill={`url(#${goldGradId})`} fillOpacity="0.65" />

        {/* Open Medallion */}
        <ellipse cx="110" cy="66" rx="44" ry="34" stroke={`url(#${goldGradId})`} strokeWidth="1.3" />
        <ellipse cx="110" cy="66" rx="40" ry="30" stroke={`url(#${goldGradId})`} strokeWidth="0.65" strokeDasharray="3 2" />

        <text
          x="110"
          y="73"
          textAnchor="middle"
          fill={`url(#${goldGradId})`}
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: '21px',
            fontWeight: 700,
            letterSpacing: '0.12em',
          }}
        >
          {monogram}
        </text>
      </svg>
    </div>
  )
}

export function GoldDivider({ dark = false }) {
  return (
    <div className="flex items-center justify-center my-5 w-full max-w-xs mx-auto" aria-hidden="true">
      <svg viewBox="0 0 280 28" className="w-full h-7" fill="none">
        <defs>
          <linearGradient id={dark ? 'divGoldDark' : 'divGoldLight'} x1="0" y1="0" x2="280" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
            <stop offset="25%" stopColor="#AA771C" stopOpacity="0.8" />
            <stop offset="50%" stopColor={dark ? '#F3E5AB' : '#D4AF37'} stopOpacity="1" />
            <stop offset="75%" stopColor="#AA771C" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="10" y1="14" x2="112" y2="14" stroke={`url(#${dark ? 'divGoldDark' : 'divGoldLight'})`} strokeWidth="1" />
        <line x1="168" y1="14" x2="270" y2="14" stroke={`url(#${dark ? 'divGoldDark' : 'divGoldLight'})`} strokeWidth="1" />
        <path d="M118 14 C124 7, 132 7, 140 14 C148 21, 156 21, 162 14" stroke={`url(#${dark ? 'divGoldDark' : 'divGoldLight'})`} strokeWidth="1.2" />
        <path d="M118 14 C124 21, 132 21, 140 14 C148 7, 156 7, 162 14" stroke={`url(#${dark ? 'divGoldDark' : 'divGoldLight'})`} strokeWidth="1.2" />
        <polygon points="140,8 145,14 140,20 135,14" fill={`url(#${dark ? 'divGoldDark' : 'divGoldLight'})`} />
        <circle cx="106" cy="14" r="1.8" fill={`url(#${dark ? 'divGoldDark' : 'divGoldLight'})`} />
        <circle cx="174" cy="14" r="1.8" fill={`url(#${dark ? 'divGoldDark' : 'divGoldLight'})`} />
      </svg>
    </div>
  )
}

const PARTICLES = [
  { id: 1, left: '8%', top: '14%', size: 3, duration: 7.5, delay: 0 },
  { id: 2, left: '22%', top: '78%', size: 2.5, duration: 9, delay: 1.2 },
  { id: 3, left: '36%', top: '28%', size: 2, duration: 6.8, delay: 0.6 },
  { id: 4, left: '52%', top: '65%', size: 3.5, duration: 8.5, delay: 2.1 },
  { id: 5, left: '68%', top: '20%', size: 2.5, duration: 7.2, delay: 0.9 },
  { id: 6, left: '84%', top: '42%', size: 3, duration: 9.2, delay: 1.7 },
  { id: 7, left: '91%', top: '76%', size: 2, duration: 6.5, delay: 0.4 },
  { id: 8, left: '15%', top: '48%', size: 2.5, duration: 8.1, delay: 2.5 },
  { id: 9, left: '74%', top: '86%', size: 3, duration: 7.8, delay: 1.4 },
  { id: 10, left: '44%', top: '12%', size: 2, duration: 8.8, delay: 0.2 },
]

export function GoldenParticles({ intense = false }) {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10" aria-hidden="true">
      {PARTICLES.map((p) => (
        <motion.span
          key={p.id}
          initial={{ opacity: 0.15, y: 0 }}
          animate={{
            opacity: intense ? [0.35, 0.95, 0.35] : [0.15, 0.55, 0.15],
            y: intense ? [-12, -48, -12] : [0, -28, 0],
            scale: intense ? [1, 1.45, 1] : [1, 1.15, 1],
          }}
          transition={{
            duration: intense ? p.duration * 0.55 : p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
          className="absolute rounded-full bg-[#F3E5AB] shadow-[0_0_8px_rgba(212,175,55,0.85)]"
        />
      ))}
    </div>
  )
}
