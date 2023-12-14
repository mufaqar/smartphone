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
          }} className="flex items-center justify-between flex-wrap p-6 lg:bg-teal-950 bg-teal-500">
    <nav className='container mx-auto px-4'>


    <div className="lg:absolute flex top-0 flex-shrink-0 text-white mr-6 lg:mr-72 bg-white w-48 skew-x-12 lg:h-full" >
       <img src='images/logo.avif' className=" " alt="Logo" />
     </div>
     <div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
       >


         <motion.li
  initial={{ scale: 0 }}
  animate={{ rotate: 180, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
  }} className={`fill-current text-3xl  ${isOpen ? "block" : "hidden"}`}>
<GiCancel />
</motion.li>
         <li
           className={`fill-current text-3xl ${isOpen ? "hidden" : "block"}`}
         >
           <LuMenuSquare />
         </li>
       </button>
     </div>
     <div
       className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
     >
        <div className="text-sm lg:flex-grow lg:pl-72">
            {data.map((item, idx) => (
              <Link key={idx} href="#" className='block  hover:bg-[#D79800] px-4 py-2 lg:inline-block text-lg lg:mt-0 text-white mr-4 transition duration-300 ease-in-out hover:opacity-100 hover:text-black font-[light]'>
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
     </nav>
   </motion.header>
   </section>
 );
}
export default Header
  



export const data = [
  {
    title: "Home",
    
  },
  {
    title: " About",
  },
  {
    title: " Services",
  },
  {
    title: "  iPhone Repair",
  },
  {
    title: "  Blog",
  },
  {
    title: "  Contact Us",
  },
]
