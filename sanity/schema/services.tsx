import {defineField, defineType} from 'sanity'
export const services=defineType({
  name: 'services',
  title: 'Services',
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
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
            
        title: 'Content', 
        name: 'content',
        type: 'array', 
        of: [
            {
              type: 'block'
            }
          ]
      
    }),
  ],
})