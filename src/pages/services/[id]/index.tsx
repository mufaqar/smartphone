import { PortableText } from "@portabletext/react";
import { client } from '../../../../sanity/lib/client';
import { urlForImage } from '../../../../sanity/lib/image';
import PageBanner from "@/components/page-banner";
import SeoMeta from "@/components/seo";
import { RiMapPinLine } from "react-icons/ri";
import { PiCardholder } from "react-icons/pi";
import { FaPhone } from "react-icons/fa6";
import { FcGlobe } from "react-icons/fc";
const ServicesContent = ({ content, mainImage ,icon,title }: any) => {

    
    return (
        <>
            <SeoMeta
                title={title} description="" url="https://budgetrepaircenter.nz/Services" />

            <PageBanner
                Custm_BG="bg-[url('/images/repairing.avif')]"
                title={title} />
               <section className="bg-[#eee]">
      <div className="py-16 px-4">
    <div className="container px-8 mx-auto bg-white rounded-md mb-6  ">
      <div className="lg:flex pt-12 justify-center  space-x-36 items-center">
        <div>

          {mainImage && (
            <img
              src={urlForImage(mainImage).width(800).height(400).url()}
              alt="Blog Image"
              className="mb-4 lg:w-96 lg:h-72 m-auto "
            />
          )}

        </div>

        <div className=' '>
          <h2 className='font-bold Raleway text-2xl pb-8 text-[#444444]' >CONTACT INFO</h2>
          <ul>
            <li className='list-none text-2xl text-blue-600 flex  items-center  pb-4 '> <RiMapPinLine /><span className='font-normal pl-2 lg:whitespace-nowrap  text-base text-[#444444]  leading-normal'>1191 Eruera Street, Rotorua 3010, NZ</span></li>
            <li className='list-none flex lg:text-xl   text-blue-600 items-center pb-4'>  <FaPhone /><span className='font-normal pl-2  text-base text-[#444444]  leading-normal'> 0064-7-3477044</span></li>
            <li className='list-none flex lg:text-xl  text-blue-600 items-center  pb-4'> <PiCardholder /><span className='font-normal pl-2  text-base text-[#444444]  leading-normal'>info@budgetrepaircenter.nz.co.nz</span></li>
            <li className='list-none flex lg:text-xl  text-blue-600 items-center '> <FcGlobe /><span className='font-normal pl-2  text-base text-[#444444]  leading-normal'> www.budgetrepaircenter.nz.co.nz</span></li>
          </ul>
        </div>
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
    const res = await client.fetch(`*[_type == "services" && slug.current == "${id}"]{
    content,
    mainImage,
    icon,
    title
  }`);


    return {
        props: {
            content: res[0]?.content || null,
            mainImage: res[0]?.mainImage || null,
            icon: res[0]?.icon || null,
            title: res[0]?.title || null,

        },
    };
}

export default ServicesContent;
