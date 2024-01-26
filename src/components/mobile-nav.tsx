import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa';
import { FaBars, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

function MobileNav({ data, isOpen, setIsOpen }: any) {
  return (
    <header className='md:hidden block relative z-20'>
      <div className='bg-black py-3 container mx-auto px-4 flex flex-row gap-5 justify-between items-center'>
        <ul className='w-full flex flex-col gap-3 justify-center items-center'>
          <li className='group'>
            <Link href="tel:+64073477044" className='text-xs font-normal text-white group-hover:text-yellow-500 flex gap-1  items-center'>
              <span className='text-xs font-normal text-white group-hover:text-yellow-500 flex gap-1 items-center justify-center'>
                <FaPhoneAlt />
              </span> +64 07 3477044
            </Link>
          </li>
          <li className='group'>
            <Link href="mailto:info@budgetrepaircenter.nz" className='text-xs font-normal text-white group-hover:text-yellow-500 flex gap-1  items-center'>
              <span className='text-xs font-normal text-white group-hover:text-yellow-500 flex gap-1 items-center justify-center'>
                <FaEnvelope />
              </span> info@budgetrepaircenter.nz
            </Link>
          </li>
          <li className='group'>
            <span className='text-xs font-normal text-white group-hover:text-yellow-500 flex gap-1  items-center'>
              <span className='text-xs font-normal text-white group-hover:text-yellow-500 flex gap-1 items-center justify-center'>
                <FaLocationDot />
              </span> Mon - Friday: 9am to 5pm Saturday - Friday: 10am to 4pm
            </span>
          </li>
        </ul>
      </div>
      <div className='bg-white py-3 container mx-auto px-4 flex flex-row gap-5 justify-between items-center'>
        <div className='w-1/2'>
          <Link href="/">
            <Image src="/images/logo.avif" alt="logo" width={907} height={285} className='md:w-1/2 w-full mx-auto relative z-50' />
          </Link>
        </div>
        <div className='w-1/2 flex justify-end'>
          <nav>
            <button onClick={() => setIsOpen(!isOpen)} className='text-3xl  text-black '>
              {!isOpen ? <FaBars /> : <IoMdClose />}
            </button>
            <ul className={`md:flex-row flex-col gap-5 absolute top-[190px] left-0 right-0 bg-white px-4 py-10 ${isOpen ? "flex" : "hidden"}`}>
              {data?.map((item: any, idx: number) => (
                <li key={idx} className='list-none '>
                  <Link href="#" className='text-base font-medium text-black hover:text-yellow-500'>
                    {item?.Name}
                  </Link>
                </li>
              ))}
              <li className ='list-none'>
                <Link href="#" className=' list-none text-base font-medium text-white bg-yellow-500 hover:bg-black px-6 py-3'>
                  Book a Services
                </Link>
              </li>
            </ul>

          </nav>
        </div>
      </div>
    </header>
  )
}

export default MobileNav