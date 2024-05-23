import {defineField, defineType, StringRule} from 'sanity'
export const blogs=defineType({
  name: 'blogs',
  title: 'Blogs',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),

    defineField({
        name: 'category',
        type: 'string',
        title: 'Category',
        validation:(Rule:StringRule)=>Rule.required()
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
      name: 'short_info',
      title: 'Short Info',
      type: 'text',
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