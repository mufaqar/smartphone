import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import { FaMobileAlt } from "react-icons/fa";

function Services() {
  return (
    <section className='bg-blue-50 py-16' id='services'>
      <div className='container mx-auto px-4'>
        <h2 className='md:text-4xl text-3xl font-bold text-center Raleway'>
          OUR SERVICES
        </h2>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 1,
          }} className='grid md:grid-cols-4 grid-cols-1 gap-7 mt-10'>

          {Services_Data.map((item, idx) => {
            return (
              <div className='group shadow-lg'>
                <div className='bg-white relative'>
                  <Image src="/images/service/1.png" alt='service/1.png' width={225} height={189} className='w-full' />
                  <span className="text-yellow-600 group-hover:text-white bg-white group-hover:bg-yellow-600 text-5xl flex items-center justify-center shadow-md absolute bottom-3 left-1/2 -translate-x-1/2 p-2 w-20 h-20 rounded-full transition duration-300 ease-in-out">
                    <FaMobileAlt />
                  </span>
                </div>
                <div className='bg-white py-10 px-5'>
                  <h3 className='text-xl font-bold text-center Raleway mb-5'>
                    Data Recovery
                  </h3>
                  <p className='text-base font-normal text-center Raleway mb-5'>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit dolore magna aliqua.
                  </p>
                  <Link href="#" className='block text-base font-semibold text-white Raleway bg-yellow-600 group-hover:bg-white group-hover:text-yellow-600 border-2 border-yellow-600 px-6 py-1.5 w-fit mx-auto transition duration-300 ease-in-out'>
                    Read more
                  </Link>
                </div>
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