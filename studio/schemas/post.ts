import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fieldsets: [
    { name: 'content', title: 'Content', options: { collapsible: true, collapsed: false } },
    { name: 'classification', title: 'Classification', options: { collapsible: true, collapsed: false } },
    { name: 'cta', title: 'Call to Action', options: { collapsible: true, collapsed: true } },
    { name: 'eventDetails', title: 'Event Details', options: { collapsible: true, collapsed: true } },
    { name: 'seoFields', title: 'SEO', options: { collapsible: true, collapsed: true } },
  ],
  fields: [
    // === Content ===
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      fieldset: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      fieldset: 'content',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      fieldset: 'content',
      rows: 3,
      description: 'Short summary for cards and meta description (max 200 characters)',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      fieldset: 'content',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Describe the image for accessibility and SEO',
        }),
      ],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      fieldset: 'content',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: (Rule: any) =>
                      Rule.uri({ allowRelative: true, scheme: ['http', 'https', 'mailto', 'tel'] }),
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
            },
          ],
        },
      ],
    }),

    // === Classification ===
    defineField({
      name: 'postType',
      title: 'Post Type',
      type: 'string',
      fieldset: 'classification',
      options: {
        list: [
          { title: 'Article', value: 'article' },
          { title: 'Event', value: 'event' },
        ],
        layout: 'radio',
      },
      initialValue: 'article',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      fieldset: 'classification',
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'Russian', value: 'ru' },
        ],
        layout: 'radio',
      },
      initialValue: 'en',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      fieldset: 'classification',
      to: [{ type: 'category' }],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      fieldset: 'classification',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'relatedService',
      title: 'Related Service',
      type: 'string',
      fieldset: 'classification',
      description: 'Link to a Silk Ride service page at the bottom of the post',
      options: {
        list: [
          { title: 'Airport Transfers', value: 'airport-transfers' },
          { title: 'Corporate Travel', value: 'corporate-travel' },
          { title: 'Wedding Chauffeur', value: 'wedding-chauffeur' },
          { title: 'Hourly Chauffeur', value: 'hourly-chauffeur' },
          { title: 'UK & Europe Travel', value: 'uk-europe-travel' },
          { title: 'Event Transport', value: 'event-chauffeur' },
        ],
      },
    }),
    defineField({
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      fieldset: 'classification',
      description: 'Pin this post to the top of the blog listing',
      initialValue: false,
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      fieldset: 'classification',
      to: [{ type: 'author' }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      fieldset: 'classification',
    }),

    // === CTA ===
    defineField({
      name: 'cta',
      title: 'Call to Action',
      type: 'object',
      fieldset: 'cta',
      description: 'Optional button displayed after the article body',
      fields: [
        defineField({
          name: 'label',
          title: 'Button Label',
          type: 'string',
          description: 'e.g. "Book Now", "Get a Quote", "View Fleet"',
        }),
        defineField({
          name: 'url',
          title: 'Button URL',
          type: 'url',
          validation: (Rule) =>
            Rule.uri({ allowRelative: true, scheme: ['http', 'https', 'mailto', 'tel'] }),
        }),
        defineField({
          name: 'style',
          title: 'Button Style',
          type: 'string',
          options: {
            list: [
              { title: 'Primary (Gold Filled)', value: 'primary' },
              { title: 'Secondary (Gold Outline)', value: 'secondary' },
            ],
            layout: 'radio',
          },
          initialValue: 'primary',
        }),
      ],
    }),

    // === Event Details ===
    defineField({
      name: 'event',
      title: 'Event Details',
      type: 'object',
      fieldset: 'eventDetails',
      description: 'Only fill in for event-type posts',
      hidden: ({ parent }) => parent?.postType !== 'event',
      fields: [
        defineField({
          name: 'eventDate',
          title: 'Event Start Date',
          type: 'datetime',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'eventEndDate',
          title: 'Event End Date',
          type: 'datetime',
          description: 'Optional — leave blank for single-day events',
        }),
        defineField({
          name: 'venue',
          title: 'Venue',
          type: 'string',
          description: 'e.g. "The Savoy, London"',
        }),
        defineField({
          name: 'eventUrl',
          title: 'Event URL',
          type: 'url',
          description: 'External link to event page or tickets',
          validation: (Rule) =>
            Rule.uri({ allowRelative: false, scheme: ['http', 'https'] }),
        }),
      ],
    }),

    // === SEO ===
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fieldset: 'seoFields',
      fields: [
        defineField({
          name: 'focusKeyword',
          title: 'Focus Keyword',
          type: 'string',
          description: 'Primary keyword this post targets',
        }),
        defineField({
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          description: 'Overrides post title for search engines',
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 2,
          description: 'Overrides excerpt for search engines',
        }),
        defineField({
          name: 'ogImage',
          title: 'OG Image',
          type: 'image',
          description: 'Custom social sharing image (1200x630 recommended)',
        }),
      ],
    }),
  ],
  orderings: [
    {
      title: 'Published Date (Newest)',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Featured First',
      name: 'featuredFirst',
      by: [
        { field: 'featured', direction: 'desc' },
        { field: 'publishedAt', direction: 'desc' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      language: 'language',
      postType: 'postType',
      featured: 'featured',
    },
    prepare(selection) {
      const { title, author, media, language, postType, featured } = selection
      const flag = language === 'ru' ? '🇷🇺' : '🇬🇧'
      const type = postType === 'event' ? '📅' : '📝'
      const star = featured ? '⭐ ' : ''
      return {
        title: `${flag} ${type} ${star}${title}`,
        subtitle: author ? `by ${author}` : '',
        media,
      }
    },
  },
})
