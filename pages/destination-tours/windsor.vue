<template>
  <div>
    <Navbar />

    <!-- Hero Section -->
    <section class="relative min-h-screen lg:min-h-[90vh] flex items-center py-20">
      <div class="absolute inset-0 overflow-hidden">
        <img
          src="~/assets/images/covers/winsdor.webp"
          alt="Windsor Castle round tower and royal grounds — private chauffeur tour from London"
          class="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
          width="1920"
          height="1080"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
      </div>

      <div class="relative z-10 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div class="max-w-4xl">
          <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold leading-[1.1] mb-4 sm:mb-6">
            Private Windsor Castle Tours <span class="text-gold block sm:inline">from London</span>
          </h1>
          <p class="text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-6 sm:mb-8 opacity-90 leading-relaxed">
            Step inside the world's oldest occupied royal castle in true comfort. A chauffeured Mercedes collects you in London, drives you to Windsor in under an hour, and waits while you explore at your own pace.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 mb-8">
            <NuxtLink
              :to="localePath('/booking')"
              class="inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-bold text-lg rounded-lg hover:bg-gold/90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              <i class="bx bx-calendar mr-2"></i>
              Book Windsor Castle Tour
            </NuxtLink>
            <a
              href="tel:+442034882324"
              class="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-lg hover:bg-white hover:text-black transition-all duration-300"
            >
              <i class="bx bx-phone mr-2"></i>
              Call +44 203 488 2324
            </a>
          </div>

          <!-- Key Features -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-time-five text-black text-lg sm:text-xl"></i>
              </div>
              <div>
                <h2 class="font-semibold text-base sm:text-lg">~50 Minutes</h2>
                <p class="text-xs sm:text-sm opacity-75">From Central London via M4</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-crown text-black text-lg sm:text-xl"></i>
              </div>
              <div>
                <h2 class="font-semibold text-base sm:text-lg">1,000 Years of Royals</h2>
                <p class="text-xs sm:text-sm opacity-75">The King's official residence</p>
              </div>
            </div>
            <div class="flex items-center space-x-3 sm:col-span-2 lg:col-span-1">
              <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                <i class="bx bx-user-voice text-black text-lg sm:text-xl"></i>
              </div>
              <div>
                <h2 class="font-semibold text-base sm:text-lg">Private Chauffeur</h2>
                <p class="text-xs sm:text-sm opacity-75">Mercedes S-Class or V-Class</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Breadcrumbs -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <CommonBreadcrumbs :items="breadcrumbs" />
    </div>

    <!-- Main Content -->
    <div class="max-w-screen-2xl mx-auto px-6 py-16">

      <!-- Overview -->
      <section class="mb-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-heading font-bold text-black mb-6">
              The Oldest &amp; Largest Occupied Castle in the World
            </h2>
            <div class="w-16 h-1 bg-gold mb-6"></div>
            <div class="prose prose-lg">
              <p class="text-gray-700 leading-relaxed mb-4">
                A Windsor Castle tour from London is the most accessible — and the most cinematic — royal day trip in the UK. Just 22 miles west of central London via the M4, Windsor has been the official residence of the British monarch for almost a thousand years, from William the Conqueror to King Charles III. Silk Ride chauffeurs collect you from your London address, drive you to the castle gate in around 50 minutes, and wait while you explore.
              </p>
              <p class="text-gray-700 leading-relaxed mb-4">
                Inside the castle precincts you'll see the State Apartments — still used today for State visits and investitures — the breathtaking St George's Chapel, where Henry VIII, Queen Elizabeth II and Prince Philip are buried, and Queen Mary's Dolls' House, the largest and most detailed in the world. Allow 2.5 to 3 hours on site to do it properly.
              </p>
              <p class="text-gray-700 leading-relaxed">
                Because the journey is short, Windsor pairs beautifully with other day-trip favourites: Stonehenge (1h20 from Windsor), Bath (1h45), the Roman amphitheatre at Verulamium, or a punt at Oxford. Your driver will plan the day around your pace — no coach schedules, no rushed exits.
              </p>
            </div>
          </div>
          <div class="lg:text-right">
            <div class="inline-block bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-lg">
              <h3 class="text-2xl font-bold text-black mb-6">What's Included</h3>
              <ul class="space-y-4 text-left">
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Private Mercedes with professional chauffeur</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Door-to-door pickup from any London address</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Pre-booked Windsor Castle admission (skip the line)</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Complimentary bottled water and Wi-Fi onboard</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Flexible itinerary — add Stonehenge, Bath or Eton</span>
                </li>
                <li class="flex items-start space-x-3">
                  <i class="bx bx-check-circle text-gold text-xl mt-1"></i>
                  <span class="text-gray-700">Private tour guide available on request</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Attractions -->
      <section class="mb-16">
        <h2 class="text-3xl font-heading font-bold text-center text-black mb-4">
          What to See at Windsor Castle &amp; Beyond
        </h2>
        <p class="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          The castle alone is a full half-day. With a private chauffeur you can add nearby Eton, Runnymede or the Long Walk — all without a second transfer.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-buildings text-black text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">The State Apartments</h3>
            <p class="text-gray-600 mb-4 text-sm">
              The grand ceremonial rooms used by the Royal Family for State visits. Houses Van Dyck, Rubens, Canaletto and Holbein paintings from the Royal Collection.
            </p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• Waterloo Chamber &amp; St George's Hall</li>
              <li>• Van Dyck, Rubens &amp; Holbein masterpieces</li>
              <li>• Royal armoury &amp; tapestries</li>
              <li>• Semi-State Rooms open in winter</li>
            </ul>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-church text-black text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">St George's Chapel</h3>
            <p class="text-gray-600 mb-4 text-sm">
              One of the finest examples of Perpendicular Gothic architecture in England — the venue for royal weddings and the resting place of ten monarchs.
            </p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• Burial place of Henry VIII &amp; Charles I</li>
              <li>• Queen Elizabeth II &amp; Prince Philip memorial</li>
              <li>• Site of Harry &amp; Meghan's 2018 wedding</li>
              <li>• Evensong daily at 17:15</li>
            </ul>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-home-heart text-black text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Queen Mary's Dolls' House</h3>
            <p class="text-gray-600 mb-4 text-sm">
              The largest and most famous dolls' house in the world — a 1:12 scale Edwardian residence with working lifts, running water and a stocked wine cellar.
            </p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• Designed by Sir Edwin Lutyens (1924)</li>
              <li>• Contributions from 1,500+ craftspeople</li>
              <li>• Miniature library with original works</li>
              <li>• Real electricity &amp; plumbing</li>
            </ul>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bxs-tree text-black text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Windsor Great Park &amp; Long Walk</h3>
            <p class="text-gray-600 mb-4 text-sm">
              The 4,800-acre royal park stretches south of the castle. The Long Walk — a 2.6-mile tree-lined avenue — gives the iconic postcard view of the castle.
            </p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• 2.6-mile Long Walk to Snow Hill</li>
              <li>• Savill Garden &amp; Valley Gardens</li>
              <li>• Roaming red deer herd</li>
              <li>• Free public access</li>
            </ul>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-book-reader text-black text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Eton College</h3>
            <p class="text-gray-600 mb-4 text-sm">
              England's most famous boys' school, founded by Henry VI in 1440. The high street and chapel are a 10-minute walk over the Thames from the castle.
            </p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• Founded 1440 by Henry VI</li>
              <li>• Alma mater of 20 British PMs</li>
              <li>• Perpendicular Gothic chapel</li>
              <li>• Pedestrian bridge to Windsor</li>
            </ul>
          </div>

          <div class="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-gold rounded-full flex items-center justify-center mb-4">
              <i class="bx bx-flag text-black text-xl"></i>
            </div>
            <h3 class="text-xl font-semibold text-black mb-3">Runnymede</h3>
            <p class="text-gray-600 mb-4 text-sm">
              The Thames-side meadow where King John sealed the Magna Carta in 1215 — the foundational document of English common law. A 10-minute drive from Windsor.
            </p>
            <ul class="text-sm text-gray-700 space-y-1">
              <li>• Site of Magna Carta signing (1215)</li>
              <li>• American Bar Association memorial</li>
              <li>• John F. Kennedy memorial</li>
              <li>• Riverside walks &amp; café</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Journey Information -->
      <section class="mb-16">
        <h2 class="text-3xl font-heading font-bold text-center text-black mb-12">
          Journey Times &amp; Routes
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">Central London</h3>
            <p class="text-gold font-bold text-xl mb-2">~50 min</p>
            <p class="text-sm text-gray-600">Via M4 westbound</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">Heathrow Airport</h3>
            <p class="text-gold font-bold text-xl mb-2">~15 min</p>
            <p class="text-sm text-gray-600">Perfect layover day trip</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">Stonehenge</h3>
            <p class="text-gold font-bold text-xl mb-2">~1h 20</p>
            <p class="text-sm text-gray-600">Royal &amp; ancient combo</p>
          </div>
          <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300">
            <h3 class="font-semibold text-lg text-black mb-2">Bath</h3>
            <p class="text-gold font-bold text-xl mb-2">~1h 45</p>
            <p class="text-sm text-gray-600">Roman Baths add-on</p>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section class="mb-16">
        <h2 class="text-3xl font-heading font-bold text-center text-black mb-4">
          Windsor Castle Tour: Frequently Asked Questions
        </h2>
        <p class="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          The most common questions we hear about visiting Windsor Castle from London.
        </p>
        <div class="max-w-4xl mx-auto space-y-4">
          <details
            v-for="(faq, idx) in faqs"
            :key="idx"
            class="group bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden"
          >
            <summary
              class="flex items-center justify-between cursor-pointer p-6 font-semibold text-lg text-black list-none"
            >
              <span>{{ faq.question }}</span>
              <i class="bx bx-chevron-down text-2xl text-gold transition-transform group-open:rotate-180"></i>
            </summary>
            <div class="px-6 pb-6 text-gray-700 leading-relaxed" v-html="faq.answer" />
          </details>
        </div>
      </section>

      <!-- Why Silk Ride -->
      <section class="mb-16">
        <div class="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 border border-gray-100">
          <h2 class="text-3xl font-heading font-bold text-center text-black mb-12">
            Why Choose Silk Ride for Your Windsor Castle Tour
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="bx bxs-car text-black text-3xl"></i>
              </div>
              <h3 class="font-semibold text-lg text-black mb-2">Luxury Mercedes Fleet</h3>
              <p class="text-sm text-gray-600">S-Class for couples, V-Class for groups up to 7 passengers.</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="bx bx-shield-quarter text-black text-3xl"></i>
              </div>
              <h3 class="font-semibold text-lg text-black mb-2">Licensed &amp; Insured</h3>
              <p class="text-sm text-gray-600">TfL-licensed Private Hire Operator with full passenger insurance.</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="bx bx-time text-black text-3xl"></i>
              </div>
              <h3 class="font-semibold text-lg text-black mb-2">Flexible Itinerary</h3>
              <p class="text-sm text-gray-600">Stay as long as you like at each stop — no rushed coach schedules.</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <i class="bx bx-star text-black text-3xl"></i>
              </div>
              <h3 class="font-semibold text-lg text-black mb-2">5-Star Service</h3>
              <p class="text-sm text-gray-600">Professional English-speaking chauffeurs with deep route knowledge.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Related Tours -->
      <section class="mb-16">
        <h2 class="text-3xl font-heading font-bold text-center text-black mb-4">
          Combine Windsor With Another Destination
        </h2>
        <p class="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          With a private chauffeur, multi-stop day trips are effortless. The most popular pairings:
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <NuxtLink
            v-for="dest in relatedDestinations"
            :key="dest.path"
            :to="localePath(dest.path)"
            class="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
          >
            <div class="p-6">
              <div class="flex items-center gap-3 mb-3">
                <i :class="dest.icon" class="bx text-gold text-2xl"></i>
                <h3 class="font-semibold text-lg text-black group-hover:text-gold transition-colors">{{ dest.name }}</h3>
              </div>
              <p class="text-sm text-gray-600">{{ dest.tagline }}</p>
              <span class="inline-flex items-center mt-4 text-gold text-sm font-medium">
                Explore tour <i class="bx bx-right-arrow-alt ml-1"></i>
              </span>
            </div>
          </NuxtLink>
        </div>
      </section>

      <!-- Contact CTA -->
      <section class="bg-gradient-to-r from-black to-gray-800 text-white rounded-2xl p-12 text-center">
        <h2 class="text-3xl font-heading font-bold mb-4">
          Plan Your Private Windsor Castle Tour
        </h2>
        <p class="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Tell us your dates, group size and any add-on stops — we'll send back a tailored quote within an hour.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            :to="localePath('/booking')"
            class="inline-flex items-center justify-center px-8 py-4 bg-gold text-black font-bold text-lg rounded-lg hover:bg-gold/90 transition-all duration-300"
          >
            <i class="bx bx-calendar mr-2"></i>
            Book Windsor Castle Tour
          </NuxtLink>
          <a
            href="tel:+442034882324"
            class="inline-flex items-center justify-center px-8 py-4 border-2 border-gold text-gold font-semibold text-lg rounded-lg hover:bg-gold hover:text-black transition-all duration-300"
          >
            <i class="bx bx-phone mr-2"></i>
            Call for Custom Quote
          </a>
        </div>
      </section>
    </div>

    <Footer />
  </div>
</template>

<script setup>
const localePath = useLocalePath()

const breadcrumbs = [
  { name: 'Home', path: '/' },
  { name: 'Destinations', path: '/destination-tours' },
  { name: 'Windsor Castle', path: '/destination-tours/windsor' },
]

const faqs = [
  {
    question: 'How long does it take to drive from London to Windsor Castle?',
    answer: 'The drive is around 22 miles and takes 50–60 minutes via the M4 from central London. From Heathrow it is only 15 minutes — making Windsor an ideal layover day trip.',
  },
  {
    question: 'Are Windsor Castle tickets included in the tour?',
    answer: 'Yes. Every Silk Ride Windsor Castle tour includes pre-booked timed-entry tickets so you skip the ticket queue. As of 2026, the published gate prices are £31 adult, £20 youth (18–24) and £15.50 child (5–17). Children under 5 enter free.',
  },
  {
    question: 'What days is Windsor Castle open?',
    answer: 'Windsor Castle is open Thursday through Monday year-round. It is closed every Wednesday, and additionally closed Tuesdays from November through February. Summer hours are 10:00–17:15 (last entry 16:00); winter hours are 10:00–16:15 (last entry 15:00). The castle occasionally closes at short notice for State events.',
  },
  {
    question: 'How long should I plan to spend at Windsor Castle?',
    answer: 'Royal Collection Trust recommends 2.5 to 3 hours to see the State Apartments, St George\'s Chapel and Queen Mary\'s Dolls\' House without rushing. If you want to attend Evensong at 17:15 in the chapel, add another hour.',
  },
  {
    question: 'Can I see St George\'s Chapel and the Royal Tombs?',
    answer: 'Yes — St George\'s Chapel is included in the standard admission and is one of the highlights. It is the burial place of ten British monarchs including Henry VIII, Charles I, and most recently Queen Elizabeth II and Prince Philip. The chapel is closed to tourists on Sundays for services, but Evensong is open to all at 17:15 most evenings.',
  },
  {
    question: 'Is the Changing of the Guard at Windsor Castle?',
    answer: 'Yes. The Changing of the Guard takes place at 11:00 on most Tuesday, Thursday and Saturday mornings (subject to weather and operational requirements). It is included in your castle admission — no extra ticket needed.',
  },
  {
    question: 'Can I combine Windsor Castle with Stonehenge or Bath?',
    answer: 'Yes — these are our most-requested combination tours. <strong>Windsor + Stonehenge</strong> is a long but rewarding full day (around 10 hours). <strong>Windsor + Bath</strong> is the classic royal-and-Roman combo (around 11 hours). Tell us which you prefer and we will build the itinerary.',
  },
  {
    question: 'How much does a private Windsor Castle tour from London cost?',
    answer: 'Pricing depends on group size, the vehicle chosen, total tour length, and any additional stops. Send us your dates and itinerary and we will send back a tailored quote — usually within the hour.',
  },
]

const relatedDestinations = [
  { name: 'Stonehenge', path: '/destination-tours/stonehenge', tagline: 'Pair Britain\'s most famous royal castle with its most famous prehistoric monument.', icon: 'bx-circle' },
  { name: 'Bath', path: '/destination-tours/bath', tagline: 'Roman Baths, Georgian crescents — 1h 45 from Windsor.', icon: 'bx-building-house' },
  { name: 'Oxford', path: '/destination-tours/oxford', tagline: 'Dreaming spires and 38 historic colleges.', icon: 'bx-book-reader' },
  { name: 'Cambridge', path: '/destination-tours/cambridge', tagline: 'Punting on the Cam and centuries-old colleges.', icon: 'bx-water' },
  { name: 'Cotswolds', path: '/destination-tours/cotswolds', tagline: 'Honey-stone villages and rolling English countryside.', icon: 'bx-landscape' },
]

useSeo('windsorChauffeur')

useSchemaOrg([
  defineLocalBusiness({
    name: 'Silk Ride Windsor Castle Chauffeur Service',
    description: 'Private chauffeur-driven tours to Windsor Castle from London. Luxury Mercedes, skip-the-line entry, expert drivers and door-to-door service.',
    image: [
      'https://silkride.co.uk/logo.svg',
      'https://silkride.co.uk/vclassSide.webp',
      'https://silkride.co.uk/sclassSide.webp',
      'https://silkride.co.uk/eclassSide.webp',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'London',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.4839,
      longitude: -0.6044,
    },
    telephone: '+44 203 488 2324',
    url: 'https://silkride.co.uk/destination-tours/windsor',
    areaServed: [
      { '@type': 'Place', name: 'Windsor Castle' },
      { '@type': 'City', name: 'Windsor' },
      { '@type': 'City', name: 'London' },
      { '@type': 'Place', name: 'Eton' },
      { '@type': 'Place', name: 'Runnymede' },
    ],
    serviceType: 'Chauffeur Service and Private Tours',
    priceRange: '£££',
  }),
  {
    '@type': 'TouristAttraction',
    name: 'Windsor Castle',
    description: 'The oldest and largest occupied castle in the world, official residence of the British monarch for over 900 years. Located in Windsor, Berkshire.',
    image: 'https://silkride.co.uk/og-image.jpg',
    url: 'https://silkride.co.uk/destination-tours/windsor',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Windsor Castle',
      addressLocality: 'Windsor',
      addressRegion: 'Berkshire',
      postalCode: 'SL4 1NJ',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.4839,
      longitude: -0.6044,
    },
    isAccessibleForFree: false,
    publicAccess: true,
  },
  {
    '@type': 'FAQPage',
    mainEntity: faqs.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer.replace(/<[^>]+>/g, ''),
      },
    })),
  },
])
</script>
