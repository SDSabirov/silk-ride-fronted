// Central source of truth for the /destination-tours pages.
//
// Each page (pages/destination-tours/<slug>.vue) is a thin wrapper that passes
// one of these objects to <DestinationTourPage>. The hub page
// (pages/destination-tours/index.vue) renders the full `destinationList`.
//
// Hero images live in /public/images/covers/<slug>.webp. `stonehenge` and
// `windsor` ship today; `oxford`, `cambridge`, `bath` and `cotswolds` fall back
// to /images/covers/business-trip.webp until real photos are dropped in.

export const PHONE_DISPLAY = '+44 203 488 2324'
export const PHONE_HREF = 'tel:+442034882324'
export const HERO_FALLBACK_IMAGE = '/images/covers/business-trip.webp'

export interface DestinationStat {
  icon: string
  label: string
  sub: string
}

export interface DestinationAttraction {
  icon: string
  title: string
  description: string
  points: string[]
}

export interface DestinationJourney {
  place: string
  time: string
  note: string
}

export interface DestinationFaq {
  question: string
  /** May contain inline HTML (rendered with v-html). */
  answer: string
}

export interface DestinationSchemaAttraction {
  name: string
  description: string
  locality: string
  region?: string
  postalCode?: string
  street?: string
  geo: { lat: number; lng: number }
  free?: boolean
}

export interface Destination {
  slug: string
  name: string
  seoKey: string
  kicker: string
  hero: {
    title: string
    titleAccent: string
    subtitle: string
    image: string
    alt: string
    ogImage: string
  }
  stats: DestinationStat[]
  overview: {
    heading: string
    paragraphs: string[]
    includesTitle: string
    includes: string[]
  }
  attractions: {
    title: string
    intro?: string
    items: DestinationAttraction[]
  }
  journeys: {
    title: string
    intro?: string
    items: DestinationJourney[]
  }
  faqTitle: string
  faqIntro?: string
  faqs: DestinationFaq[]
  whyTitle: string
  relatedTitle: string
  relatedIntro?: string
  cta: { title: string; subtitle: string }
  /**
   * Flat day-rate per vehicle in GBP. `withoutGuide` = chauffeur only,
   * `withGuide` = chauffeur + private Blue Badge guide.
   * `hours` = maximum tour duration shown on the pricing cards.
   * `entryNote` = show "entry tickets not included" instead of the default
   * pricing footnote (Stonehenge & Windsor).
   */
  pricing: { withoutGuide: number; withGuide: number; hours?: number; entryNote?: boolean }
  /** Used by related-tour cards and the hub grid. */
  card: { tagline: string; icon: string }
  schema: {
    description: string
    geo: { lat: number; lng: number }
    areaServed: { type: string; name: string }[]
    attraction?: DestinationSchemaAttraction
  }
}

export const destinations: Record<string, Destination> = {
  windsor: {
    slug: 'windsor',
    name: 'Windsor Castle',
    seoKey: 'windsorChauffeur',
    kicker: 'Private Chauffeur Tour · From London',
    hero: {
      title: 'Private Windsor Castle Tours',
      titleAccent: 'from London',
      subtitle:
        "Step inside the world's oldest occupied royal castle in true comfort. A chauffeured Mercedes collects you in London, drives you to Windsor in around an hour, and waits while you explore at your own pace.",
      image: '/images/covers/windsor.webp',
      alt: 'Windsor Castle round tower and royal grounds — private chauffeur tour from London',
      ogImage: '/images/covers/windsor.webp',
    },
    stats: [
      { icon: 'bx-time-five', label: '~1 Hour', sub: 'From Central London via M4' },
      { icon: 'bx-crown', label: '1,000 Years of Royals', sub: "The King's official residence" },
      { icon: 'bx-user-voice', label: 'Private Chauffeur', sub: 'Mercedes S-Class or V-Class' },
    ],
    overview: {
      heading: 'The Oldest & Largest Occupied Castle in the World',
      paragraphs: [
        'A Windsor Castle tour from London is the most accessible — and the most cinematic — royal day trip in the UK. Just 22 miles west of central London via the M4, Windsor has been the official residence of the British monarch for almost a thousand years, from William the Conqueror to King Charles III. Silk Ride chauffeurs collect you from your London address, drive you to the castle gate in around an hour, and wait while you explore.',
        "Inside the castle precincts you'll see the State Apartments — still used today for State visits and investitures — the breathtaking St George's Chapel, where Henry VIII, Queen Elizabeth II and Prince Philip are buried, and Queen Mary's Dolls' House, the largest and most detailed in the world. Allow 2.5 to 3 hours on site to do it properly.",
        'Because the journey is short, Windsor pairs beautifully with other day-trip favourites: Stonehenge (1h20 from Windsor), Bath (1h45), the Roman amphitheatre at Verulamium, or a punt at Oxford. Your driver will plan the day around your pace — no coach schedules, no rushed exits.',
      ],
      includesTitle: "What's Included",
      includes: [
        'Private Mercedes with professional chauffeur',
        'Door-to-door pickup from any London address',
        'Timed-entry castle tickets arranged on request (admission not included)',
        'Complimentary bottled water and Wi-Fi onboard',
        'Flexible itinerary — add Stonehenge, Bath or Eton',
        'Private tour guide available on request',
      ],
    },
    attractions: {
      title: 'What to See at Windsor Castle & Beyond',
      intro:
        'The castle alone is a full half-day. With a private chauffeur you can add nearby Eton, Runnymede or the Long Walk — all without a second transfer.',
      items: [
        {
          icon: 'bx-buildings',
          title: 'The State Apartments',
          description:
            'The grand ceremonial rooms used by the Royal Family for State visits. Houses Van Dyck, Rubens, Canaletto and Holbein paintings from the Royal Collection.',
          points: [
            "Waterloo Chamber & St George's Hall",
            'Van Dyck, Rubens & Holbein masterpieces',
            'Royal armoury & tapestries',
            'Semi-State Rooms open in winter',
          ],
        },
        {
          icon: 'bx-church',
          title: "St George's Chapel",
          description:
            'One of the finest examples of Perpendicular Gothic architecture in England — the venue for royal weddings and the resting place of ten monarchs.',
          points: [
            'Burial place of Henry VIII & Charles I',
            'Queen Elizabeth II & Prince Philip memorial',
            "Site of Harry & Meghan's 2018 wedding",
            'Evensong daily at 17:15',
          ],
        },
        {
          icon: 'bx-home-heart',
          title: "Queen Mary's Dolls' House",
          description:
            "The largest and most famous dolls' house in the world — a 1:12 scale Edwardian residence with working lifts, running water and a stocked wine cellar.",
          points: [
            'Designed by Sir Edwin Lutyens (1924)',
            'Contributions from 1,500+ craftspeople',
            'Miniature library with original works',
            'Real electricity & plumbing',
          ],
        },
        {
          icon: 'bxs-tree',
          title: 'Windsor Great Park & Long Walk',
          description:
            'The 4,800-acre royal park stretches south of the castle. The Long Walk — a 2.6-mile tree-lined avenue — gives the iconic postcard view of the castle.',
          points: [
            '2.6-mile Long Walk to Snow Hill',
            'Savill Garden & Valley Gardens',
            'Roaming red deer herd',
            'Free public access',
          ],
        },
        {
          icon: 'bx-book-reader',
          title: 'Eton College',
          description:
            "England's most famous boys' school, founded by Henry VI in 1440. The high street and chapel are a 10-minute walk over the Thames from the castle.",
          points: [
            'Founded 1440 by Henry VI',
            'Alma mater of 20 British PMs',
            'Perpendicular Gothic chapel',
            'Pedestrian bridge to Windsor',
          ],
        },
        {
          icon: 'bx-flag',
          title: 'Runnymede',
          description:
            'The Thames-side meadow where King John sealed the Magna Carta in 1215 — the foundational document of English common law. A 10-minute drive from Windsor.',
          points: [
            'Site of Magna Carta signing (1215)',
            'American Bar Association memorial',
            'John F. Kennedy memorial',
            'Riverside walks & café',
          ],
        },
      ],
    },
    journeys: {
      title: 'Journey Times & Routes',
      items: [
        { place: 'Central London', time: '~1 hour', note: 'Via M4 westbound' },
        { place: 'Heathrow Airport', time: '~15 min', note: 'Perfect layover day trip' },
        { place: 'Stonehenge', time: '~1h 20', note: 'Royal & ancient combo' },
        { place: 'Bath', time: '~1h 45', note: 'Roman Baths add-on' },
      ],
    },
    faqTitle: 'Windsor Castle Tour: Frequently Asked Questions',
    faqIntro: 'The most common questions we hear about visiting Windsor Castle from London.',
    faqs: [
      {
        question: 'How long does it take to drive from London to Windsor Castle?',
        answer:
          'The drive is around 22 miles and takes 50–60 minutes via the M4 from central London. From Heathrow it is only 15 minutes — making Windsor an ideal layover day trip.',
      },
      {
        question: 'Are Windsor Castle tickets included in the tour?',
        answer:
          'No — castle entry tickets are not included in the tour price. We are happy to pre-book timed-entry tickets for you and add them to your quote so you still skip the ticket queue. As of 2026, the published gate prices are £31 adult, £20 youth (18–24) and £15.50 child (5–17). Children under 5 enter free.',
      },
      {
        question: 'What days is Windsor Castle open?',
        answer:
          'Windsor Castle is open Thursday through Monday year-round. It is closed every Wednesday, and additionally closed Tuesdays from November through February. Summer hours are 10:00–17:15 (last entry 16:00); winter hours are 10:00–16:15 (last entry 15:00). The castle occasionally closes at short notice for State events.',
      },
      {
        question: 'How long should I plan to spend at Windsor Castle?',
        answer:
          "Royal Collection Trust recommends 2.5 to 3 hours to see the State Apartments, St George's Chapel and Queen Mary's Dolls' House without rushing. If you want to attend Evensong at 17:15 in the chapel, add another hour.",
      },
      {
        question: "Can I see St George's Chapel and the Royal Tombs?",
        answer:
          "Yes — St George's Chapel is included in the standard admission and is one of the highlights. It is the burial place of ten British monarchs including Henry VIII, Charles I, and most recently Queen Elizabeth II and Prince Philip. The chapel is closed to tourists on Sundays for services, but Evensong is open to all at 17:15 most evenings.",
      },
      {
        question: 'Is the Changing of the Guard at Windsor Castle?',
        answer:
          'Yes. The Changing of the Guard takes place at 11:00 on most Tuesday, Thursday and Saturday mornings (subject to weather and operational requirements). It is included in your castle admission — no extra ticket needed.',
      },
      {
        question: 'Can I combine Windsor Castle with Stonehenge or Bath?',
        answer:
          'Yes — these are our most-requested combination tours. <strong>Windsor + Stonehenge</strong> is a long but rewarding full day (around 10 hours). <strong>Windsor + Bath</strong> is the classic royal-and-Roman combo (around 11 hours). Tell us which you prefer and we will build the itinerary.',
      },
      {
        question: 'How much does a private Windsor Castle tour from London cost?',
        answer:
          'Pricing depends on group size, the vehicle chosen, total tour length, and any additional stops. Send us your dates and itinerary and we will send back a tailored quote — usually within the hour.',
      },
    ],
    whyTitle: 'Why Choose Silk Ride for Your Windsor Castle Tour',
    relatedTitle: 'Combine Windsor With Another Destination',
    relatedIntro:
      'With a private chauffeur, multi-stop day trips are effortless. The most popular pairings:',
    cta: {
      title: 'Plan Your Private Windsor Castle Tour',
      subtitle:
        "Tell us your dates, group size and any add-on stops — we'll send back a tailored quote within an hour.",
    },
    card: {
      tagline: "Britain's most famous royal castle — 1,000 years of history, an hour from London.",
      icon: 'bxs-castle',
    },
    pricing: { withoutGuide: 450, withGuide: 850, entryNote: true },
    schema: {
      description:
        'Private chauffeur-driven tours to Windsor Castle from London. Luxury Mercedes, expert drivers and door-to-door service.',
      geo: { lat: 51.4839, lng: -0.6044 },
      areaServed: [
        { type: 'Place', name: 'Windsor Castle' },
        { type: 'City', name: 'Windsor' },
        { type: 'City', name: 'London' },
        { type: 'Place', name: 'Eton' },
        { type: 'Place', name: 'Runnymede' },
      ],
      attraction: {
        name: 'Windsor Castle',
        description:
          'The oldest and largest occupied castle in the world, official residence of the British monarch for over 900 years. Located in Windsor, Berkshire.',
        street: 'Windsor Castle',
        locality: 'Windsor',
        region: 'Berkshire',
        postalCode: 'SL4 1NJ',
        geo: { lat: 51.4839, lng: -0.6044 },
        free: false,
      },
    },
  },

  stonehenge: {
    slug: 'stonehenge',
    name: 'Stonehenge',
    seoKey: 'stonehengeChauffeur',
    kicker: 'Private Chauffeur Tour · From London',
    hero: {
      title: 'Private Stonehenge Tours',
      titleAccent: 'from London',
      subtitle:
        "Skip the coach crowds. Travel to the world's most famous prehistoric monument in a chauffeured Mercedes — door-to-door from your London hotel, with a fully flexible itinerary.",
      image: '/images/covers/stonehenge.webp',
      alt: 'Stonehenge prehistoric stone circle at sunrise — private chauffeur tour from London',
      ogImage: '/images/covers/stonehenge.webp',
    },
    stats: [
      { icon: 'bx-time-five', label: '~2 Hours Each Way', sub: 'From Central London via M3 / A303' },
      { icon: 'bx-medal', label: 'UNESCO World Heritage', sub: '5,000-year-old stone circle' },
      { icon: 'bx-user-voice', label: 'Private Chauffeur', sub: 'Mercedes S-Class or V-Class' },
    ],
    overview: {
      heading: 'A Private Stonehenge Day Trip Built Around You',
      paragraphs: [
        'A Stonehenge tour from London is one of the most rewarding day trips in the UK — but the standard coach experience means a 5am hotel pickup, a packed 50-seater, and only an hour at the stones. Silk Ride does it differently. Your chauffeur collects you from your London address in a private Mercedes, drives the 90-mile route via the M3 and A303 in around two hours, and waits as long as you need at the monument.',
        "Located on Salisbury Plain in Wiltshire, Stonehenge has stood as one of humanity's most enigmatic monuments for over 5,000 years. The site's massive sarsen trilithons and Welsh bluestones — some weighing up to 25 tonnes — were transported and raised by Neolithic communities using methods that still puzzle archaeologists. Today the monument is a UNESCO World Heritage Site managed by English Heritage, with a visitor centre, museum, and reconstructed Neolithic houses on the approach.",
        'Because you have a private car and driver, you choose the timing. Arrive at opening to beat the coaches, combine Stonehenge with Bath, Salisbury Cathedral, or the larger stone circle at Avebury, or book an exclusive Inner Circle access tour outside public hours. Your driver is happy to share what they know about the route and the monument — but you set the pace.',
      ],
      includesTitle: "What's Included",
      includes: [
        'Private Mercedes with professional chauffeur',
        'Door-to-door pickup from any London address',
        'Timed entry tickets arranged on request (admission not included)',
        'Complimentary bottled water and Wi-Fi onboard',
        'Flexible itinerary — combine with Bath, Salisbury, or Avebury',
        'Inner Circle access available on request',
      ],
    },
    attractions: {
      title: 'Stonehenge & Surrounding Attractions',
      intro:
        "Stonehenge sits at the centre of one of Europe's richest prehistoric landscapes. Pair the monument with any of these nearby sites — your driver will plan the route.",
      items: [
        {
          icon: 'bx-circle',
          title: 'The Stone Circle',
          description:
            'Walk the perimeter path to view the iconic sarsen trilithons up close. Inner Circle access (before/after public hours) lets you stand among the stones.',
          points: [
            'Sarsen trilithons up to 30 ft tall',
            'Welsh bluestones from 150+ miles away',
            'Solstice astronomical alignment',
            'Inner Circle access (special tours)',
          ],
        },
        {
          icon: 'bx-building-house',
          title: 'Stonehenge Visitor Centre',
          description:
            "English Heritage's award-winning visitor centre — 360-degree virtual circle, archaeological finds and outdoor Neolithic houses.",
          points: [
            '360-degree immersive theatre',
            'Neolithic skeletal remains & artefacts',
            'Reconstructed thatched houses',
            'Café and gift shop',
          ],
        },
        {
          icon: 'bx-church',
          title: 'Salisbury Cathedral',
          description:
            "A 15-minute drive from Stonehenge — Britain's tallest spire and one of only four surviving original copies of the Magna Carta.",
          points: [
            "Britain's tallest spire (123m)",
            'Original 1215 Magna Carta',
            'Medieval cathedral close',
            "World's oldest working clock",
          ],
        },
        {
          icon: 'bx-target-lock',
          title: 'Avebury Stone Circle',
          description:
            "The world's largest prehistoric stone circle. Unlike Stonehenge, you can walk freely among the stones, with a village built inside the henge.",
          points: [
            "World's largest stone circle",
            'Free open access to the stones',
            'Alexander Keiller Museum',
            'Silbury Hill & West Kennet Long Barrow nearby',
          ],
        },
        {
          icon: 'bxs-castle',
          title: 'Old Sarum',
          description:
            'The Iron Age hillfort and Norman cathedral that preceded modern Salisbury — panoramic views over Wiltshire and dramatic ruins.',
          points: [
            'Iron Age earthwork ramparts',
            'Norman royal castle ruins',
            'Original cathedral foundations',
            '360° views of Salisbury Plain',
          ],
        },
        {
          icon: 'bx-landscape',
          title: 'Woodhenge & Durrington Walls',
          description:
            "Stonehenge's timber counterpart and the remains of what may have been the largest Neolithic settlement in northwest Europe.",
          points: [
            'Concrete posts mark the original timber circle',
            'Durrington Walls superhenge',
            "Believed to house Stonehenge's builders",
            'Free open access',
          ],
        },
      ],
    },
    journeys: {
      title: 'Journey Times & Routes',
      items: [
        { place: 'Central London', time: '~2 hours', note: 'Via M3 & A303' },
        { place: 'Heathrow Airport', time: '~1h 30', note: 'Ideal for layover day trips' },
        { place: 'Bath', time: '~45 min', note: 'Most popular combo tour' },
        { place: 'Windsor Castle', time: '~1h 20', note: 'Royal & ancient combo' },
      ],
    },
    faqTitle: 'Stonehenge Tour: Frequently Asked Questions',
    faqIntro: 'Everything you need to know before booking a private Stonehenge tour from London.',
    faqs: [
      {
        question: 'How long does it take to drive from London to Stonehenge?',
        answer:
          'The drive is around 90 miles and takes approximately two hours each way via the M3 and A303. From Heathrow it is closer to 90 minutes. Your chauffeur will plan around traffic conditions on the day.',
      },
      {
        question: 'Are Stonehenge entry tickets included in the tour?',
        answer:
          'No — English Heritage entry tickets are not included in the tour price. We can pre-book timed entry tickets for you and add them to your quote so you skip the queue at the visitor centre. Just let us know your preferred arrival window when you book.',
      },
      {
        question: 'Can I get Inner Circle access to walk among the stones?',
        answer:
          'Yes — Inner Circle access is bookable in advance for visits before or after public opening hours, when no other visitors are on site. Spaces are limited and sell out months ahead, so contact us early if you would like to add this to your tour.',
      },
      {
        question: 'Is Stonehenge worth combining with Bath or Salisbury?',
        answer:
          'Most of our guests choose a combination tour. <strong>Stonehenge + Bath</strong> is the most popular full-day option (around 9 hours total). <strong>Stonehenge + Salisbury Cathedral</strong> is a shorter half-day (around 6 hours). <strong>Stonehenge + Avebury</strong> is the choice for visitors interested in the wider Neolithic landscape.',
      },
      {
        question: 'What is the best time of year to visit Stonehenge?',
        answer:
          'Stonehenge is open year-round. May to September has the best weather and longest daylight hours. The summer solstice (around 21 June) and winter solstice draw large crowds — your chauffeur can advise on the best timing for a quieter visit.',
      },
      {
        question: 'How long should I plan to spend at Stonehenge?',
        answer:
          'Most visitors spend 1.5 to 2 hours on site — enough to see the stone circle, walk the perimeter path, explore the visitor centre and the reconstructed Neolithic houses. Add another 30 minutes if you want to take the optional walk back to the stones rather than the shuttle bus.',
      },
      {
        question: 'How many passengers can you accommodate?',
        answer:
          'Our Mercedes S-Class carries up to 3 passengers comfortably. For groups of 4 to 7 we use a Mercedes V-Class with extra luggage space. Larger groups can be arranged on request.',
      },
      {
        question: 'How much does a private Stonehenge tour from London cost?',
        answer:
          'Pricing depends on group size, the vehicle chosen, total tour length, and any additional stops. Send us your dates and itinerary and we will send back a tailored quote — usually within the hour.',
      },
    ],
    whyTitle: 'Why Choose Silk Ride for Your Stonehenge Tour',
    relatedTitle: 'Combine Stonehenge With Another Destination',
    relatedIntro: 'A private chauffeur makes multi-stop day trips effortless. Popular pairings:',
    cta: {
      title: 'Plan Your Private Stonehenge Tour',
      subtitle:
        "Tell us your dates, group size and any add-on stops — we'll send back a tailored quote within an hour.",
    },
    card: {
      tagline: "The world's most famous prehistoric monument — a UNESCO stone circle on Salisbury Plain.",
      icon: 'bx-circle',
    },
    pricing: { withoutGuide: 450, withGuide: 750, hours: 6, entryNote: true },
    schema: {
      description:
        'Private chauffeur-driven tours to Stonehenge from London. Luxury Mercedes, flexible itineraries and door-to-door service.',
      geo: { lat: 51.1789, lng: -1.8262 },
      areaServed: [
        { type: 'Place', name: 'Stonehenge' },
        { type: 'City', name: 'London' },
        { type: 'City', name: 'Salisbury' },
        { type: 'Place', name: 'Avebury' },
        { type: 'City', name: 'Bath' },
      ],
      attraction: {
        name: 'Stonehenge',
        description:
          'Prehistoric stone circle on Salisbury Plain, Wiltshire, England — a UNESCO World Heritage Site dating to around 3000 BC.',
        locality: 'Amesbury',
        region: 'Wiltshire',
        geo: { lat: 51.1789, lng: -1.8262 },
        free: false,
      },
    },
  },

  oxford: {
    slug: 'oxford',
    name: 'Oxford',
    seoKey: 'oxfordChauffeur',
    kicker: 'Private Chauffeur Tour · From London',
    hero: {
      title: 'Private Oxford Tours',
      titleAccent: 'from London',
      subtitle:
        'Explore the City of Dreaming Spires in comfort. A chauffeured Mercedes collects you in London, reaches Oxford in around 1.5 to 2 hours, and waits while you wander 900 years of colleges, libraries and gardens at your own pace.',
      image: '/images/covers/oxford.png',
      alt: 'Oxford university spires and historic college architecture — private chauffeur tour from London',
      ogImage: '/images/covers/oxford.png',
    },
    stats: [
      { icon: 'bx-time-five', label: '1.5–2 Hours', sub: 'From Central London via M40' },
      { icon: 'bx-book-reader', label: '38 Historic Colleges', sub: "The world's oldest English-speaking university" },
      { icon: 'bx-user-voice', label: 'Private Chauffeur', sub: 'Mercedes S-Class or V-Class' },
    ],
    overview: {
      heading: 'Discover Oxford, the City of Dreaming Spires',
      paragraphs: [
        'Experience the "City of Dreaming Spires" with our private Oxford chauffeur service. Home to the world\'s oldest English-speaking university, Oxford combines nearly 900 years of academic heritage with stunning architecture, beautiful gardens, and vibrant cultural life — all just 60 miles northwest of London via the M40.',
        "Your chauffeur provides door-to-door transfers from London to Oxford, or a comprehensive tour of the city. Whether you're visiting for a university event, business meeting, sightseeing, or shopping at Bicester Village, we make sure the journey is relaxing and the day is entirely your own.",
        'Because you travel by private car, there are no coach timetables. Arrive early to beat the crowds at Christ Church, add the Cotswolds or Blenheim Palace in the afternoon, and let your driver share the best routes and stories along the way.',
      ],
      includesTitle: "What's Included",
      includes: [
        'Private Mercedes with professional chauffeur',
        'Door-to-door pickup from any London address',
        'Half-day and full-day sightseeing itineraries',
        'University college visits and event transport',
        'Bicester Village shopping trips (15 minutes away)',
        'Flexible waiting times and bespoke routes',
      ],
    },
    attractions: {
      title: "Oxford's Must-Visit Attractions",
      intro:
        'From Harry Potter filming locations to Britain\'s first public museum — with a private chauffeur you can see far more of Oxford in a day.',
      items: [
        {
          icon: 'bx-buildings',
          title: 'Oxford University Colleges',
          description:
            'Visit iconic colleges including Christ Church (a Harry Potter filming location), the Bodleian Library, and the historic Radcliffe Camera.',
          points: [
            'Christ Church College & Cathedral',
            "Bodleian Library & Duke Humfrey's Library",
            'Radcliffe Camera',
            'Carfax Tower views',
          ],
        },
        {
          icon: 'bx-palette',
          title: 'Museums & Culture',
          description:
            'Explore world-class museums and galleries showcasing centuries of human civilisation, art and discovery.',
          points: [
            "Ashmolean Museum (Britain's first public museum)",
            'Pitt Rivers Museum',
            'Oxford Castle & Prison',
            'Modern Art Oxford',
          ],
        },
        {
          icon: 'bx-leaf',
          title: 'Gardens & Nature',
          description:
            "Discover peaceful green spaces including Britain's oldest botanic garden and beautiful college gardens perfect for relaxation.",
          points: [
            'Oxford Botanic Garden (est. 1621)',
            'University Parks',
            'Christ Church Meadow',
            'College gardens and quads',
          ],
        },
        {
          icon: 'bx-shopping-bag',
          title: 'Shopping Destinations',
          description:
            'From historic bookshops to luxury outlets, Oxford offers unique shopping for every taste and budget.',
          points: [
            'Bicester Village Outlet (15 mins away)',
            "Blackwell's Bookshop (famous worldwide)",
            'Covered Market (historic market)',
            'Cornmarket Street shopping',
          ],
        },
        {
          icon: 'bx-drink',
          title: 'Historic Pubs & Dining',
          description:
            "Experience Oxford's famous pub culture and fine dining, including haunts of literary legends like Tolkien and C. S. Lewis.",
          points: [
            "The Eagle & Child (Tolkien's local)",
            'The Turf Tavern (hidden gem)',
            'Michelin-starred restaurants',
            'Traditional college dining',
          ],
        },
        {
          icon: 'bx-water',
          title: 'River Activities',
          description:
            'Enjoy peaceful river activities along the Cherwell and Thames — punting, river walks and scenic viewpoints perfect for photography.',
          points: [
            'Punting on the River Cherwell',
            'Thames Path walking',
            'Folly Bridge area',
            'River cruise dining',
          ],
        },
      ],
    },
    journeys: {
      title: 'Journey Times & Routes',
      items: [
        { place: 'Central London', time: '~60–90 min', note: 'Via M40 motorway' },
        { place: 'Heathrow Airport', time: '~45–60 min', note: 'Direct via M40' },
        { place: 'Bicester Village', time: '~15–20 min', note: 'Perfect shopping combination' },
        { place: 'Cotswolds', time: '~30–45 min', note: 'Extend your countryside tour' },
      ],
    },
    faqTitle: 'Oxford Tour: Frequently Asked Questions',
    faqIntro: 'Everything you need to know before booking a private Oxford day trip from London.',
    faqs: [
      {
        question: 'How long does it take to drive from London to Oxford?',
        answer:
          'Oxford is around 60 miles from central London and takes 60–90 minutes via the M40, depending on traffic. From Heathrow it is closer to 45–60 minutes. Your chauffeur plans the route around conditions on the day.',
      },
      {
        question: 'Can I go inside the Oxford colleges?',
        answer:
          'Most colleges, including Christ Church, the Bodleian Library and Magdalen, are open to visitors for a small admission fee, though opening hours vary and some close during exams or events. We recommend Christ Church (the Harry Potter Great Hall) and the Bodleian — your driver can advise on what is open the day you visit.',
      },
      {
        question: 'Can I combine Oxford with Bicester Village or the Cotswolds?',
        answer:
          '<strong>Oxford + Bicester Village</strong> is one of our most popular days — the luxury outlet is just 15 minutes away. <strong>Oxford + the Cotswolds</strong> pairs the dreaming spires with England\'s prettiest villages (30–45 minutes on). Blenheim Palace, birthplace of Winston Churchill, is another easy add-on.',
      },
      {
        question: 'How long should I spend in Oxford?',
        answer:
          'A half-day (around 4 hours) covers the highlights — Christ Church, the Bodleian and Radcliffe Camera, plus the city centre. A full day lets you add museums, punting on the Cherwell, or a shopping or countryside extension.',
      },
      {
        question: 'Is Oxford suitable as a day trip with the family?',
        answer:
          'Yes. Oxford is compact and walkable, with plenty for all ages — the Harry Potter filming locations, the Natural History and Pitt Rivers museums, punting, and the Covered Market. Our Mercedes V-Class comfortably carries families of up to 7 with luggage.',
      },
      {
        question: 'How many passengers can you accommodate?',
        answer:
          'Our Mercedes S-Class carries up to 3 passengers comfortably. For groups of 4 to 7 we use a Mercedes V-Class with extra luggage space. Larger groups can be arranged on request.',
      },
      {
        question: 'How much does a private Oxford tour from London cost?',
        answer:
          'Pricing depends on group size, the vehicle chosen, total tour length, and any additional stops. Send us your dates and itinerary and we will send back a tailored quote — usually within the hour.',
      },
    ],
    whyTitle: 'Why Choose Silk Ride for Your Oxford Tour',
    relatedTitle: 'Combine Oxford With Another Destination',
    relatedIntro: 'A private chauffeur makes multi-stop day trips effortless. Popular pairings:',
    cta: {
      title: 'Plan Your Oxford Experience Today',
      subtitle:
        "Tell us your dates, group size and any add-on stops — we'll send back a tailored quote within an hour.",
    },
    card: {
      tagline: 'Dreaming spires and 38 historic colleges — an hour from London.',
      icon: 'bx-book-reader',
    },
    pricing: { withoutGuide: 650, withGuide: 1250, hours: 9 },
    schema: {
      description:
        'Luxury chauffeur service and private tours to Oxford from London, featuring university visits, museums and historic attractions.',
      geo: { lat: 51.752, lng: -1.2577 },
      areaServed: [
        { type: 'City', name: 'Oxford' },
        { type: 'City', name: 'London' },
        { type: 'Place', name: 'Bicester Village' },
      ],
      attraction: {
        name: 'University of Oxford',
        description:
          "The world's oldest English-speaking university, founded around 1096, with 38 historic colleges and landmarks including Christ Church, the Bodleian Library and the Radcliffe Camera.",
        locality: 'Oxford',
        region: 'Oxfordshire',
        geo: { lat: 51.7548, lng: -1.2544 },
        free: false,
      },
    },
  },

  cambridge: {
    slug: 'cambridge',
    name: 'Cambridge',
    seoKey: 'cambridgeChauffeur',
    kicker: 'Private Chauffeur Tour · From London',
    hero: {
      title: 'Private Cambridge Tours',
      titleAccent: 'from London',
      subtitle:
        'Glide into 800 years of academic history. A chauffeured Mercedes collects you in London, reaches Cambridge in around 1.5 to 2 hours, and waits while you explore the colleges, chapels and the River Cam at your own pace.',
      image: '/images/covers/cambridge.png',
      alt: "King's College Chapel and the River Cam — private chauffeur tour of Cambridge from London",
      ogImage: '/images/covers/cambridge.png',
    },
    stats: [
      { icon: 'bx-time-five', label: '1.5–2 Hours', sub: 'From Central London via M11' },
      { icon: 'bx-book-reader', label: '800 Years of History', sub: 'World-renowned colleges & chapels' },
      { icon: 'bx-water', label: 'Punting on the Cam', sub: 'The classic Cambridge experience' },
    ],
    overview: {
      heading: 'Discover Cambridge in Luxury',
      paragraphs: [
        "Experience the prestigious university city of Cambridge with our private chauffeur service. Home to one of the world's oldest and most renowned universities, Cambridge combines 800 years of academic excellence with stunning architecture, riverside gardens and a vibrant cultural life — just 55 miles north of London.",
        "Your chauffeur provides door-to-door transfers from London to Cambridge, or a comprehensive tour of the city. Whether you're visiting for a university event, a business meeting, sightseeing, or punting on the Cam, we make sure the journey is relaxing and the day is entirely your own.",
        'Cambridge is easily reached via the M11 and A14, and pairs beautifully with Ely Cathedral or even Oxford for a two-university itinerary. With a private car, you set the pace — no coach timetables, no rushed exits.',
      ],
      includesTitle: "What's Included",
      includes: [
        'Private Mercedes with professional chauffeur',
        'Door-to-door pickup from any London address',
        'Half-day and full-day sightseeing itineraries',
        'University college visits and event transport',
        'River Cam punting experiences arranged on request',
        'Flexible waiting times and bespoke routes',
      ],
    },
    attractions: {
      title: "Cambridge's Must-Visit Attractions",
      intro:
        'From King\'s College Chapel to punting on the Backs — a private chauffeur lets you see the best of Cambridge without the rush.',
      items: [
        {
          icon: 'bx-buildings',
          title: 'Cambridge University Colleges',
          description:
            "Visit iconic colleges including King's College Chapel, Trinity College, and St John's College with the famous Bridge of Sighs.",
          points: [
            "King's College Chapel & choir",
            'Trinity College & Wren Library',
            "St John's College & Bridge of Sighs",
            'The Round Church (Holy Sepulchre)',
          ],
        },
        {
          icon: 'bx-water',
          title: 'River Cam Activities',
          description:
            'Experience the quintessential Cambridge activity of punting along the River Cam, or enjoy peaceful riverside walks through the city.',
          points: [
            'Punting tours & hire',
            'The Backs (college gardens)',
            'Mathematical Bridge',
            'Riverside walks & cycling',
          ],
        },
        {
          icon: 'bx-palette',
          title: 'Museums & Heritage',
          description:
            'Explore world-class museums and cultural institutions, from natural history to contemporary art.',
          points: [
            'Fitzwilliam Museum',
            'Museum of Archaeology & Anthropology',
            'Sedgwick Museum of Earth Sciences',
            "Kettle's Yard gallery",
          ],
        },
        {
          icon: 'bx-shopping-bag',
          title: 'Shopping & Markets',
          description:
            'From historic markets to modern arcades, Cambridge offers unique shopping in a beautiful setting.',
          points: [
            'Cambridge Market Square',
            'Grand Arcade shopping centre',
            'Independent bookshops',
            'Antique shops & galleries',
          ],
        },
        {
          icon: 'bx-atom',
          title: 'Science & Innovation',
          description:
            "Discover Cambridge's role as a global centre for scientific research, from historic discoveries to modern tech.",
          points: [
            'Cavendish Laboratory heritage',
            'Cambridge Science Park',
            'Centre for Computing History',
            'Innovation districts',
          ],
        },
        {
          icon: 'bx-leaf',
          title: 'Parks & Gardens',
          description:
            'Enjoy beautiful green spaces and historic gardens between college visits and sightseeing.',
          points: [
            'Jesus Green & Midsummer Common',
            "Parker's Piece (birthplace of football rules)",
            'Cambridge University Botanic Garden',
            'College gardens & courtyards',
          ],
        },
      ],
    },
    journeys: {
      title: 'Journey Times & Routes',
      items: [
        { place: 'Central London', time: '~55–75 min', note: 'Via M11 motorway' },
        { place: 'Stansted Airport', time: '~30–45 min', note: 'Direct via M11' },
        { place: 'Ely Cathedral', time: '~25–35 min', note: 'Extended countryside tour' },
        { place: 'Oxford', time: '~90–120 min', note: 'Two-university day' },
      ],
    },
    faqTitle: 'Cambridge Tour: Frequently Asked Questions',
    faqIntro: 'Everything you need to know before booking a private Cambridge day trip from London.',
    faqs: [
      {
        question: 'How long does it take to drive from London to Cambridge?',
        answer:
          'Cambridge is around 55 miles from central London and takes 55–75 minutes via the M11, depending on traffic. From Stansted Airport it is only 30–45 minutes. Your chauffeur plans the route around conditions on the day.',
      },
      {
        question: 'Can I go punting on the River Cam?',
        answer:
          'Yes — punting along the Backs, past King\'s College Chapel and under the Mathematical Bridge, is the classic Cambridge experience. We can arrange chauffeured or self-punt hire in advance; just let us know when you book and your driver will time the day around it.',
      },
      {
        question: 'Can I visit the colleges and King\'s College Chapel?',
        answer:
          "Many colleges welcome visitors for a small admission fee, though hours vary and some close during exams and events. King's College Chapel, Trinity College and St John's (with the Bridge of Sighs) are the highlights. Your driver can advise on what is open the day you visit.",
      },
      {
        question: 'Can I combine Cambridge with Ely or Oxford?',
        answer:
          '<strong>Cambridge + Ely Cathedral</strong> adds one of England\'s most spectacular medieval cathedrals, just 25 minutes north. <strong>Cambridge + Oxford</strong> is an ambitious but rewarding two-university day for visitors who want to see both. Tell us your priorities and we will build the itinerary.',
      },
      {
        question: 'How long should I spend in Cambridge?',
        answer:
          'A half-day (around 4 hours) covers the colleges, King\'s Chapel and a punt on the Cam. A full day lets you add museums, the Botanic Garden, shopping, or an extension to Ely.',
      },
      {
        question: 'How many passengers can you accommodate?',
        answer:
          'Our Mercedes S-Class carries up to 3 passengers comfortably. For groups of 4 to 7 we use a Mercedes V-Class with extra luggage space. Larger groups can be arranged on request.',
      },
      {
        question: 'How much does a private Cambridge tour from London cost?',
        answer:
          'Pricing depends on group size, the vehicle chosen, total tour length, and any additional stops. Send us your dates and itinerary and we will send back a tailored quote — usually within the hour.',
      },
    ],
    whyTitle: 'Why Choose Silk Ride for Your Cambridge Tour',
    relatedTitle: 'Combine Cambridge With Another Destination',
    relatedIntro: 'A private chauffeur makes multi-stop day trips effortless. Popular pairings:',
    cta: {
      title: 'Plan Your Cambridge Experience Today',
      subtitle:
        "Tell us your dates, group size and any add-on stops — we'll send back a tailored quote within an hour.",
    },
    card: {
      tagline: 'Punting on the Cam and centuries-old colleges — under an hour from London.',
      icon: 'bx-water',
    },
    pricing: { withoutGuide: 650, withGuide: 1250, hours: 9 },
    schema: {
      description:
        'Luxury chauffeur service and private tours to Cambridge from London, featuring university visits, punting and historic attractions.',
      geo: { lat: 52.2053, lng: 0.1218 },
      areaServed: [
        { type: 'City', name: 'Cambridge' },
        { type: 'City', name: 'London' },
        { type: 'Place', name: 'Ely' },
      ],
      attraction: {
        name: 'University of Cambridge',
        description:
          "One of the world's oldest and most prestigious universities, founded in 1209, famous for King's College Chapel, Trinity College and punting on the River Cam.",
        locality: 'Cambridge',
        region: 'Cambridgeshire',
        geo: { lat: 52.2043, lng: 0.1149 },
        free: false,
      },
    },
  },

  bath: {
    slug: 'bath',
    name: 'Bath',
    seoKey: 'bathChauffeur',
    kicker: 'Private Chauffeur Tour · From London',
    hero: {
      title: 'Private Bath Tours',
      titleAccent: 'from London',
      subtitle:
        "Discover England's only UNESCO World Heritage city in style. A chauffeured Mercedes brings you door-to-door from London to the Roman Baths, Georgian crescents and thermal springs — and waits while you explore.",
      image: '/images/covers/bath.png',
      alt: 'The Roman Baths and Bath Abbey in the Georgian city of Bath — private chauffeur tour from London',
      ogImage: '/images/covers/bath.png',
    },
    stats: [
      { icon: 'bx-time-five', label: '~2–2.5 Hours', sub: 'From Central London via M4' },
      { icon: 'bx-medal', label: 'UNESCO World Heritage', sub: '2,000 years of Roman & Georgian history' },
      { icon: 'bx-user-voice', label: 'Private Chauffeur', sub: 'Mercedes S-Class or V-Class' },
    ],
    overview: {
      heading: 'Explore Historic Bath in Style',
      paragraphs: [
        "Discover the elegance of Bath, England's only UNESCO World Heritage city, with our private chauffeur service. This Georgian masterpiece combines 2,000 years of history with stunning architecture, the world-famous Roman Baths, and the literary heritage of Jane Austen.",
        "Your chauffeur provides door-to-door transfers from London to Bath, or a comprehensive tour of the city. Whether you're visiting the Roman Baths, Bath Abbey, the Jane Austen Centre, or simply admiring the Georgian architecture, we make the journey comfortable and the day entirely your own.",
        'Located in Somerset, around 115 miles west of London via the M4, Bath is the perfect partner for Stonehenge — the two combine into our most popular full-day tour. With a private car, you set the pace, and your driver shares fascinating insights along the way.',
      ],
      includesTitle: "What's Included",
      includes: [
        'Private Mercedes with professional chauffeur',
        'Door-to-door pickup from any London address',
        'Roman Baths and Bath Abbey visits',
        'Georgian architecture sightseeing (Royal Crescent & Circus)',
        'Combined Stonehenge & Bath itineraries',
        'Flexible waiting times and bespoke routes',
      ],
    },
    attractions: {
      title: "Bath's Historic Attractions",
      intro:
        'Roman engineering, Georgian elegance and Britain\'s only natural thermal spa — all within a compact, walkable city.',
      items: [
        {
          icon: 'bx-bath',
          title: 'The Roman Baths',
          description:
            'Explore the magnificently preserved Roman Baths, built around natural hot springs, featuring the Sacred Spring, Roman Temple, and Great Bath.',
          points: [
            'Sacred Spring & Roman Temple',
            'The Great Bath & thermal pools',
            'Museum & Roman artefacts',
            'Audio guides & interactive displays',
          ],
        },
        {
          icon: 'bx-building-house',
          title: 'Georgian Architecture',
          description:
            "Admire Bath's stunning Georgian architecture, including the famous Royal Crescent and Circus, showcasing 18th-century urban planning.",
          points: [
            'Royal Crescent (30 Georgian houses)',
            'The Circus (circular Georgian square)',
            'Pulteney Bridge (lined with shops)',
            'The Assembly Rooms',
          ],
        },
        {
          icon: 'bx-church',
          title: 'Bath Abbey',
          description:
            'Visit the magnificent Bath Abbey, known as the "Lantern of the West" for its huge windows and stunning fan vaulting.',
          points: [
            'Fan-vaulted ceiling',
            'Tower tours with city views',
            'Historic memorials & tombs',
            'Regular concerts & events',
          ],
        },
        {
          icon: 'bx-book',
          title: 'Jane Austen Centre',
          description:
            "Discover Jane Austen's connection to Bath, where she lived and which she set in two of her novels, Persuasion and Northanger Abbey.",
          points: [
            'Jane Austen exhibitions',
            'Period costume experiences',
            'Georgian house recreations',
            'Literary walking tours',
          ],
        },
        {
          icon: 'bx-water',
          title: 'Thermae Bath Spa',
          description:
            "Experience Britain's only natural thermal spa, where you can bathe in naturally warm, mineral-rich waters.",
          points: [
            'Rooftop pool with city views',
            'Natural thermal waters',
            'Wellness treatments & spa packages',
            'Steam rooms & relaxation areas',
          ],
        },
        {
          icon: 'bx-palette',
          title: 'Museums & Galleries',
          description:
            "Explore Bath's rich cultural scene with world-class museums, galleries and cultural institutions.",
          points: [
            'Fashion Museum & Assembly Rooms',
            'Victoria Art Gallery',
            "Mr B's Emporium (famous bookshop)",
            'Bath Christmas Market (seasonal)',
          ],
        },
      ],
    },
    journeys: {
      title: 'Journey Times & Routes',
      items: [
        { place: 'Central London', time: '~2–2.5 hours', note: 'Via M4 motorway' },
        { place: 'Heathrow Airport', time: '~90–120 min', note: 'Direct via M4' },
        { place: 'Stonehenge', time: '~45–60 min', note: 'Most popular combo tour' },
        { place: 'Cotswolds', time: '~60–90 min', note: 'Countryside extension' },
      ],
    },
    faqTitle: 'Bath Tour: Frequently Asked Questions',
    faqIntro: 'Everything you need to know before booking a private Bath day trip from London.',
    faqs: [
      {
        question: 'How long does it take to drive from London to Bath?',
        answer:
          'Bath is around 115 miles from central London and takes approximately 2 to 2.5 hours via the M4, depending on traffic. From Heathrow it is closer to 90–120 minutes. Your chauffeur plans the route around conditions on the day.',
      },
      {
        question: 'Are Roman Baths tickets included in the tour?',
        answer:
          'We can pre-book your Roman Baths admission so you skip the queue, and add it to your quote. Tickets are timed-entry and busier in summer, so we recommend booking ahead. Just let us know your preferred arrival window.',
      },
      {
        question: 'Can I combine Bath with Stonehenge?',
        answer:
          '<strong>Stonehenge + Bath</strong> is our single most popular full-day tour from London — the two sites are only 45–60 minutes apart. A typical day runs around 9–10 hours door-to-door. <strong>Bath + the Cotswolds</strong> is a beautiful alternative for those who prefer countryside to ancient stones.',
      },
      {
        question: 'How long should I spend in Bath?',
        answer:
          'A half-day (around 5 hours on site) covers the Roman Baths, Bath Abbey and the Georgian highlights of the Royal Crescent and Circus. A full day lets you add the Thermae Bath Spa, museums or a relaxed lunch.',
      },
      {
        question: 'Can I bathe in the thermal waters?',
        answer:
          'You cannot bathe in the historic Roman Baths themselves, but the modern Thermae Bath Spa nearby uses the same natural thermal springs — its open-air rooftop pool with views over the city is a highlight. We can build spa time into your itinerary.',
      },
      {
        question: 'How many passengers can you accommodate?',
        answer:
          'Our Mercedes S-Class carries up to 3 passengers comfortably. For groups of 4 to 7 we use a Mercedes V-Class with extra luggage space. Larger groups can be arranged on request.',
      },
      {
        question: 'How much does a private Bath tour from London cost?',
        answer:
          'Pricing depends on group size, the vehicle chosen, total tour length, and any additional stops such as Stonehenge. Send us your dates and itinerary and we will send back a tailored quote — usually within the hour.',
      },
    ],
    whyTitle: 'Why Choose Silk Ride for Your Bath Tour',
    relatedTitle: 'Combine Bath With Another Destination',
    relatedIntro: 'A private chauffeur makes multi-stop day trips effortless. Popular pairings:',
    cta: {
      title: "Discover Bath's Timeless Beauty",
      subtitle:
        "Tell us your dates, group size and any add-on stops — we'll send back a tailored quote within an hour.",
    },
    card: {
      tagline: 'Roman Baths, Georgian crescents and thermal springs — a UNESCO World Heritage city.',
      icon: 'bx-building-house',
    },
    pricing: { withoutGuide: 650, withGuide: 1250, hours: 9 },
    schema: {
      description:
        'Luxury chauffeur service and private tours to Bath from London, featuring the Roman Baths, Georgian architecture and UNESCO World Heritage attractions.',
      geo: { lat: 51.3811, lng: -2.359 },
      areaServed: [
        { type: 'City', name: 'Bath' },
        { type: 'City', name: 'London' },
        { type: 'Place', name: 'Roman Baths' },
        { type: 'Place', name: 'Stonehenge' },
      ],
      attraction: {
        name: 'The Roman Baths',
        description:
          'A remarkably preserved Roman bathing complex built around the only natural hot springs in Britain, at the heart of the UNESCO World Heritage city of Bath.',
        street: 'Stall Street',
        locality: 'Bath',
        region: 'Somerset',
        postalCode: 'BA1 1LZ',
        geo: { lat: 51.3811, lng: -2.3596 },
        free: false,
      },
    },
  },

  cotswolds: {
    slug: 'cotswolds',
    name: 'Cotswolds',
    seoKey: 'cotswoldsChauffeur',
    kicker: 'Private Chauffeur Tour · From London',
    hero: {
      title: 'Private Cotswolds Tours',
      titleAccent: 'from London',
      subtitle:
        "Escape to England's prettiest countryside in comfort. A chauffeured Mercedes takes you door-to-door from London through honey-stone villages and rolling hills — off the coach routes, entirely at your pace.",
      image: '/images/covers/cotswolds.png',
      alt: 'Honey-coloured stone cottages and rolling hills of the Cotswolds — private chauffeur tour from London',
      ogImage: '/images/covers/cotswolds.png',
    },
    stats: [
      { icon: 'bx-time-five', label: '~90 Minutes', sub: 'From Central London via M40 / A40' },
      { icon: 'bx-home', label: 'Honey-Stone Villages', sub: 'Chipping Campden, Bourton & more' },
      { icon: 'bx-landscape', label: 'Area of Outstanding Beauty', sub: '800 square miles of countryside' },
    ],
    overview: {
      heading: "Discover England's Most Beautiful Countryside",
      paragraphs: [
        'Experience the quintessential English countryside with our private Cotswolds chauffeur service. This Area of Outstanding Natural Beauty spans nearly 800 square miles of rolling hills, honey-coloured stone villages, and peaceful pastoral landscapes that have barely changed in centuries.',
        "Your chauffeur provides comfortable transfers from London to the Cotswolds, or a comprehensive tour of the region's most picturesque villages — Chipping Campden, Bourton-on-the-Water, Stow-on-the-Wold, Broadway and the hidden gems known only to locals.",
        'The Cotswolds spread across Gloucestershire, Oxfordshire, Warwickshire and Worcestershire, reached from London via the M40 and A40. A private car is the ideal way to explore — your driver takes the scenic country lanes the coaches cannot, and you stop wherever a view, a tea room or a pub catches your eye.',
      ],
      includesTitle: "What's Included",
      includes: [
        'Private Mercedes with professional chauffeur',
        'Door-to-door pickup from any London address',
        'Scenic multi-village tours and photography stops',
        'Historic market towns and antique shopping',
        'Traditional pub lunches arranged on request',
        'Flexible itineraries and local recommendations',
      ],
    },
    attractions: {
      title: 'Must-Visit Cotswolds Villages',
      intro:
        'No two Cotswolds villages are quite alike. A private driver lets you string together the best of them in a single, unhurried day.',
      items: [
        {
          icon: 'bx-crown',
          title: 'Chipping Campden',
          description:
            'Known as the "Jewel of the Cotswolds," this historic market town has a magnificent High Street lined with honey-coloured limestone buildings.',
          points: [
            'Historic High Street & Market Hall',
            "St James' Church (Perpendicular Gothic)",
            'Cotswold Way walking trail start',
            'Arts & Crafts heritage',
          ],
        },
        {
          icon: 'bx-water',
          title: 'Bourton-on-the-Water',
          description:
            'Called the "Venice of the Cotswolds," this charming village has low bridges crossing the River Windrush that runs through its centre.',
          points: [
            'Picturesque river bridges',
            'Model Village (one-ninth scale replica)',
            'Cotswold Motoring Museum',
            'Traditional tea rooms & shops',
          ],
        },
        {
          icon: 'bx-store',
          title: 'Stow-on-the-Wold',
          description:
            'A historic market town perched on a hilltop, famous for its large market square ringed with antique shops, galleries and pubs.',
          points: [
            'Historic market square',
            'Antique shops & art galleries',
            "St Edward's Church (Norman origins)",
            'Traditional Cotswold pubs',
          ],
        },
        {
          icon: 'bx-buildings',
          title: 'Chipping Norton',
          description:
            'Known as the "Gateway to the Cotswolds," this market town features the landmark Bliss Mill and a handsome historic centre.',
          points: [
            'Bliss Mill (Victorian architecture)',
            'Historic market square',
            "St Mary's Church (medieval)",
            'Theatre & cultural events',
          ],
        },
        {
          icon: 'bx-church',
          title: 'Winchcombe',
          description:
            'Once capital of the Anglo-Saxon kingdom of Mercia, this historic town is the gateway to Sudeley Castle and beautiful walking trails.',
          points: [
            'Sudeley Castle & gardens',
            "St Peter's Church (medieval)",
            'Cotswold Way walking access',
            'Local museums & heritage sites',
          ],
        },
        {
          icon: 'bx-landscape',
          title: 'Broadway',
          description:
            'One of the loveliest Cotswold villages, Broadway has a perfect High Street and the iconic Broadway Tower with panoramic views.',
          points: [
            'Broadway Tower (panoramic views)',
            'Picture-perfect High Street',
            'Fine dining restaurants',
            'Arts & antiques shops',
          ],
        },
      ],
    },
    journeys: {
      title: 'Journey Times & Routes',
      items: [
        { place: 'Central London', time: '~90–120 min', note: 'Via M40 & A40' },
        { place: 'Heathrow Airport', time: '~60–90 min', note: 'Direct via M40' },
        { place: 'Oxford', time: '~45–60 min', note: 'Perfect combination tour' },
        { place: 'Bath', time: '~60–90 min', note: 'Historic-cities combination' },
      ],
    },
    faqTitle: 'Cotswolds Tour: Frequently Asked Questions',
    faqIntro: 'Everything you need to know before booking a private Cotswolds day trip from London.',
    faqs: [
      {
        question: 'How long does it take to drive from London to the Cotswolds?',
        answer:
          'The nearest Cotswolds villages are around 90 minutes from central London via the M40 and A40; the western Cotswolds are closer to 2 hours. Because the region is spread out, a private car is by far the best way to see several villages in a day.',
      },
      {
        question: 'Which Cotswolds villages will I visit?',
        answer:
          'A typical day takes in three to five villages — most guests choose from Bourton-on-the-Water, Stow-on-the-Wold, Chipping Campden, Broadway and Bibury. Tell us whether you prefer famous highlights or quieter hidden gems and your driver will plan the route.',
      },
      {
        question: 'Can I combine the Cotswolds with Oxford or Bath?',
        answer:
          '<strong>Oxford + the Cotswolds</strong> is our most popular combination — the dreaming spires are only 30–45 minutes from the southern villages. <strong>Bath + the Cotswolds</strong> works well for a scenic full day in the west. Blenheim Palace is another easy add-on.',
      },
      {
        question: 'Is there time to stop for lunch or photos?',
        answer:
          'Absolutely — that is the advantage of a private chauffeur. We build in stops for a traditional pub lunch, a riverside tea room, or simply to photograph a view. There are no coach timetables, so the pace is entirely yours.',
      },
      {
        question: 'When is the best time of year to visit the Cotswolds?',
        answer:
          'The Cotswolds are beautiful year-round. Late spring and summer bring wisteria, gardens and long daylight; autumn turns the countryside gold; and winter offers cosy pubs and quiet, crowd-free villages. Your driver can advise on the prettiest routes for the season.',
      },
      {
        question: 'How many passengers can you accommodate?',
        answer:
          'Our Mercedes S-Class carries up to 3 passengers comfortably. For groups of 4 to 7 we use a Mercedes V-Class with extra luggage space. Larger groups can be arranged on request.',
      },
      {
        question: 'How much does a private Cotswolds tour from London cost?',
        answer:
          'Pricing depends on group size, the vehicle chosen, total tour length, and any additional stops such as Oxford or Blenheim Palace. Send us your dates and itinerary and we will send back a tailored quote — usually within the hour.',
      },
    ],
    whyTitle: 'Why Choose Silk Ride for Your Cotswolds Tour',
    relatedTitle: 'Combine the Cotswolds With Another Destination',
    relatedIntro: 'A private chauffeur makes multi-stop day trips effortless. Popular pairings:',
    cta: {
      title: "Experience England's Most Beautiful Countryside",
      subtitle:
        "Tell us your dates, group size and any add-on stops — we'll send back a tailored quote within an hour.",
    },
    card: {
      tagline: 'Honey-stone villages and rolling English countryside — off the coach routes.',
      icon: 'bx-landscape',
    },
    pricing: { withoutGuide: 650, withGuide: 1250, hours: 9 },
    schema: {
      description:
        'Luxury chauffeur service and private countryside tours to the Cotswolds from London, featuring historic villages and scenic landscapes.',
      geo: { lat: 51.833, lng: -1.8433 },
      areaServed: [
        { type: 'Place', name: 'Cotswolds' },
        { type: 'City', name: 'London' },
        { type: 'Place', name: 'Chipping Campden' },
        { type: 'Place', name: 'Bourton-on-the-Water' },
        { type: 'Place', name: 'Stow-on-the-Wold' },
      ],
      attraction: {
        name: 'The Cotswolds',
        description:
          'A designated Area of Outstanding Natural Beauty covering nearly 800 square miles of rolling hills and honey-coloured stone villages across south-central England.',
        locality: 'Gloucestershire',
        region: 'Gloucestershire',
        geo: { lat: 51.833, lng: -1.8433 },
        free: true,
      },
    },
  },
}

// Display / crawl order for the hub grid and related-tour cards.
export const destinationOrder = ['stonehenge', 'windsor', 'oxford', 'cambridge', 'cotswolds', 'bath']

export const destinationList: Destination[] = destinationOrder.map((slug) => destinations[slug])

// --- Localisation ------------------------------------------------------
// English is the source set above. Russian translations live in
// ./destinationsRu and are selected by locale at render time. The page
// wrappers / hub call the getLocalized* helpers; the component receives a
// fully-resolved (plain-string) Destination, so it stays locale-agnostic.
import { destinationsRu } from './destinationsRu'

function localeSet(locale = 'en'): Record<string, Destination> {
  return locale === 'ru' ? destinationsRu : destinations
}

export function getDestination(slug: string, locale = 'en'): Destination | undefined {
  return localeSet(locale)[slug] || destinations[slug]
}

export function getLocalizedDestinationList(locale = 'en'): Destination[] {
  const set = localeSet(locale)
  return destinationOrder.map((slug) => set[slug] || destinations[slug])
}

export function getRelatedDestinations(slug: string, locale = 'en', limit = 5): Destination[] {
  return getLocalizedDestinationList(locale)
    .filter((d) => d.slug !== slug)
    .slice(0, limit)
}
