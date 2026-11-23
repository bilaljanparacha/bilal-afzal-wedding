// Generates an RFC 5545 .ics calendar file for a wedding ceremony event.

function formatICSDate(isoString) {
  const date = new Date(isoString)
  return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'
}

function escapeICSText(text) {
  return String(text)
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\n/g, '\\n')
}

export function downloadEventCalendar({
  id,
  title,
  description,
  location,
  startISO,
  endISO,
}) {
  const nowStamp = formatICSDate(new Date().toISOString())
  const startStamp = formatICSDate(startISO)
  const endStamp = formatICSDate(endISO)

  const icsLines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Bilal Jan & Afzal Jan Wedding//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${id}-2026@bilal-afzal-wedding`,
    `DTSTAMP:${nowStamp}`,
    `DTSTART:${startStamp}`,
    `DTEND:${endStamp}`,
    `SUMMARY:${escapeICSText(title)}`,
    `DESCRIPTION:${escapeICSText(description)}`,
    `LOCATION:${escapeICSText(location)}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ]

  const blob = new Blob([icsLines.join('\r\n')], {
    type: 'text/calendar;charset=utf-8',
  })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = `${id}-bilal-afzal-wedding.ics`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
