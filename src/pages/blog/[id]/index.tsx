import { PortableText } from "@portabletext/react";
import { client } from '../../../../sanity/lib/client'
import { RiMapPinLine } from "react-icons/ri";
import { PiCardholder } from "react-icons/pi";
import { FaPhone } from "react-icons/fa6";
import { FcGlobe } from "react-icons/fc";
import { motion } from "framer-motion";
import { urlForImage } from '../../../../sanity/lib/image';
const BlogsContent = ({ content, mainImage }:any) => {
  return (
    <section className="container px-4 mx-auto bg-green-50 rounded-md mb-6">
      <div className="lg:flex pt-12 justify-between px-12 items-center">
        <div>

          {mainImage && (
            <img
              src={urlForImage(mainImage).width(800).height(400).url()}
              alt="Blog Image"
              className="mb-4 w-fll h-72 m-auto "
            />
          )}

        </div>

        <div className=' '>
          <h2 className='font-bold Raleway text-2xl pb-8 text-[#444444]' >CONTACT INFO</h2>
          <ul>
            <li className='list-none text-2xl text-blue-600 flex  items-center  pb-4 '> <RiMapPinLine /><span className='font-normal pl-2 lg:whitespace-nowrap  text-base text-[#444444]  leading-normal'>1191 Eruera Street, Rotorua 3010, NZ</span></li>
            <li className='list-none flex lg:text-xl   text-blue-600 items-center pb-4'>  <FaPhone /><span className='font-normal pl-2  text-base text-[#444444]  leading-normal'> 0064-7-3477044</span></li>
            <li className='list-none flex lg:text-xl  text-blue-600 items-center  pb-4'> <PiCardholder /><span className='font-normal pl-2  text-base text-[#444444]  leading-normal'>info@smartphonesrepair.co.nz</span></li>
            <li className='list-none flex lg:text-xl  text-blue-600 items-center '> <FcGlobe /><span className='font-normal pl-2  text-base text-[#444444]  leading-normal'> www.smartphonesrepair.co.nz</span></li>
          </ul>
        </div>
      </div>
      <div className=" px-2 py-2 font-[light] pb-12">

        {content ? <PortableText value={content} /> : <p>No content available.</p>}


      </div>
    </section>
  );
};

export async function getServerSideProps({ params }: { params: any }) {
  const id = params.id;
  const res = await client.fetch(`*[_type == "blogs" && slug.current == "${id}"]{content, mainImage}`);
  console.log('blogs:', res);

  return {
    props: {
      content: res[0]?.content || null,// Use optional chaining to handle undefined
      mainImage: res[0]?.mainImage || null,
    },
  };
}

export default BlogsContent;