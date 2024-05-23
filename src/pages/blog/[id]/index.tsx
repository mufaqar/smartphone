import { PortableText } from "@portabletext/react";
import { client } from '../../../../sanity/lib/client'
import PageBanner from "@/components/page-banner";
import SeoMeta from "@/components/seo";
import { urlForImage } from '../../../../sanity/lib/image';
const BlogsContent = ({ blog, slug }: any) => {
  const {content, mainImage , title} = blog

  return (
    <>
      <SeoMeta
        title={title} description={`${title} | Latest News About computers, mobile phones, and related accessories.`} url={`https://budgetrepaircenter.nz/blog/${slug}`} />

      <PageBanner
        Custm_BG="bg-[url('/images/about.jpg')]"
        title={title} />
      <section className="bg-[#eee]">
        <div className="py-16 px-4">
          <div className="container px-8 mx-auto bg-white rounded-md mb-6  ">
            <div className="px-12 items-center py-8 ">


              {mainImage && (
                <img
                  src={urlForImage(mainImage).width(800).height(400).url()}
                  alt="Blog Image"
                  className="  m-auto "
                />
              )}

            </div>


            <div className=" px-2 py-2  pb-12 ">

              {content ? <PortableText value={content} /> : <p>No content available.</p>}


            </div>
          </div>
        </div> </section>
    </>
  );
};

export async function getServerSideProps({ params }:any) {
  const id = params.id;
  const res = await client.fetch(`*[_type == "blogs" && slug.current == "${id}"][0]{content, mainImage , title }`);
  
  if (!res) {
    return {
        notFound: true,
    };
}

  return{
    props:{
      blog:res,
      slug: id
    }
  }
}

export default BlogsContent;