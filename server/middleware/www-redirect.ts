import { defineEventHandler, getRequestHost, getRequestURL, sendRedirect } from 'h3'

export default defineEventHandler((event) => {
  const host = getRequestHost(event)
  if (host?.startsWith('www.')) {
    const url = getRequestURL(event)
    return sendRedirect(event, `https://silkride.co.uk${url.pathname}${url.search}`, 301)
  }
})
