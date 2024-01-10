import { defineType, defineField } from "sanity";

export default defineType({
    name: 'menu',
    title: 'Menu',
    type: 'document',
    fields: [
      defineField({
        name: 'name',
        title: 'Name',
        type: 'string',
      }),
      defineField({
        name: 'submenu',
        title: 'SubMenu',
        type: 'array',
        of: [{type: 'reference', to: {type: 'menuItem'}}],
      }),
     
    ],
  })
  