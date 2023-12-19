import { PortableText } from "@portabletext/react";
import { client } from '../../../../sanity/lib/client';
import { urlForImage } from '../../../../sanity/lib/image';

const ServicesContent = ({ content, mainImage }) => {
    return (
        <section className="container px-4 mx-auto container px-4 mx-auto bg-green-50 rounded-md mb-6">
           
                <div className="font-[light] pb-12 ">
                    <div className="m-auto pt-8">
                    {mainImage && (
                        <img
                            src={urlForImage(mainImage).width(800).height(400).url()}
                            alt="Service Image"
                            className="mb-4 m-auto "
                        />
                    )}</div>
                    <div className="pt-4">
                    {content ? <PortableText value={content} /> : <p>No content available.</p>}</div>
                </div>
          
        </section>
    );
};

export async function getServerSideProps({ params }: { params: any }) {
    const id = params.id;
    const res = await client.fetch(`*[_type == "services" && slug.current == "${id}"]{
    content,
    mainImage
  }`);
    console.log('services:', res);

    return {
        props: {
            content: res[0]?.content || null,
            mainImage: res[0]?.mainImage || null,
        },
    };
}

export default ServicesContent;
