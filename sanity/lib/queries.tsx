export const blogs = `*[ _type == "blogs"]{
    title,
          slug,
          category,
          mainImage{
            asset->{
              url
            }
          },
          content,
          short_info,
          _createdAt
        }`;

        export const services = `*[ _type == "services"]{
            title,
                  slug,
                  mainImage{
                    asset->{
                      url
                    }
                  },
                  icon{
                    asset->{
                      url
                    }
                  },
                  short_info,
                  content
                }`;   