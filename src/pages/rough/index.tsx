import React, { useState } from 'react';
import Link from 'next/link';
import { RiAdminFill } from "react-icons/ri";
import { IoArrowForwardCircle } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { motion } from "framer-motion";

export const data = [
  {
    title: "Smartphones, Laptops, Computers, Peripherals, Repairs & Sales",

    img: "/images/blog1.avif",
    category: 'iPhone Repairs'
  },
  {
    title: "IC, Chip Replacement",

    img: "/images/blog1.avif",
    category: 'Laptop Repairs'
  },
  {
    title: "Smartphones and Computers Repairing Rotorua",

    img: "/images/blog1.avif",
    category: 'signs of computer hacked'
  },
  {
    title: "COMPUTERS REPAIR SERVICES",

    img: "/images/blog1.avif",
    category: 'Computers Repairs'
  },
  {
    title: "Expert Xbox Repair Services: Repairs Xbox: Rotorua",

    img: "/images/blog1.avif",
    category: 'Laptops and iPhone Repairs'
  },
  {
    title: "Fast and Reliable iPhone Repair Rotorua",

    img: "/images/blog1.avif",
    category: 'iPad Repairs'
  },
  {
    title: "CLICK TO FIND FREE QUOTE",

    img: "/images/blog1.avif",
    category: 'iPhone Repairs'
  },
  {
    title: "COMPUTERS REPAIR SERVICES",

    img: "/images/blog1.avif",
    category: 'Laptop Repairs'
  },
  {
    title: "COMPUTERS REPAIR SERVICES",

    img: "/images/blog1.avif",
    category: 'signs of computer hacked'
  },




]

function header() {
  return (
    <section className='container mx-auto px-4'>

      <motion.div
          initial={{x:-100, opacity:0}}
          animate={{x:0, opacity:1}}
          transition={{
              delay:0.2,
              x:{type:"spring",stiffness:60},
              opacity:{duration:1},
              ease:"easeIn",
              duration:1,
          }} className='lg:grid md:grid-cols-3 lg:grid-cols-3 lg:gap-7 mt-10'>
        {
          data.map((item, idx) => {
            return (

              <div key={idx} className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div >
                  <img
                    className="rounded-t-lg"
                    src={item.img}
                    alt=""
                  />
                  <div className='lg:pl-96 pl-64  -translate-y-12 transform  justify-center '>
                    <Link href={'/blog'} className='text-5xl absolute animate-bounce -mt-10 text-black hover:border-amber-300 rounded-full border-2   hover:text-red-700 transition duration-300 ease-in-out hover:opacity-100'><IoArrowForwardCircle /></Link></div>

                </div>
                <div className="p-6">
                  <h5 className="mb-2 text-lg text-center font-[roboto] leading-tight text-neutral-800 dark:text-neutral-50">
                    {item.title}
                  </h5>
                  <p className="mb-4 text-center text-base text-neutral-600 dark:text-neutral-200 font-[light]">
                  <strong>Category </strong>:  {item.category}
                  </p>
                  <div className='flex justify-center space-x-6 divide-x-6 divide-black pb-4'>
                    <li className='list-none flex items-center space-x-2 text-orange-800 font-[600] animate-bounce font-[light]'><RiAdminFill /><span>Admin</span></li>
                    <li className='list-none flex items-center space-x-2 text-orange-800 font-[600] animate-bounce font-[light]'><MdOutlineDateRange /> <span>3 Months Ago</span></li>
                  </div>
                </div>
              </div>

            )


          })}
      </motion.div>
    </section>
  )
}
export default header








