// v-reveal — scroll-into-view reveal directive.
//
// One shared IntersectionObserver for the whole page. The `.reveal` (hidden)
// class is added client-side only, so prerendered HTML and no-JS visitors
// always see content. Stagger siblings by passing an index: v-reveal="2"
// (sets --i, consumed by the .reveal transition-delay in design-system.css).
export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | null = null

  const getObserver = () => {
    if (!observer) {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view')
              observer!.unobserve(entry.target)
            }
          }
        },
        { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
      )
    }
    return observer
  }

  nuxtApp.vueApp.directive('reveal', {
    // SSR: no attrs to render — content ships visible in the static HTML
    getSSRProps() {
      return {}
    },
    mounted(el: HTMLElement, binding) {
      if (typeof binding.value === 'number') {
        el.style.setProperty('--i', String(binding.value))
      }
      el.classList.add('reveal')
      getObserver().observe(el)
    },
    unmounted(el: HTMLElement) {
      observer?.unobserve(el)
    },
  })
})
