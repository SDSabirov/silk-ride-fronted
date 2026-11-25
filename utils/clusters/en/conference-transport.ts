import type { ClusterGuide } from '../types'

const guide: ClusterGuide = {
  slug: 'conference-transport',
  section: 'corporate-chauffeur',
  name: 'Conference Transport',
  seo: {
    title: 'Conference & Exhibition Transport in London',
    description:
      'Chauffeur transport for delegates, speakers and VIPs at ExCeL, Olympia and central London venues. Airport arrivals, hourly standby cars, VAT invoices.',
  },
  kicker: 'Corporate Chauffeur · Conferences & Exhibitions',
  hero: {
    title: 'Conference & Exhibition',
    titleAccent: 'Transport in London',
    subtitle:
      'Airport arrivals, hotel-to-venue transfers and standby cars for speakers and executives at ExCeL, Olympia and London’s central venues.',
    image: '/images/covers/fleet.webp',
    alt: 'A row of black Mercedes V-Class vehicles parked side by side',
  },
  stats: [
    { icon: 'bx-buildings', label: 'ExCeL, Olympia, QEII', sub: 'And the Business Design Centre' },
    { icon: 'bxs-plane-alt', label: 'Airport arrivals', sub: 'Flight tracking and meet & greet' },
    { icon: 'bx-briefcase', label: 'One point of contact', sub: 'Corporate account with VAT invoices' },
  ],
  overview: {
    kicker: 'Event week, organised',
    heading: 'Cars for delegates, speakers and exhibitors',
    paragraphs: [
      'Conference and exhibition transport in London is mostly a question of timing. Delegates land at different airports on different days, speakers need to be at the venue well before their session, and the exhibiting team has to be on the stand before the doors open. The main venues are also far apart: ExCeL London in the Royal Docks to the east, Olympia London in Kensington to the west, the QEII Centre in Westminster and the Business Design Centre in Islington.',
      'We provide the cars that hold that timetable together. International guests are met at the airport and driven to their hotel, and morning transfers run from hotel to venue. For the people whose day does not follow the programme — a keynote speaker, a chief executive with meetings off site, a VIP guest — a car and chauffeur stay on standby by the hour.',
      'For organisers, agencies and executive assistants, everything can be arranged through one point of contact and billed to a single corporate account with VAT invoices, instead of arriving as a scatter of individual taxi receipts.',
    ],
    includesTitle: 'What we arrange for an event',
    includes: [
      'Airport meet and greet with flight tracking for arriving delegates',
      'Transfers between hotel, venue and evening functions to an agreed timetable',
      'A car and chauffeur on standby by the hour for speakers and executives',
      'Mercedes V-Class for small teams travelling with display materials',
      'One point of contact for the organiser before and during the event',
      'A corporate account with VAT invoices',
    ],
  },
  sections: [
    {
      kicker: 'The venues',
      heading: 'ExCeL, Olympia and central London',
      paragraphs: [
        'ExCeL London stands beside Royal Victoria Dock in E16, a short drive from London City Airport. It is a very long building with entrances at both its western and eastern ends, so the first thing we ask is which entrance or hall your event is using — arriving at the wrong end means a long walk indoors.',
        'Olympia London is on Hammersmith Road in Kensington, W14, on the Heathrow side of the centre. The QEII Centre faces Westminster Abbey, in streets that are closely managed and occasionally closed for state occasions and demonstrations. The Business Design Centre is on Upper Street in Islington, close to Angel.',
        'We are independent of the venues. At each one we follow the set-down and pick-up arrangements that the venue and your organiser publish for the show, and we confirm the exact point with you beforehand.',
      ],
      bullets: [
        'Tell us the entrance or hall as well as the venue address',
        'Send speakers’ session times so each arrival is planned back from them',
        'Expect queues on the approach roads when a large show opens and closes',
        'Pass on any vehicle or drop-off instructions the organiser has issued',
      ],
    },
    {
      kicker: 'For organisers',
      heading: 'Running transport across several days',
      paragraphs: [
        'Send us the arrivals list — names, flights and hotels — together with the event programme, and we turn it into a schedule of cars. Every flight is tracked, so a delayed arrival moves its own pick-up without anyone on your team having to call. International arrivals have 60 minutes of free waiting and domestic arrivals 45.',
        'Exhibiting teams usually travel in a V-Class: up to seven seats, with extra luggage space for pull-up banners, sample cases and boxes of literature. It is a passenger vehicle, not a van, so stand structures and pallets still need a freight service.',
        'During the show, a standby car covers what the programme cannot predict: a speaker who has to leave straight after a panel, a client dinner across town, an early run to the airport on the final afternoon.',
      ],
    },
  ],
  journeys: {
    kicker: 'Journey times',
    title: 'How long to the venue?',
    intro: 'Typical driving times in normal traffic. Allow more on weekday mornings and on the opening day of a large show.',
    items: [
      { from: 'Central London to ExCeL', time: '40 min – 1 hr', note: 'From Mayfair or Westminster, east past Canary Wharf' },
      { from: 'Heathrow Airport to ExCeL', time: '1 hr 15 – 1 hr 45', note: 'Right across London; the longest transfer to plan for' },
      { from: 'London City Airport to ExCeL', time: '10 – 20 min', note: 'The closest airport, also in the Royal Docks' },
      { from: 'Heathrow Airport to Olympia', time: '40 min – 1 hr', note: 'By the M4 and A4 into Kensington' },
    ],
  },
  vehicles: {
    kicker: 'Choose your car',
    title: 'Which car for a conference?',
    intro:
      'All three are Mercedes with leather interiors and climate control. Most events use a mix: saloons for individual arrivals and V-Classes for teams.',
    notes: {
      eClass: 'An executive saloon for individual delegates and airport arrivals of up to three passengers.',
      sClass: 'The flagship saloon for keynote speakers, board members and VIP guests, or as the standby car for the week.',
      vClass: 'Seats up to seven with extra luggage space — the practical choice for an exhibiting team and its materials.',
    },
    recommended: 'vClass',
  },
  pricing: {
    kicker: 'Pricing',
    title: 'How is conference transport priced?',
    paragraphs: [
      'There are two parts. Standby cars are booked as hourly chauffeur hire, with a four-hour minimum, and stay with the speaker or executive for the whole booking. Airport arrivals and departures are fixed-price transfers: between central London and Heathrow or London City they start from £120, Gatwick from £180, and Stansted or Luton from £200.',
      'Because venues and hotels vary, we quote every journey for your event before you book, so the organiser sees the whole transport cost in advance. It can all be billed to one corporate account with VAT invoices.',
    ],
    points: [
      'Hourly hire: E-Class from £55, S-Class and V-Class from £75 per hour',
      'Minimum hourly booking of 4 hours',
      'Heathrow or London City to central London from £120',
      '60 minutes’ free waiting for international arrivals, 45 for domestic',
      'Free changes and cancellation up to 24 hours before each booking',
    ],
  },
  faq: {
    kicker: 'FAQ',
    title: 'Conference transport questions',
    intro: 'The points event organisers and exhibitors raise most often.',
    items: [
      {
        question: 'Do you provide conference transport to ExCeL London?',
        answer:
          'Yes. We bring delegates and speakers to ExCeL from hotels across London and from London’s main airports. London City Airport is the closest, about 10 to 20 minutes away; from Heathrow allow around an hour and a half. Tell us which entrance or hall your event uses and we will plan the set-down accordingly.',
      },
      {
        question: 'Can you manage airport arrivals for a whole delegation?',
        answer:
          'Yes. Send us the list of names, flights and hotels and we schedule a car for each arrival or group of arrivals. Every flight is tracked and guests are met in the arrivals hall. Delegates landing at <a href="/airport-transfers/heathrow">Heathrow</a>, <a href="/airport-transfers/gatwick">Gatwick</a>, Stansted, Luton and London City can all be covered in the same plan.',
      },
      {
        question: 'How many people can travel together?',
        answer:
          'The V-Class carries up to seven passengers and the saloons up to three. Larger groups travel in several vehicles running to the same timetable. Our fleet is made up of saloons and V-Classes, so for a full coach-load we would suggest a coach for the main group and our cars for speakers and VIPs.',
      },
      {
        question: 'Can a car stay on standby at the venue all day?',
        answer:
          'Yes. With hourly hire the car and chauffeur remain with the client for the whole booking. Where the venue does not allow waiting at the entrance, the chauffeur parks nearby and returns to the pick-up point when called.',
      },
      {
        question: 'Can you carry exhibition materials?',
        answer:
          'Hand-carried items, yes: banners, sample cases and boxes of brochures fit in a V-Class alongside the team. Tell us roughly what you are bringing so we can check it against the number of passengers.',
      },
      {
        question: 'How do invoicing and changes work for organisers?',
        answer:
          'Event bookings can be placed on a corporate account and invoiced with VAT; we also accept cards and bank transfer. Each booking can be changed or cancelled free of charge up to 24 hours beforehand, which helps when delegate lists move in the final week.',
      },
    ],
  },
  related: {
    kicker: 'More from Silk Ride',
    title: 'Related services',
    intro: 'Bringing delegates in by air, or moving a team and its materials?',
    extra: [
      {
        path: '/airport-transfers/london-city',
        icon: 'bxs-plane-alt',
        title: 'London City Airport Transfers',
        tagline: 'The closest airport to ExCeL, with fixed-price transfers into central London.',
      },
      {
        path: '/fleet/mercedes-v-class',
        icon: 'bx-group',
        title: 'Mercedes V-Class',
        tagline: 'Seven seats and extra luggage space for exhibition teams.',
      },
    ],
  },
  cta: {
    title: 'Plan transport for your event',
    subtitle: 'Send us the venue, the dates and your arrivals list, and we will come back with a schedule of cars and a quote.',
  },
  schema: {
    serviceType: 'Corporate chauffeur service',
    areaServed: [
      { type: 'City', name: 'London' },
      { type: 'Place', name: 'ExCeL London' },
      { type: 'Place', name: 'Olympia London' },
      { type: 'Place', name: 'QEII Centre' },
    ],
    hourlyPriced: true,
  },
}

export default guide
