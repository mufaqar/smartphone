import React from 'react'

import { MdOutlineSettingsSuggest } from "react-icons/md";
import { SiFiles } from "react-icons/si";
import { TiPower } from "react-icons/ti";
import { FaCar } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import { PiCardholder } from "react-icons/pi";
import { FaPhone } from "react-icons/fa6";
import Form from './form';
import Link from 'next/link';
import { motion } from "framer-motion";
function Facilities() {
  return (
    <section className='py-16 bg-[url("/images/about.png")] bg-cover bg-no-repeat bg-center bg-blend-multiply bg-black/60'>
      <div className='container mx-auto px-3'>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-7'>
          <div>
            <h3 className='md:text-4xl text-3xl font-bold text-white Raleway mb-7'>
              About Us
            </h3>
            <p className='text-lg font-normal text-white mb-5'>
              Budget Computers and Kiwi Mobiles are a locally owned and operated store in Rotorua, New Zealand. They specialize in offering a wide range of budget-friendly computers, mobile phones, and related accessories. The store is known for its customer care and personalised services, helping customers find the best products according to their needs while staying within their budget. Budget Computers and Kiwi Mobiles staff members have extensive knowledge of the products they sell, ensuring that customers receive quality support and assistance
            </p>
            <p className='text-lg font-normal text-white mb-5'>
              For more visit us.
            </p>
            <p className='text-lg font-normal text-white mb-5'>
              In addition to selling new and refurbished devices, the store also offers repair services for computers, laptops, mobile phones, and other electronic gadgets. With their technical expertise, they can troubleshoot and repair various common issues, such as hardware malfunctions, software problems, and virus infections.
            </p>
            <Link href="#" className='block text-lg font-semibold text-white Raleway bg-yellow-500 hover:bg-white hover:text-yellow-500 border-2 border-yellow-500 hover:border-white px-10 py-2.5 w-fit transition duration-300 ease-in-out'>
              Get a qoute
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
            }} className='grid md:grid-cols-2 grid-cols-1 mt-10  mx-auto px-4 container'>
            {Services_Data.map((item, idx) => {
              return (
                <div key={idx} className=" [&:nth-child(1)]:bg-blue-900 [&:nth-child(4)]:bg-blue-900 first:[&>.a-child-class]:text-5xl text-center duration-300 bg-white hover:bg-yellow-500 group py-5 shadow-[0px_0px_15px_0px_rgb(0,0,0,32%)]">
                  <div className="mx-auto flex h-16 w-16 mb-5 items-center justify-center group-hover:bg-black rounded-full bg-stone-100">
                    <span className='text-3xl text-black group-hover:text-white'>
                      {item.icon}
                    </span>
                  </div>
                  <h4 className='text-black group-hover:text-white mb-3 text-lg font-bold lg:px-14 Raleway'>
                    {item.title}
                  </h4>

                </div>
              )
            })}
          </motion.div>
        </div>

      </div>

      <Form />


      <section className='container mx-auto px-4'>

        <div className='lg:flex   mt-10 lg:divide-x-2 lg:divide-black'>
          {data.map((item, idx) => {
            return <div key={idx} className=' py-5 '>
              <div className='  lg:p-4 w-fit mx-auto flex items-center space-x-4 '>
                <li className='list-none lg:text-3xl p-2 rounded-full bg-black text-white hover:bg-orange-500 transition duration-300 ease-in-out hover:opacity-100 '>{item.icon}</li>
                <motion.h1 initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    delay: 0.2,
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    duration: 1,
                  }} className=' font-bold lg:text-lg hover:text-yellow-100 cursor-pointer text-center lg:font-[roboto] font-[light]'>{item.title}</motion.h1>
              </div>

            </div>
          })}
        </div>

      </section>

      {/*icons*/}

      <div className='text-center mx-auto px-4 mt-16 pb-6'>

        <Link
          href="#!"
          type="button"
          className=" animate-bounce m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          data-te-ripple-init=""
          data-te-ripple-color="light"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-full w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
        </Link>

        <Link
          href="#!"
          type="button"
          className="animate-bounce m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          data-te-ripple-init=""
          data-te-ripple-color="light"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-full w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        </Link>
        <Link
          href="#!"
          type="button"
          className=" animate-bounce m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          data-te-ripple-init=""
          data-te-ripple-color="light"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-full w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </Link>

        <Link
          href="#!"
          type="button"
          className=" animate-bounce m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
          data-te-ripple-init=""
          data-te-ripple-color="light"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-full w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
        </Link>

      </div>

    </section>
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

export const data = [
  {
    title: "1191 Eruera Street Rotorua. 3010",

    icon: <IoLocation />,
  },
  {
    title: "info@smartphonesrepair. conzadmin@smartphonesrepair.co.nz",

    icon: <PiCardholder />,
  },
  {
    title: "+64-7-3477044",

    icon: <FaPhone />,
  },

]






