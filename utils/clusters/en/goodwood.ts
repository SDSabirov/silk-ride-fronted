import type { ClusterGuide } from '../types'

const guide: ClusterGuide = {
  slug: 'goodwood',
  section: 'event-chauffeur',
  name: 'Goodwood',
  seo: {
    title: 'Goodwood Chauffeur Service from London',
    description:
      'Chauffeur travel from London to Goodwood for the Festival of Speed, Revival and Glorious Goodwood. Your driver waits all day. Hourly hire from £50.',
  },
  kicker: 'Event Chauffeur · Goodwood',
  hero: {
    title: 'Goodwood Chauffeur',
    titleAccent: 'from London',
    subtitle:
      'Festival of Speed, Glorious Goodwood or the Revival: travel down to West Sussex in comfort, and let someone else take care of the drive home.',
    image: '/images/v-classshero.webp',
    alt: 'A black Mercedes V-Class on a gravel drive beside a lawn at a country estate',
  },
  stats: [
    { icon: 'bx-map', label: 'Near Chichester, West Sussex', sub: 'About 65 miles south-west of central London' },
    { icon: 'bx-time', label: '2 hr – 2 hr 30', sub: 'From central London in normal traffic' },
    { icon: 'bx-user-check', label: 'Chauffeur stays', sub: 'No drive home at the end of the day' },
  ],
  overview: {
    kicker: 'A day in Sussex, minus the driving',
    heading: 'A private car to Goodwood and back',
    paragraphs: [
      'The Goodwood Estate lies on the edge of the South Downs just north of Chichester in West Sussex, 60 to 65 miles from central London. Each year it stages three events that fill the diary of anyone who loves cars or racehorses: the Festival of Speed, usually in July; the Qatar Goodwood Festival — better known as Glorious Goodwood — at the turn of July and August; and the Goodwood Revival in September. A Goodwood chauffeur from London makes each of them a day out rather than a day of driving.',
      'The journey is the catch. Beyond the A3 the route runs along single-carriageway country roads through the Downs, and on event days the queues can begin well short of the estate. Driving yourself means two hours of concentration in each direction, and somebody in the party has to stay on soft drinks all day.',
      'With hourly hire, one chauffeur and one Mercedes are yours from your front door in the morning until you are home at night. You can break the journey for breakfast in Midhurst or Petworth, leave coats and a change of shoes in the car, and decide on the day when you have seen enough.',
    ],
    includesTitle: 'Included with every Goodwood booking',
    includes: [
      'Door-to-door travel from London in a Mercedes E-Class, S-Class or V-Class',
      'A professionally trained, licensed chauffeur who stays for the whole day',
      'Complimentary bottled water, Wi-Fi and phone chargers on board',
      'Departure time planned around event-day traffic on the roads into the estate',
      'Freedom to add a stop on the way down or on the way home',
      'Free changes and cancellation up to 24 hours before your booking',
    ],
  },
  sections: [
    {
      kicker: 'Three events, three venues',
      heading: 'Which Goodwood are you going to?',
      paragraphs: [
        'Goodwood is a large estate, and its three headline events take place in three different parts of it. Telling us which one you are attending is the first step, because the approach roads, entrances and set-down points are different for each.',
        'The Festival of Speed and the Revival draw very large crowds and the heaviest traffic, while the racecourse is reached by narrow lanes that climb the hill and are slow before the first race and after the last. For all three, an early start from London is the most useful thing you can do.',
      ],
      bullets: [
        'Festival of Speed — in the park of Goodwood House, built around the famous hillclimb',
        'Qatar Goodwood Festival (Glorious Goodwood) — five days of flat racing at Goodwood Racecourse, high on the Downs',
        'Goodwood Revival — historic motor racing at Goodwood Motor Circuit, where most visitors come in period dress',
      ],
    },
    {
      kicker: 'Planning your day',
      heading: 'Timing the journey from London',
      paragraphs: [
        'From central London we normally take the A3 past Guildford and then cross the Downs on the A286 through Midhurst or the A285 through Petworth. In normal traffic that is a little over two hours; on an event morning the final few miles can add a good deal more. We usually suggest leaving between 6.30am and 8am, depending on the event and how much of the day you want to see.',
        'Goodwood publishes travel information for each event, including where taxis and private hire cars may set down and collect, and the arrangements change from year to year. We follow the current plan and confirm your drop-off and meeting points before the day. If you have a car park pass or hospitality parking, tell us when you book so that your chauffeur can use it.',
        'At the Revival and Glorious Goodwood, clothes are part of the occasion. A tweed suit, a 1950s dress or a linen jacket and panama hat survives two hours in the back of an S-Class far better than a crowded train to Chichester followed by a shuttle bus.',
      ],
    },
  ],
  journeys: {
    kicker: 'Journey times',
    title: 'How long does it take to reach Goodwood?',
    intro: 'Typical driving times to the Goodwood Estate in normal traffic. On event days, allow more.',
    items: [
      { from: 'Central London', time: '2 hr – 2 hr 30', note: 'Via the A3, then the A286 or A285 across the Downs' },
      { from: 'Heathrow Airport', time: '1 hr 30 – 1 hr 50', note: 'M25 and A3, without coming into London' },
      { from: 'Gatwick Airport', time: '1 hr 15 – 1 hr 40', note: 'Cross-country through West Sussex' },
      { from: 'Farnborough Airport', time: '1 hr – 1 hr 20', note: 'For guests arriving by private jet' },
    ],
  },
  vehicles: {
    kicker: 'Choose your car',
    title: 'Which car for Goodwood?',
    intro: 'All three are Mercedes with leather interiors and climate control. With two hours on the road each way, choose for comfort — and for what you will be wearing.',
    notes: {
      eClass: 'A refined executive saloon for a couple or up to three guests, and the most economical choice for a long day.',
      sClass: 'Our flagship saloon: generous rear legroom and headroom for period outfits and hats, and a quiet cabin for the run home.',
      vClass: 'Seats up to seven with extra luggage space, so a group travels together with room for coats, hat boxes and bags.',
    },
    recommended: 'sClass',
  },
  pricing: {
    kicker: 'Pricing',
    title: 'What does a Goodwood chauffeur cost?',
    paragraphs: [
      'Goodwood is booked as hourly chauffeur hire, charged from the moment you are collected until you are home again, with the car and chauffeur at your disposal throughout. A stop on the way down or back is simply part of the booked time.',
      'With around two hours on the road in each direction and six to eight hours at the event, a Goodwood day from central London typically comes to between ten and thirteen hours. Tell us which event you are attending and we will quote for the whole day before you book.',
    ],
    points: [
      'Mercedes E-Class from £50 per hour',
      'Mercedes S-Class from £75 per hour',
      'Mercedes V-Class (up to 7 passengers) from £75 per hour',
      'Minimum booking of 4 hours',
      'Quote confirmed before you book — pay by card, Apple Pay, Google Pay or bank transfer',
    ],
  },
  faq: {
    kicker: 'FAQ',
    title: 'Goodwood chauffeur questions',
    intro: 'Practical answers for the Festival of Speed, Glorious Goodwood and the Revival.',
    items: [
      {
        question: 'How far ahead should I book a Goodwood chauffeur?',
        answer:
          'Once you have your tickets, book the car. All three headline events fall in the summer season and each booking takes a car and chauffeur for the full day, so earlier is better. Same-day bookings are sometimes possible, subject to availability, but we recommend at least 24 hours’ notice. Changes and cancellation are free up to 24 hours beforehand.',
      },
      {
        question: 'Does the chauffeur stay at Goodwood all day?',
        answer:
          'Yes. With hourly hire the car and chauffeur stay with you for the whole booking. Your chauffeur waits in the car park if you have a pass, or nearby if not, and comes to the agreed meeting point when you call.',
      },
      {
        question: 'Where will we be dropped off?',
        answer:
          'That depends on the event. Goodwood House, the Racecourse and the Motor Circuit each have their own entrances and their own set-down arrangements for private hire cars, which are set by Goodwood and revised each year. We get as close to your entrance as the current plan allows and confirm the drop-off and collection points before you travel.',
      },
      {
        question: 'Can we stay overnight and travel back the next day?',
        answer:
          'Yes. If you are staying in Chichester or elsewhere in Sussex for more than one day of an event, we can take you down and collect you as two separate long-distance journeys, each priced by a fixed quote given before you book.',
      },
      {
        question: 'Can you collect guests from an airport or a private jet terminal?',
        answer:
          'Yes. In normal traffic Goodwood is around an hour and a half from Heathrow or <a href="/airport-transfers/gatwick">Gatwick</a> and a little over an hour from <a href="/airport-transfers/farnborough">Farnborough</a>. Your chauffeur tracks the flight and adjusts the pick-up if you land early or late.',
      },
      {
        question: 'Do you drive to other events at Goodwood?',
        answer:
          'Yes. The same service covers the other race meetings at Goodwood Racecourse through the summer season, the Members’ Meeting at the Motor Circuit in spring, and track days and private events on the estate during the rest of the year.',
      },
    ],
  },
  related: {
    kicker: 'More from Silk Ride',
    title: 'Other events and services',
    intro: 'Arriving by air, or choosing the right car for the day?',
    extra: [
      {
        path: '/airport-transfers/gatwick',
        icon: 'bxs-plane-alt',
        title: 'Gatwick Airport Transfers',
        tagline: 'Fixed-price transfers between Gatwick and central London for visitors to the summer season.',
      },
      {
        path: '/fleet/mercedes-s-class',
        icon: 'bx-car',
        title: 'Mercedes S-Class',
        tagline: 'A closer look at our flagship saloon — our recommendation for the run down to Sussex.',
      },
    ],
  },
  cta: {
    title: 'Reserve your Goodwood chauffeur',
    subtitle: 'Tell us which event and day, your pick-up address and the size of your party, and we will confirm the car and the price.',
  },
  schema: {
    serviceType: 'Event chauffeur service',
    areaServed: [
      { type: 'Place', name: 'Goodwood Estate' },
      { type: 'City', name: 'London' },
      { type: 'AdministrativeArea', name: 'West Sussex' },
    ],
    hourlyPriced: true,
  },
}

export default guide
