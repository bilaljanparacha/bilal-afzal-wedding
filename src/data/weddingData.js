export const weddingData = {
  bismillahArabic: 'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ',
  bismillahTranslation: 'In the name of Allah, the Most Gracious, the Most Merciful',
  hostsLine: 'Mr. & Mrs. Jan Muhammad',
  hostSubtitle:
    'Cordially invite you to grace the wedding ceremonies of their beloved sons',
  firstBrotherName: 'Bilal Jan',
  secondBrotherName: 'Afzal Jan',
  //monogram: 'B & A',
  invitationText:
    'With immense joy and gratitude to Almighty Allah, we warmly welcome you and your family to share in our happiness and bless this new chapter with your presence and prayers.',
  shortDatesBanner: '25 • 26 • 27 Dec 2026',
  cityBanner: 'Peshawar',
  // Barat start time in Pakistan Standard Time (UTC+5)
  countdownTargetISO: '2026-12-25T13:00:00+05:00',
  // Audio track placed in `public/wedding-music.mp3`
  customAudioUrl: `${import.meta.env.BASE_URL}wedding-music.mp3`,

  // Quick 3-day overview shown on the hero card
  dateHighlights: [
    {
      id: 'barat',
      label: 'Barat',
      day: 'Friday',
      date: '25 Dec 2026',
      timeRange: '12:30 PM Onwards',
      shortVenue: 'Jan Muhammad Residency',
    },
    {
      id: 'walima-residency',
      label: 'Walima',
      day: 'Saturday',
      date: '26 Dec 2026',
      timeRange: '11:30 AM – 2:00 PM',
      shortVenue: 'Jan Muhammad Residency',
    },
    {
      id: 'walima-arena',
      label: 'Grand Walima Dinner',
      day: 'Sunday',
      date: '27 Dec 2026',
      timeRange: '7:00 PM – 9:00 PM',
      shortVenue: 'Orbal Arena, Peshawar',
    },
  ],

  // Interactive 3-day schedule tabs
  scheduleDays: [
    {
      id: 'barat',
      tabTitle: 'Barat',
      tabDate: '25 Dec',
      fullTitle: 'Barat Ceremony',
      fullDate: 'Friday, 25th December 2026',
      timeRange: '12:30 PM Onwards',
      venueName: 'Jan Muhammad Residency',
      venueAddress: 'Jan Muhammad Residency, Village Khubai, Shabqadar',
      calendarStart: '2026-12-25T12:30:00+05:00',
      calendarEnd: '2026-12-25T17:00:00+05:00',
      events: [
        {
          time: '12:30 PM',
          title: 'Gathering of Guests & Sehra Bandi',
          description:
            'Warm family welcome, traditional Sehra Bandi, and heartfelt prayers for Bilal Jan & Afzal Jan.',
        },
        {
          time: '01:30 PM',
          title: 'Departure of Barat Procession',
          description:
            'Joyous departure of the Barat procession from Jan Muhammad Residency with family and friends.',
        },
        {
          time: '04:00 PM',
          title: 'Blessings & Rukhsati',
          description:
            'Heartfelt prayers for a blessed life ahead, followed by Rukhsati and a warm welcome of the brides.',
        },
      ],
    },
    {
      id: 'walima-residency',
      tabTitle: 'Walima',
      tabDate: '26 Dec',
      fullTitle: 'Walima at Residency',
      fullDate: 'Saturday, 26th December 2026',
      timeRange: '11:30 AM – 2:00 PM',
      venueName: 'Jan Muhammad Residency',
      venueAddress: 'Jan Muhammad Residency, Village Khubai, Shabqadar',
      calendarStart: '2026-12-26T11:30:00+05:00',
      calendarEnd: '2026-12-26T14:00:00+05:00',
      events: [
        {
          time: '11:30 AM',
          title: 'Arrival & Warm Reception',
          description:
            'Family and friends gather at Jan Muhammad Residency to congratulate the grooms and hosts.',
        },
        {
          time: '12:30 PM',
          title: 'Traditional Walima Lunch',
          description:
            'Hospitality and celebratory Walima meal served in the warmth of the family home.',
        },
        {
          time: '01:30 PM – 02:00 PM',
          title: 'Dua & Family Moments',
          description:
            'Special prayers for barakah, joy, and lifelong harmony for both couples.',
        },
      ],
    },
    {
      id: 'walima-arena',
      tabTitle: 'Walima Dinner',
      tabDate: '27 Dec',
      fullTitle: 'Grand Walima Dinner',
      fullDate: 'Sunday, 27th December 2026',
      timeRange: '7:00 PM – 9:00 PM',
      venueName: 'Orbal Arena',
      venueAddress: 'Northern Bypass, Charsadda Road, Peshawar',
      calendarStart: '2026-12-27T19:00:00+05:00',
      calendarEnd: '2026-12-27T21:00:00+05:00',
      events: [
        {
          time: '07:00 PM',
          title: 'Welcome of Honored Guests',
          description:
            'Grand reception and greetings by Mr. & Mrs. Jan Muhammad with Bilal Jan & Afzal Jan.',
        },
        {
          time: '07:15 PM',
          title: 'Walima Dinner',
          description:
            'Walima dinner hosted at Orbal Arena, Northern Bypass, Charsadda Road, Peshawar.',
        },
        {
          time: '08:30 PM – 09:00 PM',
          title: 'Portraits, Blessings & Farewell',
          description:
            'Cherished memories, photographs, and warm gratitude to all guests for gracing the evening.',
        },
      ],
    },
  ],

  // Venue cards with Google Maps links (update URLs anytime)
  venues: [
    {
      id: 'residency',
      eventBadge: 'Barat (25 Dec) & Walima (26 Dec · 11:30 AM – 2:00 PM)',
      name: 'Jan Muhammad Residency',
      address: 'Jan Muhammad Residency, Village Khubai, Shabqadar',
      note: 'Family Residence · Warm Traditional Hospitality',
      directionsUrl:
        'https://www.google.com/maps/place/JanSons+Mart/@34.2411278,71.579481,190m/data=!3m1!1e3!4m14!1m7!3m6!1s0x38d943de7390f2d5:0xfca38449cd8482ef!2sKhubai!8m2!3d34.2387626!4d71.5825652!16s%2Fg%2F11kj7m28nr!3m5!1s0x38d9437c3a9e7c09:0x275c57d9004205e1!8m2!3d34.241304!4d71.5794945!16s%2Fg%2F11njxyf7v1',
    },
    {
      id: 'orbal-arena',
      eventBadge: 'Grand Walima Dinner · 27 Dec (7:00 PM – 9:00 PM)',
      name: 'Orbal Arena',
      address: 'Northern Bypass, Charsadda Road, Peshawar, Khyber Pakhtunkhwa',
      note: 'Grand Reception Hall · Easy Bypass Access',
      directionsUrl:
        'https://www.google.com/maps/search/?api=1&query=Orbal+Arena+Northern+Bypass+Charsadda+Road+Peshawar',
    },
  ],

  closingDua:
    'May Almighty Allah shower His endless blessings upon Bilal Jan & Afzal Jan and unite their families in love, peace, and prosperity.',
  footerNote: 'We warmly await your presence and blessings on this joyous occasion.',
}
