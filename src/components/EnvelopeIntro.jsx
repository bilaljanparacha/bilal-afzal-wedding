import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { WaxSeal } from './WaxSeal'

export function EnvelopeIntro({ data, stage, onOpen }) {
  const isUnfolding = stage === 'unfolding' || stage === 'sliding'
  const isSliding = stage === 'sliding'

  return (
    <motion.section
      key="envelope-stage"
      exit={{ opacity: 0, scale: 1.06 }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-40 flex flex-col items-center justify-center px-5 py-8 overflow-hidden select-none"
      style={{
        background:
          'radial-gradient(circle at 50% 45%, #3B0B18 0%, #22050D 52%, #110206 100%)',
      }}
    >
      {/* Ambient golden halo */}
      <div
        className="absolute w-[520px] h-[520px] rounded-full pointer-events-none opacity-35"
        style={{
          background:
            'radial-gradient(circle, rgba(212,175,55,0.22) 0%, rgba(212,175,55,0.03) 50%, transparent 72%)',
        }}
      />

      {/* Top invitation heading */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: isSliding ? 0 : 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="text-center mb-7 sm:mb-9 z-20"
      >
        <p className="font-royal text-[11px] sm:text-xs tracking-[0.34em] text-[#D4AF37] uppercase mb-2">
          You Are Cordially Invited
        </p>
        <div className="w-24 h-[1px] mx-auto bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />
      </motion.div>

      {/* 3D Burgundy Leather Envelope */}
      <div
        className="relative w-full max-w-[360px] sm:max-w-[420px] aspect-[4/3] flex items-center justify-center"
        style={{ perspective: '1400px' }}
      >
        {/* Warm glow emerging from inside envelope */}
        <motion.div
          animate={{
            opacity: isUnfolding ? 1 : 0,
            scale: isSliding ? 1.45 : 1,
          }}
          transition={{ duration: 0.9 }}
          className="absolute inset-2 rounded-xl pointer-events-none z-10"
          style={{
            background:
              'radial-gradient(circle at 50% 35%, rgba(255, 243, 196, 0.95) 0%, rgba(212, 175, 55, 0.45) 45%, transparent 75%)',
            filter: 'blur(16px)',
          }}
        />

        <div
          onClick={onOpen}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              onOpen()
            }
          }}
          aria-label="Open wedding invitation envelope"
          className="relative w-full h-full rounded-xl burgundy-leather border border-[#D4AF37]/45 shadow-[0_28px_70px_rgba(0,0,0,0.85),inset_0_0_30px_rgba(0,0,0,0.65)] cursor-pointer overflow-visible"
        >
          <div className="absolute inset-2.5 rounded-lg border border-[#D4AF37]/25 pointer-events-none" />

          {/* Sliding Ivory Stationery Card Preview */}
          <motion.div
            initial={{ y: 0, scale: 0.92, opacity: 0.95 }}
            animate={
              isSliding
                ? { y: -155, scale: 1.06, opacity: 1 }
                : stage === 'unfolding'
                  ? { y: -22, scale: 0.95, opacity: 1 }
                  : { y: 0, scale: 0.92, opacity: 0 }
            }
            transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-4 top-3 bottom-3 rounded-lg ivory-stationery-paper border-2 border-[#D4AF37] shadow-[0_-10px_35px_rgba(243,229,171,0.45)] flex flex-col items-center justify-start pt-4 px-4 text-center z-10 pointer-events-none"
          >
            <span className="font-royal text-[9px] font-semibold tracking-[0.22em] text-[#8C6218] uppercase">
              {data.hostsLine}
            </span>
            <h2 className="font-calligraphy text-3xl sm:text-4xl gold-foil-text mt-1">
              {data.firstBrotherName} &amp; {data.secondBrotherName}
            </h2>
            <div className="w-16 h-[1px] bg-[#D4AF37]/60 my-1.5" />
            <p className="font-serif-luxury italic text-xs text-[#4A1221]">
              {data.shortDatesBanner} · {data.cityBanner}
            </p>
          </motion.div>

          {/* Envelope Front Pocket & Side Flaps */}
          <svg
            viewBox="0 0 400 300"
            className="absolute inset-0 w-full h-full rounded-xl pointer-events-none z-20"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="pocketGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#420C1B" />
                <stop offset="100%" stopColor="#26050E" />
              </linearGradient>
              <linearGradient id="sideFlapGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#380A17" />
                <stop offset="100%" stopColor="#21040C" />
              </linearGradient>
              <linearGradient id="goldTrim" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#8C6218" />
                <stop offset="50%" stopColor="#F3E5AB" />
                <stop offset="100%" stopColor="#8C6218" />
              </linearGradient>
            </defs>
            <polygon
              points="0,0 205,155 0,300"
              fill="url(#sideFlapGrad)"
              stroke="url(#goldTrim)"
              strokeWidth="0.8"
              strokeOpacity="0.45"
            />
            <polygon
              points="400,0 195,155 400,300"
              fill="url(#sideFlapGrad)"
              stroke="url(#goldTrim)"
              strokeWidth="0.8"
              strokeOpacity="0.45"
            />
            <path
              d="M0,300 L186,146 Q200,135 214,146 L400,300 Z"
              fill="url(#pocketGrad)"
              stroke="url(#goldTrim)"
              strokeWidth="1.2"
              strokeOpacity="0.7"
            />
            <path
              d="M125,255 Q165,225 200,245 Q235,225 275,255"
              fill="none"
              stroke="url(#goldTrim)"
              strokeWidth="0.9"
              strokeOpacity="0.45"
            />
            <circle cx="200" cy="245" r="2.5" fill="#D4AF37" fillOpacity="0.55" />
          </svg>

          {/* 3D Animated Top Flap */}
          <motion.div
            initial={{ rotateX: 0 }}
            animate={{ rotateX: isUnfolding ? 180 : 0 }}
            transition={{ duration: 0.95, ease: [0.4, 0, 0.2, 1] }}
            style={{
              transformOrigin: 'top center',
              transformStyle: 'preserve-3d',
              zIndex: isUnfolding ? 5 : 25,
            }}
            className="absolute inset-x-0 top-0 h-[58%] pointer-events-none"
          >
            <svg
              viewBox="0 0 400 175"
              className="w-full h-full drop-shadow-[0_12px_18px_rgba(0,0,0,0.65)]"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="topFlapGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#4A0E1E" />
                  <stop offset="65%" stopColor="#350915" />
                  <stop offset="100%" stopColor="#26050E" />
                </linearGradient>
              </defs>
              <path
                d="M0,0 L400,0 L214,162 Q200,174 186,162 Z"
                fill="url(#topFlapGrad)"
                stroke="#D4AF37"
                strokeWidth="1.4"
                strokeOpacity="0.75"
              />
              <path
                d="M24,10 L376,10 L208,150 Q200,157 192,150 Z"
                fill="none"
                stroke="#F3E5AB"
                strokeWidth="0.7"
                strokeOpacity="0.35"
              />
            </svg>
          </motion.div>

          {/* Centered Wax Seal */}
          <div className="absolute inset-0 flex items-center justify-center z-30">
            <WaxSeal
              monogram={data.monogram}
              isCracking={stage !== 'closed'}
              onClick={onOpen}
            />
          </div>
        </div>
      </div>

      {/* Bottom Tap Prompt */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: stage === 'closed' ? 1 : 0, y: 0 }}
        transition={{ duration: 0.9, delay: 0.35 }}
        onClick={onOpen}
        className="mt-8 sm:mt-10 text-center cursor-pointer z-20"
      >
        <p className="font-serif-luxury italic text-lg sm:text-xl text-[#F3E5AB] tracking-wide">
          Tap the Seal to Open Your Invitation
        </p>
        <motion.div
          animate={{ opacity: [0.35, 1, 0.35] }}
          transition={{ duration: 2.2, repeat: Infinity }}
          className="mt-2 flex items-center justify-center gap-2 text-[#D4AF37]"
        >
          <span className="w-8 h-[1px] bg-[#D4AF37]/60" />
          <Sparkles className="w-3.5 h-3.5" />
          <span className="w-8 h-[1px] bg-[#D4AF37]/60" />
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
