import type { ClusterGuide } from '../types'

const guide: ClusterGuide = {
  slug: 'silverstone',
  section: 'event-chauffeur',
  name: 'Silverstone',
  seo: {
    title: 'Silverstone Grand Prix Chauffeur from London',
    description:
      'London to the British Grand Prix at Silverstone in a chauffeur-driven Mercedes. Your chauffeur waits all day. Hourly hire from £55, 4-hour minimum.',
  },
  kicker: 'Event Chauffeur · Silverstone',
  hero: {
    title: 'Silverstone Grand Prix Chauffeur',
    titleAccent: 'from London',
    subtitle:
      'A long day made easier: an early start from your own front door, a chauffeur who waits at the circuit, and nobody in your party driving home after the chequered flag.',
    image: '/images/covers/fleet.webp',
    alt: 'A row of black Mercedes V-Class vehicles parked side by side',
  },
  stats: [
    { icon: 'bx-map', label: 'Silverstone, Northants', sub: 'About 80 miles north-west of central London' },
    { icon: 'bx-time', label: '2 hr – 2 hr 30', sub: 'From central London in normal traffic' },
    { icon: 'bx-user-check', label: 'Chauffeur waits', sub: 'Full-day hire, same car home' },
  ],
  overview: {
    kicker: 'Race day, door to door',
    heading: 'London to the British Grand Prix by private car',
    paragraphs: [
      'The Formula 1 British Grand Prix is held at Silverstone Circuit in Northamptonshire, usually in early July, and it draws one of the largest crowds of any sporting event in Britain. The circuit is about 80 miles from central London, reached by the M40 or the M1 and then the A43. A Silverstone Grand Prix chauffeur turns a tiring day of driving and queueing into time you can spend resting, working or arguing about tyre strategy.',
      'Race-day traffic is the reason most people look for a driver. The roads into the circuit are busy from early morning, and after the race it can take a long time simply to leave the car parks and rejoin the A43. A chauffeur cannot make those queues disappear — but you sit through them in the back of a Mercedes with water, Wi-Fi and a phone charger, rather than at the wheel after ten hours on your feet.',
      'We book Silverstone as full-day hire. Your chauffeur collects you from your home or hotel, drives you to the circuit, waits for the day and brings you back in the same car. Whatever you would rather not carry around the circuit can stay in the car until you return.',
    ],
    includesTitle: 'Included with every Silverstone booking',
    includes: [
      'Door-to-door travel from London in a Mercedes E-Class, S-Class or V-Class',
      'A professionally trained, licensed chauffeur who waits for the whole day',
      'Complimentary bottled water, Wi-Fi and phone chargers on board',
      'Departure time planned around race-day traffic on the M1, M40 and A43',
      'Room for up to seven passengers and their bags in the V-Class',
      'Free changes and cancellation up to 24 hours before your booking',
    ],
  },
  sections: [
    {
      kicker: 'Planning your day',
      heading: 'Why race day starts early',
      paragraphs: [
        'Cars are on track from Friday, with qualifying on Saturday and the Grand Prix itself on Sunday afternoon. Sunday is by far the busiest day on the roads, and the support races and build-up begin hours before the main event, so most spectators aim to be inside the circuit by mid-morning.',
        'From central London that means an early pick-up — we suggest between 6am and 7am on Sunday. It sounds severe, but leaving an hour later can add much more than an hour to the journey once the queues on the A43 have formed. When you book, we propose a departure time based on your address, your entrance and the day you are attending.',
        'The return deserves the same thought: leave as the race ends and accept slow traffic for the first few miles, or stay on and travel once the roads have eased.',
      ],
      bullets: [
        'Qualifying on Saturday, the Grand Prix on Sunday afternoon',
        'Sunday morning is the busiest time on the approach roads',
        'Friday and Saturday are generally easier journeys than race day',
      ],
    },
    {
      kicker: 'On the day',
      heading: 'Arriving at and leaving the circuit',
      paragraphs: [
        'Silverstone publishes a traffic plan for each Grand Prix, with signed routes from the M1 and M40, designated car parks and set-down areas, and temporary restrictions on the surrounding lanes. The plan is revised each year, and the police and marshals may change it on the day. We follow the current plan and tell you before you travel where you will be dropped and collected.',
        'If your tickets or hospitality come with a car park pass, let us know when you book so that your chauffeur can park on it. It is also worth agreeing a fallback meeting time and place when you are dropped off, in case mobile networks are congested later in the day.',
      ],
    },
  ],
  journeys: {
    kicker: 'Journey times',
    title: 'How long does it take to reach Silverstone?',
    intro: 'Typical driving times to Silverstone Circuit in normal traffic. On Grand Prix Sunday, allow considerably longer.',
    items: [
      { from: 'Central London', time: '2 hr – 2 hr 30', note: 'Via the M40 and A43, or the M1 to junction 15A' },
      { from: 'Heathrow Airport', time: '1 hr 30 – 1 hr 50', note: 'M25, M40 and A43, with no need to come into London' },
      { from: 'Oxford', time: '50 min – 1 hr 10', note: 'A convenient base for a Grand Prix weekend' },
      { from: 'Luton Airport', time: '1 hr – 1 hr 20', note: 'North on the M1, then the A43' },
    ],
  },
  vehicles: {
    kicker: 'Choose your car',
    title: 'Which car for Silverstone?',
    intro: 'All three are Mercedes with leather interiors and climate control. On a round trip of four hours or more, space matters more than usual.',
    notes: {
      eClass: 'A comfortable executive saloon for one to three people, well suited to a long motorway run.',
      sClass: 'Our flagship saloon for hosts and their guests, with rear seats comfortable enough to sleep in on the way home.',
      vClass: 'Seats up to seven with extra luggage space, so a group of friends or clients shares one car for the whole day.',
    },
    recommended: 'vClass',
  },
  pricing: {
    kicker: 'Pricing',
    title: 'What does a Silverstone chauffeur cost?',
    paragraphs: [
      'Silverstone is booked as hourly chauffeur hire, charged from your pick-up in London until you are dropped home. Because the car and chauffeur stay with you, it is one booking for the day rather than two long one-way journeys.',
      'It pays to be realistic about the length of the day. With an early start, a full race programme and slow roads afterwards, Grand Prix Sunday from central London typically runs to between twelve and fifteen hours door to door; Friday and Saturday are usually shorter. Tell us your plans and we will quote for the whole day before you book.',
    ],
    points: [
      'Mercedes E-Class from £55 per hour',
      'Mercedes S-Class from £75 per hour',
      'Mercedes V-Class (up to 7 passengers) from £75 per hour',
      'Minimum booking of 4 hours',
      'Quote for the full day confirmed before you book',
    ],
  },
  faq: {
    kicker: 'FAQ',
    title: 'Silverstone chauffeur questions',
    intro: 'The practical questions to settle before travelling to the British Grand Prix.',
    items: [
      {
        question: 'How early should I book a Silverstone Grand Prix chauffeur?',
        answer:
          'As soon as you have your tickets. Each booking takes a car and chauffeur for the entire day, so the earlier you book the better, particularly if you need the seven-seat V-Class. You can change or cancel free of charge up to 24 hours before the booking.',
      },
      {
        question: 'Where does the chauffeur wait during the race?',
        answer:
          'With hourly hire the car and chauffeur are yours for the whole booking. If you have a car park pass, the car is parked on site; otherwise the chauffeur waits away from the circuit and returns to the agreed collection point when you call.',
      },
      {
        question: 'How long does it take to get away after the race?',
        answer:
          'It varies, and nobody can honestly promise a quick exit when tens of thousands of cars are leaving at once. Setting off promptly at the flag and waiting an hour or two are both sensible approaches. Your chauffeur will advise on the day, but we cannot bypass the queues.',
      },
      {
        question: 'Can you collect us from Heathrow or Luton and go straight to the circuit?',
        answer:
          'Yes. In normal traffic Silverstone is roughly an hour and a half from <a href="/airport-transfers/heathrow">Heathrow</a> and a little over an hour from <a href="/airport-transfers/luton">Luton</a>, and neither route comes into London. Your chauffeur tracks the flight and adjusts the pick-up if you land early or late.',
      },
      {
        question: 'We are staying near the circuit for the weekend. Can you take us there and bring us back?',
        answer:
          'Yes. A one-way journey to a hotel near Silverstone — in Towcester, Brackley, Buckingham or Milton Keynes, for example — is treated as a long-distance journey and priced by a fixed quote given before you book, with a separate journey home after the weekend.',
      },
      {
        question: 'Do you drive to other events at Silverstone?',
        answer:
          'Yes. The same service is available for the MotoGP British Grand Prix, the Silverstone Festival of historic racing in late summer, and track days and corporate events at the circuit through the year.',
      },
    ],
  },
  related: {
    kicker: 'More from Silk Ride',
    title: 'Other events and services',
    intro: 'Flying in for the race, or travelling as a group?',
    extra: [
      {
        path: '/airport-transfers/luton',
        icon: 'bxs-plane-alt',
        title: 'Luton Airport Transfers',
        tagline: 'Fixed-price transfers between Luton and central London for race-weekend visitors.',
      },
      {
        path: '/fleet/mercedes-v-class',
        icon: 'bx-group',
        title: 'Mercedes V-Class',
        tagline: 'Seven seats and extra luggage space — our recommendation for a day at the circuit.',
      },
    ],
  },
  cta: {
    title: 'Reserve your Silverstone chauffeur',
    subtitle: 'Tell us which day you are attending, your pick-up address and the size of your group, and we will confirm the car and the price.',
  },
  schema: {
    serviceType: 'Event chauffeur service',
    areaServed: [
      { type: 'Place', name: 'Silverstone Circuit' },
      { type: 'City', name: 'London' },
      { type: 'AdministrativeArea', name: 'Northamptonshire' },
    ],
    hourlyPriced: true,
  },
}

export default guide
