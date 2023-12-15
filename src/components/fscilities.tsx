import React from 'react'
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { SiFiles } from "react-icons/si";
import { TiPower } from "react-icons/ti";
import { FaCar } from "react-icons/fa6";
import Form from './form';
import Link from 'next/link';
import { motion } from "framer-motion";
function Facilities() {
  return (
    <>
      <section className='py-16 bg-[url("/images/about.png")] bg-cover bg-no-repeat bg-center bg-blend-multiply bg-black/60'>
        <div className='container mx-auto px-3'>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-7 px-5'>
            <div>
              <h3 className='md:text-4xl text-3xl font-bold uppercase text-white Raleway mb-7'>
                About Us
              </h3>
              <p className='text-lg font-medium text-white mb-5'>
                Budget Computers and Kiwi Mobiles are a locally owned and operated store in Rotorua, New Zealand. They specialize in offering a wide range of budget-friendly computers, mobile phones, and related accessories. The store is known for its customer care and personalised services, helping customers find the best products according to their needs while staying within their budget. Budget Computers and Kiwi Mobiles staff members have extensive knowledge of the products they sell, ensuring that customers receive quality support and assistance
              </p>
              <p className='text-lg font-medium text-white mb-5'>
                In addition to selling new and refurbished devices, the store also offers repair services for computers, laptops, mobile phones, and other electronic gadgets. With their technical expertise, they can troubleshoot and repair various common issues, such as hardware malfunctions, software problems, and virus infections.
              </p>
              <Link href="#" className='block text-lg font-semibold text-white Raleway bg-yellow-500 hover:bg-white hover:text-yellow-500 border-2 border-yellow-500 hover:border-white px-10 py-2.5 w-fit transition duration-300 ease-in-out'>
                For more visit us.
              </Link>
            </div>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }} className='grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-7 mt-10'>
              {Services_Data.map((item, idx) => {
                return (
                  <div key={idx} className="text-center md:px-0 px-8 duration-300 bg-white hover:bg-yellow-500 group py-5 shadow-[0px_0px_15px_0px_rgb(0,0,0,32%)]">
                    <div className="mx-auto flex h-16 w-16 mb-5 items-center justify-center group-hover:bg-black rounded-full bg-stone-100">
                      <span className='text-3xl text-black group-hover:text-white'>
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








