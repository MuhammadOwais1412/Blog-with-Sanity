import { type SchemaTypeDefinition } from 'sanity'
import { Post } from '../post'
import { author } from '../author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Post, author],
}
