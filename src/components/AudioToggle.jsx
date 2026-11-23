import { AnimatePresence, motion } from 'framer-motion'
import { VolumeX } from 'lucide-react'

export function AudioToggle({ visible, isPlaying, onToggle }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          onClick={onToggle}
          aria-label={isPlaying ? 'Mute background music' : 'Play background music'}
          className="fixed top-4 right-4 z-50 flex items-center gap-2 px-3.5 py-2.5 min-h-[40px] rounded-full bg-[#24060F]/90 border border-[#D4AF37]/60 text-[#F3E5AB] shadow-[0_6px_20px_rgba(0,0,0,0.5)] backdrop-blur-md hover:border-[#F3E5AB] active:scale-95 transition-all cursor-pointer"
        >
          {isPlaying ? (
            <>
              <div className="flex items-end gap-[2px] h-3.5" aria-hidden="true">
                <motion.span
                  animate={{ height: ['4px', '14px', '6px'] }}
                  transition={{ duration: 0.7, repeat: Infinity }}
                  className="w-[2px] bg-[#D4AF37] rounded-full"
                />
                <motion.span
                  animate={{ height: ['12px', '5px', '14px'] }}
                  transition={{ duration: 0.55, repeat: Infinity }}
                  className="w-[2px] bg-[#F3E5AB] rounded-full"
                />
                <motion.span
                  animate={{ height: ['6px', '13px', '4px'] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="w-[2px] bg-[#D4AF37] rounded-full"
                />
              </div>
              <span className="font-royal text-[10px] tracking-[0.18em] uppercase hidden sm:inline">
                Sound On
              </span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="font-royal text-[10px] tracking-[0.18em] uppercase hidden sm:inline">
                Muted
              </span>
            </>
          )}
        </motion.button>
      )}
    </AnimatePresence>
  )
}
