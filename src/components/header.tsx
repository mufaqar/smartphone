import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import { LuMenuSquare } from "react-icons/lu";
import { GiCancel } from "react-icons/gi";
import Image from 'next/image';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import MobileNav from './mobile-nav';


function Header() {
  const [isOpen, setIsOpen] = useState(false);

<<<<<<< HEAD
 return (
  <section className='sticky top-0 z-50'>
     <motion.header
          initial={{x:-100, opacity:0}}
          animate={{x:0, opacity:1}}
          transition={{
              delay:0.2,
              x:{type:"spring",stiffness:60},
              opacity:{duration:1},
              ease:"easeIn",
              duration:1,
          }} className="flex items-center justify-between flex-wrap lg:p-6   lg: bg-gradient-to-r lg:from-teal-500   lg:to-teal-950  bg-blue-300">
    <div className='container mx-auto px-4'>


    <div className="absolute flex lg:top-0 lg:mt-0 mt-2 flex-shrink-0 text-white w-48 px-4 mr-6 lg:mr-72 lg:bg-teal-500 lg:w-60 skew-x-12 lg:h-full" >
       <img src='images/logo.avif' className="m-auto " alt="Logo" />
     </div>
     <div className="block lg:hidden float-right pt-4">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3  pb-4 rounded text-black-500 hover:text-black-400 "
       >


         <li className={`fill-current text-3xl  ${isOpen ? "block" : "hidden"}`}>
<GiCancel />
</li>
         <li
           className={`fill-current text-3xl  ${isOpen ? "hidden" : "block"}`}
         >
           <LuMenuSquare />
         </li>
       </button>
     </div>
     <div
       className={`w-full pb-4 lg:pb-0 pt-16 lg:pt-0 block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
     >
        <div className="text-sm lg:flex-grow lg:pl-96">
            {data.map((item, idx) => (
              <Link key={idx}  href={item.link || '#'} className='block  hover:bg-[#D79800] px-4 py-2 lg:inline-block text-lg lg:mt-0 lg:text-white mr-4 transition duration-300 ease-in-out hover:opacity-100 hover:text-black font-[light]'>
                {item.title}
              </Link>
            ))}
=======
  return (
    <>
    <header className='bg-white relative md:block hidden'>
      <div className='bg-black py-3'>
        <div className='container mx-auto px-4'>
          <div className='flex justify-between items-center w-2/3 ml-auto'>
            <ul className='flex flex-row gap-3 justify-end items-center'>
              <li className='group'>
                <span className='text-sm font-medium text-white group-hover:text-yellow-500 flex gap-1  items-center'>
                  <span className='text-base font-medium text-white group-hover:text-yellow-500 flex gap-1 w-8 h-8 bg-transparent rounded-full border group-hover:border-yellow-500 items-center justify-center'>
                    <FaLocationDot />
                  </span> Mon - Friday: 9am to 5pm Saturday - Friday: 10am to 4pm
                </span>
              </li>
              <li className='text-white'>|</li>
              <li className='group'>
                <Link href="#" className='text-sm font-medium text-white group-hover:text-yellow-500 flex gap-1  items-center'>
                  <span className='text-base font-medium text-white group-hover:text-yellow-500 flex gap-1 w-8 h-8 bg-transparent rounded-full border group-hover:border-yellow-500 items-center justify-center'>
                    <FaPhoneAlt />
                  </span> +64-7-3477044
                </Link>
              </li>
            </ul>
            <ul className='flex flex-row gap-3 justify-end'>
              <li>
                <Link href="#" className='text-base font-normal text-white hover:text-yellow-500 flex gap-1 w-8 h-8 bg-transparent rounded-full border border-transparent hover:border-yellow-500 items-center justify-center'>
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link href="#" className='text-base font-normal text-white hover:text-yellow-500 flex gap-1 w-8 h-8 bg-transparent rounded-full border border-transparent hover:border-yellow-500 items-center justify-center'>
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link href="#" className='text-base font-normal text-white hover:text-yellow-500 flex gap-1 w-8 h-8 bg-transparent rounded-full border border-transparent hover:border-yellow-500 items-center justify-center'>
                  <FaLinkedinIn />
                </Link>
              </li>
              <li>
                <Link href="#" className='text-base font-normal text-white hover:text-yellow-500 flex gap-1 w-8 h-8 bg-transparent rounded-full border border-transparent hover:border-yellow-500 items-center justify-center'>
                  <FaInstagram />
                </Link>
              </li>
            </ul>
>>>>>>> main
          </div>
        </div>
      </div>
      <div className='bg-blue-900 py-8'>
        <div className='container mx-auto px-4'>
          <div className='w-2/3 ml-auto'>
            <div className='absolute top-0 left-0 w-1/3 h-full flex items-center justify-center shape'>
              <div>
                <Link href="/">
                  <Image src="/images/logo.avif" alt="logo" width={907} height={285} className='md:w-1/2 w-full mx-auto relative z-50' />
                </Link>
              </div>
            </div>
            <nav className='flex justify-between'>
              <ul className='flex md:flex-row flex-col gap-5 justify-end'>
                {data.map((item, idx) => (
                  <li key={idx}>
                    <Link href="#" className='text-base font-semibold text-white hover:text-yellow-500'>
                      {item?.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div>
                <Link href="#" className='text-base font-semibold text-white bg-yellow-500 hover:bg-black px-6 py-3'>
                  Book a Services
                </Link>
              </div>
            </nav>
          </div>
<<<<<<< HEAD
     </div>
     </div>
   </motion.header>
   </section>
 );
=======
        </div>
      </div>
    </header>
    <MobileNav data={data} isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
>>>>>>> main
}
export default Header

export const data = [
  {
    title: "Home",
    link:'/'
  },
  {
    title: " About",
    link:'/about'
  },
  {
    title: " Services",
    link:'/'
  },
  {
    title: "  iPhone Repair",
    link:'/repairing'
  },
  {
    title: "  Blog",
    link:'/blogs'
  },
  {
    title: "  Contact Us",
  },
]


