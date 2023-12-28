export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
      {
          title: 'Header Nav',
          name: 'headerNav',
          type: 'array',
          of: [
              {
                type: "object",
                name: "inline",
                fields: [
                  { type: "string", name: "Name" },
                  { type: "string", name: "link" }
                ]
              }
            ],
        },
        {
          title: "Logo",
          name: "logo",
          type: "image"
        },
        {
          title: 'About',
          name: 'about',
          type: 'text'
        },
        {
          title: 'Socialicons',
          name: 'socialicons',
          type: 'array',
          of: [
              {
                type: "object",
                name: "inline",
                fields: [
                  { type: "image", name: "image" },
                  { type: "string", name: "link" }
                ]
              }
            ],
        },
        {
          title: 'Schedule',
          name: 'schedule',
          type: 'array',
          of: [
              {
                type: "object",
                name: "inline",
                fields: [
                  { type: "image", name: "image" },
                  { type: "string", name: "text" }
                ]
              }
            ],
        },
        {
          title: 'Quicklinks',
          name: 'quicklinks',
          type: 'array',
          of: [
              {
                type: "object",
                name: "inline",
                fields: [
                  { type: "string", name: "title" },
                  { type: "string", name: "link" }
                ]
              }
            ],
        },

        {
          title: 'Contact',
          name: 'contact',
          type: 'array',
          of: [
              {
                type: "object",
                name: "inline",
                fields: [
                  { type: "image", name: "image" },
                  { type: "string", name: "link" }
                ]
              }
            ],
        },
  ]
}