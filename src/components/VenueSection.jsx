import { motion } from 'framer-motion'
import { MapPin, Navigation } from 'lucide-react'
import { GoldDivider } from './Ornaments'

export function VenueSection({ venues }) {
  return (
    <motion.section
      id="venues"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="py-12 px-5 sm:px-9 border-t border-[#D4AF37]/40 bg-[#F5EDE0]/75 text-center"
    >
      <p className="font-royal text-[10px] tracking-[0.3em] text-[#8C6218] uppercase">
        Wedding Venues
      </p>
      <h2 className="font-calligraphy text-4xl sm:text-5xl gold-foil-text mt-1">
        Venues &amp; Directions
      </h2>
      <GoldDivider />

      <div className="space-y-5">
        {venues.map((venue) => (
          <div
            key={venue.id}
            className="bg-white/80 border border-[#D4AF37]/50 rounded-2xl p-5 sm:p-6 shadow-[0_6px_18px_rgba(43,8,18,0.05)]"
          >
            <span className="inline-block font-royal text-[10px] font-semibold tracking-[0.2em] text-[#8C6218] uppercase bg-[#F6EFE2] px-3 py-1 rounded-full border border-[#D4AF37]/35">
              {venue.eventBadge}
            </span>

            <h3 className="font-royal text-base sm:text-lg font-semibold tracking-[0.1em] text-[#2B0812] mt-3">
              {venue.name}
            </h3>

            <p className="font-serif-luxury text-base sm:text-lg text-[#4A1221] mt-1.5 flex items-start justify-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#996515] shrink-0 mt-1" />
              <span>{venue.address}</span>
            </p>

            {venue.note && (
              <p className="font-serif-luxury italic text-sm text-[#7A5210] mt-1">
                {venue.note}
              </p>
            )}

            <a
              href={venue.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#3B0B18] via-[#4E1021] to-[#2B0812] text-[#F3E5AB] border border-[#D4AF37] font-royal text-xs tracking-[0.2em] uppercase shadow-[0_8px_20px_rgba(43,8,18,0.25)] hover:shadow-[0_10px_25px_rgba(212,175,55,0.35)] active:scale-[0.98] transition-all"
            >
              <Navigation className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Get Directions</span>
            </a>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
