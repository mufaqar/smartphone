import { NumberRule,defineArrayMember,StringRule, defineField, defineType } from "sanity";

export const services=defineType({
    name: 'tutorials',
    type: 'document',
    title: 'Tutorials',
  fields: [
  defineField(
    {
     name: 'image',
      type: 'image',
      title: 'Image',
      options:{
        hotspot:true
      }
    }
  ),
  defineField({
    name:"slug",
    title:"Slug",
    type:"slug",
    options:{
        source:'title'
    }
}),
  defineField({
    name: 'title',
    type: 'string',
    title: 'Title',
    validation:(Rule:StringRule)=>[
        Rule.min(5).required().error('Title Should be greater than 5 words'),
        Rule.max(400).warning('title can not be greater than 40words')
    ]
  }),
  defineField({
            
    title: 'Content', 
    name: 'content',
    type: 'array', 
    of: [defineArrayMember({type: 'block'}),defineArrayMember({type:'image'})]
  
}),
defineField({
  name: 'url',
  type: 'url',
  title: ' Url',
  validation: (Rule) =>
    Rule.uri({
      scheme: ['http', 'https', 'mailto', 'tel'],
    }),
}),
  ]
})