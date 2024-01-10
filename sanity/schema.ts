import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import author from './schemas/author'
import location from './schemas/location'
import openingHours from './schemas/openingHours'
import restaurant from './schemas/restaurant'
import menuItem from './schemas/menuItem'
import menu from './schemas/menu'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, restaurant, menuItem, location, menu, openingHours, category, blockContent],
}
