import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from "framer-motion";
import { LuMenuSquare } from "react-icons/lu";
import { GiCancel } from "react-icons/gi";
import Image from 'next/image';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';


function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='bg-white relative md:block hidden'>
      <div className='bg-black py-3'>
        <div className='container mx-auto px-4'>
          <div className='flex justify-between items-center w-2/3 ml-auto'>
            <ul className='flex flex-row gap-3 justify-end items-center'>
              <li className='group'>
                <span className='text-base font-normal text-white group-hover:text-yellow-500 flex gap-1  items-center'>
                  <span className='text-base font-normal text-white group-hover:text-yellow-500 flex gap-1 w-8 h-8 bg-transparent rounded-full border group-hover:border-yellow-500 items-center justify-center'>
                    <FaLocationDot />
                  </span> Mon - Friday: 9am to 5pm Saturday - Friday: 10am to 4pm
                </span>
              </li>
              <li className='text-white'>|</li>
              <li className='group'>
                <Link href="#" className='text-base font-normal text-white group-hover:text-yellow-500 flex gap-1  items-center'>
                  <span className='text-base font-normal text-white group-hover:text-yellow-500 flex gap-1 w-8 h-8 bg-transparent rounded-full border group-hover:border-yellow-500 items-center justify-center'>
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
                    <Link href="#" className='text-base font-medium text-white hover:text-yellow-500'>
                      {item?.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div>
                <Link href="#" className='text-base font-medium text-white bg-yellow-500 hover:bg-black px-6 py-3'>
                  Book a Services
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
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
