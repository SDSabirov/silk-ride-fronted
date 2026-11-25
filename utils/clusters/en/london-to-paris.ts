import type { ClusterGuide } from '../types'

const guide: ClusterGuide = {
  slug: 'london-to-paris',
  section: 'long-distance-chauffeur',
  name: 'London to Paris',
  seo: {
    title: 'London to Paris Chauffeur via LeShuttle',
    description:
      'One car and one chauffeur from your London door to your Paris hotel, crossing the Channel on Eurotunnel LeShuttle. Fixed price quoted before you book.',
  },
  kicker: 'Long-Distance Chauffeur · London to Paris',
  hero: {
    title: 'London to Paris Chauffeur',
    titleAccent: 'One Car, Door to Door',
    subtitle:
      'From your London address to your Paris hotel in the same Mercedes, crossing the Channel on Eurotunnel LeShuttle. No airport, no station, no change of vehicle.',
    image: '/images/v-classshero.webp',
    alt: 'A black Mercedes V-Class on a gravel drive beside a lawn at a country estate',
  },
  stats: [
    { icon: 'bx-map', label: 'About 290 miles', sub: 'London to Paris, door to door' },
    { icon: 'bx-time', label: 'Around 6.5 – 7.5 hours', sub: 'Including check-in and the crossing' },
    { icon: 'bx-train', label: 'Eurotunnel LeShuttle', sub: 'Folkestone to Calais in about 35 minutes' },
  ],
  overview: {
    kicker: 'London to Paris by road',
    heading: 'Your London door to your Paris hotel, in one car',
    paragraphs: [
      'A London to Paris chauffeur journey is about 290 miles door to door. Your chauffeur collects you in London, drives to the Eurotunnel terminal at Folkestone, takes the car across the Channel on LeShuttle to Calais and continues on the A26 and A1 autoroutes to Paris. Including check-in and the crossing, it typically takes around 6.5 to 7.5 hours.',
      'That is longer than the train or a flight, and we would not pretend otherwise. What you get in return is a journey with no joins in it. Nothing is carried through a station, nobody has to find a taxi at the other end, and the cases that go into the boot in London come out at your hotel in Paris. The only limit on what you bring is the space in the vehicle.',
      'It suits families with young children, travellers with a great deal of luggage, people who prefer not to fly and anyone who values privacy over speed. It also suits pets, because LeShuttle carries them in the vehicle with their owners.',
    ],
    includesTitle: 'Included with every London to Paris journey',
    includes: [
      'The same Mercedes and the same chauffeur from start to finish',
      'The LeShuttle crossing for the car, booked by us',
      'Bottled water and phone chargers on board',
      'Complimentary child seats on request',
      'Stops on the way whenever you would like one',
      'One fixed price, quoted and agreed before you book',
    ],
  },
  sections: [
    {
      kicker: 'The journey',
      heading: 'How the day unfolds, stage by stage',
      paragraphs: [
        'From central London the M20 leads through Kent to the Eurotunnel terminal just outside Folkestone, usually an hour and a half to two hours away. At the terminal the car checks in and passes through British and French border controls one after the other, so the formalities are finished before you board.',
        'The car is then driven onto the shuttle train. You stay with the vehicle for the crossing, which takes about 35 minutes, and drive straight off at Calais onto the French motorway network. From there it is roughly 180 miles on the A26 and A1 to Paris, typically three to three and three-quarter hours, with service areas along the way for coffee or lunch.',
        'Two details are worth planning around. France is one hour ahead of the UK, so an 8am start from London usually means reaching Paris in the late afternoon, local time. And the A1 into Paris slows down in the weekday evening peak, which we take into account when suggesting your pick-up time.',
      ],
    },
    {
      kicker: 'Before you travel',
      heading: 'Passports, pets and passenger details',
      paragraphs: [
        'Every passenger, children included, needs a valid passport, and a visa where their nationality requires one. Checking the entry rules and carrying the right documents is each passenger’s own responsibility. Anyone refused at the border cannot travel, and neither that decision nor the time the checks take is within our control.',
        'We need the details of everyone travelling in advance so that the crossing can be booked, so please send them when you confirm the journey, and tell us as early as you can if your plans change.',
        'Pets travel on LeShuttle inside the vehicle. The rules on microchips, vaccinations and travel documents for animals are the owner’s responsibility, in both directions, so check them well ahead of the date and tell us that a pet is coming when you ask for your quote.',
      ],
    },
    {
      kicker: 'Beyond Paris',
      heading: 'Disneyland Paris, Versailles, Champagne and other cities',
      paragraphs: [
        'Paris does not have to be the end of the road. Disneyland Paris is at Marne-la-Vallée, east of the city, and Versailles lies just to the south-west. Reims, the largest city in Champagne, is on the A26 from Calais, which makes it a natural overnight stop on the way out or the way home.',
        'Brussels and Amsterdam are available on request by the same crossing. Each journey is quoted individually, one way or with a return on a later date.',
      ],
    },
  ],
  journeys: {
    kicker: 'Journey times',
    title: 'How long does London to Paris take by car?',
    intro: 'Typical times for each stage in normal traffic. Border checks vary and are outside our control, so we always plan with a margin.',
    items: [
      {
        from: 'Central London to the Folkestone terminal',
        time: '1 hr 30 – 2 hr',
        note: 'About 70 miles through Kent on the M20',
      },
      {
        from: 'Folkestone to Calais on LeShuttle',
        time: 'About 35 min',
        note: 'The crossing itself; check-in and border controls come first',
      },
      {
        from: 'Calais to central Paris',
        time: '3 hr – 3 hr 45',
        note: 'About 180 miles on the A26 and A1 autoroutes',
      },
      {
        from: 'London to Paris, door to door',
        time: '6 hr 30 – 7 hr 30',
        note: 'Including check-in and the crossing',
      },
    ],
  },
  vehicles: {
    kicker: 'Choose your car',
    title: 'Which car for London to Paris?',
    intro: 'All three are Mercedes with leather interiors and climate control. On a journey of this length, space is worth having.',
    notes: {
      eClass: 'An executive saloon for up to three passengers, best for one or two people with moderate luggage.',
      sClass: 'Our flagship saloon, with generous rear legroom for a couple who want to rest, read or work through the day.',
      vClass: 'Seats up to seven with extra luggage space, so a family, their cases, a pushchair and the dog all travel together.',
    },
    recommended: 'vClass',
  },
  pricing: {
    kicker: 'Pricing',
    title: 'What does a London to Paris chauffeur cost?',
    paragraphs: [
      'Journeys to Europe are priced by a fixed quote. There is no hourly or per-mile rate to work out: you give us your London address, your Paris address, the date, the number of passengers and the car you would like, and we reply with one price for the journey before you book.',
      'If you would like the car to bring you back, or to continue to Disneyland Paris, Versailles or Champagne, include that in your enquiry so that the quote covers the trip you are actually making.',
    ],
    points: [
      'Vehicle: Mercedes E-Class, S-Class or V-Class',
      'Your exact pick-up address in London and drop-off address in Paris',
      'The travel date and the number of passengers, needed to book the crossing',
      'A one-way journey, a return leg or onward stops in France',
      'One fixed price, agreed before you travel',
      'Pay by card, Apple Pay, Google Pay or bank transfer',
    ],
  },
  faq: {
    kicker: 'FAQ',
    title: 'London to Paris chauffeur questions',
    intro: 'What passengers want to know before crossing the Channel by car.',
    items: [
      {
        question: 'How long does a London to Paris chauffeur journey take?',
        answer:
          'Typically around 6.5 to 7.5 hours door to door, including check-in at Folkestone and the 35-minute crossing. Time at the border varies and is not something we can promise.',
      },
      {
        question: 'Do we change vehicles at the Channel?',
        answer:
          'No. The car is driven onto the LeShuttle train at Folkestone and off again at Calais, and you stay with it for the crossing. The same chauffeur drives you the whole way from London to Paris.',
      },
      {
        question: 'What documents do passengers need?',
        answer:
          'Each passenger needs a valid passport and, depending on nationality, a visa. Both border checks take place at Folkestone before boarding, so keep documents to hand. Making sure everyone is entitled to enter France, and to return to the UK afterwards, is the passengers’ responsibility.',
      },
      {
        question: 'Can we bring our dog or cat?',
        answer:
          'Yes, if you tell us when you book. LeShuttle carries pets in the vehicle with their owners. You are responsible for meeting the pet travel rules and carrying the correct documents for the animal, on the way out and on the way back.',
      },
      {
        question: 'How much luggage can we take?',
        answer:
          'As much as fits safely in the vehicle; there are no airline-style weight allowances. For a family or a long stay we recommend the <a href="/fleet/mercedes-v-class">Mercedes V-Class</a>, which seats up to seven and has extra luggage space.',
      },
      {
        question: 'Can you take us to Disneyland Paris, Brussels or Amsterdam instead?',
        answer:
          'Yes. Disneyland Paris, Versailles and Champagne can all be the destination or an onward stop, and Brussels and Amsterdam are available on request. Each is quoted individually before you book.',
      },
    ],
  },
  related: {
    kicker: 'More from Silk Ride',
    title: 'Other routes and services',
    intro: 'Travelling as a family, or spending a few days in England first?',
    extra: [
      {
        path: '/fleet/mercedes-v-class',
        icon: 'bx-car',
        title: 'Mercedes V-Class',
        tagline: 'Up to seven seats and extra luggage space: the car we recommend for the drive to Paris.',
      },
      {
        path: '/destination-tours',
        icon: 'bx-map-alt',
        title: 'Private Day Tours from London',
        tagline: 'Windsor, Stonehenge, Oxford, Cambridge, Bath and the Cotswolds by private car.',
      },
    ],
  },
  cta: {
    title: 'Request your London to Paris quote',
    subtitle: 'Send us your date, both addresses, the number of passengers and any pets, and we will reply with the car and one fixed price.',
  },
  schema: {
    serviceType: 'Long-distance chauffeur service',
    areaServed: [
      { type: 'City', name: 'London' },
      { type: 'City', name: 'Paris' },
      { type: 'Country', name: 'France' },
    ],
    hourlyPriced: false,
  },
}

export default guide
