import { ref, onMounted, onBeforeUnmount } from 'vue'

/**
 * Count-up animation for stat numerals, armed by an IntersectionObserver.
 *
 * SSR/prerender outputs the FINAL value (SEO + no-JS safe); on the client the
 * number counts 0 → target with easeOutExpo when scrolled into view. Locale-
 * aware formatting (EN "5,000" / RU "5 000"). Respects prefers-reduced-motion.
 *
 * Usage:
 *   const journeys = useCountUp(5000)
 *   <span :ref="journeys.el">{{ journeys.output.value }}</span>
 * Pair with `font-variant-numeric: tabular-nums` to avoid layout jitter.
 */
export function useCountUp(target: number, opts: { duration?: number } = {}) {
  const duration = opts.duration ?? 1400
  const el = ref<HTMLElement | null>(null)

  let localeTag = 'en-GB'
  try {
    const nuxtApp = useNuxtApp()
    const code = (nuxtApp.$i18n as any)?.locale?.value
    if (code === 'ru') localeTag = 'ru-RU'
  } catch {
    // outside i18n context — keep en-GB
  }
  const fmt = new Intl.NumberFormat(localeTag)
  const output = ref(fmt.format(target))

  let raf = 0
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!el.value) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer?.disconnect()
        observer = null

        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1)
          const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
          output.value = fmt.format(Math.round(target * eased))
          if (t < 1) raf = requestAnimationFrame(tick)
        }
        output.value = fmt.format(0)
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.5 }
    )
    observer.observe(el.value)
  })

  onBeforeUnmount(() => {
    if (raf) cancelAnimationFrame(raf)
    observer?.disconnect()
  })

  return { el, output }
}
