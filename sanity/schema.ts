import { type SchemaTypeDefinition } from 'sanity'
import {services} from './schema/services'
import { blogs } from './schema/blogs'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [services , blogs],
}
