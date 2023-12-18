import React, { useState } from 'react';
import Link from 'next/link';
import client from '@/sanity/client'
import { motion } from "framer-motion";
import Image from 'next/image';

function Blogs({ blogsdata }) {
  return (
    <section className='py-16'>
      <div className='container mx-auto px-4'>
        <h2 className='md:text-4xl text-3xl font-bold uppercase text-center Raleway text-black mb-10'>
         Blogs
        </h2>
      </div>
      <motion.div
          initial={{x:-100, opacity:0}}
          animate={{x:0, opacity:1}}
          transition={{
              delay:0.2,
              x:{type:"spring",stiffness:60},
              opacity:{duration:1},
              ease:"easeIn",
              duration:1,
          }} className='lg:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-7 mt-10 container mx-auto px-4'>
        {
          blogsdata.map((item:any, idx:any) => {
            return (

              <div key={idx} className="block rounded-lg  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div >
                  <img
                    className="rounded-t-lg  hover:-translate-y-1 lg:hover:scale-110   duration-300"
                    src={item.image}
                    alt=""
                    width={510}
                    height={340}
                  />
                </div>
                <div className="flex flex-col justify-between py-7 px-4 h-52">
                  <div>
                    <h5 className="mb-2 text-lg text-center leading-tight text-neutral-800 Raleway">
                      <Link  href={`/blogs/${item.slug.current}`}>
                        {item.title}
                      </Link>
                    </h5>
                    <p className="mb-4 text-center text-base text-neutral-600 Raleway">
                      <strong>Category </strong>:  <Link href="#"> {item.category}</Link>
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
      </motion.div>
    </section>
  )
}

export async function getStaticProps() {
  const blogsdata = await client.fetch(`*[_type == "blogsdata"]`);
  return {
    props: {
      blogsdata,
    },
  };
}

export default Blogs








