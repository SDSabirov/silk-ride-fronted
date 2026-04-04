export default defineNuxtRouteMiddleware((to) => {
  // Redirect /en/* to /* (English is default, no prefix)
  if (to.path.startsWith('/en')) {
    return navigateTo(to.path.replace('/en', '') || '/', { redirectCode: 301 })
  }

  // Remove trailing slashes (except root /)
  if (to.path !== '/' && to.path.endsWith('/')) {
    return navigateTo(to.path.slice(0, -1), { redirectCode: 301 })
  }
})
