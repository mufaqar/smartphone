import React from 'react'


import { GrServices } from "react-icons/gr";
import { SiFiles } from "react-icons/si";
import { TiPower } from "react-icons/ti";
import { FaCar } from "react-icons/fa6";
import { RiMapPinLine } from "react-icons/ri";
import { PiCardholder } from "react-icons/pi";
import { FaPhone } from "react-icons/fa6";
import Form from './form';
import Link from 'next/link';
import { motion } from "framer-motion";
function Facilities() {
  return (
    <>
      <section className='cursor-pointer bg-[#D79800] '>
        <div className=''>
          <h2 className='md:text-7xl text-3xl font-bold text-center pt-16 font-[roboto]'>
            OUR FACILITIES
          </h2>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.2,
              x: { type: 'spring', stiffness: 60 },
              opacity: { duration: 1 },
              ease: 'easeIn',
              duration: 1,
            }}
            className='grid md:grid-cols-4 grid-cols-1 gap-7 mt-10  mx-auto px-4 container mt-16 lg:space-y-0 space-y-4'
          >
            {Services_Data.map((item, idx) => {
              return (
                <div
                  key={idx}
                  className='rounded-xl bg-green-50  text-center shadow-xl hover:-translate-y-1 lg:hover:scale-110   duration-300 hover:bg-red-500 group bg-white py-5 rounded-md text-[#D79800] shadow-[0px 0px 15px 0px rgba(0,0,0,32%)]'
                >
                  <div className='mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center group-hover:bg-black rounded-full bg-red-100 shadow-lg shadow-teal-500/40'>
                    <li className='text-3xl list-none text-black group-hover:text-white'>{item.icon}</li>
                  </div>
                  <h1 className='text-darken text-black group-hover:text-white mb-3 lg:text-xl font-medium lg:px-14 font-[light] lg:font-[roboto]'>
                    {item.title}
                  </h1>
                </div>
              );
            })}
          </motion.div>
          <Form />
        </div>

        {/* location */}
        <section className='container mx-auto px-4 lg:block hidden'>
          <div className='lg:flex justify-evenly  mt-10 lg:divide-x-2 lg:divide-black'>
            {data.map((item, idx) => {
              return (
                <div key={idx} className='py-5'>
                  <div className='p-4 w-fit mx-auto flex items-center space-x-4 '>
                    <li className='list-none lg:text-3xl p-2 rounded-full bg-black text-white hover:bg-orange-500 transition duration-300 ease-in-out hover:opacity-100 '>
                      {item.icon}
                    </li>
                    <motion.h1
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.2,
                        x: { type: 'spring', stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: 'easeIn',
                        duration: 1,
                      }}
                      className='lg:font-bold lg:text-lg hover:text-yellow-100 text-center cursor-pointer  lg:font-[roboto] font-[light]'
                    >
                      {item.title}
                    </motion.h1>
                  </div>
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: 0.2,
                      x: { type: 'spring', stiffness: 60 },
                      opacity: { duration: 1 },
                      ease: 'easeIn',
                      duration: 1,
                    }}
                    className='grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-7 mt-10'
                  >
                    {Services_Data.map((item, idx) => {
                      return (
                        <div
                          key={idx}
                          className='text-center md:px-0 px-8 duration-300 bg-white hover:bg-yellow-500 group py-5 shadow-[0px 0px 15px 0px rgba(0,0,0,32%)]'
                        >
                          <div className='mx-auto flex h-16 w-16 mb-5 items-center justify-center group-hover:bg-black rounded-full bg-stone-100'>
                            <span className='text-3xl text-black group-hover:text-white'>{item.icon}</span>
                          </div>
                          <h4 className='text-black group-hover:text-white mb-3 text-lg font-bold lg:px-14 Raleway'>
                            {item.title}
                          </h4>
                        </div>
                      );
                    })}
                  </motion.div>
                </div>
              );
            })}
          </div>
        </section>
        <Form />
      </section>
    </>
  );
}


export default Facilities

export const Services_Data = [
  {
    title: "Expert Xbox Repair Services: Repairs Xbox: Rotorua",

    icon: <GrServices />,
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

export const data = [
  {
    title: "1191 Eruera Street Rotorua. 3010",

    icon: <RiMapPinLine />,
  },
  {
    title: "info@smartphonesrepair.",

    icon: <PiCardholder />,
  },
  {
    title: "+64-7-3477044",

    icon: <FaPhone />,
  },

]






