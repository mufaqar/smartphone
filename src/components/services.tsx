import Image from 'next/image'

import React from 'react'
import { motion } from "framer-motion";

function Services() {
  return (
    <section className='bg-blue-50/40 lg:py-16 py-4' id='services'>
      <div className='container mx-auto px-4'>
        <h2 className='md:text-7xl text-3xl font-bold text-center '>
          OUR SERVICES
        </h2>
          <motion.div
          initial={{x:-100, opacity:0}}
          animate={{x:0, opacity:1}}
          transition={{
              delay:0.2,
              x:{type:"spring",stiffness:60},
              opacity:{duration:1},
              ease:"easeIn",
              duration:1,
          }} className='grid md:grid-cols-4 grid-cols-1 gap-7 lg:mt-10 mt-6'>
          {Services_Data.map((item, idx) => {
            return (
           <div key={idx} className='bg-white py-5 rounded rounded-br-[30px] shadow-[0px_0px_15px_0px_rgb(0,0,0,32%)]'>
              <div className='  p-4  mx-auto h-56'>
                <img src={item.icon} alt={item.icon} className='shadow-[0px_0px_15px_0px_rgb(0,0,0,32%)] h-48 w-48 m-auto'
                />
              </div>
              <h3 className=' text-lg px-4  text-center text-black font-[light]'>
                {item.title}
              </h3>

            </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services

export const Services_Data = [
  {
    title: "Expert Xbox Repair Services: Repairs Xbox: Rotorua",

    icon: "/images/SERVICES1.avif",
  },
  {
    title: "Fast and Reliable iPhone Repair Rotorua",

    icon: "/images/services2.avif",
  },
  {
    title: "Click To Find Free   Quote",

    icon: "/images/services3.avif",
  },
  {
    title: "Computers Repair Services",

    icon: "/images/services4.avif",
  },




]