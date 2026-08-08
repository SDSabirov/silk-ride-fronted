export default defineNuxtPlugin(() => {
  // gtag is configured with initMode 'manual' (see nuxt.config). Loading it on
  // first interaction — or after a short idle window — keeps ~350ms of tag
  // manager work off the critical path. Consent Mode defaults are already
  // queued in dataLayer by 00.consent-mode.client.ts, so ordering is preserved.
  let loaded = false

  const init = () => {
    if (loaded) return
    loaded = true
    const { initialize } = useGtag()
    initialize()
  }

  const events = ['mousedown', 'touchstart', 'scroll', 'keydown'] as const
  events.forEach(event => {
    window.addEventListener(event, init, { once: true, passive: true })
  })

  // Fallback: initialize after 3.5s if the user hasn't interacted yet
  setTimeout(init, 3500)
})
