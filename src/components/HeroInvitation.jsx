import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { CornerFiligree, GoldDivider, RoyalCrest } from './Ornaments'

export function HeroInvitation({ data, onSelectDay }) {
  return (
    <section className="relative pt-14 pb-12 px-5 sm:px-9 text-center overflow-hidden">
      {/* Ornate gold filigree corners */}
      <CornerFiligree className="w-24 h-24 sm:w-32 sm:h-32 absolute top-0 left-0" />
      <CornerFiligree className="w-24 h-24 sm:w-32 sm:h-32 absolute top-0 right-0 scale-x-[-1]" />
      <CornerFiligree className="w-20 h-20 sm:w-28 sm:h-28 absolute bottom-0 left-0 scale-y-[-1]" />
      <CornerFiligree className="w-20 h-20 sm:w-28 sm:h-28 absolute bottom-0 right-0 scale-[-1]" />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="relative z-10"
      >
        {/* Arabic Bismillah */}
        <p
          dir="rtl"
          lang="ar"
          className="font-arabic text-2xl sm:text-3xl font-bold gold-foil-text tracking-normal mb-1 drop-shadow-[0_1px_1px_rgba(122,82,16,0.18)]"
        >
          {data.bismillahArabic}
        </p>
        <p className="font-serif-luxury italic text-xs sm:text-sm text-[#7A5210]/85 mb-2">
          {data.bismillahTranslation}
        </p>

        {/* Monogram Crest */}
          {/* <RoyalCrest monogram={data.monogram} /> */}

        {/* Hosts */}
        <div className="mt-3 space-y-1.5 max-w-xs sm:max-w-sm mx-auto">
          <p className="font-royal text-xs sm:text-sm font-semibold tracking-[0.22em] text-[#7A5210] uppercase">
            {data.hostsLine}
          </p>
          <p className="font-serif-luxury italic text-base sm:text-lg text-[#4A1221] leading-snug">
            {data.hostSubtitle}
          </p>
        </div>

        {/* Brothers' Names */}
        <div className="my-5 sm:my-6">
          <h1 className="font-calligraphy text-5xl sm:text-6xl gold-foil-text leading-tight py-1">
            {data.firstBrotherName}
          </h1>
          <div className="flex items-center justify-center gap-3 my-1">
            <span className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="font-serif-luxury italic text-2xl text-[#8C6218]">&amp;</span>
            <span className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>
          <h1 className="font-calligraphy text-5xl sm:text-6xl gold-foil-text leading-tight py-1">
            {data.secondBrotherName}
          </h1>
        </div>

        {/* Invitation wording */}
        <p className="font-serif-luxury text-lg sm:text-xl text-[#3A0C18] leading-relaxed max-w-xs sm:max-w-sm mx-auto">
          {data.invitationText}
        </p>

        <GoldDivider />

        {/* 3-Day At-a-Glance Summary (2 + 1 balanced mobile layout) */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 max-w-sm mx-auto my-4">
          {data.dateHighlights.map((item, idx) => {
            const isFullWidth = idx === 2
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectDay(item.id)}
                className={`${
                  isFullWidth ? 'col-span-2' : ''
                } text-center bg-white/80 hover:bg-white border border-[#D4AF37]/60 hover:border-[#B8861B] rounded-xl p-3.5 shadow-[0_4px_14px_rgba(43,8,18,0.05)] transition-all active:scale-[0.98] cursor-pointer`}
              >
                <span className="block font-royal text-[10px] font-bold tracking-[0.2em] text-[#8C6218] uppercase">
                  {item.label}
                </span>
                <span className="block font-serif-luxury font-bold text-lg sm:text-xl text-[#2B0812] mt-0.5">
                  {item.date}
                </span>
                <span className="block font-serif-luxury italic text-xs sm:text-sm text-[#5A2634]">
                  {item.day}
                </span>
                {item.timeRange && (
                  <span className="block font-royal text-[9px] sm:text-[10px] font-semibold tracking-[0.12em] text-[#8C6218] mt-1">
                    {item.timeRange}
                  </span>
                )}
                <span className="block font-royal text-[9px] sm:text-[10px] tracking-[0.09em] text-[#7A5210] mt-1.5 pt-1.5 border-t border-[#D4AF37]/30">
                  {item.shortVenue}
                </span>
              </button>
            )
          })}
        </div>

        {/* Scroll Prompt */}
        <motion.a
          href="#countdown"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity }}
          className="mt-8 inline-flex flex-col items-center text-[#8C6218]/85 hover:text-[#6E4909] transition-colors"
        >
          <span className="font-royal text-[9px] tracking-[0.28em] uppercase">
            Scroll for Schedule &amp; Venues
          </span>
          <ChevronDown className="w-4 h-4 mt-1 text-[#D4AF37]" />
        </motion.a>
      </motion.div>
    </section>
  )
}
