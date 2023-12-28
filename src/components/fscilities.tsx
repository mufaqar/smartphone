import React from 'react'
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { SiFiles } from "react-icons/si";
import { TiPower } from "react-icons/ti";
import { FaCar } from "react-icons/fa6";
import Form from './form';
import Link from 'next/link';
import { motion } from "framer-motion";
import Image from 'next/image';
function Facilities() {
  return (
    <>
      <section className='py-16'>
        <div className='container mx-auto px-3'>
          <div className='grid md:grid-cols-3 grid-cols-1 gap-7 px-5'>
            <div>
              <Image src="/images/services2.avif" alt='about' width={269} height={194} className='w-full h-full' />
            </div>
            <div className='md:col-span-2'>
              <div>
                <h3 className='md:text-4xl text-3xl font-bold uppercase text-black Raleway mb-7'>
                  About Us
                </h3>
                <p className='text-lg font-medium text-black mb-5'>
                  Budget Computers and Kiwi Mobiles are a locally owned and operated store in Rotorua, New Zealand. They specialize in offering a wide range of budget-friendly computers, mobile phones, and related accessories. The store is known for its customer care and personalised services, helping customers find the best products according to their needs while staying within their budget. Budget Computers and Kiwi Mobiles staff members have extensive knowledge of the products they sell, ensuring that customers receive quality support and assistance
                </p>
                <Link href="#" className='block text-lg font-semibold text-white Raleway bg-yellow-500 hover:bg-white hover:text-yellow-500 border-2 border-yellow-500 hover:border-white px-10 py-2.5 w-fit transition duration-300 ease-in-out'>
                  For more visit us.
                </Link>
              </div>

            </div>
          </div>
          <h1 className='text-center font-bold text-5xl m-16 underline  underline-offset-8 decoration-2 decoration-blue-600 '>OUR FACILITIES</h1>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }} className='grid md:grid-cols-4 grid-cols-1 md:gap-4 gap-7 mt-12 cursor-pointer '>
            {Services_Data.map((item, idx) => {
              return (
                <div key={idx} className="text-center md:px-0 px-8 relative duration-300 bg-white hover:bg-yellow-500 group  shadow-[0px_0px_15px_0px_rgb(0,0,0,32%)]">
                  <div className="mx-auto  relative bottom-8   flex h-16 w-16 items-center justify-center group-hover:bg-black rounded-full bg-blue-100">
                    <span className='  text-3xl text-black group-hover:text-white'>
                      {item.icon}
                    </span>
                  </div>

                  <h4 className='text-black group-hover:text-white mb-3 text-lg font-bold lg:px-14 Raleway'>
                    {item.title}
                  </h4>

                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
      <Form />


    </>
  )
}

export default Facilities

export const Services_Data = [
  {
    title: "Expert Xbox Repair Services: Repairs Xbox: Rotorua",

    icon: <MdOutlineSettingsSuggest />,
  },
  {
    title: "Fast and Reliable iPhone Repair Rotorua",

    icon: <TiPower />,
  },
  {
    title: "CLICK TO FIND FREE QUOTES  ",

    icon: <FaCar />,
  },
  {
    title: "COMPUTERS REPAIR SERVICES",

    icon: <SiFiles />,
  },




]








