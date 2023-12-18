import { PortableText } from "@portabletext/react";
import client from '@/sanity/client';
import { RiMapPinLine } from "react-icons/ri";
import { PiCardholder } from "react-icons/pi";
import { FaPhone } from "react-icons/fa6";
import { FcGlobe } from "react-icons/fc";
const ServicesContent = ({ content }) => {
  return (
    <section className="container px-4 mx-auto">
      <div className="flex justify-between">
<div className="font-[light]"><PortableText value={content} /></div>
        <div>
        <div className='lg:pr-28 pt-6 '>
<h2 className='font-[roboto] text-md  text-[#444444] pb-4 pt-6' >CONTACT INFO</h2>
<li className = 'list-none lg:text-2xl text-blue-600 flex  items-center  pb-4 '> <RiMapPinLine /><span className='font-[light] pl-2 lg:whitespace-nowrap  lg:text-lg text-[#444444]  leading-normal'>1191 Eruera Street, Rotorua 3010, NZ</span></li>
<li className = 'list-none flex lg:text-xl   text-blue-600 items-center pb-4'>  <FaPhone /><span className='font-[light] pl-2  lg:text-lg text-[#444444]  leading-normal'> 0064-7-3477044</span></li>
<li className = 'list-none flex lg:text-xl  text-blue-600 items-center  pb-4'> <PiCardholder /><span className='font-[light] pl-2  lg:text-lg text-[#444444]  leading-normal'>info@smartphonesrepair.co.nz</span></li>
<li className = 'list-none flex lg:text-xl  text-blue-600 items-center '> <FcGlobe /><span className='font-[light] pl-2  lg:text-lg text-[#444444]  leading-normal'> www.smartphonesrepair.co.nz</span></li>
</div>
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps({ params }) {
  const id = params.id;
  const res = await client.fetch(`*[_type == "tutorials" && slug.current == "${id}"]{content}`);
  console.log('Sanity API Response:', res);

  return {
    props: {
      content: res[0].content,
    },
  };
}

export default ServicesContent;
