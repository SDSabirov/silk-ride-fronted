import type { ClusterGuide } from '../types'

const guide: ClusterGuide = {
  slug: 'london-christmas-lights-tour',
  section: 'christmas',
  name: 'Christmas Lights Tour',
  seo: {
    title: 'London Christmas Lights Tour by Chauffeur',
    description:
      'See London’s Christmas lights from a warm private Mercedes: Regent Street, Covent Garden and more in one evening. Hourly hire from £55, 4-hour minimum.',
  },
  kicker: 'Christmas Chauffeur · Lights Tour',
  hero: {
    title: 'London Christmas Lights Tour',
    titleAccent: 'by Chauffeur',
    subtitle:
      'Regent Street’s angels, Covent Garden’s tree and the windows of Knightsbridge in a single evening, from a warm car that waits wherever you want to walk.',
    image: '/images/sclassBackground.webp',
    alt: 'A black Mercedes S-Class parked outside a modern glass building',
  },
  stats: [
    { icon: 'bx-star', label: 'Mid-Nov to early Jan', sub: 'When London’s displays are usually lit' },
    { icon: 'bx-time', label: 'From 4 hours', sub: 'One evening, hired by the hour' },
    { icon: 'bx-group', label: 'Up to 7 together', sub: 'In a V-Class; child seats on request' },
  ],
  overview: {
    kicker: 'The festive city from the back seat',
    heading: 'A private evening drive around London’s lights',
    paragraphs: [
      'A London Christmas lights tour by chauffeur is the comfortable way to see the city’s displays: one private car, one evening, and no need to settle for a single street. London’s Christmas lights are typically switched on from mid-November until early January, and they are spread across the West End, Knightsbridge and the river — too far apart to cover on foot on a cold night, and awkward by Tube with children or older relatives.',
      'With a car hired by the hour, you are collected from your home or hotel, driven beneath the Regent Street angels and past the shop windows of Mayfair and Knightsbridge, and set down wherever the best of it is on foot. Covent Garden’s piazza and Carnaby Street are pedestrian areas, so your chauffeur drops you as close as the roads allow and waits nearby while you walk, with spare layers and shopping left in the car.',
      'It suits families with young children, grandparents who would rather not stand in a crowd, and visitors with one free evening in December. Because the time is yours, the drive combines easily with dinner, a theatre show or a ticketed event such as Winter Wonderland — tell us the plan and we shape the evening around it.',
    ],
    includesTitle: 'Included with every lights tour booking',
    includes: [
      'Collection from and return to your door in a Mercedes E-Class, S-Class or V-Class',
      'A professional, licensed chauffeur who knows central London well',
      'Waiting time while you walk the pedestrian streets',
      'Complimentary bottled water, Wi-Fi and phone chargers on board',
      'Child seats on request, free of charge',
      'Free cancellation up to 24 hours before your booking',
    ],
  },
  sections: [
    {
      kicker: 'What you will see',
      heading: 'London’s main Christmas displays',
      paragraphs: [
        'Regent Street is the centrepiece. Its “Spirits of Christmas” angels hang above the curve of the street, and because it is a through road you see them from the car. Oxford Street meets it at Oxford Circus with a display of its own; car access to Oxford Street itself is restricted, so its lights are usually seen from the junctions or on a short walk.',
        'A few minutes away, Bond Street and the streets of Mayfair are known for the decorated façades of their jewellers and fashion houses, and Carnaby Street for its inventive overhead installations. To the east, Covent Garden dresses its piazza with a large tree and decorations, and Trafalgar Square has the Norwegian Christmas tree given to London each year by the city of Oslo — it normally goes up in early December, later than the street lights.',
        'Further west, Harrods and its Knightsbridge neighbours are lit along Brompton Road, and Winter Wonderland fills part of Hyde Park with rides and market stalls. The South Bank is a riverside walk, so it is a stop, not a drive-past. Kew Gardens’ evening light trail is ticketed and lies further out in south-west London; treat it as the main event of an evening.',
      ],
    },
    {
      kicker: 'A sample evening',
      heading: 'A four-hour Christmas lights route',
      paragraphs: [
        'There is no fixed itinerary, but a first visit often runs something like the route below. In December it is dark by late afternoon, so an early start works well with children; a later one leaves room for dinner first. Treat it as a starting point: if you want longer in Covent Garden, or would rather skip a stop and stay in the warm, say so on the night.',
      ],
      bullets: [
        'Collection from your home or hotel in central London in the late afternoon',
        'Knightsbridge: past Harrods, then along the edge of Hyde Park, where Winter Wonderland is held',
        'Bond Street and Mayfair, then Regent Street beneath the angels to Oxford Circus',
        'A stop of around half an hour to walk Carnaby Street',
        'Piccadilly Circus and on to Trafalgar Square for the Norwegian tree',
        'A longer stop at Covent Garden for the piazza and something warm to drink',
        'Across the river to the South Bank if time allows, then home',
      ],
    },
    {
      kicker: 'Good to know',
      heading: 'Traffic, pedestrian streets and what to expect',
      paragraphs: [
        'Central London’s roads are slow on December evenings, and some of the best-decorated streets are pedestrianised or closed for events on particular nights. Your chauffeur therefore chooses the exact route on the night, working around closures and queues instead of following a script. Expect an evening to cover a handful of areas, not every display in London.',
        'Your chauffeur is a professional driver with local knowledge, not a licensed tour guide: they will take you to the right places and suggest where to walk, but there is no guided commentary. Winter Wonderland, the Kew light trail and similar attractions are ticketed by their organisers and not included, so book those yourselves and give us your time slots when you reserve the car.',
      ],
    },
  ],
  journeys: {
    kicker: 'Journey times',
    title: 'How long between the displays?',
    intro:
      'Typical driving times on a December evening. Traffic in central London is heavy in the weeks before Christmas, so these are deliberately cautious.',
    items: [
      { from: 'Knightsbridge to Regent Street', time: '15 – 30 min', note: 'By way of Hyde Park Corner and Mayfair' },
      { from: 'Regent Street to Covent Garden', time: '15 – 25 min', note: 'Through Piccadilly Circus and Trafalgar Square' },
      { from: 'Covent Garden to the South Bank', time: '10 – 20 min', note: 'Across the Thames by Waterloo Bridge' },
      { from: 'West End to Kew Gardens', time: '45 min – 1 hr 15', note: 'South-west London; allow the same to come back' },
    ],
  },
  vehicles: {
    kicker: 'Choose your car',
    title: 'Which car for a Christmas lights tour?',
    intro:
      'All three are Mercedes with leather interiors and climate control, so everyone stays warm. The choice comes down to how many of you are coming.',
    notes: {
      eClass: 'An executive saloon for a couple, or a family of up to three, seeing the lights together.',
      sClass: 'The flagship saloon for up to three: the car for an evening that ends with dinner or the theatre.',
      vClass: 'Seats up to seven, so parents, children and grandparents share one car, with room for coats and bags.',
    },
    recommended: 'vClass',
  },
  pricing: {
    kicker: 'Pricing',
    title: 'What does a Christmas lights tour cost?',
    paragraphs: [
      'A lights tour is booked as hourly chauffeur hire: you pay for the time the car and chauffeur are with you, from collection until you are dropped home. The minimum booking is four hours, which is enough for the central London route with two stops on foot.',
      'Dinner, a show, Winter Wonderland or Kew make for a longer evening. Tell us the date and your plans, and the price for your evening is confirmed before you book.',
    ],
    points: [
      'Mercedes E-Class from £55 per hour',
      'Mercedes S-Class from £75 per hour',
      'Mercedes V-Class (up to 7 passengers) from £75 per hour',
      'Minimum booking of 4 hours',
      'Price confirmed before you book — pay by card, Apple Pay, Google Pay or bank transfer',
    ],
  },
  faq: {
    kicker: 'FAQ',
    title: 'Christmas lights tour questions',
    intro: 'The practical points to settle before your evening among the lights.',
    items: [
      {
        question: 'How long does a London Christmas lights tour by chauffeur take?',
        answer:
          'Allow four hours, which is also the minimum booking. That covers Knightsbridge, Mayfair, Regent Street, Trafalgar Square and Covent Garden at an unhurried pace, with time to get out and walk twice. Add dinner or a ticketed attraction and five or six hours is more realistic.',
      },
      {
        question: 'When are London’s Christmas lights switched on?',
        answer:
          'The main displays are typically lit from mid-November until early January and look best after dark, which in December means from late afternoon. Switch-on dates differ from street to street and change every year, and the Trafalgar Square tree normally arrives in early December, so check the current dates if you are visiting at either end of the season.',
      },
      {
        question: 'Can we get out of the car and walk?',
        answer:
          'Yes, and it is worth doing: Covent Garden’s piazza and Carnaby Street are pedestrian areas, best seen on foot. Your chauffeur sets you down at the nearest sensible point, waits close by and returns when you call. Anything you would rather not carry can stay on board.',
      },
      {
        question: 'Is the tour suitable for young children and grandparents?',
        answer:
          'Very much so. Nobody has to stand in the cold or face the Tube at its busiest, and the walking comes in short stretches. Complimentary child seats are fitted on request — tell us the children’s ages when you book — and the <a href="/fleet/mercedes-v-class">Mercedes V-Class</a> seats up to seven, so three generations can travel in one car.',
      },
      {
        question: 'Is the chauffeur a tour guide, and are tickets included?',
        answer:
          'No on both counts. Your chauffeur is a licensed professional driver who knows the city, not a licensed guide, and does not give a commentary. Tickets for Winter Wonderland, the Kew Gardens light trail or a theatre are bought separately from the organisers.',
      },
      {
        question: 'Can we book a lights tour on Christmas Eve or Christmas Day?',
        answer:
          'Yes. Silk Ride operates 24 hours a day, 365 days a year, including Christmas Eve, Christmas Day and Boxing Day. There is no Tube, bus or national rail service in London on Christmas Day, and many attractions and restaurants are closed, so check anything you plan to stop for. The price for your date is confirmed before you book.',
      },
    ],
  },
  related: {
    kicker: 'More from Silk Ride',
    title: 'Other festive journeys and services',
    intro: 'Making more of December in London?',
    extra: [
      {
        path: '/services/hourly-chauffeur',
        icon: 'bx-time',
        title: 'Hourly Chauffeur Hire',
        tagline: 'How hiring a car and chauffeur by the hour works, at any time of year.',
      },
      {
        path: '/fleet/mercedes-v-class',
        icon: 'bx-group',
        title: 'Mercedes V-Class',
        tagline: 'Seven seats, so the whole family sees the lights from one car.',
      },
    ],
  },
  cta: {
    title: 'Book your Christmas lights tour',
    subtitle: 'Tell us the evening, your pick-up address and how many of you are coming, and we will confirm the car and the price.',
  },
  schema: {
    serviceType: 'Hourly chauffeur hire',
    areaServed: [
      { type: 'City', name: 'London' },
      { type: 'Place', name: 'West End of London' },
      { type: 'Place', name: 'Covent Garden' },
    ],
    hourlyPriced: true,
  },
}

export default guide
