<template>
  <!-- Pillar → cluster links. Sits on a service (pillar) page and lists the
       in-depth guide pages that belong to it, so link equity and visitors flow
       from the broad service page down to each specific occasion/route. -->
  <section v-if="links.length" class="bg-[#0A0908] py-16 text-white sm:py-20">
    <div class="mx-auto max-w-screen-2xl px-6">
      <div class="mx-auto max-w-3xl text-center">
        <p class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
          <span class="h-px w-7 bg-gold"></span>
          {{ $t('clusters.hub.kicker') }}
        </p>
        <h2 class="mt-4 font-heading text-3xl font-medium md:text-4xl">{{ $t(`clusters.hub.${key}.title`) }}</h2>
        <p class="mt-4 leading-relaxed text-white/70">{{ $t(`clusters.hub.${key}.intro`) }}</p>
      </div>

      <div class="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="item in links"
          :key="item.path"
          :to="localePath(item.path)"
          class="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-white/[0.07]"
        >
          <div class="mb-3 flex items-center gap-3">
            <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-black">
              <i :class="['bx', item.icon]" class="text-2xl" aria-hidden="true"></i>
            </span>
            <h3 class="font-heading text-lg font-bold text-white transition-colors group-hover:text-gold">{{ item.title }}</h3>
          </div>
          <p class="flex-1 text-sm leading-relaxed text-white/65">{{ item.tagline }}</p>
          <span class="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold" aria-hidden="true">
            {{ $t('clusters.hub.learnMore') }}
            <i class="bx bx-right-arrow-alt text-lg transition-transform duration-300 group-hover:translate-x-1"></i>
          </span>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLocalePath, useI18n } from '#imports'
import { getClusterLinks } from '~/utils/clusters/registry'

const props = defineProps({
  /** ClusterSection id, e.g. "event-chauffeur" */
  section: { type: String, required: true },
})

const localePath = useLocalePath()
const { locale } = useI18n()

// i18n keys are camelCase: "event-chauffeur" → "eventChauffeur"
const key = props.section.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
const links = getClusterLinks(props.section, locale.value)
</script>
