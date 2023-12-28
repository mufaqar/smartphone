import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { FaChevronRight, FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { urlForImage } from '../../sanity/lib/image'
import Image from 'next/image';
function Footer() {
  
  const [siteSettings, setSiteSettings] = useState<any>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/themeoption');
        const data = await response.json();
        setSiteSettings(data[0]);
      } catch (error) {
        console.error('Error fetching siteSettings:', error);
      }
    };

    fetchData();

  }, []);
  return (
    <footer className="bg-[url('/images/bgg2.avif')] bg-center bg-cover bg-no-repeat bg-blend-multiply bg-black/90">
      <div className="container mx-auto px-4 grid md:grid-cols-5 grid-cols-1 gap-7 py-16">
        <div className='md:col-span-2'>
          <Link href="/" className='inline-block'>
          <Image src={siteSettings?.logo?.asset?.url} alt={`logo`} width={800} height={800}  className='md:w-1/2 w-full' />

          </Link>
          <p className='text-base font-normal text-white my-5 max-w-[350px]'>
           {siteSettings?.about}
          </p>
          <ul className="flex gap-2">
          {siteSettings?.socialicons?.map((item: any, idx: number) => {
                  return (
                    <li key={idx}>
                      <Link href={item?.link} className='text-base font-normal   flex  w-10 h-10 bg-transparent   border-2 border-transparent rounded-full  hover:border-yellow-700 items-center justify-center'>
                        <img src={urlForImage(item.image).url()} alt={item.title} width={800} height={800}  className='rounded-full w-6 h-6'  />
                      </Link>
                    </li>
                  )
                })}
          </ul>
        </div>
        <div>
          <h5 className='text-xl font-semibold text-white Raleway'>
            Quick Links
          </h5>
          <ul className='flex flex-col gap-3 mt-7'>
          {siteSettings?.quicklinks?.map((item: any, idx: number) => {
                  return (
            <li key={idx}>
              <Link href={item.link} className='text-base font-normal text-white hover:text-yellow-500 flex gap-1  items-center'>
                <FaChevronRight /> {item.title}
              </Link>
            </li>
             )
            })}
          
          </ul>
        </div>
        <div>
          <h5 className='text-xl font-semibold text-white Raleway'>
            Contact Info
          </h5>
          <ul className='flex flex-col gap-3 mt-12'>
            


            {siteSettings?.contact?.map((item: any, idx: number) => {
                  return (
            <li key={idx}>
              <Link href="#" className='  text-white hover:text-yellow-500 flex gap-3  items-center'>   
                <img src={urlForImage(item.image).url()} alt={item.title} width={800} height={800}  className=' rounded-full w-5 h-5'  />
               <span className=''>{item.link}</span> 
              </Link>
            </li>
            )
            })}
          </ul>
        </div>
        <div>
          <h5 className='text-xl font-semibold text-white Raleway'>
            Get in touch
          </h5>
          <div>
            <form className='relative mt-7'>
              <input name='email' id='email' type='email' placeholder='Mail address'
                className='appearance-none text-base font-normal text-white border border-white rounded-full bg-transparent placeholder:text-white px-5 py-2 block w-full h-11 focus:outline-none' />
              <button type='submit' className='bg-yellow-500 hover:bg-white text-white hover:text-black w-10 h-10 flex justify-center items-center rounded-full absolute top-[2px] right-[2px]'>
                <FaChevronRight />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className='bg-gray-900 py-5'>
        <div className='container mx-auto px-4 items-center grid md:grid-cols-2 grid-cols-1 gap-7'>
          <p className='text-base font-normal text-white'>
            Copyright © 2022. All Rights Reserved By CM-Repair
          </p>
          <ul className='flex flex-row justify-end gap-3 '>
    
            {siteSettings?.quicklinks?.slice(0, 3).map((item: any, idx: number) => {
                  return (
                    <>
                    <li key={idx} className='text-white list-none'>|</li>
                    <li className='list-none'>
              <Link href={item.link} className='text-base font-normal text-white hover:text-yellow-500 flex gap-1  items-center'>
               {item.title}
              </Link>
            </li>
            </>
             )
            })}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer