import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaChevronRight, FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-[url('/images/bgg2.avif')] bg-center bg-cover bg-no-repeat bg-blend-multiply bg-black/90">
      <div className="container mx-auto px-4 grid md:grid-cols-5 grid-cols-1 gap-7 py-16">
        <div className='md:col-span-2'>
          <Link href="/" className='inline-block'>
            <Image src="/images/logo.avif" alt="logo" width={907} height={285} className='md:w-1/2 w-full' />
          </Link>
          <p className='text-base font-normal text-white my-5 max-w-[350px]'>
            Budget Computers and Kiwi Mobiles are a locally owned and operated store in Rotorua, New Zealand. They specialize in offering a wide range of budget-friendly computers, mobile phones, and related accessories.
          </p>
          <ul className="flex gap-2">
            <li>
              <Link
                href="#!"
                type="button"
                className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-yellow-500 hover:border-yellow-500"
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
            </li>
            <li>
              <Link
                href="#!"
                type="button"
                className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-yellow-500 hover:border-yellow-500"
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
            </li>
            <li>
              <Link
                href="#!"
                type="button"
                className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-yellow-500 hover:border-yellow-500"
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
            </li>
          </ul>
        </div>
        <div>
          <h5 className='text-xl font-semibold text-white Raleway'>
            Quick Links
          </h5>
          <ul className='flex flex-col gap-3 mt-7'>
            <li>
              <Link href="/" className='text-base font-normal text-white hover:text-yellow-500 flex gap-1  items-center'>
                <FaChevronRight /> HOME
              </Link>
            </li>
            <li>
              <Link href="/about" className='text-base font-normal text-white hover:text-yellow-500 flex gap-1  items-center'>
                <FaChevronRight /> ABOUT US
              </Link>
            </li>
            <li>
              <Link href="/services" className='text-base font-normal text-white hover:text-yellow-500 flex gap-1  items-center'>
                <FaChevronRight /> SERVICES
              </Link>
            </li>

            <li>
              <Link href="/request-a-qoute" className='text-base font-normal text-white hover:text-yellow-500 flex gap-1  items-center'>
                <FaChevronRight /> PRICING
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className='text-base font-normal text-white hover:text-yellow-500 flex gap-1  items-center'>
                <FaChevronRight /> CONTACT
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className='text-xl font-semibold text-white Raleway'>
            Contact Info
          </h5>
          <ul className='flex flex-col gap-3 mt-7'>
            <li>
              <Link href="#" className='text-base font-normal text-white hover:text-yellow-500 flex gap-1  items-center'>
                <FaLocationDot className="text-yellow-500" /> 11 Deneside, Seghill",NE23
              </Link>
            </li>
            <li>
              <Link href="#" className='text-base font-normal text-white hover:text-yellow-500 flex gap-1  items-center'>
                <FaPhoneAlt className="text-yellow-500" /> 0 (143) 456 7897
              </Link>
            </li>
            <li>
              <Link href="#" className='text-base font-normal text-white hover:text-yellow-500 flex gap-1  items-center'>
                <FaEnvelope className="text-yellow-500" /> info@example.com
              </Link>
            </li>
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
            <li>
              <Link href="#" className='text-base font-normal text-white hover:text-yellow-500 flex gap-1  items-center'>
                HOME
              </Link>
            </li>
            <li className='text-white'>|</li>
            <li>
              <Link href="#" className='text-base font-normal text-white hover:text-yellow-500 flex gap-1  items-center'>
                ABOUT US
              </Link>
            </li>
            <li className='text-white'>|</li>
            <li>
              <Link href="#" className='text-base font-normal text-white hover:text-yellow-500 flex gap-1  items-center'>
                SERVICES
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer