import { RotateCcw, Share2 } from 'lucide-react'
import { GoldDivider, RoyalCrest } from './Ornaments'

export function Footer({ data, onReplayEnvelope }) {
  const handleWhatsAppShare = () => {
    const shareText = [
      `✨ Royal Wedding Invitation ✨`,
      `${data.hostsLine} cordially invite you to the wedding ceremonies of their beloved sons, ${data.firstBrotherName} & ${data.secondBrotherName}.`,
      ``,
      `📅 Barat: Friday, 25 Dec 2026 — Jan Muhammad Residency`,
      `📅 Walima: Saturday, 26 Dec 2026 (11:30 AM – 2:00 PM) — Jan Muhammad Residency`,
      `📅 Grand Walima Dinner: Sunday, 27 Dec 2026 (7:00 PM – 9:00 PM) — Orbal Arena, Northern Bypass, Charsadda Road, Peshawar`,
      ``,
      `View invitation: ${window.location.href}`,
    ].join('\n')

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <footer className="py-11 px-6 text-center bg-[#24050E] text-[#F3E5AB] border-t border-[#D4AF37]/50">
      <RoyalCrest monogram={data.monogram} />

      <p className="font-royal text-[10px] tracking-[0.26em] text-[#D4AF37] uppercase mt-1">
        Hosted By {data.hostsLine}
      </p>

      <p className="font-calligraphy text-3xl sm:text-4xl text-[#F3E5AB] mt-1.5">
        {data.firstBrotherName} &amp; {data.secondBrotherName}
      </p>

      <p className="font-royal text-[10px] tracking-[0.26em] text-[#D4AF37] uppercase mt-2">
        {data.shortDatesBanner} · {data.cityBanner}
      </p>

      <GoldDivider dark />

      <p className="font-serif-luxury italic text-base text-[#F3E5AB]/90 max-w-xs mx-auto leading-relaxed">
        {data.closingDua}
      </p>

      <p className="font-serif-luxury text-sm text-[#E6D5B8]/70 mt-3">
        {data.footerNote}
      </p>

      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
        <button
          type="button"
          onClick={handleWhatsAppShare}
          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 rounded-full bg-gradient-to-r from-[#B8861B] via-[#D4AF37] to-[#AA771C] text-[#24050E] font-royal text-[10px] sm:text-xs font-bold tracking-[0.18em] uppercase shadow-[0_6px_18px_rgba(212,175,55,0.28)] active:scale-[0.98] transition-all cursor-pointer"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>Share on WhatsApp</span>
        </button>

        <button
          type="button"
          onClick={onReplayEnvelope}
          className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 rounded-full bg-transparent hover:bg-[#350915] text-[#F3E5AB] border border-[#D4AF37]/60 font-royal text-[10px] sm:text-xs tracking-[0.18em] uppercase active:scale-[0.98] transition-all cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Replay Envelope</span>
        </button>
      </div>
    </footer>
  )
}
