import { type SchemaTypeDefinition } from 'sanity'
import {services} from './schema/services'
import { blogs } from './schema/blogs'
import siteSettings from './schema/siteSettings'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [services , blogs, siteSettings],
}
