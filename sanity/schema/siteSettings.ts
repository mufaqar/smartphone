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
          title: 'Socialicons2',
          name: 'socialicons2',
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
          title: 'Footericons',
          name: 'footericons',
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