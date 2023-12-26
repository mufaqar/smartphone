import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { MdOutlineDateRange } from 'react-icons/md'
import { RiAdminFill } from 'react-icons/ri'
import Image from 'next/image'

export const data = [
    {
        title: "Smartphones, Laptops, Computers, Peripherals, Repairs & Sales",
        img: "/images/blog1.avif",
        category: 'iPhone Repairs'
    },
    {
        title: "IC, Chip Replacement",
        img: "/images/blog1.avif",
        category: 'Laptop Repairs'
    },
    {
        title: "Smartphones and Computers Repairing Rotorua",
        img: "/images/blog1.avif",
        category: 'signs of computer hacked'
    },
    {
        title: "COMPUTERS REPAIR SERVICES",
        img: "/images/blog1.avif",
        category: 'Computers Repairs'
    },
    {
        title: "Expert Xbox Repair Services: Repairs Xbox: Rotorua",
        img: "/images/blog1.avif",
        category: 'Laptops and iPhone Repairs'
    },
    {
        title: "Fast and Reliable iPhone Repair Rotorua",
        img: "/images/blog1.avif",
        category: 'iPad Repairs'
    },
    {
        title: "CLICK TO FIND FREE QUOTE",
        img: "/images/blog1.avif",
        category: 'iPhone Repairs'
    },
    {
        title: "COMPUTERS REPAIR SERVICES",
        img: "/images/blog1.avif",
        category: 'Laptop Repairs'
    },
    {
        title: "COMPUTERS REPAIR SERVICES",
        img: "/images/blog1.avif",
        category: 'signs of computer hacked'
    },

]

function Blog_Sec() {
    return (
        <section className='py-16'>
            <div className='container mx-auto px-4'>
                <h3 className='md:text-4xl text-3xl font-bold uppercase text-black text-center Raleway mb-7'>
                    Blogs
                </h3>
            </div>
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
                    data.map((item, idx) => {
                        return (
                            <div key={idx} className="bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                                <div>
                                    <Image
                                        className=""
                                        src={item.img}
                                        alt=""
                                        width={510}
                                        height={340}
                                    />
                                </div>
                                <div className="flex flex-col justify-between py-7 px-4 h-52">
                                    <div>
                                        <h5 className="mb-2 text-lg text-center leading-tight text-neutral-800 Raleway">
                                            <Link href="#">
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

export default Blog_Sec