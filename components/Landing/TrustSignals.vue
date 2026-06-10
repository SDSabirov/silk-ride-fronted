<template>
  <section
    id="why-choose-us"
    class="dark-luxe-bottom relative overflow-hidden border-t border-gold/10 py-24 md:py-32"
  >
    <div class="grain" aria-hidden="true"></div>

    <div class="max-w-screen-2xl mx-auto px-6">
      <!-- Header with ghost watermark -->
      <div class="relative mb-16" v-reveal>
        <span
          class="ghost-text absolute -top-8 md:-top-14 left-0 text-[clamp(5rem,13vw,11rem)] leading-none select-none"
          aria-hidden="true"
        >01</span>

        <div class="relative z-10">
          <p class="text-xs font-semibold tracking-[0.25em] uppercase text-gold mb-5">
            {{ $t('why.tagline') }}
          </p>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <h2 class="lg:col-span-7 font-serif font-medium tracking-tight text-4xl md:text-5xl text-white [text-wrap:balance]">
              {{ $t('why.title') }}
            </h2>
            <p class="lg:col-span-4 lg:col-start-9 self-end text-gray-400 leading-relaxed">
              {{ $t('why.subtitle') }}
            </p>
          </div>
        </div>
      </div>

      <!-- Bento grid -->
      <div class="grid grid-cols-2 lg:grid-cols-12 gap-4 md:gap-5">
        <!-- Stat: Journeys -->
        <div
          v-reveal="0"
          class="col-span-2 lg:col-span-5 rounded-2xl bg-white/[0.04] border border-white/10 card-catchlight p-8 md:p-10 flex flex-col justify-between"
        >
          <div>
            <span
              :ref="(e) => { journeys.el.value = e }"
              class="font-serif text-6xl md:text-7xl text-gold tabular-nums"
            >{{ journeys.output.value }}</span><span class="font-serif text-3xl text-white/40">+</span>
          </div>
          <p class="text-xs uppercase tracking-[0.2em] text-gray-500 mt-6">
            {{ $t('why.stats.journeys') }}
          </p>
        </div>

        <!-- Stat: Rating -->
        <div
          v-reveal="1"
          class="col-span-1 lg:col-span-4 rounded-2xl bg-white/[0.04] border border-white/10 card-catchlight p-8 md:p-10 flex flex-col justify-between"
        >
          <div>
            <span class="font-serif text-5xl md:text-6xl text-gold tabular-nums">5.0</span>
            <div class="flex items-center gap-1 mt-3" aria-hidden="true">
              <i v-for="n in 5" :key="n" class="bx bxs-star text-gold text-sm"></i>
            </div>
          </div>
          <p class="text-xs uppercase tracking-[0.2em] text-gray-500 mt-6">
            {{ $t('why.stats.rating') }}
          </p>
        </div>

        <!-- Stat: Free wait -->
        <div
          v-reveal="2"
          class="col-span-1 lg:col-span-3 rounded-2xl bg-white/[0.04] border border-white/10 card-catchlight p-8 md:p-10 flex flex-col justify-between"
        >
          <div>
            <span
              :ref="(e) => { wait.el.value = e }"
              class="font-serif text-5xl md:text-6xl text-gold tabular-nums"
            >{{ wait.output.value }}</span><span class="font-serif text-2xl text-white/40">min</span>
          </div>
          <p class="text-xs uppercase tracking-[0.2em] text-gray-500 mt-6">
            {{ $t('why.stats.freeWait') }}
          </p>
        </div>

        <!-- Feature cells -->
        <div
          v-for="(feature, i) in features"
          :key="feature.key"
          v-reveal="i + 3"
          class="relative overflow-hidden col-span-1 lg:col-span-4 rounded-2xl bg-white/[0.03] border border-white/10 p-6 md:p-7 group hover:border-gold/30 transition-colors duration-300"
        >
          <!-- Decorative radar rings (flight tracking only) -->
          <div
            v-if="feature.key === 'flightTracking'"
            class="absolute -top-16 -right-16 w-48 h-48 pointer-events-none"
            aria-hidden="true"
          >
            <span class="absolute inset-0 rounded-full border border-gold/10"></span>
            <span class="absolute inset-7 rounded-full border border-gold/10"></span>
            <span class="absolute inset-14 rounded-full border border-gold/10"></span>
          </div>

          <div class="relative flex items-start justify-between gap-4">
            <div class="w-11 h-11 rounded-xl bg-gold/10 text-gold flex items-center justify-center text-xl group-hover:bg-gold/20 transition-colors">
              <i :class="`bx ${feature.icon}`"></i>
            </div>

            <!-- 24/7 numeral folded into the availability cell -->
            <div v-if="feature.key === 'availability'" class="text-right">
              <span class="font-serif text-4xl text-gold leading-none">24/7</span>
              <p class="text-[10px] uppercase tracking-[0.2em] text-gray-500 mt-1">
                {{ $t('why.stats.support') }}
              </p>
            </div>
          </div>

          <h3 class="relative text-base font-semibold text-white mt-4">
            {{ $t(`why.features.${feature.key}.title`) }}
          </h3>
          <p class="relative text-sm text-gray-400 leading-relaxed mt-1.5">
            {{ $t(`why.features.${feature.key}.text`) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const journeys = useCountUp(5000)
const wait = useCountUp(60)

const features = [
  { key: 'chauffeurs', icon: 'bx-user-check' },
  { key: 'fleet', icon: 'bx-car' },
  { key: 'flightTracking', icon: 'bx-radar' },
  { key: 'pricing', icon: 'bx-pound' },
  { key: 'availability', icon: 'bx-time-five' },
  { key: 'coverage', icon: 'bx-globe' },
]
</script>
