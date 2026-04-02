import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'silk-ride-blog',
  title: 'Silk Ride Blog',

  // Replace with your actual Sanity project ID and dataset
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '1j8cnt9p',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Blog Content')
          .items([
            S.listItem()
              .title('English Posts')
              .child(
                S.documentList()
                  .title('English Posts')
                  .filter('_type == "post" && language == "en"')
              ),
            S.listItem()
              .title('Russian Posts')
              .child(
                S.documentList()
                  .title('Russian Posts')
                  .filter('_type == "post" && language == "ru"')
              ),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (listItem) => !['post'].includes(listItem.getId()!)
            ),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
