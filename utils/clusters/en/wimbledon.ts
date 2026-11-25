import type { ClusterGuide } from '../types'

const guide: ClusterGuide = {
  slug: 'wimbledon',
  section: 'event-chauffeur',
  name: 'Wimbledon',
  seo: {
    title: 'Wimbledon Chauffeur Service from London',
    description:
      'Chauffeur-driven travel to The Championships, Wimbledon, in a Mercedes. Your driver stays for a flexible return. Hourly hire from £50, 4-hour minimum.',
  },
  kicker: 'Event Chauffeur · Wimbledon',
  hero: {
    title: 'Wimbledon Chauffeur',
    titleAccent: 'to The Championships',
    subtitle:
      'Door to door to the All England Club in SW19, with one car and one chauffeur for the day — ready to take you home when play ends, not when the trains allow.',
    image: '/images/sclassBackground.webp',
    alt: 'A black Mercedes S-Class parked outside a modern glass building',
  },
  stats: [
    { icon: 'bx-map', label: 'Wimbledon, SW19', sub: 'About 7 miles south-west of central London' },
    { icon: 'bx-time', label: '40 min – 1 hr', sub: 'From central London in normal traffic' },
    { icon: 'bx-user-check', label: 'Chauffeur stays', sub: 'On hand for the journey home' },
  ],
  overview: {
    kicker: 'The tennis, without the trek',
    heading: 'A private car to Wimbledon and home again',
    paragraphs: [
      'The Championships take over the All England Lawn Tennis Club on Church Road, SW19, for two weeks from late June or the start of July until mid-July. For most spectators the journey is the least enjoyable part of the day: District line trains to Southfields are packed, the walk from the station takes a good fifteen minutes, and taxis are hard to find once play has finished. A Wimbledon chauffeur takes that part of the day off your hands.',
      'We collect you from your home, hotel or office in a Mercedes, drive you to SW19 and set you down as close to your gate as that year’s traffic arrangements allow. The same chauffeur then stays on the booking for the rest of the day, so the car you arrived in is the car that takes you home — by way of dinner in Wimbledon Village or Chelsea, if you wish.',
      'That matters at Wimbledon, because nobody can tell you when your day will end: a five-set match, a rain delay or an evening session under the roof can all push it back. With hourly hire there is no pre-booked return slot — you message your chauffeur when you are ready to leave.',
    ],
    includesTitle: 'Included with every Wimbledon booking',
    includes: [
      'Door-to-door travel in a Mercedes E-Class, S-Class or V-Class',
      'A professionally trained, licensed chauffeur for the whole booking',
      'Complimentary bottled water, Wi-Fi and phone chargers on board',
      'Pick-up time planned around the order of play and local road closures',
      'A return journey when you are ready rather than at a fixed time',
      'Free changes and cancellation up to 24 hours before your booking',
    ],
  },
  sections: [
    {
      kicker: 'Planning your day',
      heading: 'How a day at The Championships runs',
      paragraphs: [
        'On most days the Grounds open in the morning, play on the outside courts starts at 11am and the show courts begin in the early afternoon. The order of play is published the evening before, which is the moment to decide how early you want to arrive — and to tell us if you would like to move your pick-up.',
        'From Mayfair, Knightsbridge or Kensington we suggest allowing a full hour during the fortnight, even though the distance is short. The roads through Putney, Wandsworth and Wimbledon Village carry far more traffic than usual, and the final approach to the Club is the slowest part.',
        'Finishing times are the unknown. Centre Court and No.1 Court both have roofs and lights, and matches there can run until the 11pm curfew. Your chauffeur keeps the car nearby; message as you leave your seat and they will head for the agreed collection point.',
      ],
      bullets: [
        'Play on the outside courts from 11am, show courts from early afternoon',
        'The order of play is published the evening before',
        'Show-court matches can continue under the roof until 11pm',
      ],
    },
    {
      kicker: 'On the day',
      heading: 'Drop-off and collection in SW19',
      paragraphs: [
        'During The Championships the roads around the Club are managed differently from the rest of the year. Parts of Church Road and the neighbouring streets are closed or restricted, parking nearby is tightly controlled, and the set-down and pick-up points for taxis and private hire cars are decided by the Club and the local council. The details change from year to year.',
        'We work to the current year’s arrangements, and tell you before the day where you will be set down and where your chauffeur will meet you afterwards.',
        'If you have a car park pass from the Club or from your hospitality provider, tell us when you book and your chauffeur can use it. Without one, the car waits away from the immediate area and returns when you call, so allow a little time between your message and the pick-up.',
      ],
    },
  ],
  journeys: {
    kicker: 'Journey times',
    title: 'How long does it take to reach Wimbledon?',
    intro: 'Typical driving times to the All England Club in normal traffic. During The Championships, allow more.',
    items: [
      { from: 'Central London', time: '40 min – 1 hr', note: 'Mayfair, Knightsbridge and Kensington, usually via Putney' },
      { from: 'The City & Canary Wharf', time: '1 hr – 1 hr 30', note: 'Crossing town is slower on weekday mornings' },
      { from: 'Heathrow Airport', time: '45 min – 1 hr 10', note: 'Straight from your flight, with luggage kept in the car' },
      { from: 'Gatwick Airport', time: '1 hr – 1 hr 30', note: 'Via the M23, approaching Wimbledon from the south' },
    ],
  },
  vehicles: {
    kicker: 'Choose your car',
    title: 'Which car for Wimbledon?',
    intro: 'All three are Mercedes with leather interiors and climate control — welcome after an afternoon in the sun on an uncovered court.',
    notes: {
      eClass: 'A quiet executive saloon for one to three people, and the most economical way to keep a car for the day.',
      sClass: 'Our flagship saloon, with the rear legroom to stretch out on the way home after a late finish on Centre Court.',
      vClass: 'Seats up to seven, so a family or a group of guests arrives and leaves together in one car.',
    },
    recommended: 'sClass',
  },
  pricing: {
    kicker: 'Pricing',
    title: 'What does a Wimbledon chauffeur cost?',
    paragraphs: [
      'A day at Wimbledon is booked as hourly chauffeur hire. You pay for the time the car and chauffeur are with you, from the pick-up until you are dropped home, rather than for two separate transfers — which is what makes an open-ended return possible.',
      'From central London a day at The Championships typically comes to between seven and ten hours, depending on when you arrive and how late play runs. If you expect to stay for the evening matches, say so when you book and we will allow for it in the quote we give you beforehand.',
    ],
    points: [
      'Mercedes E-Class from £50 per hour',
      'Mercedes S-Class from £75 per hour',
      'Mercedes V-Class (up to 7 passengers) from £75 per hour',
      'Minimum booking of 4 hours',
      'Pay by card, Apple Pay, Google Pay or bank transfer',
    ],
  },
  faq: {
    kicker: 'FAQ',
    title: 'Wimbledon chauffeur questions',
    intro: 'What clients most often want to know before a day at The Championships.',
    items: [
      {
        question: 'When should I book a Wimbledon chauffeur?',
        answer:
          'As soon as you know which day you are going. The Championships fall in the busiest weeks of the London summer, so the earlier you book, the more choice of car you have. Same-day bookings are sometimes possible, subject to availability, but we recommend at least 24 hours’ notice. You can change or cancel free of charge up to 24 hours before the booking.',
      },
      {
        question: 'What happens if play finishes late?',
        answer:
          'Your chauffeur stays with you for the whole booking, so there is no return slot to miss. Matches under the roofs can run until 11pm; if you think you may stay that late, tell us when you book so the hours are allowed for.',
      },
      {
        question: 'How close to the gates can you drop us?',
        answer:
          'As close as that year’s traffic arrangements allow. Set-down points for private hire cars are fixed by the Club and the local council, so we cannot promise a particular gate; we confirm the set-down and collection points with you before the day.',
      },
      {
        question: 'Can you collect us from Heathrow or Gatwick and drive straight to Wimbledon?',
        answer:
          'Yes. Your chauffeur tracks the flight and adjusts the pick-up if you land early or late, and your luggage stays in the car while you watch the tennis. If you would rather go to your hotel first, see our fixed-price <a href="/airport-transfers/heathrow">Heathrow</a> and <a href="/airport-transfers/gatwick">Gatwick</a> transfers.',
      },
      {
        question: 'Do you drive to other tennis events in London?',
        answer:
          'Yes. The same hourly service is available for the grass-court tournament at The Queen’s Club in West Kensington in June, and for Wimbledon qualifying at Roehampton in the week before The Championships.',
      },
    ],
  },
  related: {
    kicker: 'More from Silk Ride',
    title: 'Other events and services',
    intro: 'Flying in for the tennis, or deciding which car to take?',
    extra: [
      {
        path: '/airport-transfers/heathrow',
        icon: 'bxs-plane-alt',
        title: 'Heathrow Airport Transfers',
        tagline: 'Fixed-price transfers for visitors arriving in London for The Championships.',
      },
      {
        path: '/fleet/mercedes-s-class',
        icon: 'bx-car',
        title: 'Mercedes S-Class',
        tagline: 'A closer look at our flagship saloon, our recommendation for a day at Wimbledon.',
      },
    ],
  },
  cta: {
    title: 'Reserve your Wimbledon chauffeur',
    subtitle: 'Tell us the day, your pick-up address and how many of you are travelling, and we will confirm the car and the price.',
  },
  schema: {
    serviceType: 'Event chauffeur service',
    areaServed: [
      { type: 'Place', name: 'All England Lawn Tennis Club' },
      { type: 'Place', name: 'Wimbledon' },
      { type: 'City', name: 'London' },
    ],
    hourlyPriced: true,
  },
}

export default guide
