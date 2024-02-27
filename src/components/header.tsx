import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { urlForImage } from '../../sanity/lib/image'
import Image from 'next/image';
import MobileNav from './mobile-nav';
import TextTransition, { presets } from 'react-text-transition';
import { social } from '@/const/data';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [siteSettings, setSiteSettings] = useState<any>();
  const [index, setIndex] = React.useState(0);

  const TEXTS = ['Hi-Tech lab we are specialized in any kind of motherboard repairs!', 'Hi-Tech lab we are specialized in any kind of motherboard repairs.'];

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

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <header className='bg-white relative md:block hidden' id='header'>
        <div className='bg-black py-3'>
          <div className='container mx-auto px-4'>
            <div className='flex justify-between  items-center w-2/3 ml-auto'>
              <div className='text-white'>
                <TextTransition inline={true} springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
              </div>
              <ul className='flex flex-row gap-3 justify-end lg:-mt-6'>
                {social?.map((item: any, idx: number) => {
                  return (
                    <li key={idx}>
                      <Link href={item?.link} className='text-base font-normal text-white  flex  w-8 h-8 bg-transparent   border-2 border-white rounded-full hover:text-yellow-700  hover:border-yellow-700 items-center justify-center'>
                        <span className=''>{item.icon} </span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className='bg-blue-900 py-8'>
          <div className='container mx-auto px-4'>
            <div className='w-2/3 ml-auto'>
              <div className='absolute top-0 left-0 w-1/3 h-full flex items-center justify-center shape'>
                <div>
                  <Link href="/" className='text-center'>
                    <Image src="/logo.png" alt={`logo`} width={317} height={100} className='md:w-1/2 w-full mx-auto relative z-50' />
                    <span className='relative z-50 block w-fit mx-auto text-red-900 font-semibold Raleway'> HI-TECH Repair Center. </span>
                  </Link>
                </div>
              </div>
              <nav className='flex justify-between'>
                <ul className='flex md:flex-row flex-col gap-5 justify-end'>
                  {siteSettings?.headerNav?.map((item: any, idx: any) => (
                    <li key={idx} className='list-none'>
                      <Link href={item?.link} className='text-base font-semibold text-white hover:text-yellow-500'>
                        {item?.Name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div>
                  <Link href="/request-a-qoute" className='text-base font-semibold text-white bg-yellow-500 hover:bg-black px-6 py-3'>
                    Free Quote
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <MobileNav data={siteSettings?.headerNav} isOpen={isOpen} setIsOpen={setIsOpen} />

    </>
  );
}
export default Header




