import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

import { urlForImage } from '../../sanity/lib/image'

import Image from 'next/image'

function Blog_Sec({ data }: any) {
    return (
        <section className='py-16' id='blogsdata'>
            <h1 className='text-center font-bold text-5xl'>Latest Blogs</h1>
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
                }} className='container mx-auto px-4 grid md:grid-cols-3 grid-cols-1 gap-7 mt-10'>

                {
                    data?.map((item: any, idx: any) => {
                        return (
                            <div key={idx} className="bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                                <div>
                                    <img className='w-full h-72' width={225} height={189} src={urlForImage(item.mainImage).url()} alt={item.title} />
                                </div>
                                <div className="flex flex-col justify-between py-7 px-4 h-52">
                                    <div>
                                        <h5 className="mb-2 text-lg text-center text-black leading-tight text-neutral-800 Raleway">
                                            <Link href={`/blog/${item.slug.current}`} className='text-black'>
                                                {item.title}
                                            </Link>
                                        </h5>
                                        <p className="mb-4 text-center   text-base text-neutral-600 Raleway ">
                                            <strong>Category </strong>:  <Link href="#" className='text-black/70'> {item.category}</Link>
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

export default Blog_Sec