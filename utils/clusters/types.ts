// Content model for the topic-cluster guide pages.
//
// Site architecture: each service has one PILLAR page (/services/<service>)
// and a set of CLUSTER pages that go deep on one occasion, venue or route and
// link back to the pillar and across to their siblings:
//
//   /services/event-chauffeur          ← pillar
//   /event-chauffeur/royal-ascot       ← cluster
//   /event-chauffeur/wimbledon         ← cluster …
//
// One cluster page = one data file per locale (utils/clusters/<locale>/<slug>.ts)
// + one line in utils/clusters/registry.ts + a thin page wrapper in
// pages/<section>/<slug>.vue. <ClusterGuidePage> renders everything else.

export type ClusterSection =
  | 'event-chauffeur'
  | 'corporate-chauffeur'
  | 'hourly-chauffeur'
  | 'long-distance-chauffeur'
  | 'wedding-cars'
  | 'christmas'

export type FleetKey = 'eClass' | 'sClass' | 'vClass'

export interface ClusterStat {
  /** Boxicons class, e.g. "bx-time" */
  icon: string
  label: string
  sub: string
}

export interface ClusterContentSection {
  kicker: string
  heading: string
  paragraphs: string[]
  /** Optional check-list rendered under the paragraphs. */
  bullets?: string[]
}

export interface ClusterJourney {
  from: string
  /** Typical driving time, e.g. "1 hr – 1 hr 30" */
  time: string
  note: string
}

export interface ClusterFaq {
  question: string
  /** Plain text or simple inline HTML (<strong>, <a>). */
  answer: string
}

export interface ClusterRelatedLink {
  /** Locale-neutral path, e.g. "/fleet/mercedes-v-class" */
  path: string
  icon: string
  title: string
  tagline: string
}

export interface ClusterGuide {
  slug: string
  section: ClusterSection
  /** Short name used in breadcrumbs and buttons, e.g. "Royal Ascot" */
  name: string
  seo: {
    /** ≤ 50 characters, no pipe character; " | Silk Ride" is appended. */
    title: string
    /** ≤ 155 characters. */
    description: string
  }
  kicker: string
  hero: {
    title: string
    /** Second line of the H1, rendered in gold. */
    titleAccent: string
    subtitle: string
    /** Root-relative path to an existing file in /public. */
    image: string
    alt: string
  }
  /** Exactly three. */
  stats: ClusterStat[]
  overview: {
    kicker: string
    heading: string
    paragraphs: string[]
    includesTitle: string
    includes: string[]
  }
  /** Two or three sections of page-specific guidance. */
  sections: ClusterContentSection[]
  journeys?: {
    kicker: string
    title: string
    intro: string
    items: ClusterJourney[]
  }
  vehicles: {
    kicker: string
    title: string
    intro: string
    /** Why each car suits THIS occasion (one sentence each). */
    notes: Record<FleetKey, string>
    /** Which car to badge as the usual choice. */
    recommended?: FleetKey
  }
  pricing: {
    kicker: string
    title: string
    paragraphs: string[]
    points: string[]
  }
  faq: {
    kicker: string
    title: string
    intro: string
    items: ClusterFaq[]
  }
  related: {
    kicker: string
    title: string
    intro: string
    /** Extra links beyond the pillar + sibling pages (added automatically). */
    extra?: ClusterRelatedLink[]
  }
  cta: { title: string; subtitle: string }
  schema: {
    serviceType: string
    areaServed: { type: string; name: string }[]
    /**
     * true  → the service is sold by the hour (events, shopping, roadshows):
     *         vehicle cards and structured data show the hourly "from" rate.
     * false → priced by a fixed quote (long-distance routes, weddings):
     *         no price is shown or marked up.
     */
    hourlyPriced: boolean
  }
}
