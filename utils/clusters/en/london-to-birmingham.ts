import type { ClusterGuide } from '../types'

const guide: ClusterGuide = {
  slug: 'london-to-birmingham',
  section: 'long-distance-chauffeur',
  name: 'London to Birmingham',
  seo: {
    title: 'London to Birmingham Chauffeur Service',
    description:
      'Chauffeur-driven travel from London to Birmingham city centre, the NEC and Birmingham Airport. About 120 miles by Mercedes, fixed price quoted in advance.',
  },
  kicker: 'Long-Distance Chauffeur · London to Birmingham',
  hero: {
    title: 'London to Birmingham Chauffeur',
    titleAccent: 'City Centre, NEC & Airport',
    subtitle:
      'About 120 miles up the M40 to the Colmore business district, the NEC or Birmingham Airport, with your chauffeur waiting to bring you home. One fixed price, quoted before you book.',
    image: '/images/hero-chauffeur.webp',
    alt: 'A chauffeur in a white glove opening the door of a black Mercedes',
  },
  stats: [
    { icon: 'bx-map', label: 'About 120 miles', sub: 'From London via the M40' },
    { icon: 'bx-time', label: 'Around 2 – 2.5 hours', sub: 'In normal traffic' },
    { icon: 'bx-briefcase', label: 'Same-day return', sub: 'Your chauffeur waits in Birmingham' },
  ],
  overview: {
    kicker: 'A business day in the Midlands',
    heading: 'To Birmingham and back within the working day',
    paragraphs: [
      'A London to Birmingham chauffeur journey is about 120 miles, nearly all of it on the M40, and typically takes around 2 to 2.5 hours in normal traffic, with a little more for city-centre addresses at busy times. That makes it one of the few long-distance routes that fits comfortably into a single day: leave London after breakfast, spend the middle of the day in Birmingham and be home for the evening.',
      'Birmingham is well served by rail, and for one person going from Euston to a meeting beside New Street station the train is hard to beat. The car earns its place when the day is less simple: two or three colleagues who need to prepare on the way, a stand to set up at the NEC, a site visit in Solihull after the meeting, or a client dinner with no fixed finishing time.',
      'Your chauffeur stays with you for the day. The car waits while you are in the meeting or on the exhibition floor, whatever you would rather not carry can be left in it, and the journey home starts when you are ready instead of at a time printed on a ticket.',
    ],
    includesTitle: 'Included with every London to Birmingham journey',
    includes: [
      'Door-to-door travel in a Mercedes E-Class, S-Class or V-Class',
      'A professional, licensed chauffeur who is discreet while you work or take calls',
      'Complimentary Wi-Fi, phone chargers and bottled water',
      'A same-day return with your chauffeur waiting, if you need one',
      'One fixed price, quoted and agreed before you book',
      'Free changes and cancellation up to 24 hours before the journey',
    ],
  },
  sections: [
    {
      kicker: 'Where we take you',
      heading: 'The city centre, the NEC and Birmingham Airport',
      paragraphs: [
        'In the city centre most business journeys end in the Colmore business district, the streets of offices around Colmore Row and Snow Hill, or at Brindleyplace, the canal-side quarter of offices and restaurants off Broad Street. The International Convention Centre stands beside Brindleyplace, with Symphony Hall under the same roof.',
        'The National Exhibition Centre is not in the city centre at all. It lies several miles to the east, next to Birmingham Airport and close to junction 6 of the M42, so from London you reach it without driving into Birmingham. For exhibitors that is useful: banners, samples and literature go into the vehicle at your office and come out at the hall, and we set down as close to your entrance as the venue’s traffic arrangements for that show allow.',
      ],
      bullets: [
        'Colmore business district and Snow Hill',
        'Brindleyplace and the ICC, off Broad Street',
        'The NEC, close to junction 6 of the M42',
        'Birmingham Airport, next to the NEC',
      ],
    },
    {
      kicker: 'Beyond the city',
      heading: 'Adding Warwick, Stratford-upon-Avon or Solihull',
      paragraphs: [
        'The M40 passes close to Warwick and within a few miles of Stratford-upon-Avon on its way north, and Solihull lies just off the M42 on the approach to Birmingham. All three are straightforward by car and awkward to combine with Birmingham by rail in a single day.',
        'A multi-stop day might be a morning meeting near Warwick and an afternoon at the NEC, or a board meeting in the city followed by an evening at the theatre in Stratford before the drive back to London. Give us the stops in order when you ask for a quote and we will price the day as a whole.',
      ],
    },
  ],
  journeys: {
    kicker: 'Journey times',
    title: 'How long does London to Birmingham take by car?',
    intro: 'Typical driving times in normal traffic. Weekday peaks on the M40 and M42, and the opening morning of a large NEC show, take longer.',
    items: [
      {
        from: 'Central London to Birmingham city centre',
        time: '2 hr 15 – 2 hr 45',
        note: 'About 120 miles via the M40',
      },
      {
        from: 'Central London to the NEC or Birmingham Airport',
        time: '2 hr – 2 hr 30',
        note: 'M40, then the M42 to junction 6, without entering the city',
      },
      {
        from: 'Heathrow Airport to Birmingham',
        time: '1 hr 50 – 2 hr 20',
        note: 'Onto the M25 and M40 straight from the terminal',
      },
      {
        from: 'London to Stratford-upon-Avon',
        time: '2 hr – 2 hr 30',
        note: 'About 100 miles, leaving the M40 near Warwick',
      },
    ],
  },
  vehicles: {
    kicker: 'Choose your car',
    title: 'Which car for the drive to Birmingham?',
    intro: 'All three are Mercedes with leather interiors and climate control. Choose by how many of you are travelling and what you need to bring.',
    notes: {
      eClass: 'The executive saloon for up to three passengers, and the natural choice for one or two people on a day of meetings.',
      sClass: 'Our flagship saloon, for travelling with a client or a board member, or simply for more room to work on the M40.',
      vClass: 'Seats up to seven with extra luggage space: the practical answer for a team taking banners, samples and brochures to the NEC.',
    },
    recommended: 'eClass',
  },
  pricing: {
    kicker: 'Pricing',
    title: 'What does a London to Birmingham chauffeur cost?',
    paragraphs: [
      'This route is priced by a fixed quote, not by the hour or the mile. Tell us where you are starting, where in Birmingham you are going, which car you would like and whether you need the chauffeur to wait, and we will give you one price for the whole arrangement before you book.',
      'A day with extra stops, such as Warwick on the way up or Solihull in the afternoon, is quoted in the same way: one figure, agreed in advance. Companies that travel regularly can open a corporate account and receive VAT invoices.',
    ],
    points: [
      'Vehicle: Mercedes E-Class, S-Class or V-Class',
      'Pick-up and drop-off addresses, plus any stops in between',
      'Waiting time in Birmingham and the return leg, if you need them',
      'One fixed price, agreed before you travel',
      'Pay by card, Apple Pay, Google Pay or bank transfer; corporate accounts with VAT invoices',
    ],
  },
  faq: {
    kicker: 'FAQ',
    title: 'London to Birmingham chauffeur questions',
    intro: 'The practical points business travellers and exhibitors raise most often.',
    items: [
      {
        question: 'How long does a London to Birmingham chauffeur journey take?',
        answer:
          'Typically around 2 to 2.5 hours in normal traffic, and a little longer to a city-centre address in the morning peak. The NEC and Birmingham Airport are reached slightly sooner because you do not have to drive into the city. We will suggest a departure time when you book.',
      },
      {
        question: 'Will the chauffeur wait while I am in my meeting or at the exhibition?',
        answer:
          'Yes. On a same-day return your chauffeur stays in Birmingham, keeps their phone on and meets you when you call. Waiting time is part of the fixed quote, so tell us roughly how long you expect to be when you ask for the price.',
      },
      {
        question: 'Can you take exhibition materials to the NEC?',
        answer:
          'Yes. The V-Class has extra luggage space for pop-up banners, sample cases and boxes of literature alongside your team. Tell us what you are bringing when you book so that we can confirm it will fit; a full exhibition stand still needs a goods vehicle.',
      },
      {
        question: 'Can you collect me from Heathrow and drive straight to Birmingham?',
        answer:
          'Yes. Your chauffeur tracks the flight, meets you in the arrivals hall and drives directly to Birmingham, typically in around two hours. If you are heading into London instead, see our <a href="/airport-transfers/heathrow">Heathrow transfers</a>.',
      },
      {
        question: 'How do I book, and how much notice do you need?',
        answer:
          'Book online, by phone on +44 203 488 2324 or by email. We recommend 24 hours’ notice, although same-day bookings are often possible, subject to availability. You can change or cancel free of charge up to 24 hours before the booking.',
      },
    ],
  },
  related: {
    kicker: 'More from Silk Ride',
    title: 'Other routes and services',
    intro: 'Travelling for work regularly, or taking a whole team to a show?',
    extra: [
      {
        path: '/services/corporate-travel',
        icon: 'bx-briefcase',
        title: 'Corporate Travel',
        tagline: 'Corporate accounts, VAT invoices and executive cars for regular business travel.',
      },
      {
        path: '/fleet/mercedes-v-class',
        icon: 'bx-group',
        title: 'Mercedes V-Class',
        tagline: 'Seven seats and extra luggage space for teams and exhibition materials.',
      },
    ],
  },
  cta: {
    title: 'Request your London to Birmingham quote',
    subtitle: 'Send us the date, your addresses and how long you expect to be in Birmingham, and we will confirm the car and one fixed price.',
  },
  schema: {
    serviceType: 'Long-distance chauffeur service',
    areaServed: [
      { type: 'City', name: 'London' },
      { type: 'City', name: 'Birmingham' },
      { type: 'AdministrativeArea', name: 'West Midlands' },
    ],
    hourlyPriced: false,
  },
}

export default guide
