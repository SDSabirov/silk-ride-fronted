import type { ClusterGuide } from '../types'

const guide: ClusterGuide = {
  slug: 'wedding-guest-transport',
  section: 'wedding-cars',
  name: 'Wedding Guest Transport',
  seo: {
    title: 'Wedding Guest Transport & Shuttles in London',
    description:
      'Mercedes V-Class shuttles and cars for wedding guests in London: hotel, ceremony, reception and airport collections. One schedule, quoted in advance.',
  },
  kicker: 'Wedding Cars · Guest Transport',
  hero: {
    title: 'Wedding Guest Transport',
    titleAccent: 'Shuttles and Family Cars',
    subtitle:
      'Mercedes V-Class shuttles and saloons that move parents, the bridal party and out-of-town guests between hotel, ceremony and reception, on one schedule agreed in advance.',
    image: '/images/covers/business-trip.webp',
    alt: 'Smartly dressed travellers walking to a black Mercedes V-Class outside an office building',
  },
  stats: [
    { icon: 'bx-group', label: 'Up to 7 per V-Class', sub: 'Several vehicles for larger parties' },
    { icon: 'bxs-plane-alt', label: 'Airport collections', sub: 'Flight tracking and meet & greet' },
    { icon: 'bx-calendar', label: 'One agreed schedule', sub: 'Planned with you or your planner' },
  ],
  overview: {
    kicker: 'Everyone in the right place',
    heading: 'Cars and shuttles for family and guests',
    paragraphs: [
      'Wedding guest transport is noticed only when it goes wrong: grandparents waiting for a taxi that does not come, a cousin circling for a parking space as the ceremony begins. We take it off your list by moving family and guests between their hotels, the ceremony and the reception in chauffeur-driven Mercedes vehicles, so nobody has to drive, navigate or look for somewhere to park.',
      'The vehicle that does most of the work is the Mercedes V-Class, a luxury MPV that seats up to seven and has extra luggage space. One suits the bridal party or a family group; several together, or one making repeated runs, become a timed shuttle for a longer guest list. Parents and grandparents who would prefer a saloon can travel in an E-Class or S-Class.',
      'Everything runs to a single schedule agreed beforehand with you or your wedding planner. It can start days earlier, with airport collections for guests flying in, and finish with late-evening returns to the hotels once the dancing is over. For the youngest guests, child seats are complimentary on request.',
    ],
    includesTitle: 'Included with wedding guest transport',
    includes: [
      'Mercedes V-Class vehicles seating up to seven guests each',
      'E-Class and S-Class saloons for parents and grandparents',
      'Professionally trained, licensed and background-checked chauffeurs',
      'One schedule agreed in advance with the couple or the planner',
      'Airport collections with flight tracking and meet & greet',
      'Complimentary child seats on request',
    ],
  },
  sections: [
    {
      kicker: 'Planning the shuttle',
      heading: 'How to plan a wedding guest shuttle',
      paragraphs: [
        'Start with numbers rather than vehicles. Count the guests who will really need a seat — those staying at the hotels you have recommended, older relatives, anyone arriving by train or plane — and leave out those with their own plans. Seven guests fill one V-Class, which tells you how many vehicle-loads there are to move.',
        'Then work back from the ceremony. Decide when the last guests should be seated, allow for the drive and for unhurried boarding, and you have the departure time of the final run. If one vehicle makes two or three runs, each earlier departure is set by the round trip between hotel and venue. Where the drive is short, repeated runs work well; where it is long, more vehicles each running once is usually better.',
        'The same applies in reverse at night. Families with children and older relatives often want to leave before the end, so consider an early return as well as a final one. Give guests the departure times beforehand, and name one person the chauffeurs can call on the day.',
      ],
      bullets: [
        'How many guests need transport, and from which hotels',
        'The ceremony time, and when guests should be seated',
        'Whether ceremony and reception are at the same venue',
        'Return times: an early run and a final run',
        'Children who need seats, and anyone who needs extra time to board',
        'A contact for the chauffeurs on the day',
      ],
    },
    {
      kicker: 'Guests arriving by air',
      heading: 'Collecting guests who are flying in',
      paragraphs: [
        'For guests travelling from abroad, the wedding begins in the arrivals hall. Send us their names, flight numbers and where each is staying, and we arrange a collection for every arrival. The chauffeur tracks the flight, so the pick-up moves with it if the plane lands early or late, and meets guests inside the terminal before driving them to their hotel.',
        'Guests landing at similar times at the same airport can share a V-Class, which takes up to seven people and their luggage. Waiting time after landing is included — 60 minutes for international arrivals and 45 minutes for domestic flights — to allow for passport control and baggage reclaim.',
        'The journey home can be arranged in the same way, with each departure from the hotel timed to the flight.',
      ],
    },
  ],
  journeys: {
    kicker: 'Airport transfer times',
    title: 'How long from the airport to central London?',
    intro:
      'Typical driving times to central London in normal traffic. Allow longer in the weekday rush hours, and add the time it takes to leave the airport after landing.',
    items: [
      { from: 'Heathrow Airport', time: '45 min – 1 hr 15', note: 'West of London; the usual arrival point for long-haul guests' },
      { from: 'Gatwick Airport', time: '1 hr 15 – 1 hr 45', note: 'South of London, in West Sussex' },
      { from: 'Stansted Airport', time: '1 hr 15 – 1 hr 45', note: 'North-east of London, in Essex, by the M11' },
      { from: 'London City Airport', time: '35 – 55 min', note: 'In east London’s Royal Docks; closer still to the City and Canary Wharf' },
    ],
  },
  vehicles: {
    kicker: 'Choose your vehicles',
    title: 'Which vehicles for wedding guests?',
    intro: 'All three are Mercedes with leather interiors and climate control. A guest plan is usually built around the V-Class, with a saloon or two for close family.',
    notes: {
      eClass: 'An executive saloon for up to three: a good fit for a couple arriving from the airport or for parents travelling separately.',
      sClass: 'The flagship saloon for up to three, well suited to parents and grandparents on the drive to the ceremony.',
      vClass: 'Seats up to seven with extra luggage space, which makes it the natural shuttle and the simplest way to keep the bridal party together.',
    },
    recommended: 'vClass',
  },
  pricing: {
    kicker: 'Pricing',
    title: 'How is wedding guest transport priced?',
    paragraphs: [
      'Guest transport is priced by a tailored quote, given before you book. A shuttle between one hotel and one venue is a different job from collecting three families at two airports, so we price your plan rather than quoting from a list.',
      'Send us the outline — numbers, addresses, timings — and we will suggest how many vehicles and runs it takes, then quote for the whole schedule. If guest numbers change as the replies come in, we revise the plan and the quote with you.',
    ],
    points: [
      'The number and type of vehicles: V-Class shuttles, E-Class or S-Class saloons',
      'The wedding date and the timing of each run',
      'Hotel, ceremony, reception and airport addresses, and the distance between them',
      'How long the vehicles are needed, including late-evening returns',
      'Ribbon and flower decoration, if you would like it on the family cars',
      'Payment by Visa, Mastercard, Amex, Apple Pay, Google Pay or bank transfer',
    ],
  },
  faq: {
    kicker: 'FAQ',
    title: 'Wedding guest transport questions',
    intro: 'The practical points couples and planners raise when they arrange transport for guests.',
    items: [
      {
        question: 'How much does wedding guest transport cost?',
        answer:
          'It is quoted individually for each wedding, before you book. The price depends on how many vehicles are needed and of which type, the date and timings, the addresses and the distance between them, and how long the vehicles are in use. Tell us your plan and we will quote for the whole schedule.',
      },
      {
        question: 'How many guests fit in one vehicle?',
        answer:
          'A Mercedes V-Class seats up to seven passengers; the E-Class and S-Class saloons take up to three each. Larger groups travel in several vehicles at once, or in one vehicle making repeated runs.',
      },
      {
        question: 'Can one vehicle make several runs between the hotel and the venue?',
        answer:
          'Yes, and where the drive is short it is often the most sensible arrangement. We work the timings back from the ceremony and tell you when each run needs to leave the hotel.',
      },
      {
        question: 'Can you collect our guests from the airport?',
        answer:
          'Yes. We collect from <a href="/airport-transfers/heathrow">Heathrow</a>, Gatwick, Stansted, Luton and London City, with flight tracking and a meet and greet in the terminal. Give us the flight numbers and hotel addresses, and the collections become part of the same wedding schedule.',
      },
      {
        question: 'How late can the return journeys run?',
        answer:
          'As late as your reception does. We operate 24 hours a day, every day of the year, so returns after midnight are planned like any other run. Agree the times beforehand so that the right number of vehicles is on hand.',
      },
      {
        question: 'Do you provide child seats for young guests?',
        answer:
          'Yes, child seats are complimentary on request. Tell us the children’s ages when you enquire, and bear in mind that each child seat takes one passenger place.',
      },
    ],
  },
  related: {
    kicker: 'More from Silk Ride',
    title: 'Other wedding cars and services',
    intro: 'Choosing the vehicles, or expecting guests from abroad?',
    extra: [
      {
        path: '/fleet/mercedes-v-class',
        icon: 'bx-group',
        title: 'Mercedes V-Class',
        tagline: 'More about the seven-seat MPV we use for guest shuttles.',
      },
      {
        path: '/airport-transfers/heathrow',
        icon: 'bxs-plane-alt',
        title: 'Heathrow Airport Transfers',
        tagline: 'Collections with flight tracking and meet & greet for guests flying in.',
      },
    ],
  },
  cta: {
    title: 'Plan your wedding guest transport',
    subtitle: 'Tell us the date, guest numbers and addresses, and we will come back with a schedule and a quote.',
  },
  schema: {
    serviceType: 'Wedding car hire',
    areaServed: [
      { type: 'City', name: 'London' },
      { type: 'Airport', name: 'Heathrow Airport' },
      { type: 'Airport', name: 'Gatwick Airport' },
      { type: 'Airport', name: 'London Stansted Airport' },
      { type: 'Airport', name: 'London City Airport' },
    ],
    hourlyPriced: false,
  },
}

export default guide
