import React, { useState } from 'react';
import Link from 'next/link';
import { client } from '../../../sanity/lib/client'
import { motion } from "framer-motion";
import Image from 'next/image';
import { FaMobileAlt } from "react-icons/fa";
import { urlForImage } from '../../../sanity/lib/image'
function Services({ servicesdata }) {
    return (
        <section className='bg-blue-50 py-16' id='Services'>
            <div className='container mx-auto px-4'>
                <h2 className='md:text-4xl text-3xl font-bold uppercase text-center Raleway'>
                    OUR SERVICES
                </h2>
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
                    }} className='grid md:grid-cols-4 grid-cols-1 gap-7 mt-10'>

                    {servicesdata.map((item: any, idx: any) => {
                        return (
                            <div className='group shadow-lg' key={idx}>
                                <div className='bg-white relative'>

                                    <img className='w-full h-36' width={225} height={189} src={urlForImage(item.mainImage).url()} alt={item.title} />
                                    {/* <Image src={item.image} alt='service/1.png' width={225} height={189} className='w-full' /> */}
                                    <span className="text-yellow-600 group-hover:text-white bg-white group-hover:bg-yellow-600 text-5xl flex items-center justify-center shadow-md absolute bottom-3 left-1/2 -translate-x-1/2 p-2 w-20 h-20 rounded-full transition duration-300 ease-in-out">
                                        <FaMobileAlt />
                                    </span>
                                </div>
                                <div className='bg-white py-10 px-5'>
                                    <h3 className='text-xl font-bold text-center Raleway mb-5'>
                                        {item.title}
                                    </h3>
                                    <Link href={`/servicesdata/${item.slug.current}`} className='block text-base font-semibold text-white Raleway bg-yellow-600 group-hover:bg-white group-hover:text-yellow-600 border-2 border-yellow-600 px-6 py-1.5 w-fit mx-auto transition duration-300 ease-in-out'>
                                        Read more
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export async function getStaticProps() {
    const servicesdata = await client.fetch(`*[_type == "services"]`);
    return {
        props: {
            servicesdata,
        },
    };
}

export default Services