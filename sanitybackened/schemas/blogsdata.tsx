import { NumberRule, defineArrayMember, StringRule, defineField, defineType } from "sanity";

export const blogsdata=defineType({
    name: 'blogsdata',
    type: 'document',
    title: 'Blogsdata',
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
    name: 'category',
    type: 'string',
    title: 'Category',
    validation:(Rule:StringRule)=>Rule.required()
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
    name:"slug",
    title:"Slug",
    type:"slug",
    options:{
        source:'title'
    }
}),
defineField({
            
    title: 'Content', 
    name: 'content',
    type: 'array', 
    of: [defineArrayMember({type: 'block'}),defineArrayMember({type:'image'})]
  
}),
 
 
  ]
})