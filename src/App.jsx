import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AudioToggle } from './components/AudioToggle'
import { CountdownTimer } from './components/CountdownTimer'
import { EnvelopeIntro } from './components/EnvelopeIntro'
import { Footer } from './components/Footer'
import { HeroInvitation } from './components/HeroInvitation'
import { GoldenParticles } from './components/Ornaments'
import { ScheduleSection } from './components/ScheduleSection'
import { VenueSection } from './components/VenueSection'
import { weddingData } from './data/weddingData'
import { RoyalAmbientAudio } from './utils/ambientAudio'

export default function App() {
  const [stage, setStage] = useState('closed') // 'closed' | 'cracking' | 'unfolding' | 'sliding' | 'opened'
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const [activeDayId, setActiveDayId] = useState(weddingData.scheduleDays[0].id)

  const audioRef = useRef(null)
  const timersRef = useRef([])

  useEffect(() => {
    audioRef.current = new RoyalAmbientAudio(weddingData.customAudioUrl)
    return () => {
      timersRef.current.forEach((id) => window.clearTimeout(id))
      if (audioRef.current) {
        audioRef.current.destroy()
      }
    }
  }, [])

  const clearStageTimers = () => {
    timersRef.current.forEach((id) => window.clearTimeout(id))
    timersRef.current = []
  }

  const handleOpenInvitation = () => {
    if (stage !== 'closed') return
    if (audioRef.current) {
      audioRef.current.start(setIsMusicPlaying)
    }

    setStage('cracking')
    timersRef.current.push(
      window.setTimeout(() => setStage('unfolding'), 650),
      window.setTimeout(() => setStage('sliding'), 1450),
      window.setTimeout(() => setStage('opened'), 2550)
    )
  }

  const handleReplayEnvelope = () => {
    clearStageTimers()
    window.scrollTo({ top: 0, behavior: 'instant' })
    setStage('closed')
  }

  const handleToggleAudio = () => {
    if (!audioRef.current) return
    if (isMusicPlaying) {
      audioRef.current.pause(setIsMusicPlaying)
    } else {
      audioRef.current.start(setIsMusicPlaying)
    }
  }

  const handleSelectDayFromHero = (dayId) => {
    setActiveDayId(dayId)
    const scheduleEl = document.getElementById('schedule')
    if (scheduleEl) {
      scheduleEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#160509] text-[#2B0812] selection:bg-[#D4AF37]/30 selection:text-[#2B0812] relative">
      <GoldenParticles intense={stage === 'sliding' || stage === 'unfolding'} />

      <AudioToggle
        visible={stage !== 'closed'}
        isPlaying={isMusicPlaying}
        onToggle={handleToggleAudio}
      />

      <AnimatePresence mode="wait">
        {stage === 'opened' ? (
          <motion.main
            key="stationery-main"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-20 w-full min-h-screen py-0 sm:py-8 md:py-12 px-0 sm:px-4 flex flex-col items-center"
          >
            {/* Mobile-first luxury stationery card */}
            <div className="w-full max-w-[480px] md:max-w-[540px] ivory-stationery-paper sm:rounded-2xl shadow-[0_25px_90px_rgba(0,0,0,0.85)] border-y sm:border border-[#D4AF37]/60 overflow-hidden relative">
              <div className="m-2.5 sm:m-4 border border-[#D4AF37]/65 sm:rounded-xl relative">
                <div className="m-1 border border-[#D4AF37]/30 sm:rounded-lg relative overflow-hidden">
                  <HeroInvitation
                    data={weddingData}
                    onSelectDay={handleSelectDayFromHero}
                  />

                  <CountdownTimer targetISO={weddingData.countdownTargetISO} />

                  <ScheduleSection
                    data={weddingData}
                    activeDayId={activeDayId}
                    onChangeDay={setActiveDayId}
                  />

                  <VenueSection venues={weddingData.venues} />

                  <Footer
                    data={weddingData}
                    onReplayEnvelope={handleReplayEnvelope}
                  />
                </div>
              </div>
            </div>
          </motion.main>
        ) : (
          <EnvelopeIntro
            data={weddingData}
            stage={stage}
            onOpen={handleOpenInvitation}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
