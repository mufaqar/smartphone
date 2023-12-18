import Image from 'next/image'
import React from 'react'
import client from '@/sanity/client';
import { motion } from "framer-motion";
import Link from 'next/link';
import { FaMobileAlt } from "react-icons/fa";

const Services = ({ tutorials  }) => {
  return (
    <section className='bg-blue-50/40 lg:py-16 py-4' id='services'>
      <div className='container mx-auto px-4'>
        <h2 className='md:text-4xl text-3xl font-bold uppercase text-center Raleway'>
          OUR SERVICES
        </h2>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay:0.2,
            x:{type:"spring",stiffness:60},
            opacity:{duration:1},
            ease:"easeIn",
            duration:1,
          }}
          className='grid md:grid-cols-4 grid-cols-1 gap-7 lg:mt-10 mt-6'>
          {tutorials.map((item:any, idx:any) => (
            <div className='group shadow-lg' key={idx}>
              <div className='bg-white relative'>
              <Image src={item.image} alt='service/1.png' width={225} height={189} className='w-full' />
                <span className="text-yellow-600 group-hover:text-white bg-white group-hover:bg-yellow-600 text-5xl flex items-center justify-center shadow-md absolute bottom-3 left-1/2 -translate-x-1/2 p-2 w-20 h-20 rounded-full transition duration-300 ease-in-out">
                  <FaMobileAlt />
                </span>
              </div>
              <div className='bg-white py-10 px-5'>
                <Link href={`/services/${item.slug.current}`} >
                 <h1 className='text-xl font-bold text-center Raleway mb-5'>{item.title}</h1> 
                </Link>
                <p className='text-base font-normal text-center Raleway mb-5'>
                  {item.description}
                </p>
                <Link href={`/services/${item.slug.current}`} className='block text-base font-semibold text-white Raleway bg-yellow-600 group-hover:bg-white group-hover:text-yellow-600 border-2 border-yellow-600 px-6 py-1.5 w-fit mx-auto transition duration-300 ease-in-out'>
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export async function getStaticProps() {
  const tutorials = await client.fetch(`*[_type == "tutorials"]`);
  return {
    props: {
      tutorials,
    },
  };
}

export default Services;
