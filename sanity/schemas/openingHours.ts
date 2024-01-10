import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'openingHours',
  title: 'Opening Hours',
  type: 'document',
  fields: [
    defineField({
      name: 'weekDay',
      title: 'Week day',
      type: 'string',
    }),
    defineField({
      name: 'openingTime',
      title: 'Opening Time',
      type: 'datetime',
      options:{
        timeStep: 30
      }
    }),
    defineField({
      name: 'closingTime',
      title: 'Closing Time',
      type: 'datetime',
      options:{
        timeStep: 30
      }
    }),
  ],
})
