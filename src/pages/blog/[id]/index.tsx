import { PortableText } from "@portabletext/react";
import { client } from '../../../../sanity/lib/client'
import PageBanner from "@/components/page-banner";
import SeoMeta from "@/components/seo";
import { urlForImage } from '../../../../sanity/lib/image';
const BlogsContent = ({ content, mainImage, title }: any) => {
  console.log(title)
  return (
    <>
      <SeoMeta
        title={title} description="Latest Blogs" url="http://smartphonerapair.co.nz/blogs" />

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


            <div className=" px-2 py-2  pb-12">

              {content ? <PortableText value={content} /> : <p>No content available.</p>}


            </div>
          </div>
        </div> </section>
    </>
  );
};

export async function getServerSideProps({ params }: { params: any }) {
  const id = params.id;
  const res = await client.fetch(`*[_type == "blogs" && slug.current == "${id}"]{content, mainImage , title}`);
  console.log('blogs:', res);

  return {
    props: {
      content: res[0]?.content || null,// Use optional chaining to handle undefined
      mainImage: res[0]?.mainImage || null,
      title: res[0]?.title || null,
    },
  };
}

export default BlogsContent;