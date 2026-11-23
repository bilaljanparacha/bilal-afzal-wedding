import { AnimatePresence, motion } from 'framer-motion'
import { CalendarPlus, Clock, MapPin } from 'lucide-react'
import { downloadEventCalendar } from '../utils/calendar'
import { GoldDivider } from './Ornaments'

export function ScheduleSection({ data, activeDayId, onChangeDay }) {
  const activeDay =
    data.scheduleDays.find((d) => d.id === activeDayId) || data.scheduleDays[0]

  const handleSaveCalendar = () => {
    downloadEventCalendar({
      id: activeDay.id,
      title: `${activeDay.fullTitle} — ${data.firstBrotherName} & ${data.secondBrotherName}`,
      description: `${data.hostsLine} invite you to the ${activeDay.fullTitle} of ${data.firstBrotherName} & ${data.secondBrotherName}.`,
      location: `${activeDay.venueName}, ${activeDay.venueAddress}`,
      startISO: activeDay.calendarStart,
      endISO: activeDay.calendarEnd,
    })
  }

  return (
    <motion.section
      id="schedule"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8 }}
      className="py-12 px-5 sm:px-9 border-t border-[#D4AF37]/40 text-center"
    >
      <p className="font-royal text-[10px] tracking-[0.3em] text-[#8C6218] uppercase">
        Three Days of Blessings
      </p>
      <h2 className="font-calligraphy text-4xl sm:text-5xl gold-foil-text mt-1">
        Wedding Programme
      </h2>
      <GoldDivider />

      {/* 3-Day Tab Switcher */}
      <div
        role="tablist"
        aria-label="Wedding schedule days"
        className="grid grid-cols-3 gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-[#EFE6D6]/90 border border-[#D4AF37]/45 mb-6"
      >
        {data.scheduleDays.map((day) => {
          const isActive = day.id === activeDay.id
          return (
            <button
              key={day.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onChangeDay(day.id)}
              className={`rounded-xl py-2.5 px-1.5 transition-all cursor-pointer ${
                isActive
                  ? 'bg-gradient-to-b from-[#450D1D] to-[#2B0812] text-[#F3E5AB] shadow-[0_6px_16px_rgba(43,8,18,0.28)] border border-[#D4AF37]/80'
                  : 'text-[#4A1221] hover:bg-white/60 border border-transparent'
              }`}
            >
              <span className="block font-royal text-[9px] sm:text-[10px] font-semibold tracking-[0.12em] uppercase leading-tight">
                {day.tabTitle}
              </span>
              <span
                className={`block font-serif-luxury text-xs sm:text-sm font-semibold mt-0.5 ${
                  isActive ? 'text-[#D4AF37]' : 'text-[#8C6218]'
                }`}
              >
                {day.tabDate}
              </span>
            </button>
          )
        })}
      </div>

      {/* Active Day Details */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeDay.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
          className="text-left bg-white/75 border border-[#D4AF37]/50 rounded-2xl p-5 sm:p-6 shadow-[0_8px_24px_rgba(43,8,18,0.06)]"
        >
          <div className="text-center pb-4 border-b border-[#D4AF37]/30">
            <h3 className="font-royal text-base sm:text-lg font-semibold tracking-[0.12em] text-[#2B0812] uppercase">
              {activeDay.fullTitle}
            </h3>
            <p className="font-serif-luxury font-semibold text-base sm:text-lg text-[#8C6218] mt-0.5">
              {activeDay.fullDate}
            </p>
            {activeDay.timeRange && (
              <p className="inline-flex items-center justify-center gap-1.5 font-royal text-[10px] sm:text-xs font-semibold tracking-[0.16em] text-[#3B0B18] bg-[#F6EFE2] border border-[#D4AF37]/45 px-3 py-1 rounded-full mt-2 uppercase">
                <Clock className="w-3 h-3 text-[#996515]" />
                <span>{activeDay.timeRange}</span>
              </p>
            )}
            <p className="font-serif-luxury italic text-sm sm:text-base text-[#5A2634] mt-2 inline-flex items-center justify-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#996515] shrink-0" />
              <span>
                {activeDay.venueName} — {activeDay.venueAddress}
              </span>
            </p>
          </div>

          {/* Vertical Timeline */}
          <ol className="relative mt-5 ml-2.5 pl-5 border-l border-[#D4AF37]/55 space-y-5">
            {activeDay.events.map((event) => (
              <li key={event.title} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[25px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#D4AF37] ring-4 ring-[#FBF8F1]"
                />
                <span className="inline-flex items-center gap-1 font-royal text-[10px] font-semibold tracking-[0.18em] text-[#8C6218] uppercase">
                  <Clock className="w-3 h-3 text-[#B8861B]" />
                  {event.time}
                </span>
                <h4 className="font-royal text-xs sm:text-sm font-semibold tracking-[0.06em] text-[#2B0812] mt-1">
                  {event.title}
                </h4>
                <p className="font-serif-luxury text-base text-[#4A1221]/90 leading-snug mt-0.5">
                  {event.description}
                </p>
              </li>
            ))}
          </ol>

          {/* Save to Calendar CTA */}
          <div className="mt-6 pt-4 border-t border-[#D4AF37]/30 text-center">
            <button
              type="button"
              onClick={handleSaveCalendar}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#FBF8F1] hover:bg-[#F3E5AB]/35 text-[#3B0B18] border border-[#D4AF37] font-royal text-[10px] sm:text-xs font-semibold tracking-[0.18em] uppercase transition-all active:scale-[0.98] cursor-pointer"
            >
              <CalendarPlus className="w-3.5 h-3.5 text-[#996515]" />
              <span>Add {activeDay.tabTitle} ({activeDay.tabDate}) to Calendar</span>
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.section>
  )
}
