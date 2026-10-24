// Central source of truth for the /cruise-transfers pages.
//
// Each page (pages/cruise-transfers/<slug>.vue) is a thin wrapper that passes
// one of these objects to <CruiseTransferPage>. Mirrors the pattern used by
// utils/destinations.ts for the /destination-tours pages.
//
// Prices are flat, per-vehicle, one-way fares in GBP.

export interface CruiseStat {
  icon: string
  label: string
  sub: string
}

export interface CruiseTerminal {
  name: string
  location: string
  description: string
  lines: string
}

export interface CruiseStep {
  title: string
  description: string
}

export interface CruiseJourney {
  from: string
  time: string
  note: string
}

export interface CruiseVehicle {
  key: 'eClass' | 'sClass' | 'vClass'
  name: string
  image: string
  passengers: string
  luggage: string
  note: string
  recommended?: boolean
}

export interface CruiseFaq {
  question: string
  /** May contain inline HTML (rendered with v-html). */
  answer: string
}

export interface CruisePillar {
  icon: string
  title: string
  text: string
}

export interface CruiseRelatedLink {
  path: string
  icon: string
  title: string
  tagline: string
}

export interface CruiseTransfer {
  slug: string
  /** Short name used in buttons: "Book {name}" */
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
  stats: CruiseStat[]
  overview: {
    kicker: string
    heading: string
    paragraphs: string[]
    includesTitle: string
    includes: string[]
  }
  pricing: {
    kicker: string
    title: string
    intro: string
    price: number
    priceLabel: string
    perVehicle: string
    direction: string
    features: string[]
    note: string
    vehiclesTitle: string
    vehicles: CruiseVehicle[]
    recommendedBadge: string
  }
  terminals: {
    kicker: string
    title: string
    intro: string
    items: CruiseTerminal[]
  }
  steps: {
    kicker: string
    title: string
    intro: string
    items: CruiseStep[]
  }
  journeys: {
    kicker: string
    title: string
    intro: string
    items: CruiseJourney[]
  }
  faq: {
    kicker: string
    title: string
    intro: string
    items: CruiseFaq[]
  }
  why: {
    kicker: string
    title: string
    pillars: CruisePillar[]
  }
  related: {
    kicker: string
    title: string
    intro: string
    linkLabel: string
    items: CruiseRelatedLink[]
  }
  cta: { title: string; subtitle: string; primary: string; secondary: string }
  labels: {
    book: string
    bookNow: string
    getQuote: string
    breadcrumbHome: string
    breadcrumbSection: string
    breadcrumbPage: string
  }
  schema: {
    description: string
    serviceName: string
  }
}

const HERO_IMAGE = '/images/covers/cruise-heathrow-southampton.webp'

// ---------------------------------------------------------------------------
// English
// ---------------------------------------------------------------------------

const heathrowSouthamptonEn: CruiseTransfer = {
  slug: 'heathrow-to-southampton',
  name: 'Cruise Transfer',
  seoKey: 'heathrowSouthamptonCruise',
  kicker: 'Cruise Port Transfers',
  hero: {
    title: 'Heathrow to Southampton',
    titleAccent: 'Cruise Terminal Transfer',
    subtitle:
      'Step off your flight and straight into a chauffeur-driven Mercedes. One fixed £450 fare, meet & greet in arrivals, and door-to-door delivery to your ship at any Southampton cruise terminal.',
    image: HERO_IMAGE,
    alt: 'Mercedes V-Class chauffeur loading cruise luggage outside a Heathrow terminal',
    ogImage: HERO_IMAGE,
  },
  stats: [
    { icon: 'bx-pound', label: 'Fixed £450 fare', sub: 'Per vehicle · no hidden extras' },
    { icon: 'bx-time-five', label: 'Approx. 1h 45m', sub: 'Heathrow to the quayside via M3 & M27' },
    { icon: 'bxs-ship', label: 'All 5 terminals', sub: 'Ocean, Horizon, Mayflower, City & QEII' },
  ],
  overview: {
    kicker: 'The Transfer',
    heading: 'The calm start your cruise deserves',
    paragraphs: [
      'Southampton is Britain’s cruise capital and the home port for Cunard, P&O Cruises, Princess, Royal Caribbean, MSC, Celebrity and Virgin Voyages. For most international guests the voyage begins with a flight into Heathrow, followed by a 70-mile road journey to the docks — and that journey sets the tone for the whole holiday.',
      'Silk Ride takes the uncertainty out of it. Your chauffeur tracks your flight, meets you in the arrivals hall with a name board, helps with every suitcase and drives you directly to the luggage drop-off at your ship’s terminal. No shuttle queues, no shared coaches, no second thoughts about whether you will make embarkation.',
      'The fare is fixed at £450 per vehicle, one way, and is confirmed at the moment you book. It covers up to 60 minutes of waiting after your flight lands, all tolls and parking, and the same door-to-door service in reverse when you sail back into Southampton.',
    ],
    includesTitle: 'What’s included',
    includes: [
      'Meet & greet in the Heathrow arrivals hall with a personalised name board',
      'Live flight tracking — we adjust your pickup if your flight is early or delayed',
      '60 minutes of complimentary waiting time after landing',
      'Full luggage assistance from the carousel to the ship’s baggage drop',
      'Drop-off at the correct Southampton terminal for your sailing',
      'Complimentary bottled water, Wi-Fi and phone chargers on board',
      'Child and booster seats on request at no extra cost',
      'Same fixed fare for the return: Southampton cruise terminal to Heathrow',
    ],
  },
  pricing: {
    kicker: 'Pricing',
    title: 'One fixed fare, no surprises',
    intro:
      'The price you see is the price you pay. Fares are quoted per vehicle, not per person, so a family or group of friends travels together for the same flat rate.',
    price: 450,
    priceLabel: 'Fixed fare',
    perVehicle: 'Per vehicle · one way · up to 7 passengers',
    direction: 'Heathrow Airport ⇄ Southampton Cruise Terminal',
    features: [
      'Luxury Mercedes E-Class, S-Class or V-Class',
      'Professional, DBS-checked chauffeur',
      'Meet & greet, flight tracking and 60 min wait',
      'All tolls, parking and terminal access fees',
      'Free cancellation up to 24 hours before pickup',
      'Pay securely by card, Apple Pay or Google Pay',
    ],
    note:
      'Fares are fixed at booking for pickups from any Heathrow terminal to any Southampton cruise terminal, and for the return journey. Transfers from Gatwick, Central London or other addresses are quoted on request.',
    vehiclesTitle: 'Choose your vehicle',
    vehicles: [
      {
        key: 'eClass',
        name: 'Mercedes E-Class',
        image: '/images/transparentcars/eclass.webp',
        passengers: 'Up to 3 passengers',
        luggage: '2 large suitcases + 2 cabin bags',
        note: 'Ideal for couples travelling light.',
      },
      {
        key: 'sClass',
        name: 'Mercedes S-Class',
        image: '/images/transparentcars/sclass.webp',
        passengers: 'Up to 3 passengers',
        luggage: '2 large suitcases + 2 cabin bags',
        note: 'Flagship comfort for a special occasion.',
      },
      {
        key: 'vClass',
        name: 'Mercedes V-Class',
        image: '/images/transparentcars/vclass.jpg',
        passengers: 'Up to 7 passengers',
        luggage: '7 large suitcases + cabin bags',
        note: 'Our recommendation for cruise luggage, families and groups.',
        recommended: true,
      },
    ],
    recommendedBadge: 'Recommended for cruises',
  },
  terminals: {
    kicker: 'Where We Drop You',
    title: 'Every Southampton cruise terminal',
    intro:
      'Tell us your ship and sailing date when you book and we will confirm the terminal for you. Your chauffeur drops you at the baggage drop-off directly outside check-in.',
    items: [
      {
        name: 'Ocean Cruise Terminal',
        location: 'Eastern Docks · Berth 46/47',
        description:
          'Southampton’s flagship terminal, regularly used by Cunard’s Queen Mary 2, Queen Anne and the largest P&O Cruises ships.',
        lines: 'Cunard · P&O Cruises · Royal Caribbean',
      },
      {
        name: 'Horizon Cruise Terminal',
        location: 'Western Docks · Berth 102',
        description:
          'The newest terminal at the port, opened in 2021 with shore power and a bright, fast-moving check-in hall.',
        lines: 'MSC Cruises · Virgin Voyages · Celebrity',
      },
      {
        name: 'Mayflower Cruise Terminal',
        location: 'Western Docks · Berth 106',
        description:
          'A long-standing favourite for P&O Cruises and Princess, close to the port’s main Dock Gate 10 entrance.',
        lines: 'P&O Cruises · Princess · Fred. Olsen',
      },
      {
        name: 'City Cruise Terminal',
        location: 'Western Docks · Berth 101',
        description:
          'Closest terminal to the city centre, popular with Royal Caribbean, Celebrity and Norwegian departures.',
        lines: 'Royal Caribbean · Celebrity · Norwegian',
      },
      {
        name: 'QEII Cruise Terminal',
        location: 'Eastern Docks · Berth 38/39',
        description:
          'Named after the legendary Queen Elizabeth 2, this terminal handles a wide mix of lines on the Eastern Docks.',
        lines: 'Cunard · P&O Cruises · Saga · Ambassador',
      },
    ],
  },
  steps: {
    kicker: 'How It Works',
    title: 'From the arrivals hall to the gangway',
    intro: 'Four simple steps, and your chauffeur handles every one of them.',
    items: [
      {
        title: 'Book with your flight & ship details',
        description:
          'Reserve online or by phone with your flight number, ship name and sailing date. We confirm your fixed £450 fare instantly.',
      },
      {
        title: 'We track your flight',
        description:
          'Your chauffeur monitors your arrival in real time and adjusts the pickup if you land early or late — at no extra charge.',
      },
      {
        title: 'Meet & greet in arrivals',
        description:
          'Look for your name board as you exit customs. Your chauffeur takes the luggage trolley and walks you to the car.',
      },
      {
        title: 'Relax to the quayside',
        description:
          'Around 1h 45m along the M3 and M27, with water and Wi-Fi on board, ending right at your terminal’s luggage drop.',
      },
    ],
  },
  journeys: {
    kicker: 'Journey Times',
    title: 'How long does it take?',
    intro:
      'Typical door-to-door times in normal traffic. We always recommend arriving at the port at least two hours before your ship’s final boarding time.',
    items: [
      { from: 'Heathrow Terminal 5', time: '1h 40m', note: 'Direct onto the M25 and M3' },
      { from: 'Heathrow Terminals 2 & 3', time: '1h 45m', note: 'Central terminal area' },
      { from: 'Heathrow Terminal 4', time: '1h 45m', note: 'Southern perimeter road' },
      { from: 'Central London', time: '2h 15m', note: 'Quoted on request' },
    ],
  },
  faq: {
    kicker: 'Good to Know',
    title: 'Heathrow to Southampton cruise transfer FAQs',
    intro: 'Everything first-time cruisers ask us before they book.',
    items: [
      {
        question: 'How much is a chauffeur from Heathrow to Southampton Cruise Terminal?',
        answer:
          'Our fare is a fixed <strong>£450 per vehicle, one way</strong>, for up to seven passengers depending on the vehicle you choose. It includes meet & greet, flight tracking, 60 minutes of waiting time, tolls and parking. The same fare applies to the return journey from the cruise terminal back to Heathrow.',
      },
      {
        question: 'What happens if my flight is delayed?',
        answer:
          'Nothing you need to worry about. We track every inbound flight and move your pickup to match the actual landing time. The 60 minutes of complimentary waiting starts only once your flight has touched down, so delays never cost you extra.',
      },
      {
        question: 'How long is the drive from Heathrow to Southampton docks?',
        answer:
          'The route is roughly 70 miles via the M25, M3 and M27 and typically takes <strong>1 hour 40 minutes to 2 hours</strong>, depending on traffic and which Heathrow terminal you arrive at. Your chauffeur plans around live traffic data on the day.',
      },
      {
        question: 'Which Southampton terminal will my ship use?',
        answer:
          'Southampton has five cruise terminals: Ocean, Horizon, Mayflower, City and QEII. Terminal allocation is confirmed by the port a few days before sailing. Just give us your ship’s name and we will check it for you and drop you at the correct entrance.',
      },
      {
        question: 'How much luggage can I bring?',
        answer:
          'Cruise passengers tend to travel with more than airline passengers, so we recommend the Mercedes V-Class, which carries up to seven large suitcases plus cabin bags. The E-Class and S-Class comfortably take two large suitcases and two cabin bags. If you are unsure, tell us your luggage count when you book and we will advise.',
      },
      {
        question: 'Can we stop at Stonehenge or Windsor on the way to the ship?',
        answer:
          'Yes — both lie close to the route. A stop at Windsor Castle or Stonehenge turns the transfer into a mini day out before you embark. We quote stopovers as an add-on to your transfer; call us or mention it in the booking notes and we will build the itinerary with your boarding time in mind.',
      },
      {
        question: 'Do you offer the return transfer from the ship to Heathrow?',
        answer:
          'Absolutely, at the same fixed fare. Disembarkation usually runs between 7am and 10am. Give us your ship’s scheduled arrival time and your flight departure, and we will suggest a pickup time that comfortably covers immigration, luggage collection and the drive to Heathrow.',
      },
      {
        question: 'How far in advance should I book?',
        answer:
          'We recommend booking as soon as your flights are confirmed, especially for summer sailings and school holidays when demand for V-Class vehicles is high. Short-notice bookings are often possible — call <a href="tel:+442034882324" class="font-semibold text-gold hover:underline">+44 203 488 2324</a> and we will do our best.',
      },
    ],
  },
  why: {
    kicker: 'The Silk Ride Difference',
    title: 'Why cruise guests choose Silk Ride',
    pillars: [
      { icon: 'bxs-car', title: 'Luxury Mercedes fleet', text: 'E-Class and S-Class for couples, V-Class for families and groups with cruise luggage.' },
      { icon: 'bx-shield-quarter', title: 'Licensed & insured', text: 'TfL-licensed Private Hire Operator with full passenger insurance on every journey.' },
      { icon: 'bx-radar', title: 'Flight-aware pickups', text: 'We watch your flight so you never pay for delays and never wait for a driver.' },
      { icon: 'bx-star', title: '5-star service', text: 'Professional chauffeurs who know Heathrow’s terminals and Southampton’s dock gates.' },
    ],
  },
  related: {
    kicker: 'Plan the Rest',
    title: 'Pair your transfer with…',
    intro: 'Arriving a day early or sailing home with time to spare? These pages cover the most popular add-ons.',
    linkLabel: 'View details',
    items: [
      {
        path: '/airport-transfers/heathrow',
        icon: 'bxs-plane-take-off',
        title: 'Heathrow Airport Transfers',
        tagline: 'Chauffeur transfers between Heathrow and Central London from £120.',
      },
      {
        path: '/destination-tours/stonehenge',
        icon: 'bx-circle',
        title: 'Stonehenge Private Tour',
        tagline: 'Add a stop at the ancient stone circle on the way to the ship.',
      },
      {
        path: '/destination-tours/windsor',
        icon: 'bxs-castle',
        title: 'Windsor Castle Tour',
        tagline: 'Minutes from Heathrow — the perfect pre-cruise afternoon.',
      },
    ],
  },
  cta: {
    title: 'Ready to sail from Southampton?',
    subtitle: 'Lock in your fixed £450 Heathrow to Southampton cruise transfer today. Share your flight and ship details and we handle the rest.',
    primary: 'Book Cruise Transfer',
    secondary: 'Call for a Custom Quote',
  },
  labels: {
    book: 'Book Cruise Transfer',
    bookNow: 'Book Now',
    getQuote: 'Get a tailored quote',
    breadcrumbHome: 'Home',
    breadcrumbSection: 'Airport Transfers',
    breadcrumbPage: 'Heathrow to Southampton Cruise Terminal',
  },
  schema: {
    serviceName: 'Heathrow to Southampton Cruise Terminal Chauffeur Transfer',
    description:
      'Fixed-fare luxury chauffeur transfer from Heathrow Airport to any Southampton cruise terminal. £450 per vehicle, one way, including meet & greet, flight tracking and 60 minutes of waiting time.',
  },
}

// ---------------------------------------------------------------------------
// Russian
// ---------------------------------------------------------------------------

const heathrowSouthamptonRu: CruiseTransfer = {
  slug: 'heathrow-to-southampton',
  name: 'Трансфер в порт',
  seoKey: 'heathrowSouthamptonCruise',
  kicker: 'Трансферы в круизные порты',
  hero: {
    title: 'Трансфер Хитроу — Саутгемптон',
    titleAccent: 'круизный терминал',
    subtitle:
      'Сойдите с самолёта и сразу сядьте в Mercedes с личным водителем. Фиксированная цена £450, встреча с табличкой в зале прилёта и доставка от двери до трапа в любом круизном терминале Саутгемптона.',
    image: HERO_IMAGE,
    alt: 'Водитель Mercedes V-Class загружает круизный багаж у терминала Хитроу',
    ogImage: HERO_IMAGE,
  },
  stats: [
    { icon: 'bx-pound', label: 'Фиксированно £450', sub: 'За автомобиль · без скрытых доплат' },
    { icon: 'bx-time-five', label: 'Около 1 ч 45 мин', sub: 'От Хитроу до причала по M3 и M27' },
    { icon: 'bxs-ship', label: 'Все 5 терминалов', sub: 'Ocean, Horizon, Mayflower, City и QEII' },
  ],
  overview: {
    kicker: 'О трансфере',
    heading: 'Спокойное начало вашего круиза',
    paragraphs: [
      'Саутгемптон — круизная столица Великобритании и порт приписки Cunard, P&O Cruises, Princess, Royal Caribbean, MSC, Celebrity и Virgin Voyages. Для большинства иностранных гостей путешествие начинается с перелёта в Хитроу и дороги длиной 110 км до порта — и именно эта дорога задаёт настроение всему отпуску.',
      'Silk Ride избавляет вас от неопределённости. Водитель отслеживает ваш рейс, встречает в зале прилёта с табличкой, помогает с каждым чемоданом и везёт прямо к зоне сдачи багажа вашего терминала. Никаких очередей на шаттл, общих автобусов и переживаний, успеете ли вы на посадку.',
      'Стоимость фиксированная — £450 за автомобиль в одну сторону — и подтверждается в момент бронирования. В неё входят до 60 минут ожидания после посадки самолёта, все платные дороги и парковка, а также такой же сервис «от двери до двери» в обратную сторону, когда вы вернётесь в Саутгемптон.',
    ],
    includesTitle: 'Что входит в стоимость',
    includes: [
      'Встреча в зале прилёта Хитроу с именной табличкой',
      'Отслеживание рейса онлайн — мы корректируем время подачи при задержке или раннем прилёте',
      '60 минут бесплатного ожидания после посадки',
      'Полная помощь с багажом — от ленты выдачи до сдачи багажа на судно',
      'Подача к нужному круизному терминалу Саутгемптона для вашего рейса',
      'Бутилированная вода, Wi-Fi и зарядки для телефонов в салоне',
      'Детские кресла и бустеры по запросу без доплаты',
      'Та же фиксированная цена на обратный путь: из круизного терминала в Хитроу',
    ],
  },
  pricing: {
    kicker: 'Стоимость',
    title: 'Одна фиксированная цена — без сюрпризов',
    intro:
      'Цена, которую вы видите, — это цена, которую вы платите. Тариф указан за автомобиль, а не за человека, поэтому семья или компания друзей едет вместе по одной фиксированной ставке.',
    price: 450,
    priceLabel: 'Фиксированная цена',
    perVehicle: 'За автомобиль · в одну сторону · до 7 пассажиров',
    direction: 'Аэропорт Хитроу ⇄ круизный терминал Саутгемптона',
    features: [
      'Роскошный Mercedes E-Class, S-Class или V-Class',
      'Профессиональный водитель с проверкой DBS',
      'Встреча, отслеживание рейса и 60 мин ожидания',
      'Все платные дороги, парковка и въезд в порт',
      'Бесплатная отмена за 24 часа до подачи',
      'Безопасная оплата картой, Apple Pay или Google Pay',
    ],
    note:
      'Цена фиксируется при бронировании для подачи из любого терминала Хитроу в любой круизный терминал Саутгемптона и для обратного пути. Трансферы из Гатвика, центра Лондона и других адресов рассчитываются по запросу.',
    vehiclesTitle: 'Выберите автомобиль',
    vehicles: [
      {
        key: 'eClass',
        name: 'Mercedes E-Class',
        image: '/images/transparentcars/eclass.webp',
        passengers: 'До 3 пассажиров',
        luggage: '2 больших чемодана + 2 ручные клади',
        note: 'Идеально для пары с небольшим багажом.',
      },
      {
        key: 'sClass',
        name: 'Mercedes S-Class',
        image: '/images/transparentcars/sclass.webp',
        passengers: 'До 3 пассажиров',
        luggage: '2 больших чемодана + 2 ручные клади',
        note: 'Флагманский комфорт для особого случая.',
      },
      {
        key: 'vClass',
        name: 'Mercedes V-Class',
        image: '/images/transparentcars/vclass.jpg',
        passengers: 'До 7 пассажиров',
        luggage: '7 больших чемоданов + ручная кладь',
        note: 'Наша рекомендация для круизного багажа, семей и групп.',
        recommended: true,
      },
    ],
    recommendedBadge: 'Рекомендуем для круизов',
  },
  terminals: {
    kicker: 'Куда мы вас привезём',
    title: 'Все круизные терминалы Саутгемптона',
    intro:
      'Укажите название судна и дату отплытия при бронировании — мы уточним терминал за вас. Водитель высадит вас у зоны сдачи багажа прямо перед стойками регистрации.',
    items: [
      {
        name: 'Ocean Cruise Terminal',
        location: 'Восточные доки · причал 46/47',
        description:
          'Флагманский терминал Саутгемптона, который регулярно принимает Queen Mary 2, Queen Anne компании Cunard и крупнейшие лайнеры P&O Cruises.',
        lines: 'Cunard · P&O Cruises · Royal Caribbean',
      },
      {
        name: 'Horizon Cruise Terminal',
        location: 'Западные доки · причал 102',
        description:
          'Самый новый терминал порта, открытый в 2021 году, с береговым электропитанием и светлым быстрым залом регистрации.',
        lines: 'MSC Cruises · Virgin Voyages · Celebrity',
      },
      {
        name: 'Mayflower Cruise Terminal',
        location: 'Западные доки · причал 106',
        description:
          'Давний фаворит P&O Cruises и Princess, рядом с главным въездом в порт Dock Gate 10.',
        lines: 'P&O Cruises · Princess · Fred. Olsen',
      },
      {
        name: 'City Cruise Terminal',
        location: 'Западные доки · причал 101',
        description:
          'Ближайший к центру города терминал, популярный у Royal Caribbean, Celebrity и Norwegian.',
        lines: 'Royal Caribbean · Celebrity · Norwegian',
      },
      {
        name: 'QEII Cruise Terminal',
        location: 'Восточные доки · причал 38/39',
        description:
          'Назван в честь легендарного лайнера Queen Elizabeth 2 и обслуживает самые разные круизные компании в Восточных доках.',
        lines: 'Cunard · P&O Cruises · Saga · Ambassador',
      },
    ],
  },
  steps: {
    kicker: 'Как это работает',
    title: 'От зала прилёта до трапа',
    intro: 'Четыре простых шага — и каждый из них берёт на себя ваш водитель.',
    items: [
      {
        title: 'Забронируйте, указав рейс и судно',
        description:
          'Оформите заказ онлайн или по телефону, указав номер рейса, название судна и дату отплытия. Мы сразу подтвердим фиксированную цену £450.',
      },
      {
        title: 'Мы отслеживаем ваш рейс',
        description:
          'Водитель следит за прилётом в реальном времени и переносит подачу, если вы прилетаете раньше или позже — без доплаты.',
      },
      {
        title: 'Встреча в зале прилёта',
        description:
          'После выхода из зоны таможни найдите табличку с вашим именем. Водитель возьмёт тележку с багажом и проводит вас к автомобилю.',
      },
      {
        title: 'Отдыхайте до самого причала',
        description:
          'Около 1 ч 45 мин по M3 и M27 с водой и Wi-Fi в салоне — и вы у зоны сдачи багажа своего терминала.',
      },
    ],
  },
  journeys: {
    kicker: 'Время в пути',
    title: 'Сколько займёт дорога?',
    intro:
      'Типичное время «от двери до двери» при обычном трафике. Мы рекомендуем прибывать в порт не позднее чем за два часа до окончания посадки на судно.',
    items: [
      { from: 'Хитроу, терминал 5', time: '1 ч 40 мин', note: 'Сразу на M25 и M3' },
      { from: 'Хитроу, терминалы 2 и 3', time: '1 ч 45 мин', note: 'Центральная зона терминалов' },
      { from: 'Хитроу, терминал 4', time: '1 ч 45 мин', note: 'Южная периметральная дорога' },
      { from: 'Центр Лондона', time: '2 ч 15 мин', note: 'Цена по запросу' },
    ],
  },
  faq: {
    kicker: 'Полезно знать',
    title: 'Вопросы о трансфере Хитроу — Саутгемптон',
    intro: 'Всё, о чём нас спрашивают перед первым круизом.',
    items: [
      {
        question: 'Сколько стоит трансфер с водителем из Хитроу в круизный терминал Саутгемптона?',
        answer:
          'Наша цена фиксированная — <strong>£450 за автомобиль в одну сторону</strong> — до семи пассажиров в зависимости от выбранного автомобиля. В стоимость входят встреча, отслеживание рейса, 60 минут ожидания, платные дороги и парковка. Та же цена действует на обратный путь из круизного терминала в Хитроу.',
      },
      {
        question: 'Что будет, если мой рейс задержится?',
        answer:
          'Вам не о чем беспокоиться. Мы отслеживаем каждый прилетающий рейс и переносим подачу на фактическое время посадки. 60 минут бесплатного ожидания начинаются только после приземления самолёта, поэтому задержки никогда не стоят вам дополнительных денег.',
      },
      {
        question: 'Сколько ехать от Хитроу до порта Саутгемптона?',
        answer:
          'Маршрут длиной около 110 км проходит по M25, M3 и M27 и обычно занимает <strong>от 1 часа 40 минут до 2 часов</strong> в зависимости от трафика и терминала прилёта. В день поездки водитель строит маршрут по данным о пробках в реальном времени.',
      },
      {
        question: 'К какому терминалу Саутгемптона подойдёт моё судно?',
        answer:
          'В Саутгемптоне пять круизных терминалов: Ocean, Horizon, Mayflower, City и QEII. Порт подтверждает распределение за несколько дней до отплытия. Просто сообщите нам название судна — мы всё проверим и привезём вас к нужному входу.',
      },
      {
        question: 'Сколько багажа можно взять?',
        answer:
          'Круизные пассажиры обычно везут больше вещей, чем авиапассажиры, поэтому мы рекомендуем Mercedes V-Class — он вмещает до семи больших чемоданов плюс ручную кладь. В E-Class и S-Class комфортно помещаются два больших чемодана и две ручные клади. Если сомневаетесь, укажите количество мест багажа при бронировании, и мы подскажем.',
      },
      {
        question: 'Можно ли по пути заехать в Стоунхендж или Виндзор?',
        answer:
          'Да — оба места находятся рядом с маршрутом. Остановка у Виндзорского замка или Стоунхенджа превращает трансфер в небольшую экскурсию перед посадкой на судно. Остановки рассчитываются как дополнение к трансферу: позвоните нам или укажите пожелание в комментарии к заказу, и мы составим маршрут с учётом времени посадки.',
      },
      {
        question: 'Вы выполняете обратный трансфер с судна в Хитроу?',
        answer:
          'Конечно, по той же фиксированной цене. Высадка с судна обычно проходит с 7 до 10 утра. Сообщите нам плановое время прибытия судна и время вылета — мы предложим время подачи с запасом на паспортный контроль, получение багажа и дорогу до Хитроу.',
      },
      {
        question: 'За сколько времени нужно бронировать?',
        answer:
          'Рекомендуем бронировать сразу после подтверждения авиабилетов, особенно на летние круизы и школьные каникулы, когда спрос на V-Class особенно высок. Срочные заказы часто тоже возможны — позвоните по номеру <a href="tel:+442034882324" class="font-semibold text-gold hover:underline">+44 203 488 2324</a>, и мы сделаем всё возможное.',
      },
    ],
  },
  why: {
    kicker: 'Преимущества Silk Ride',
    title: 'Почему круизные гости выбирают Silk Ride',
    pillars: [
      { icon: 'bxs-car', title: 'Автопарк Mercedes', text: 'E-Class и S-Class для пар, V-Class для семей и групп с круизным багажом.' },
      { icon: 'bx-shield-quarter', title: 'Лицензия и страховка', text: 'Лицензированный TfL оператор с полной страховкой пассажиров в каждой поездке.' },
      { icon: 'bx-radar', title: 'Подача по рейсу', text: 'Мы следим за вашим рейсом: вы не платите за задержки и никогда не ждёте водителя.' },
      { icon: 'bx-star', title: 'Сервис на 5 звёзд', text: 'Профессиональные водители, знающие терминалы Хитроу и въезды в порт Саутгемптона.' },
    ],
  },
  related: {
    kicker: 'Спланируйте остальное',
    title: 'Дополните трансфер…',
    intro: 'Прилетаете на день раньше или возвращаетесь с запасом времени? Эти страницы — о самых популярных дополнениях.',
    linkLabel: 'Подробнее',
    items: [
      {
        path: '/airport-transfers/heathrow',
        icon: 'bxs-plane-take-off',
        title: 'Трансферы из Хитроу',
        tagline: 'Трансферы с водителем между Хитроу и центром Лондона от £120.',
      },
      {
        path: '/destination-tours/stonehenge',
        icon: 'bx-circle',
        title: 'Частный тур в Стоунхендж',
        tagline: 'Добавьте остановку у древнего каменного круга по дороге к судну.',
      },
      {
        path: '/destination-tours/windsor',
        icon: 'bxs-castle',
        title: 'Тур в Виндзорский замок',
        tagline: 'В нескольких минутах от Хитроу — идеальный день перед круизом.',
      },
    ],
  },
  cta: {
    title: 'Готовы отправиться в круиз из Саутгемптона?',
    subtitle: 'Забронируйте трансфер Хитроу — Саутгемптон по фиксированной цене £450 уже сегодня. Сообщите данные рейса и судна — остальное мы берём на себя.',
    primary: 'Забронировать трансфер',
    secondary: 'Позвонить для расчёта',
  },
  labels: {
    book: 'Забронировать трансфер',
    bookNow: 'Забронировать',
    getQuote: 'Получить расчёт',
    breadcrumbHome: 'Главная',
    breadcrumbSection: 'Трансферы в аэропорт',
    breadcrumbPage: 'Хитроу — круизный терминал Саутгемптона',
  },
  schema: {
    serviceName: 'Heathrow to Southampton Cruise Terminal Chauffeur Transfer',
    description:
      'Fixed-fare luxury chauffeur transfer from Heathrow Airport to any Southampton cruise terminal. £450 per vehicle, one way, including meet & greet, flight tracking and 60 minutes of waiting time.',
  },
}

export const cruiseTransfers: Record<string, CruiseTransfer> = {
  'heathrow-to-southampton': heathrowSouthamptonEn,
}

export const cruiseTransfersRu: Record<string, CruiseTransfer> = {
  'heathrow-to-southampton': heathrowSouthamptonRu,
}

export function getCruiseTransfer(slug: string, locale = 'en'): CruiseTransfer {
  const source = locale === 'ru' ? cruiseTransfersRu : cruiseTransfers
  const found = source[slug] ?? cruiseTransfers[slug]
  if (!found) throw new Error(`Unknown cruise transfer: ${slug}`)
  return found
}
