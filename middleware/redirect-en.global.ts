export default defineNuxtRouteMiddleware((to) => {
  if (to.path.startsWith('/en')) {
    return navigateTo(to.path.replace('/en', '') || '/')
  }
})