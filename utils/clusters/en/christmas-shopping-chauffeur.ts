import type { ClusterGuide } from '../types'

const guide: ClusterGuide = {
  slug: 'christmas-shopping-chauffeur',
  section: 'christmas',
  name: 'Christmas Shopping',
  seo: {
    title: 'Christmas Shopping Chauffeur in London',
    description:
      'A car and chauffeur by the hour for Christmas shopping in London: dropped at each door, bags kept in the boot. From £55 per hour, 4-hour minimum.',
  },
  kicker: 'Christmas Chauffeur · Shopping',
  hero: {
    title: 'Christmas Shopping Chauffeur',
    titleAccent: 'in London',
    subtitle:
      'Bond Street, Knightsbridge and beyond without parking, the Tube or carrying a bag further than the kerb. Your car waits while you shop.',
    image: '/images/covers/assist.webp',
    alt: 'A chauffeur loading a suitcase into the boot of a black Mercedes',
  },
  stats: [
    { icon: 'bx-shopping-bag', label: 'Door to door', sub: 'Set down at each shop, collected when you call' },
    { icon: 'bx-time', label: 'From 4 hours', sub: 'Half a day or a full day, by the hour' },
    { icon: 'bx-gift', label: 'Bags stay in the boot', sub: 'And come home with you at the end' },
  ],
  overview: {
    kicker: 'Present shopping without the struggle',
    heading: 'A car and chauffeur for your Christmas shopping',
    paragraphs: [
      'A Christmas shopping chauffeur in London takes the hard part out of buying presents. December is the busiest shopping period of the year: parking in the West End is scarce, the pavements are crowded, and the Tube with an armful of bags is hard work. With a car and chauffeur hired by the hour, you are driven from one shop door to the next and never carry anything further than the kerb.',
      'Your chauffeur collects you from your home or hotel, sets you down as close to each entrance as the street allows and waits nearby. When you are ready, you call or message and the car comes back for you. Purchases go into the boot between stops, so you walk into the next shop with your hands free, and everything is delivered home with you at the end of the day.',
      'Because the time is yours, the list can be as short or as ambitious as you like: a morning in Mayfair, a full day across Knightsbridge, Chelsea and Covent Garden, or a trip out of town to Bicester Village. Lunch, a stop at your hotel to unload, or collecting a friend on the way are all simply part of the route.',
    ],
    includesTitle: 'Included with every Christmas shopping booking',
    includes: [
      'Collection from and return to your door in a Mercedes E-Class, S-Class or V-Class',
      'A professional, licensed chauffeur for the whole booking',
      'As many stops as you can fit into your booked hours',
      'Your purchases kept in the boot between shops',
      'Complimentary bottled water, Wi-Fi and phone chargers on board',
      'Free cancellation up to 24 hours before your booking',
    ],
  },
  sections: [
    {
      kicker: 'Where to shop',
      heading: 'London’s shopping districts by car',
      paragraphs: [
        'London’s best shopping is spread across several neighbourhoods a mile or two apart, which is exactly why a car helps. Bond Street and the surrounding streets of Mayfair are home to jewellers, watchmakers and fashion houses. A few minutes away are Oxford Street, with Selfridges, and Regent Street, with Liberty just behind it on Great Marlborough Street.',
        'Knightsbridge has Harrods and Harvey Nichols a short walk from each other, with the boutiques of Sloane Street running south towards Chelsea and the King’s Road. Covent Garden mixes smaller shops with its market building and piazza, and Westfield London in Shepherd’s Bush puts a very large number of stores under one roof — useful on a wet day.',
      ],
      bullets: [
        'Mayfair: Bond Street for jewellery, watches and fashion',
        'West End: Selfridges on Oxford Street, Liberty beside Regent Street',
        'Knightsbridge and Chelsea: Harrods, Harvey Nichols, Sloane Street and the King’s Road',
        'Covent Garden: smaller shops around the piazza',
        'Westfield London: a large indoor shopping centre in west London',
      ],
    },
    {
      kicker: 'Planning the day',
      heading: 'How to get the most from your hours',
      paragraphs: [
        'A little order saves a lot of time. Group your shops by area so that the car makes a few short hops instead of criss-crossing the centre, and send us the list when you book so your chauffeur can plan the sequence. In the weeks before Christmas, weekdays are quieter than weekends, and an early start usually means calmer shops and easier roads.',
        'Many of these streets do not allow a car to wait at the kerb, and some stretches are restricted or pedestrianised. Your chauffeur therefore drops you at the nearest practical point and waits close by; allow a few minutes for the car to return after you call, and longer on a busy Saturday. If the boot fills up, a run back to your home or hotel to unload is easily fitted in.',
      ],
    },
    {
      kicker: 'Out of town',
      heading: 'Adding Bicester Village',
      paragraphs: [
        'Bicester Village, the designer outlet in Oxfordshire, is about 60 miles from central London via the M40 — typically an hour and a half to two hours each way. Once the drive is counted it is a day in itself, so plan it as a separate outing, or as a long day that ends with a stop or two in London, and not as a quick detour.',
        'The advantage of going by car is the journey back: everything you have bought travels in the boot to your front door, with no station platforms to carry it along.',
      ],
    },
  ],
  journeys: {
    kicker: 'Journey times',
    title: 'How long between the shops?',
    intro:
      'Typical driving times in the weeks before Christmas, when traffic in central London is heavy. Allow longer on Saturdays.',
    items: [
      { from: 'Mayfair to Knightsbridge', time: '15 – 30 min', note: 'Bond Street to Harrods, by way of Hyde Park Corner' },
      { from: 'Knightsbridge to Covent Garden', time: '25 – 45 min', note: 'Across the West End; slowest in the late afternoon' },
      { from: 'Central London to Westfield London', time: '30 – 50 min', note: 'West to Shepherd’s Bush; the centre has its own car parks' },
      { from: 'Central London to Bicester Village', time: '1 hr 30 – 2 hr', note: 'About 60 miles, via the A40 and M40' },
    ],
  },
  vehicles: {
    kicker: 'Choose your car',
    title: 'Which car for Christmas shopping?',
    intro:
      'All three are Mercedes with leather interiors and climate control. Choose by the number of shoppers and the size of what you expect to bring home.',
    notes: {
      eClass: 'An executive saloon for one or two shoppers and a sensible number of bags.',
      sClass: 'The flagship saloon for up to three: the most restful place to sit between shops on a long day.',
      vClass: 'Up to seven seats and extra luggage space — the one to choose for a group, bulky gifts or large boxes.',
    },
    recommended: 'sClass',
  },
  pricing: {
    kicker: 'Pricing',
    title: 'What does a Christmas shopping chauffeur cost?',
    paragraphs: [
      'Christmas shopping is booked as hourly chauffeur hire. You pay for the time the car and chauffeur are with you, from collection until you and your bags are home, and the car is yours alone throughout. The minimum booking is four hours, which suits one or two districts; three or more areas, or Bicester Village, call for a longer day.',
      'Tell us the date, where you would like to go and how many of you there are, and the price for your day is confirmed before you book.',
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
    title: 'Christmas shopping chauffeur questions',
    intro: 'The practical details to settle before you write the list.',
    items: [
      {
        question: 'How does a Christmas shopping chauffeur work?',
        answer:
          'You hire the car and chauffeur by the hour, with a four-hour minimum. You are collected from your address, driven to each shop in the order that suits you, and picked up again whenever you call. There is no fixed itinerary, and extra stops are simply part of the route.',
      },
      {
        question: 'Where does the chauffeur wait while we shop?',
        answer:
          'Close by, wherever waiting is permitted. Kerbside space on streets such as Bond Street and Brompton Road is limited, so the car will not always be directly outside. Call or message a few minutes before you are ready and your chauffeur will meet you at the door, or at the nearest point where the car can stop.',
      },
      {
        question: 'Can we leave our shopping in the car?',
        answer:
          'Yes — that is the point of the service. The car is hired by you alone for the whole booking, so bags go into the boot after each stop and stay there until you are home. You may prefer to keep small, high-value items such as jewellery with you.',
      },
      {
        question: 'Which car should we choose if we expect to buy a lot?',
        answer:
          'For one to three people a saloon is normally enough for a day’s bags. If there are four or more of you, or the list includes bulky presents — toys, homeware, anything in a large box — choose the <a href="/fleet/mercedes-v-class">Mercedes V-Class</a>, which seats up to seven and has extra luggage space.',
      },
      {
        question: 'Can we include Bicester Village?',
        answer:
          'Yes. It is around 60 miles from central London, so allow a full day once the drive there and back is counted. Our <a href="/hourly-chauffeur/bicester-village">Bicester Village chauffeur</a> page explains how the day works.',
      },
      {
        question: 'When is the best time to go Christmas shopping by car?',
        answer:
          'Weekdays are quieter than weekends, and mornings quieter than afternoons, on the roads as well as in the shops. Opening hours vary between stores and change over the festive period, so check the ones on your list. We recommend booking at least 24 hours ahead, although same-day bookings are often possible, subject to availability.',
      },
    ],
  },
  related: {
    kicker: 'More from Silk Ride',
    title: 'Other festive journeys and services',
    intro: 'Coming to London for the shops, or planning more of the season?',
    extra: [
      {
        path: '/services/hourly-chauffeur',
        icon: 'bx-time',
        title: 'Hourly Chauffeur Hire',
        tagline: 'The same by-the-hour service for any day in London, all year round.',
      },
      {
        path: '/airport-transfers/heathrow',
        icon: 'bxs-plane-alt',
        title: 'Heathrow Airport Transfers',
        tagline: 'Flying in to shop? Fixed-price transfers to central London from £120.',
      },
    ],
  },
  cta: {
    title: 'Book your Christmas shopping chauffeur',
    subtitle: 'Tell us the date, your pick-up address and the shops on your list, and we will confirm the car and the price.',
  },
  schema: {
    serviceType: 'Hourly chauffeur hire',
    areaServed: [
      { type: 'City', name: 'London' },
      { type: 'Place', name: 'Mayfair' },
      { type: 'Place', name: 'Knightsbridge' },
      { type: 'Place', name: 'Bicester Village' },
    ],
    hourlyPriced: true,
  },
}

export default guide
