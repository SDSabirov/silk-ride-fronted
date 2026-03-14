export default defineNuxtPlugin(() => {
  const script = document.createElement('script')
  script.src = 'https://cdn.chat4biz.com/widget.js'
  script.setAttribute('data-token', '05ffbde5613f47e183855d9f65f9fdb5')
  script.async = true
  document.body.appendChild(script)
})
