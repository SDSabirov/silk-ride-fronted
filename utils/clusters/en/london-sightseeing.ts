import type { ClusterGuide } from '../types'

const guide: ClusterGuide = {
  slug: 'london-sightseeing',
  section: 'hourly-chauffeur',
  name: 'London Sightseeing',
  seo: {
    title: 'London Sightseeing by Chauffeur, by the Hour',
    description:
      'See London’s landmarks at your own pace in a private Mercedes with a chauffeur who waits at every stop. Hourly hire from £50, 4-hour minimum.',
  },
  kicker: 'Hourly Chauffeur Hire · London Sightseeing',
  hero: {
    title: 'London Sightseeing',
    titleAccent: 'by Chauffeur',
    subtitle:
      'Your route, your pace. A private Mercedes takes you from landmark to landmark and waits while you explore.',
    image: '/images/sclassBackground.webp',
    alt: 'A black Mercedes S-Class parked outside a modern glass building',
  },
  stats: [
    { icon: 'bx-map-alt', label: 'Your own route', sub: 'Stop where you like, for as long as you like' },
    { icon: 'bx-time', label: 'From 4 hours', sub: 'Half a day or a full day, by the hour' },
    { icon: 'bx-camera', label: 'The car waits', sub: 'Coats and bags stay on board at each stop' },
  ],
  overview: {
    kicker: 'London at your pace',
    heading: 'A private car between the landmarks',
    paragraphs: [
      'London sightseeing by chauffeur is the simplest way to see a great deal of the city without spending the day on the Underground or keeping to a tour bus timetable. You hire a Mercedes and its chauffeur by the hour, tell us what you would like to see, and the car takes you from one landmark to the next in whatever order suits you.',
      'At each stop the chauffeur sets you down as close to the sight as stopping rules allow, waits nearby with your coats, bags and shopping on board, and collects you when you call. Stay ten minutes for a photograph or two hours inside — nothing is timed for you, and nobody else is in the car.',
      'It works particularly well for families with young children, for older travellers who would rather not walk long distances or manage the stairs on the Tube, for visitors with only a day in London, and for passengers with a long layover.',
    ],
    includesTitle: 'Included with every sightseeing booking',
    includes: [
      'A private Mercedes E-Class, S-Class or V-Class for your party only',
      'A professional, licensed chauffeur who knows London well',
      'A route built around the sights you choose',
      'The car waiting nearby at every stop',
      'Complimentary child seats on request',
      'Bottled water, Wi-Fi and phone chargers on board',
    ],
  },
  sections: [
    {
      kicker: 'Half a day',
      heading: 'A sample four-hour route',
      paragraphs: [
        'A classic first visit starts at Buckingham Palace, continues to Westminster Abbey and the Houses of Parliament, passes Trafalgar Square, follows the river east to St Paul’s Cathedral and finishes at the Tower of London and Tower Bridge. In four hours you can see all of these from the outside, with time for a short walk and photographs at each.',
        'Going inside takes longer than most visitors expect: the Abbey, St Paul’s and the Tower can each fill an hour and a half or more. If you want to visit one or two properly, either shorten the list or book five or six hours. Your chauffeur will suggest an order that keeps the driving short.',
      ],
      bullets: [
        'The Changing of the Guard is held on selected mornings; expect crowds and road closures by the palace',
        'Westminster Abbey and St Paul’s are open for worship only on Sundays',
        'Book timed tickets directly with attractions such as the Tower of London',
        'Attraction tickets are not included in the chauffeur hire',
      ],
    },
    {
      kicker: 'A full day',
      heading: 'Ideas for eight hours or more',
      paragraphs: [
        'With a full day you can add the west of the city: Kensington Palace and the museums of South Kensington, then the pastel-painted houses and Portobello Road in Notting Hill. Or head east to Greenwich for the Cutty Sark, the Old Royal Naval College and the Royal Observatory on the hill above.',
        'Hampton Court Palace, Henry VIII’s riverside palace around 13 miles south-west of the centre, is a half-day in itself once the drive is counted — allow about an hour each way. Because the hire is by the hour, lunch, afternoon tea or some shopping in Knightsbridge can be added wherever they fit.',
      ],
    },
    {
      kicker: 'Good to know',
      heading: 'A chauffeur, not a tour guide',
      paragraphs: [
        'Your chauffeur is a professional driver who knows London’s streets, sights and traffic well, and will gladly point things out along the way and suggest what is worth a stop. They are not a licensed tour guide: they do not give a guided commentary, and they stay with the car while you go inside.',
        'If you would like expert guiding, you are welcome to bring your own Blue Badge guide, who simply takes one of the seats. Stopping is tightly restricted across central London, so at some sights the set-down point is a short walk from the entrance — tell us if anyone in your party has limited mobility and we will plan for the closest options.',
      ],
    },
  ],
  journeys: {
    kicker: 'Journey times',
    title: 'How long between the sights?',
    intro:
      'Typical driving times in normal daytime traffic. The distances are short, but central London is slow and the minutes add up.',
    items: [
      { from: 'Buckingham Palace to Westminster Abbey', time: '5 – 15 min', note: 'Under a mile, alongside St James’s Park' },
      { from: 'Westminster to St Paul’s Cathedral', time: '15 – 25 min', note: 'Along the Embankment beside the Thames' },
      { from: 'St Paul’s to the Tower of London', time: '10 – 20 min', note: 'Through the City; Tower Bridge is next to the Tower' },
      { from: 'Tower of London to Greenwich', time: '25 – 40 min', note: 'For the Cutty Sark and the Royal Observatory' },
    ],
  },
  vehicles: {
    kicker: 'Choose your car',
    title: 'Which car for sightseeing?',
    intro:
      'All three are Mercedes with leather interiors and climate control. Choose by the size of your party and how much you will have with you.',
    notes: {
      eClass: 'A comfortable saloon for a couple or up to three passengers on a half-day tour.',
      sClass: 'Our flagship saloon, for those who want the quietest and most spacious way to see the city.',
      vClass: 'Seats up to seven, with a higher seating position and large windows — the natural choice for families, child seats and a pushchair.',
    },
    recommended: 'vClass',
  },
  pricing: {
    kicker: 'Pricing',
    title: 'What does a sightseeing chauffeur cost?',
    paragraphs: [
      'Sightseeing is booked as hourly chauffeur hire, with a minimum of four hours. You pay for the time the car and chauffeur are with you, from pick-up to final drop-off, including the time the car waits while you are inside an attraction.',
      'A half-day of the main landmarks takes four to five hours and a full day eight or more. Tell us what you would like to see and we will quote for the whole booking before you book. Entrance tickets, meals and any guide you bring are separate.',
    ],
    points: [
      'Mercedes E-Class from £50 per hour',
      'Mercedes S-Class from £75 per hour',
      'Mercedes V-Class (up to 7 passengers) from £75 per hour',
      'Minimum booking of 4 hours',
      'Attraction tickets not included — book them directly with each venue',
    ],
  },
  faq: {
    kicker: 'FAQ',
    title: 'London sightseeing questions',
    intro: 'What visitors most often ask before booking a day around London by car.',
    items: [
      {
        question: 'What is included in London sightseeing by chauffeur?',
        answer:
          'A private Mercedes and a professional chauffeur for the hours you book, with bottled water, Wi-Fi and phone chargers on board and child seats on request. The car follows your route and waits at each stop. Attraction tickets, meals and guiding are not included.',
      },
      {
        question: 'Is the chauffeur a tour guide?',
        answer:
          'No. Your chauffeur is a licensed professional driver with good local knowledge, not a licensed tour guide. They will suggest a sensible route and point out landmarks as you pass, but they do not give a guided commentary or accompany you inside.',
      },
      {
        question: 'Can we choose our own route and change it during the day?',
        answer:
          'Yes. The route is entirely yours. Send us a list in advance or decide as you go; if the children are tired or the weather turns, the chauffeur simply changes course.',
      },
      {
        question: 'Do you provide child seats?',
        answer:
          'Yes, child seats are complimentary on request. Tell us each child’s age when you book so the right seats are fitted before the car arrives. For families we suggest the <a href="/fleet/mercedes-v-class">Mercedes V-Class</a>, which has room for a pushchair as well.',
      },
      {
        question: 'Can we see London during a layover at Heathrow?',
        answer:
          'Often, if you have enough time. Allow for immigration on arrival, about an hour’s drive each way and being back at the terminal well before your next flight; in practice that means a layover of eight hours or more. Check first that your passport or visa allows you to enter the UK. Your chauffeur meets you in arrivals at <a href="/airport-transfers/heathrow">Heathrow</a>, and any bags you have with you stay in the car.',
      },
      {
        question: 'How far in advance should we book?',
        answer:
          'We recommend at least 24 hours’ notice, and more in summer and during school holidays. Same-day bookings are often possible, subject to availability. You can change or cancel free of charge up to 24 hours before the booking.',
      },
    ],
  },
  related: {
    kicker: 'More from Silk Ride',
    title: 'Beyond central London',
    intro: 'Seen the city and have another day to spare?',
    extra: [
      {
        path: '/destination-tours/windsor',
        icon: 'bxs-castle',
        title: 'Windsor Castle Tour',
        tagline: 'A private day out from London to Windsor and its castle.',
      },
      {
        path: '/destination-tours',
        icon: 'bx-map',
        title: 'Private Day Tours from London',
        tagline: 'Stonehenge, Oxford, Cambridge, Bath and the Cotswolds by chauffeur.',
      },
    ],
  },
  cta: {
    title: 'Plan your London sightseeing day',
    subtitle: 'Tell us the date, your pick-up address and what you would like to see, and we will confirm the car and the price.',
  },
  schema: {
    serviceType: 'Hourly chauffeur hire',
    areaServed: [
      { type: 'City', name: 'London' },
      { type: 'Place', name: 'Westminster' },
      { type: 'Place', name: 'City of London' },
      { type: 'Place', name: 'Greenwich' },
    ],
    hourlyPriced: true,
  },
}

export default guide
