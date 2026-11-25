import type { ClusterGuide } from '../types'

const guide: ClusterGuide = {
  slug: 'christmas-airport-transfers',
  section: 'christmas',
  name: 'Christmas Airport Transfers',
  seo: {
    title: 'Christmas Airport Transfers in London',
    description:
      'Fixed-price London airport transfers over Christmas and New Year, including Christmas Day. Heathrow from £120, Gatwick from £180. Flight tracking included.',
  },
  kicker: 'Christmas · Airport Transfers',
  hero: {
    title: 'Christmas Airport Transfers',
    titleAccent: 'in London',
    subtitle:
      'Fixed-price cars to and from Heathrow, Gatwick, Stansted, Luton and London City throughout the holidays — including Christmas Day, when London’s trains do not run.',
    image: '/images/hero-chauffeur.webp',
    alt: 'A chauffeur in a white glove opening the door of a black Mercedes',
  },
  stats: [
    { icon: 'bx-calendar', label: 'Every day of the holidays', sub: 'Including 25 and 26 December' },
    { icon: 'bx-train', label: 'No trains on 25 December', sub: 'No Tube, bus or national rail in London' },
    { icon: 'bx-time', label: '60 minutes’ free waiting', sub: 'International arrivals; 45 minutes domestic' },
  ],
  overview: {
    kicker: 'Holiday travel, planned',
    heading: 'To the airport and back when the trains are not running',
    paragraphs: [
      'Christmas airport transfers in London need more planning than a transfer at any other time of year. The days before Christmas and the days after New Year are among the busiest of the year at London’s airports, and in between comes the one day when the city’s public transport stops altogether.',
      'On Christmas Day there is no Tube, bus or national rail service in London. The rail links most travellers rely on — the Heathrow Express and the Elizabeth line, the Gatwick Express, the Stansted Express — do not run, and services on Boxing Day are reduced. If you are flying on 25 December, or landing that day, a pre-booked car is the practical way to make the journey.',
      'Silk Ride operates 24 hours a day, 365 days a year, including Christmas Eve, Christmas Day, Boxing Day, New Year’s Eve and New Year’s Day. Transfers are fixed-price journeys in a Mercedes E-Class, S-Class or V-Class, with flight tracking and a meet and greet in the arrivals hall, and the price for your date and addresses is confirmed before you book.',
    ],
    includesTitle: 'Included with every airport transfer',
    includes: [
      'A fixed price, confirmed before you book',
      'Flight tracking, so the pick-up moves if your flight is early or late',
      'Meet and greet in the arrivals hall',
      '60 minutes of free waiting for international arrivals, 45 minutes for domestic',
      'Complimentary child seats on request, plus bottled water, Wi-Fi and phone chargers',
      'Free changes and cancellation up to 24 hours before the booking',
    ],
  },
  sections: [
    {
      kicker: 'Christmas Day and Boxing Day',
      heading: 'When the Tube and the trains stop',
      paragraphs: [
        'London’s public transport closes down on 25 December. There is no Tube, no bus and no national rail service, which means no train to any of the airports. Some flights still operate on Christmas Day, Heathrow’s among them, and the passengers on them, whether leaving or landing, have to travel by road.',
        'On Boxing Day services are reduced, so check what is running before you rely on it. A booked car removes the question: your chauffeur collects you from the door at the agreed time, whatever the timetable says.',
      ],
      bullets: [
        '25 December: no Tube, bus or national rail service in London',
        'No Heathrow Express, Elizabeth line, Gatwick Express or Stansted Express on Christmas Day',
        '26 December: reduced services — check before you travel',
        'Silk Ride cars run 24 hours a day on both days',
      ],
    },
    {
      kicker: 'Arriving',
      heading: 'Being met off a Christmas flight',
      paragraphs: [
        'Give us your flight number when you book and your chauffeur follows the flight rather than the timetable. If you land early or late, the pick-up moves with it. You are met in the arrivals hall and walked to the car.',
        'In the days before Christmas, passport control and baggage reclaim can take longer than usual. The free waiting time after you land allows for that: 60 minutes for international arrivals and 45 minutes for domestic flights.',
        'Because we operate around the clock, a late-night landing is handled like any other arrival.',
      ],
    },
    {
      kicker: 'Departing',
      heading: 'Early flights, families and luggage',
      paragraphs: [
        'Holiday departures often mean a pick-up before dawn. We suggest a collection time when you book, based on your address, the airport and the check-in time your airline recommends, with a margin for the roads, which can be slow in the days before Christmas.',
        'Families tend to travel heavy at this time of year. The V-Class seats up to seven and has extra luggage space for ski bags, presents and pushchairs, and child seats are complimentary on request. Tell us the children’s ages when you book, and mention anything unusually long or bulky so that we can confirm the right vehicle.',
        'On New Year’s Eve, central London streets around the Thames and Westminster are closed to traffic for the ticketed fireworks. If you are travelling to or from an address in that area on the evening of 31 December, we plan the route and the meeting point around the closures.',
      ],
    },
  ],
  journeys: {
    kicker: 'Journey times',
    title: 'How long from the airport to central London?',
    intro:
      'Typical driving times between each airport and central London in normal traffic. Allow longer in the days before Christmas and in weekday rush hours, and add the time it takes to leave the terminal after landing.',
    items: [
      { from: 'Heathrow Airport', time: '45 min – 1 hr 15', note: 'West of London, reached by the M4' },
      { from: 'Gatwick Airport', time: '1 hr 15 – 1 hr 45', note: 'South of London in West Sussex, via the M23' },
      { from: 'Stansted Airport', time: '1 hr 15 – 1 hr 45', note: 'North-east of London in Essex, via the M11' },
      { from: 'Luton Airport', time: '1 hr 10 – 1 hr 40', note: 'North of London in Bedfordshire, via the M1' },
    ],
  },
  vehicles: {
    kicker: 'Choose your car',
    title: 'Which car for a Christmas airport transfer?',
    intro:
      'All three are Mercedes with leather interiors and climate control. At Christmas the deciding factor is often the luggage rather than the number of passengers.',
    notes: {
      eClass: 'An executive saloon for up to three passengers, well suited to one or two travellers with ordinary holiday luggage.',
      sClass: 'The flagship saloon for up to three, and a restful way to finish a long-haul flight or begin a holiday.',
      vClass: 'Seats up to seven with extra luggage space: room for a family along with ski bags, presents and child seats.',
    },
    recommended: 'vClass',
  },
  pricing: {
    kicker: 'Pricing',
    title: 'What does a Christmas airport transfer cost?',
    paragraphs: [
      'Airport transfers are fixed-price journeys: you are given one price for the transfer before you book. The figures below are our standard prices for transfers between each airport and central London.',
      'Send us your date, flight and addresses, and the price for your journey is confirmed before you book. Payment is by Visa, Mastercard, Amex, Apple Pay, Google Pay or bank transfer.',
    ],
    points: [
      'Heathrow and central London — from £120',
      'Gatwick and central London — from £180',
      'Stansted and central London — from £200',
      'Luton and central London — from £200',
      'London City and central London — from £120',
      'Flight tracking, meet and greet and free waiting time included',
    ],
  },
  faq: {
    kicker: 'FAQ',
    title: 'Christmas airport transfer questions',
    intro: 'What travellers most need to know before flying over Christmas and New Year.',
    items: [
      {
        question: 'Do you run airport transfers on Christmas Day?',
        answer:
          'Yes. Silk Ride operates 24 hours a day, 365 days a year, and that includes Christmas Eve, Christmas Day, Boxing Day, New Year’s Eve and New Year’s Day. Because there is no public transport in London on 25 December, cars for that day are in demand across the city, so book as early as you can.',
      },
      {
        question: 'How much does a Christmas airport transfer cost?',
        answer:
          'Our standard fixed prices between the airports and central London start from £120 for Heathrow and London City, £180 for Gatwick, and £200 for <a href="/airport-transfers/stansted">Stansted</a> and <a href="/airport-transfers/luton">Luton</a>. The price for your date and addresses is confirmed before you book.',
      },
      {
        question: 'How do I get to the airport on Christmas Day without the Tube or trains?',
        answer:
          'By road. There is no Tube, bus or national rail service in London on 25 December, so the Heathrow Express, the Elizabeth line, the Gatwick Express and the Stansted Express do not run. A pre-booked car collects you from your door and takes you to the terminal.',
      },
      {
        question: 'What happens if my flight is delayed?',
        answer:
          'Your chauffeur tracks the flight and adjusts the pick-up to the actual landing time. Free waiting is included after you land — 60 minutes for international arrivals and 45 minutes for domestic flights — which allows for the longer waits at passport control and baggage reclaim that are common over the holidays.',
      },
      {
        question: 'How early should I book for Christmas and New Year?',
        answer:
          'As soon as your flights are confirmed, particularly for 24, 25 and 26 December and for 31 December and 1 January, when demand for cars across London is high. You can change or cancel free of charge up to 24 hours before the booking.',
      },
      {
        question: 'Can you take a family with skis, presents and child seats?',
        answer:
          'Yes. The Mercedes V-Class seats up to seven and has extra luggage space, and child seats are complimentary on request. Tell us the children’s ages and describe any long or bulky items when you book, bearing in mind that each child seat takes one passenger place.',
      },
    ],
  },
  related: {
    kicker: 'More from Silk Ride',
    title: 'Airport pages and related services',
    intro: 'Looking for the detail on a particular airport?',
    extra: [
      {
        path: '/airport-transfers/heathrow',
        icon: 'bxs-plane-alt',
        title: 'Heathrow Airport Transfers',
        tagline: 'Fixed-price transfers between Heathrow and central London, from £120.',
      },
      {
        path: '/airport-transfers/gatwick',
        icon: 'bxs-plane-alt',
        title: 'Gatwick Airport Transfers',
        tagline: 'Fixed-price transfers between Gatwick and central London, from £180.',
      },
    ],
  },
  cta: {
    title: 'Book your Christmas airport transfer',
    subtitle: 'Send us your date, flight number and address, and we will confirm the car and the price.',
  },
  schema: {
    serviceType: 'Airport transfer',
    areaServed: [
      { type: 'City', name: 'London' },
      { type: 'Airport', name: 'Heathrow Airport' },
      { type: 'Airport', name: 'Gatwick Airport' },
      { type: 'Airport', name: 'Stansted Airport' },
      { type: 'Airport', name: 'Luton Airport' },
      { type: 'Airport', name: 'London City Airport' },
    ],
    hourlyPriced: false,
  },
}

export default guide
