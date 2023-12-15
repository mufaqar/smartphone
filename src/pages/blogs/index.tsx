import React, { useState } from 'react';
import Link from 'next/link';
import { RiAdminFill } from "react-icons/ri";
import { IoArrowForwardCircle } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { motion } from "framer-motion";
import Image from 'next/image';

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

function Blog() {
  return (
    <section className='py-16'>
      <div className='container mx-auto px-4'>
        <h2 className='md:text-4xl text-3xl font-bold uppercase text-center Raleway text-black mb-10'>
         Blogs
        </h2>
      </div>
      <motion.div
          initial={{x:-100, opacity:0}}
          animate={{x:0, opacity:1}}
          transition={{
              delay:0.2,
              x:{type:"spring",stiffness:60},
              opacity:{duration:1},
              ease:"easeIn",
              duration:1,
          }} className='lg:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-7 mt-10'>
        {
          data.map((item, idx) => {
            return (

              <div key={idx} className="block rounded-lg  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div >
                  <img
                    className="rounded-t-lg  hover:-translate-y-1 lg:hover:scale-110   duration-300"
                    src={item.img}
                    alt=""
                    width={510}
                    height={340}
                  />
                </div>
                <div className="flex flex-col justify-between py-7 px-4 h-52">
                  <div>
                    <h5 className="mb-2 text-lg text-center leading-tight text-neutral-800 Raleway">
                      <Link href="#">
                        {item.title}
                      </Link>
                    </h5>
                    <p className="mb-4 text-center text-base text-neutral-600 Raleway">
                      <strong>Category </strong>:  <Link href="#"> {item.category}</Link>
                    </p>
                  </div>
                  <ul className='flex gap-3 justify-between items-end'>
                    <li className='flex items-center gap-2 text-yellow-500 text-base font-normal Raleway'>
                      <RiAdminFill /><span>Admin</span>
                    </li>
                    <li className='flex items-center gap-2 text-yellow-500 text-base font-normal Raleway'>
                      <MdOutlineDateRange /><span>3 Months Ago</span>
                    </li>
                  </ul>
                </div>
              </div>
            )
          })}
      </motion.div>
    </section>
  )
}
export default Blog








