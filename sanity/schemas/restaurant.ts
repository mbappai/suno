import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
        name: 'contact',
        title: 'Contact',
        type: 'string'
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'reference',
      to: {type: 'location'}
     
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: 'openingHours',
      title: 'Opening Hours',
      type: 'array',
      of: [{type: 'reference', to: {type: 'openingHours'}}],
    }),
    defineField({
      name: 'menu',
      title: 'Menu',
      type: 'array',
      of: [{type: 'reference', to: {type: 'menu'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
   
  ],

  preview: {
    select: {
      title: 'title',
      location: 'location.address',
    },
    prepare(selection) {
      const {location} = selection
      return {...selection, location: location && `at ${location}`}
    },
  },
})
