import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
import Link from 'next/link';
import { FaMobileAlt } from "react-icons/fa";
import { urlForImage } from '../../sanity/lib/image';


function Services({ data }: any) {

  return (
    <>
      <section className=' py-16' id='services'>
        <div className='container mx-auto px-4'>
          <h1 className='text-center font-bold text-5xl'>OUR SERVICES</h1>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }} className='grid md:grid-cols-3 grid-cols-1 gap-7 mt-10'>

            {data?.map((item: any, idx: number) => {
              return (
                <div className='group shadow-lg' key={idx}>
                  <div className='bg-white relative'>
                    <Image src={urlForImage(item.mainImage).url()} alt={item.title} width={800} height={800} className='w-full max-h-[250px] ' />

                    <span className="text-yellow-600 group-hover:text-white bg-white   group-hover:bg-yellow-600 text-5xl flex items-center justify-center shadow-md absolute -bottom-8 left-1/2 -translate-x-1/2 p-1 w-20 h-20 rounded-full transition duration-300 ease-in-out">
                      {item.icon && (
                        <img src={urlForImage(item.icon).url()} alt={item.title} width={225} height={200} className=' w-20 h-20' />
                      )}
                    </span>
                  </div>
                  <div className='bg-white py-10 px-5'>
                    <h3 className='text-xl font-bold text-center Raleway mb-5'>
                      {item.title}
                    </h3>
                    <Link href={`/services/${item.slug.current}`} className='block text-base font-semibold text-white Raleway bg-yellow-600 group-hover:bg-white group-hover:text-yellow-600 border-2 border-yellow-600 px-6 py-1.5 w-fit mx-auto transition duration-300 ease-in-out'>
                      Read more
                    </Link>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Services

