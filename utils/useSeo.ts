import { useI18n } from 'vue-i18n'

export function useSeo(pageKey: string) {
  const { t } = useI18n()
  useHead({
    title: t(`seo.${pageKey}.title`),
    meta: [
      { name: 'description', content: t(`seo.${pageKey}.description`) }
    ]
  })
}