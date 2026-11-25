// Registry of every topic-cluster page. Lightweight on purpose: pillar pages
// and "related" blocks import this to link to cluster pages without pulling in
// the full page copy (which lives in utils/clusters/<locale>/<slug>.ts).

import type { ClusterSection } from './types'

type Localized = { en: string; ru: string }

export interface ClusterSectionMeta {
  /** URL prefix of the cluster pages, e.g. "/event-chauffeur" */
  base: string
  /** The pillar page every cluster page in this section links back to. */
  pillarPath: string
  pillarIcon: string
  pillarName: Localized
  pillarTagline: Localized
}

export const CLUSTER_SECTIONS: Record<ClusterSection, ClusterSectionMeta> = {
  'event-chauffeur': {
    base: '/event-chauffeur',
    pillarPath: '/services/event-chauffeur',
    pillarIcon: 'bx-calendar-star',
    pillarName: { en: 'Event Chauffeur', ru: 'Водитель на мероприятия' },
    pillarTagline: {
      en: 'Our full event transport service: sport, concerts, galas and private parties.',
      ru: 'Все услуги для мероприятий: спорт, концерты, гала-вечера и частные приёмы.',
    },
  },
  'corporate-chauffeur': {
    base: '/corporate-chauffeur',
    pillarPath: '/services/corporate-travel',
    pillarIcon: 'bx-briefcase',
    pillarName: { en: 'Corporate Chauffeur', ru: 'Корпоративный водитель' },
    pillarTagline: {
      en: 'Executive travel for meetings, client visits and company events.',
      ru: 'Поездки для руководителей: встречи, визиты клиентов и корпоративные события.',
    },
  },
  'hourly-chauffeur': {
    base: '/hourly-chauffeur',
    pillarPath: '/services/hourly-chauffeur',
    pillarIcon: 'bx-time',
    pillarName: { en: 'Hourly Chauffeur Hire', ru: 'Почасовая аренда с водителем' },
    pillarTagline: {
      en: 'A car and chauffeur at your disposal by the hour, from four hours.',
      ru: 'Автомобиль с водителем в вашем распоряжении, от четырёх часов.',
    },
  },
  'long-distance-chauffeur': {
    base: '/long-distance-chauffeur',
    pillarPath: '/services/uk-europe-travel',
    pillarIcon: 'bx-globe',
    pillarName: { en: 'Long-Distance Chauffeur', ru: 'Междугородние поездки' },
    pillarTagline: {
      en: 'Door-to-door journeys across the UK and into Europe.',
      ru: 'Поездки от двери до двери по Великобритании и в Европу.',
    },
  },
  'wedding-cars': {
    base: '/wedding-cars',
    pillarPath: '/services/wedding-chauffeur',
    pillarIcon: 'bx-heart',
    pillarName: { en: 'Wedding Chauffeur', ru: 'Свадебный автомобиль' },
    pillarTagline: {
      en: 'Wedding cars for the couple, the family and the guests.',
      ru: 'Свадебные автомобили для пары, семьи и гостей.',
    },
  },
}

export interface ClusterEntry {
  section: ClusterSection
  slug: string
  icon: string
  title: Localized
  tagline: Localized
}

export const CLUSTER_PAGES: ClusterEntry[] = [
  // ---- Events ---------------------------------------------------------
  {
    section: 'event-chauffeur',
    slug: 'royal-ascot',
    icon: 'bx-crown',
    title: { en: 'Royal Ascot Chauffeur', ru: 'Водитель на Royal Ascot' },
    tagline: {
      en: 'Door-to-door to Ascot Racecourse, with your chauffeur waiting for the return.',
      ru: 'От двери до ипподрома Аскот: водитель ждёт вас до конца дня.',
    },
  },
  {
    section: 'event-chauffeur',
    slug: 'wimbledon',
    icon: 'bx-tennis-ball',
    title: { en: 'Wimbledon Chauffeur', ru: 'Водитель на Уимблдон' },
    tagline: {
      en: 'Travel to The Championships in SW19 without the queues for trains and taxis.',
      ru: 'На Уимблдонский турнир в SW19 без очередей на поезда и такси.',
    },
  },
  {
    section: 'event-chauffeur',
    slug: 'silverstone',
    icon: 'bxs-flag-checkered',
    title: { en: 'Silverstone Grand Prix Chauffeur', ru: 'Водитель на Гран-при в Сильверстоун' },
    tagline: {
      en: 'London to the British Grand Prix and back, planned around race-day traffic.',
      ru: 'Из Лондона на Гран-при Великобритании и обратно с учётом пробок.',
    },
  },
  {
    section: 'event-chauffeur',
    slug: 'goodwood',
    icon: 'bx-car',
    title: { en: 'Goodwood Chauffeur', ru: 'Водитель в Гудвуд' },
    tagline: {
      en: 'Festival of Speed, Revival and Glorious Goodwood from London.',
      ru: 'Festival of Speed, Revival и скачки Glorious Goodwood из Лондона.',
    },
  },
  {
    section: 'event-chauffeur',
    slug: 'henley-royal-regatta',
    icon: 'bx-water',
    title: { en: 'Henley Royal Regatta Chauffeur', ru: 'Водитель на Хенлейскую регату' },
    tagline: {
      en: 'A relaxed day by the Thames at Henley, with no drive home to think about.',
      ru: 'Спокойный день у Темзы в Хенли — и не нужно думать о дороге домой.',
    },
  },
  {
    section: 'event-chauffeur',
    slug: 'chelsea-flower-show',
    icon: 'bx-leaf',
    title: { en: 'Chelsea Flower Show Chauffeur', ru: 'Водитель на Chelsea Flower Show' },
    tagline: {
      en: 'Dropped at the Royal Hospital Chelsea and collected when you are ready.',
      ru: 'Довезём до Королевского госпиталя в Челси и заберём, когда вы закончите.',
    },
  },
  // ---- Corporate ------------------------------------------------------
  {
    section: 'corporate-chauffeur',
    slug: 'financial-roadshows',
    icon: 'bx-line-chart',
    title: { en: 'Financial Roadshow Chauffeur', ru: 'Водитель для роуд-шоу' },
    tagline: {
      en: 'One car and chauffeur for a full day of investor meetings across London.',
      ru: 'Один автомобиль и водитель на весь день встреч с инвесторами в Лондоне.',
    },
  },
  {
    section: 'corporate-chauffeur',
    slug: 'conference-transport',
    icon: 'bx-buildings',
    title: { en: 'Conference & Exhibition Transport', ru: 'Транспорт на конференции и выставки' },
    tagline: {
      en: 'Delegate and speaker transport for ExCeL, Olympia and central London venues.',
      ru: 'Трансфер делегатов и спикеров в ExCeL, Olympia и на площадки в центре Лондона.',
    },
  },
  // ---- Hourly ---------------------------------------------------------
  {
    section: 'hourly-chauffeur',
    slug: 'bicester-village',
    icon: 'bx-shopping-bag',
    title: { en: 'Bicester Village Chauffeur', ru: 'Водитель в Бистер-Виллидж' },
    tagline: {
      en: 'A private shopping day from London, with room in the boot for everything.',
      ru: 'День шопинга из Лондона — и место в багажнике для всех покупок.',
    },
  },
  {
    section: 'hourly-chauffeur',
    slug: 'london-sightseeing',
    icon: 'bx-map-alt',
    title: { en: 'London Sightseeing by Chauffeur', ru: 'Экскурсия по Лондону с водителем' },
    tagline: {
      en: 'See the landmarks at your own pace, with the car waiting at every stop.',
      ru: 'Главные места Лондона в вашем темпе: автомобиль ждёт у каждой остановки.',
    },
  },
  // ---- Long distance --------------------------------------------------
  {
    section: 'long-distance-chauffeur',
    slug: 'london-to-manchester',
    icon: 'bx-trip',
    title: { en: 'London to Manchester Chauffeur', ru: 'Лондон — Манчестер с водителем' },
    tagline: {
      en: 'Door to door up the M40 and M6 with no changes, queues or lost luggage.',
      ru: 'От двери до двери по M40 и M6 — без пересадок и очередей.',
    },
  },
  {
    section: 'long-distance-chauffeur',
    slug: 'london-to-birmingham',
    icon: 'bx-trip',
    title: { en: 'London to Birmingham Chauffeur', ru: 'Лондон — Бирмингем с водителем' },
    tagline: {
      en: 'A working journey to the city centre, the NEC or Birmingham Airport.',
      ru: 'Поездка в центр города, на NEC или в аэропорт Бирмингема.',
    },
  },
  {
    section: 'long-distance-chauffeur',
    slug: 'london-to-paris',
    icon: 'bx-world',
    title: { en: 'London to Paris Chauffeur', ru: 'Лондон — Париж с водителем' },
    tagline: {
      en: 'The same car and chauffeur from your London door to your Paris hotel.',
      ru: 'Один автомобиль и водитель от вашей двери в Лондоне до отеля в Париже.',
    },
  },
  // ---- Weddings -------------------------------------------------------
  {
    section: 'wedding-cars',
    slug: 'mercedes-s-class-wedding-car',
    icon: 'bx-diamond',
    title: { en: 'Mercedes S-Class Wedding Car', ru: 'Свадебный Mercedes S-Class' },
    tagline: {
      en: 'A modern bridal car with space for the dress and a quiet few minutes.',
      ru: 'Современный свадебный автомобиль: место для платья и несколько минут тишины.',
    },
  },
  {
    section: 'wedding-cars',
    slug: 'wedding-guest-transport',
    icon: 'bx-group',
    title: { en: 'Wedding Guest Transport', ru: 'Трансфер гостей на свадьбу' },
    tagline: {
      en: 'V-Class shuttles between hotel, ceremony and reception for family and guests.',
      ru: 'V-Class между отелем, церемонией и банкетом для семьи и гостей.',
    },
  },
]

const pick = (v: Localized, locale: string) => (locale === 'ru' ? v.ru : v.en)

export interface ClusterLink {
  path: string
  icon: string
  title: string
  tagline: string
}

export function clusterPath(entry: Pick<ClusterEntry, 'section' | 'slug'>): string {
  return `${CLUSTER_SECTIONS[entry.section].base}/${entry.slug}`
}

/** Cluster pages of one section, localised, optionally excluding one slug. */
export function getClusterLinks(section: ClusterSection, locale: string, excludeSlug?: string): ClusterLink[] {
  return CLUSTER_PAGES.filter((p) => p.section === section && p.slug !== excludeSlug).map((p) => ({
    path: clusterPath(p),
    icon: p.icon,
    title: pick(p.title, locale),
    tagline: pick(p.tagline, locale),
  }))
}

/** The pillar page of a section as a link card. */
export function getPillarLink(section: ClusterSection, locale: string): ClusterLink {
  const s = CLUSTER_SECTIONS[section]
  return {
    path: s.pillarPath,
    icon: s.pillarIcon,
    title: pick(s.pillarName, locale),
    tagline: pick(s.pillarTagline, locale),
  }
}
