import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { urlForImage } from '../../sanity/lib/image'
import Image from 'next/image';
import MobileNav from './mobile-nav';
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [siteSettings, setSiteSettings] = useState<any>();
  console.log('siteSettings', siteSettings);


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
    <>
      <header className='bg-white relative md:block hidden' id='header'>
        <div className='bg-black py-3'>
          <div className='container mx-auto px-4'>
            <div className='flex justify-between  items-center w-2/3 ml-auto'>
              <ul className='flex flex-row gap-3 justify-end  items-center'>
                {siteSettings?.schedule?.map((item: any, idx: number) => {
                  return (
                    <li key={idx} className='group list-none'>
                      <span className='text-sm font-medium text-white group-hover:text-yellow-500 flex gap-1  items-center'>
                        <span className='text-base font-medium  group-hover:text-yellow-500 flex gap-1 w-8 h-8 bg-transparent rounded-full border group-hover:border-yellow-500 items-center justify-center'>
                          <img src={urlForImage(item.image).url()} alt={item.image} width={800} height={800}  className='h-6 w-6' />
                        </span> {item.text}
                      </span>
                    </li>
                  )
                })}
              </ul>
              <ul className='flex flex-row gap-3 justify-end lg:-mt-6'>
                {siteSettings?.socialicons?.map((item: any, idx: number) => {
                  return (
                    <li key={idx}>
                      <Link href={item?.link} className='text-base font-normal   flex  w-8 h-8 bg-transparent   border-2 border-transparent rounded-full  hover:border-yellow-700 items-center justify-center'>
                        <img src={urlForImage(item.image).url()} alt={item.title} width={800} height={800}  className=' rounded-full w-5 h-5 '  />
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
                
                  <Link href="/">
           
                    <Image src={siteSettings?.logo?.asset?.url} alt={`logo`} width={800} height={800}  className='md:w-1/2 w-full mx-auto relative z-50' />
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




