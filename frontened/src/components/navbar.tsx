import React from 'react'
import { motion } from "framer-motion";
import { RiMapPinLine } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { GiTimeBomb } from "react-icons/gi";
import { BiLogoFacebook } from "react-icons/bi";
import { TiSocialTwitter } from "react-icons/ti"
import { FaLinkedinIn } from "react-icons/fa";;
import { FaInstagram } from "react-icons/fa";

import Link from 'next/link';
function Navbar() {
  return (
    <section>
      < motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 0.5,
        }} className=" bg-gradient-to-r from-black to-teal-950
          mx-auto px-6 py-4 max-w-full items-center ">
        <div className="flex justify-between  container mx-auto px-4 lg:space-x-6  lg:divide-x-[1px]   items-center ">
          {/* Start : Logo */}
          <div>
            <div className='flex items-center lg:px-4 '>
              <Link href={''} className='text-sm lg:p-2 p-1 rounded-full bg-blue-600 text-white hover:bg-orange-500 transition duration-300 ease-in-out hover:opacity-100'><FaPhoneAlt /></Link>
              <p className='text-white lg:text-[15px] text-[10px] lg:pl-2 hover:text-blue-300 transition duration-500 ease-in-out hover:opacity-100 cursor-pointer '> +64-7-3477044 </p>
            </div >
          </div>
          <div className='lg:block hidden'>
            <div className='flex items-center px-4 '>
              <Link href={''} className='text-sm p-2  tetx-blue-600 text-white hover:bg-orange-500  rounded-full bg-blue-600 hover:bg-orange-500 transition duration-300 ease-in-out hover:opacity-100'> <GiTimeBomb /></Link>

              <p className='lg:text-[15px] text-white pl-2 hover:text-blue-300 cursor-pointer font-[light]'> Mon - Friday: 9am to 5pm
                Saturday - Friday: 10am to 4pm</p>
            </div >
          </div>
          <div className='lg:block hidden'>
            <div className='   flex items-center px-4  '>
              <li className='list-none text-sm p-2 rounded-full bg-blue-600 text-white hover:bg-orange-500 transition duration-300 ease-in-out hover:opacity-100'><RiMapPinLine /></li>
              <p className='text-white lg:text-[15px] hover:text-blue-300 cursor-pointer text-center pl-2 cursor-pointer font-[light]' >info@smartphonesrepair</p>
            </div></div>

          <div
            className='flex space-x-2 lg:px-20'>
            {
              data.map((item, idx) => {
                return (
                  <Link key={idx} href={''} className=' animate-bounce text-sm lg:p-2 p-1 rounded-full bg-blue-600 text-white hover:bg-orange-500 transition duration-300 ease-in-out hover:opacity-100'>{item.icon}</Link>

                )
              })
            }

          </div>
        </div>

      </motion.div>
    </section>
  )
}

export default Navbar


export const data = [
  {


    icon: <BiLogoFacebook />,
  },
  {


    icon: <TiSocialTwitter />,
  },
  {


    icon: <FaInstagram />,
  },

  {
    icon: <FaLinkedinIn />
  }


]