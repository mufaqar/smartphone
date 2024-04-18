import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import { FaChevronRight, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { urlForImage } from '../../sanity/lib/image'
import { social } from '@/const/data'
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
    <footer className="bg-[#151515]">
      {/* <div className="container mx-auto px-4 grid md:grid-cols-5 grid-cols-1 gap-7 py-16">
        <div className='md:col-span-2'>
          <Link href="/" className='inline-block'>
            <Image src={siteSettings?.logo?.asset?.url} alt={`logo`} width={317} height={100} className='md:w-1/2 w-full' />

          </Link>
          <p className='text-base font-normal text-white my-5 max-w-[350px]'>
            {siteSettings?.about}
          </p>
          <ul className="flex gap-2">
            {social?.map((item: any, idx: number) => {
              return (
                <li key={idx}>
                  <Link href={item?.link} className='text-lg font-normal text-white  flex  w-10 h-10 bg-transparent   border-2 border-white rounded-full hover:text-yellow-700  hover:border-yellow-700 items-center justify-center'>
                    <span className=''>{item.icon} </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div>
          <h6 className='text-xl font-semibold text-white Raleway'>
            Quick Links
          </h6>
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
          <h6 className='text-xl font-semibold text-white Raleway'>
            Contact Info
          </h6>
          <ul className='flex flex-col gap-3 mt-7'>
            <li>
              <Link href="https://maps.app.goo.gl/grhofJM4usQK25zM7" target="_blank" className='  text-white hover:text-yellow-500 flex gap-3  items-center'>
                <FaMapMarkerAlt />
                <span className=''>1191 Eruera Street Rotorua,cbd,3010</span>
              </Link>
            </li>

            <li>
              <Link href="mailto:info@budgetrepaircenter.nz" className='  text-white hover:text-yellow-500 flex gap-3  items-center'>
                <FaEnvelope />
                <span className=''>info@budgetrepaircenter.nz</span>
              </Link>
            </li>
            <li>
              <Link href="tel:+640773477044" className='  text-white hover:text-yellow-500 flex gap-3  items-center'>
                <FaEnvelope />
                <span className=''> DID: +64 07 73477044</span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className='text-xl font-semibold text-white Raleway'>
            Working Hours
          </h5>
          <div>

            <ul className='flex flex-col gap-4 mt-6'>
              {siteSettings?.schedule?.map((item: any, idx: number) => {
                return (
                  <li key={idx} className='group list-none flex gap-2 items-center'>
                    <div className=''>
                      <figure className='text-base font-medium  group-hover:text-yellow-500 flex gap-1 w-8 h-8 bg-transparent rounded-full border group-hover:border-yellow-500 items-center justify-center'>
                        <img src={urlForImage(item.image).url()} alt={item.image} width={800} height={800} className='h-6 w-6' />
                      </figure>
                    </div>
                    <p className='text-sm font-medium text-white group-hover:text-yellow-500 gap-1  items-center'>{item.text}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div> */}
      <div className="container mx-auto px-4 grid md:grid-cols-4 grid-cols-1 gap-7 py-16">
        <div>
          <Link href="/" className='inline-block mb-5'>
            <Image src={siteSettings?.logo?.asset?.url} alt={`logo`} width={317} height={100} className='md:w-1/2 w-full' />
          </Link>
          <ul className='flex flex-col gap-1'>
            <li>
              <p className='text-sm font-normal text-white Raleway'>
                <strong>Address:</strong> 1191 Eruera Street Rotorua,cbd,3010
              </p>
            </li>
            <li>
              <Link href="tel:+6473477044" target='_blank' className='text-sm font-normal text-white Raleway inline-block'>
                <strong>Phone:</strong> +64-7-3477044
              </Link>
            </li>
            <li>
              <Link href="mailto:info@budgetrepaircenter.nz" target='_blank' className='text-sm font-normal text-white Raleway inline-block'>
                <strong>Email:</strong> info@budgetrepaircenter.nz
              </Link>
            </li>
          </ul>
          <ul className="flex gap-2 mt-5">
            {social?.map((item: any, idx: number) => {
              return (
                <li key={idx}>
                  <Link href={item?.link} className='text-lg bg-[#292929] hover:bg-yellow-500 text-white flex items-center justify-center w-[36px] h-[36px] mx-auto rounded'>
                    <span className=''>{item.icon} </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div>
          <h6 className='text-xl font-medium text-white Raleway mb-6'>
            Quick Links
          </h6>
          <ul className='flex flex-col gap-3'>
            {siteSettings?.quicklinks?.map((item: any, idx: number) => {
              return (
                <li key={idx}>
                  <Link href={item.link} className='text-sm font-normal text-white hover:text-yellow-500 Raleway flex gap-1 items-center'>
                    <FaChevronRight className='text-yellow-500' /> {item.title}
                  </Link>
                </li>
              )
            })}

          </ul>
        </div>
        <div>
          <h6 className='text-xl font-medium text-white Raleway mb-6'>
            Working Hours
          </h6>
          <table className='text-sm font-normal text-white Raleway'>
            <tbody>
              <tr>
                <td>
                  Monday
                </td>
                <td>
                  9:00 AM - 5:00 PM
                </td>
              </tr>
              <tr>
                <td className="pt-2 pr-2">
                  Tuesday
                </td>
                <td className="pt-2 pr-2">
                  9:00 AM - 5:00 PM
                </td>
              </tr>
              <tr>
                <td className="pt-2 pr-2">
                  Wednesday
                </td>
                <td className="pt-2 pr-2">
                  9:00 AM - 5:00 PM
                </td>
              </tr>
              <tr>
                <td className="pt-2 pr-2">
                  Thursday
                </td>
                <td className="pt-2 pr-2">
                  9:00 AM - 5:00 PM
                </td>
              </tr>
              <tr>
                <td className="pt-2 pr-2">
                  Friday
                </td>
                <td className="pt-2 pr-2">
                  10:00 AM - 4:00 PM
                </td>
              </tr>
              <tr>
                <td className="pt-2 pr-2">
                  Saturday
                </td>
                <td className="pt-2 pr-2">
                  10:00 AM - 4:00 PM
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h6 className='text-xl font-medium text-white Raleway mb-6'>
            Our Newsletter
          </h6>
          <form className='bg-white rounded flex'>
            <input
              name='email'
              id='email'
              placeholder='email'
              className='text-base font-normal text-white Raleway py-[6px] px-[10px] focus:outline-none rounded-l' />
            <button type='submit' className='text-base font-normal text-white Raleway bg-yellow-500 hover:bg-black px-5 rounded-r'>
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className='bg-black py-5'>
        <div className='container mx-auto px-4 items-center grid md:grid-cols-1 grid-cols-1 gap-7'>
          <p className='text-base font-normal text-white text-center'>
            Copyright © 2024. All Rights Reserved By Budget Repair Center. Design with love by <a href="htts://mufaqar.com" target='_blank'>Mufaqar</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer