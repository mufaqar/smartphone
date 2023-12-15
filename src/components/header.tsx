import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import { LuMenuSquare } from "react-icons/lu";
import { GiCancel } from "react-icons/gi";
function Header() {
 const [isOpen, setIsOpen] = useState(false);

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
          </div>
          <div>
            <button className='inline-flex items-center bg-blue-600 border-0 py-2 px-4 text-white cursor-pointer hover:bg-[#D79800] hover:text-white transition duration-300 ease-in-out hover:opacity-100 font-[light]'>
              Click Me
            </button>
          </div>
     </div>
     </div>
   </motion.header>
   </section>
 );
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


