export default defineNuxtPlugin(() => {
  // Defer chat4biz widget until first user interaction or after a short idle
  // window. The widget isn't needed for LCP and delaying it recovers TBT.
  let loaded = false

  const loadWidget = () => {
    if (loaded) return
    loaded = true
    const script = document.createElement('script')
    script.src = 'https://cdn.chat4biz.com/widget.js'
    script.setAttribute('data-token', '05ffbde5613f47e183855d9f65f9fdb5')
    script.async = true
    document.body.appendChild(script)
  }

  const events = ['mousedown', 'touchstart', 'scroll', 'keydown'] as const
  events.forEach(event => {
    window.addEventListener(event, loadWidget, { once: true, passive: true })
  })

  // Fallback: load after 4s if the user hasn't interacted yet
  setTimeout(loadWidget, 4000)
})
