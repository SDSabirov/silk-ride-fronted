import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_STUDIO_PROJECT_ID || '1j8cnt9p',
    dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  },
})
