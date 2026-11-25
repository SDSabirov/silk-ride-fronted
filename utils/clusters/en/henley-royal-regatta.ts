import type { ClusterGuide } from '../types'

const guide: ClusterGuide = {
  slug: 'henley-royal-regatta',
  section: 'event-chauffeur',
  name: 'Henley Royal Regatta',
  seo: {
    title: 'Henley Royal Regatta Chauffeur from London',
    description:
      'Chauffeur-driven travel from London to Henley Royal Regatta in a Mercedes. Your driver waits and brings you home. Hourly hire from £50, 4-hour minimum.',
  },
  kicker: 'Event Chauffeur · Henley Royal Regatta',
  hero: {
    title: 'Henley Royal Regatta Chauffeur',
    titleAccent: 'from London to the Thames',
    subtitle:
      'A long day on the riverbank with nobody watching the clock or the car keys. Your chauffeur takes you to Henley, waits, and drives you home when you are ready.',
    image: '/images/covers/about-us.webp',
    alt: 'Black Mercedes V-Class parked outside a red-brick country house',
  },
  stats: [
    { icon: 'bx-map', label: 'Henley-on-Thames', sub: 'About 40 miles west of London' },
    { icon: 'bx-time', label: 'Around 1 hr 30', sub: 'From central London, off-peak' },
    { icon: 'bx-user-check', label: 'Chauffeur stays', sub: 'No drive home to think about' },
  ],
  overview: {
    kicker: 'A day on the river',
    heading: 'To Henley and home again, without the car keys',
    paragraphs: [
      'A Henley Royal Regatta chauffeur solves the one awkward part of an otherwise easy day: getting to a small Oxfordshire market town and back. The regatta fills six days in early July, and Henley-on-Thames was not built for the crowds it draws. Parking in the town is limited, and the train means changing at Twyford on to a slow branch line that is packed at both ends of the day.',
      'It is also a long and sociable day. Racing starts in the morning and runs into the evening, with lunch, tea and a good deal of standing about on the riverbank in between. Driving yourself means somebody in the party stays on mineral water and then faces the M4 at the end of it.',
      'With hourly chauffeur hire, the car collects you at your door, sets you down in Henley and stays in the area until you call. Because the booking runs by the hour, the route is yours to shape: picking up friends on the way out, or stopping for dinner in Marlow or Bray on the way back.',
    ],
    includesTitle: 'Included with every Henley booking',
    includes: [
      'Door-to-door travel in a Mercedes E-Class, S-Class or V-Class',
      'A licensed, professionally trained chauffeur who stays for the whole day',
      'Bottled water, Wi-Fi and phone chargers in the car, with our compliments',
      'A pick-up time planned around regatta traffic into the town',
      'A return journey that starts when you decide, not when a train leaves',
      'Free changes and cancellation up to 24 hours before the booking',
    ],
  },
  sections: [
    {
      kicker: 'Planning your day',
      heading: 'How a day at the regatta runs',
      paragraphs: [
        'Henley is match racing: two crews side by side over a course of 1 mile 550 yards, from Temple Island upstream towards Henley Bridge, with a race every few minutes for most of the day. The draw narrows through the week to the finals on the last day, and the weekend is the busiest time on the roads.',
        'Most visitors aim to arrive by mid-morning, which from central London means leaving at around 8.30 to 9am. Later than that and the last few miles into town can take as long as the motorway. When you book, your chauffeur will suggest a departure time based on your address and the day you are attending.',
        'Dress matters here. The Stewards’ Enclosure, open to members and their guests, is known for a strict dress code, and the Regatta Enclosure and hospitality areas publish their own guidance. A car that takes you from your front door to the riverbank keeps a blazer uncreased and a hat in shape.',
      ],
      bullets: [
        'Check the dress code for your enclosure or hospitality badge before the day',
        'Friday and the weekend bring the heaviest traffic into Henley',
        'Tell us if you plan to stay on for dinner, so the car is reserved late enough',
      ],
    },
    {
      kicker: 'On the day',
      heading: 'Getting in and out of Henley',
      paragraphs: [
        'From London the usual route is the M4 to junction 8/9, the A404(M) and then the A4130 down to the river. The town has a single road bridge over the Thames, and during the regatta traffic management, road closures and set-down arrangements are put in place around it. These change from year to year, so we work from the current plan and confirm your drop-off point before the day.',
        'Enclosures and hospitality areas line both banks and are reached by different roads, so the exact name on your ticket matters — please give it to us when you book. If you hold a pass for one of the regatta car parks, tell us and your chauffeur can use it.',
      ],
    },
  ],
  journeys: {
    kicker: 'Journey times',
    title: 'How long does it take to reach Henley?',
    intro: 'Typical driving times to Henley-on-Thames in normal traffic. Allow extra on regatta mornings.',
    items: [
      { from: 'Central London', time: '1 hr 15 – 1 hr 45', note: 'Mayfair, Kensington, Chelsea via the M4 and A404(M)' },
      { from: 'Heathrow Airport', time: '40 – 55 min', note: 'For guests and crews’ families flying in' },
      { from: 'Windsor', time: '30 – 45 min', note: 'A convenient base for a regatta weekend' },
      { from: 'Oxford', time: '45 min – 1 hr', note: 'Across the Chilterns, mostly on A-roads' },
    ],
  },
  vehicles: {
    kicker: 'Choose your car',
    title: 'Which car for Henley?',
    intro: 'Every car is a Mercedes with a leather interior and climate control — welcome after a July afternoon in a blazer. Choose by the size of your party.',
    notes: {
      eClass: 'An executive saloon that suits a couple or up to three guests on a straightforward day out and back.',
      sClass: 'The flagship saloon: generous rear legroom and a quiet cabin for the journey home after a long day on your feet.',
      vClass: 'Up to seven passengers travel together, with room in the back for a picnic hamper and folding chairs.',
    },
    recommended: 'sClass',
  },
  pricing: {
    kicker: 'Pricing',
    title: 'What does a chauffeur to Henley cost?',
    paragraphs: [
      'A regatta day is booked as hourly chauffeur hire. You pay for the hours the car and chauffeur are with you, from the pick-up at your door to the drop-off at the end of the evening, rather than for two separate transfers.',
      'From central London, a full day at Henley typically comes to between nine and eleven hours, depending on how early you leave and how late you stay. Give us your plans and we will quote for the whole day before you commit.',
    ],
    points: [
      'Mercedes E-Class from £50 per hour',
      'Mercedes S-Class from £75 per hour',
      'Mercedes V-Class (up to 7 passengers) from £75 per hour',
      'Minimum booking of 4 hours',
      'Price confirmed before you book — pay by card, Apple Pay, Google Pay or bank transfer',
    ],
  },
  faq: {
    kicker: 'FAQ',
    title: 'Henley Royal Regatta chauffeur questions',
    intro: 'What clients most often ask us before a day at Henley.',
    items: [
      {
        question: 'When should I book a Henley Royal Regatta chauffeur?',
        answer:
          'As soon as you know which day you are going. Regatta week falls in the middle of the summer season, and the weekend dates are reserved first. You can change or cancel the booking free of charge up to 24 hours beforehand.',
      },
      {
        question: 'Does the chauffeur stay in Henley all day?',
        answer:
          'Yes. With hourly hire the car and chauffeur are yours for the whole booking. Your chauffeur waits in the area while you are at the regatta and comes to the agreed collection point when you call.',
      },
      {
        question: 'Where will you drop us off and collect us?',
        answer:
          'As close to your enclosure or hospitality entrance as the regatta’s traffic arrangements for that year allow. Road closures around the bridge and the riverside vary, so we confirm the set-down and collection points with you before the day rather than promise a particular gate.',
      },
      {
        question: 'Can you collect guests from Heathrow or from several addresses?',
        answer:
          'Of course. Henley is under an hour from <a href="/airport-transfers/heathrow">Heathrow</a> in normal traffic, and your chauffeur tracks the flight if guests are arriving that morning. Several pick-ups in London are no problem either — give us the addresses when you book so the first collection is timed correctly.',
      },
      {
        question: 'How late can we stay?',
        answer:
          'As late as you wish. Tell us the latest you expect to leave when you book, so that the car is reserved for long enough, and your chauffeur will be there when the evening ends.',
      },
    ],
  },
  related: {
    kicker: 'More from Silk Ride',
    title: 'Other events and services',
    intro: 'Making a weekend of it by the Thames, or meeting guests off a flight?',
    extra: [
      {
        path: '/destination-tours/windsor',
        icon: 'bxs-castle',
        title: 'Windsor Castle Tour',
        tagline: 'Half an hour or so down the road — an easy second day for visiting guests.',
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
    title: 'Reserve your chauffeur for Henley',
    subtitle: 'Tell us the day, your pick-up address and where in Henley you are heading, and we will confirm the car and the price.',
  },
  schema: {
    serviceType: 'Event chauffeur service',
    areaServed: [
      { type: 'Place', name: 'Henley-on-Thames' },
      { type: 'City', name: 'London' },
      { type: 'AdministrativeArea', name: 'Oxfordshire' },
    ],
    hourlyPriced: true,
  },
}

export default guide
