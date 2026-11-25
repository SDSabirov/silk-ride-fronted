import type { ClusterGuide } from '../types'

const guide: ClusterGuide = {
  slug: 'new-years-eve-chauffeur',
  section: 'christmas',
  name: 'New Year’s Eve',
  seo: {
    title: 'New Year’s Eve Chauffeur in London',
    description:
      'Book a chauffeur for New Year’s Eve in London. Your Mercedes and driver wait while you celebrate and take you home when you choose. Hourly hire from £55.',
  },
  kicker: 'Christmas & New Year · New Year’s Eve',
  hero: {
    title: 'New Year’s Eve Chauffeur',
    titleAccent: 'in London',
    subtitle:
      'One car and one chauffeur for the night of 31 December: to dinner, to the party and home again when you decide, on the night London’s taxis are hardest to find.',
    image: '/images/hero-chauffeur.webp',
    alt: 'A chauffeur in a white glove opening the door of a black Mercedes',
  },
  stats: [
    { icon: 'bx-party', label: '31 December', sub: 'Car and chauffeur for the whole night' },
    { icon: 'bx-time', label: 'Hired by the hour', sub: 'Minimum 4 hours; leave when you choose' },
    { icon: 'bx-calendar', label: '24/7, 365 days', sub: 'Including New Year’s Day' },
  ],
  overview: {
    kicker: 'The hardest night to get home',
    heading: 'A car that is already yours at midnight',
    paragraphs: [
      'New Year’s Eve is the hardest night of the year to get home in London. Streets around the Thames, Westminster and the South Bank are closed to traffic for the ticketed fireworks, taxis and ride-hailing cars are scarce and expensive once midnight has passed, and the crowds leaving the centre are very large. A New Year’s Eve chauffeur in London cannot make the closures disappear, but the car is already yours when everyone else is looking for one.',
      'The service is booked by the hour. Your chauffeur collects you from home or your hotel, takes you to dinner, a party or the place you are staying, waits nearby, and drives you home when you decide the night is over rather than when an app finally finds a driver. Nobody in your party has to stay sober to drive.',
      'We operate 24 hours a day, 365 days a year, so the same service carries on into New Year’s Day: the drive back from a house party in the morning, a lunch reservation, or a flight from Heathrow or Gatwick on 1 January.',
    ],
    includesTitle: 'Included with every New Year’s Eve booking',
    includes: [
      'A Mercedes E-Class, S-Class or V-Class for the whole evening',
      'A professional, licensed chauffeur who stays with the car throughout',
      'Several stops in one booking: dinner, party, friends’ addresses, home',
      'Set-down and collection points planned around the published road closures',
      'Complimentary bottled water, Wi-Fi and phone chargers on board',
      'Free changes and cancellation up to 24 hours before your booking',
    ],
  },
  sections: [
    {
      kicker: 'The honest part',
      heading: 'What a car can and cannot do near the river',
      paragraphs: [
        'The fireworks are launched from the Thames in the heart of London, and an area on both banks is closed to vehicles for the evening. The closures begin well before midnight and stay in place into the early hours. No private car, taxi or chauffeur vehicle can drive into that zone, and ours is no exception.',
        'If your evening is inside or beside the closed area — a riverside restaurant, a hotel in Westminster, a ticketed viewing area — we agree a set-down point at the edge of the closures before the night, and a collection point for afterwards. You walk the last stretch, so allow time for it. The closure map is published ahead of each New Year’s Eve, and we plan around the current one rather than last year’s.',
        'Journeys in the first hour or so after midnight are slow across the centre, as crowds spill onto the roads and the routes that remain open carry the diverted traffic. We will tell you plainly what to expect, but nobody can promise a journey time on this night.',
      ],
      bullets: [
        'The car cannot enter the closed zone, with or without a fireworks ticket',
        'Set-down and collection points are agreed with you in advance',
        'Fireworks tickets come from the event organisers; we do not supply them',
        'Staying at a hotel inside the closures? Ask the hotel what access applies to its guests',
      ],
    },
    {
      kicker: 'Away from the centre',
      heading: 'House parties, country hotels and New Year’s Day',
      paragraphs: [
        'Plenty of New Year’s Eve plans are nowhere near the fireworks. For a house party in Richmond or Hampstead, a country hotel in Berkshire or Surrey, or a venue elsewhere in the home counties, the car goes door to door exactly as it would on any other evening, although roads everywhere are busier than usual after midnight.',
        'Because the hire is by the hour, the evening can have several stops: collect friends on the way, move from dinner to a second address before midnight, then take each person home in turn.',
        'On New Year’s Day the roads are generally quiet in the morning. A parade passes through the West End around the middle of the day and streets along its route are closed for it, so a lunch booking or hotel pick-up in that area needs a little planning. Airport transfers run as on any other day, with flight tracking on arrivals.',
      ],
    },
  ],
  journeys: {
    kicker: 'Journey times',
    title: 'How long do the journeys take?',
    intro:
      'Typical driving times on an ordinary evening in normal traffic. On New Year’s Eve itself, and above all in the hour or two after midnight, allow considerably longer.',
    items: [
      { from: 'Mayfair to Canary Wharf', time: '35 – 55 min', note: 'On the night, routed away from the riverside closures' },
      { from: 'Central London to Richmond', time: '40 min – 1 hr', note: 'South-west London; door to door as normal' },
      { from: 'Central London to Windsor', time: '50 min – 1 hr 15', note: 'About 25 miles west, mostly on the M4' },
      { from: 'Central London to Heathrow', time: '45 min – 1 hr 10', note: 'For flights on New Year’s Day' },
    ],
  },
  vehicles: {
    kicker: 'Choose your car',
    title: 'Which car for New Year’s Eve?',
    intro: 'All three are Mercedes with leather interiors and climate control. Choose by the size of your party and by what you will be wearing.',
    notes: {
      eClass: 'An executive saloon for a couple or up to three guests going out to dinner and home again.',
      sClass: 'The flagship saloon, with generous rear legroom for evening dress and a quiet cabin for the drive home in the small hours.',
      vClass: 'Seats up to seven, so a group of friends arrives together and nobody is left to find their own way back.',
    },
    recommended: 'sClass',
  },
  pricing: {
    kicker: 'Pricing',
    title: 'What does a New Year’s Eve chauffeur cost?',
    paragraphs: [
      'New Year’s Eve is booked as hourly chauffeur hire with a minimum of four hours. You pay for the time the car and chauffeur are with you, from the first pick-up until the last passenger is home, including the hours they wait while you celebrate.',
      'The figures below are our standard “from” rates. Tell us your addresses and rough timings, and the price for your date is confirmed before you book.',
    ],
    points: [
      'Mercedes E-Class from £55 per hour',
      'Mercedes S-Class from £75 per hour',
      'Mercedes V-Class (up to 7 passengers) from £75 per hour',
      'Minimum booking of 4 hours',
      'Price for your date confirmed before you book — pay by card, Apple Pay, Google Pay or bank transfer',
    ],
  },
  faq: {
    kicker: 'FAQ',
    title: 'New Year’s Eve chauffeur questions',
    intro: 'What is worth knowing before you plan the night.',
    items: [
      {
        question: 'How early should I book a chauffeur for New Year’s Eve in London?',
        answer:
          'As early as you can. New Year’s Eve is one of the busiest nights of the year for chauffeur-driven cars in London, and larger vehicles tend to be reserved first. Once your plans are fixed, book the car — you can amend or cancel free of charge up to 24 hours before the booking.',
      },
      {
        question: 'Can the car take us right up to the fireworks?',
        answer:
          'No. The streets around the Thames and Westminster are closed to all traffic for the event, so no car can drive in. We agree a set-down point at the edge of the closures in advance and you walk from there. The fireworks are ticketed, and tickets are sold by the organisers, not by us.',
      },
      {
        question: 'Does the chauffeur wait while we are at dinner or a party?',
        answer:
          'Yes. With hourly hire the car and chauffeur are yours for the whole booking. Your chauffeur waits nearby and comes to the door, or to the agreed collection point, when you call.',
      },
      {
        question: 'How long will the journey home take after midnight?',
        answer:
          'Longer than on a normal night, particularly in the first hour or so after midnight and anywhere near the river. We plan the route around the closures, but we cannot guarantee a journey time on New Year’s Eve.',
      },
      {
        question: 'Can you collect and drop several people at different addresses?',
        answer:
          'Yes. Extra pick-ups and drop-offs are simply part of an hourly booking. A V-Class carries up to seven passengers; an E-Class or S-Class carries up to three. Send us the addresses when you book.',
      },
      {
        question: 'Are you available on New Year’s Day?',
        answer:
          'Yes. We operate 24 hours a day, 365 days a year, including New Year’s Day. That covers the journey home from a party, a car for lunch, and <a href="/services/airport-transfers">airport transfers</a> with flight tracking. The price for your date is confirmed before you book.',
      },
    ],
  },
  related: {
    kicker: 'More from Silk Ride',
    title: 'More for the festive season',
    intro: 'Planning the days either side of New Year as well?',
    extra: [
      {
        path: '/services/hourly-chauffeur',
        icon: 'bx-time',
        title: 'Hourly Chauffeur Hire',
        tagline: 'A car and chauffeur by the hour, on any night of the year.',
      },
      {
        path: '/airport-transfers/heathrow',
        icon: 'bxs-plane-alt',
        title: 'Heathrow Airport Transfers',
        tagline: 'Fixed-price transfers with flight tracking and meet and greet.',
      },
    ],
  },
  cta: {
    title: 'Reserve your New Year’s Eve chauffeur',
    subtitle: 'Tell us where the evening starts, where it ends and how many of you there are, and we will confirm the car and the price.',
  },
  schema: {
    serviceType: 'Event chauffeur service',
    areaServed: [
      { type: 'City', name: 'London' },
      { type: 'Place', name: 'Westminster' },
      { type: 'AdministrativeArea', name: 'Greater London' },
    ],
    hourlyPriced: true,
  },
}

export default guide
