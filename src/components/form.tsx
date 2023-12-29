import React from 'react'
import { IoLocation } from "react-icons/io5";
import { PiCardholder } from "react-icons/pi";
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import { motion } from "framer-motion";
import Link from 'next/link';

function Form() {
    return (
        <section className=''>
            <div className="relative h-[350px] bg-[url('/images/contact.jpg')] overflow-hidden bg-cover bg-center bg-no-repeat bg-blend-multiply bg-black/50 flex items-center justify-center">
            </div>
            <div className="container mx-auto px-6 md:px-8">
                <div className="block rounded-none bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-24 md:px-12 -mt-[80px] backdrop-blur-[30px] ">
                    <div className="flex md:flex-row flex-col gap-7 items-center">
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
                            }}
                            className="md:w-1/2 w-full">
                            <h3 className='md:text-4xl text-3xl font-bold  text-black Raleway mb-7'>
                            Request a Free Quote
                            </h3>
                            <form className='grid grid-cols-1 gap-5'>
                                <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                                    <div className="relative">
                                        <input type="text"
                                            className="Raleway border placeholder:text-black text-gray-900 bg-transparent text-base rounded-none focus:ring-0 focus:outline-0 block w-full px-5 py-2.5 peer min-h-[auto] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-0 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                                            id="fname"
                                            name="fname"
                                            placeholder='First Name' />
                                        <label
                                            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out -translate-y-[0.9rem] peer-focus:scale-[0.9] peer-focus:opacity-100 opacity-0 peer-focus:text-black peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                                            htmlFor="fname">First Name
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <input type="text"
                                            className="Raleway border placeholder:text-black text-gray-900 bg-transparent text-base rounded-none focus:ring-0 focus:outline-0 block w-full px-5 py-2.5 peer min-h-[auto] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-0 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                                            id="lname"
                                            name="lname"
                                            placeholder='Last Name' />
                                        <label
                                            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out -translate-y-[0.9rem] peer-focus:scale-[0.9] peer-focus:opacity-100 opacity-0 peer-focus:text-black peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                                            htmlFor="lname">Last Name
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <input type="email"
                                            className="Raleway border placeholder:text-black text-gray-900 bg-transparent text-base rounded-none focus:ring-0 focus:outline-0 block w-full px-5 py-2.5 peer min-h-[auto] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-0 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                                            id="email"
                                            name="email"
                                            placeholder='Email' />
                                        <label
                                            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out -translate-y-[0.9rem] peer-focus:scale-[0.9] peer-focus:opacity-100 opacity-0 peer-focus:text-black peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                                            htmlFor="email">Email
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <input type="tel"
                                            className="Raleway border placeholder:text-black text-gray-900 bg-transparent text-base rounded-none focus:ring-0 focus:outline-0 block w-full px-5 py-2.5 peer min-h-[auto] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-0 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                                            id="phone"
                                            name="phone"
                                            placeholder='Phone' />
                                        <label
                                            className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out -translate-y-[0.9rem] peer-focus:scale-[0.9] peer-focus:opacity-100 opacity-0 peer-focus:text-black peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none "
                                            htmlFor="phone">Phone
                                        </label>
                                    </div>
                                </div>
                                <div className="relative">
                                    <textarea
                                        className="Raleway border placeholder:text-black text-gray-900 bg-transparent text-base rounded-none focus:ring-0 focus:outline-0 block w-full px-5 py-2.5 peer min-h-[auto] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-0 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                                        id="message" rows={4}></textarea>
                                    <label htmlFor="message"
                                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out -translate-y-[0.9rem] peer-focus:scale-[0.9] peer-focus:opacity-100 opacity-0 peer-focus:text-black peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none ">Message</label>
                                </div>
                                <button className={`text-lg Raleway bg-yellow-500 px-10 py-2.5 font-medium text-white hover:bg-black rounded-none`}>
                                    Submit
                                </button>
                            </form>
                        </motion.div>
                        <div className="md:w-1/2 w-full">
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-10 justify-between">
                                <motion.div
                                    initial={{ x: 100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.2,
                                        x: { type: "spring", stiffness: 60 },
                                        opacity: { duration: 1 },
                                        ease: "easeIn",
                                        duration: 1,
                                    }}
                                    className="flex items-start justify-start">
                                    <div className="inline-block bg-yellow-500 p-2 text-white">
                                        <PiCardholder className="text-xl" />
                                    </div>
                                    <div className="ml-2">
                                        <p className="mb-1 font-bold ">
                                            Send a mail
                                        </p>
                                        <Link href="#" className="text-sm text-black">
                                            info@smartphonesrepair.
                                        </Link>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ x: 100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.2,
                                        x: { type: "spring", stiffness: 60 },
                                        opacity: { duration: 1 },
                                        ease: "easeIn",
                                        duration: 1,
                                    }}
                                    className="flex items-start justify-start">
                                    <div className="inline-block bg-yellow-500 p-2 text-white">
                                        <IoLocation className="text-xl" />
                                    </div>
                                    <div className="ml-2">
                                        <p className="mb-1 font-bold ">
                                            Address
                                        </p>
                                        <span className="text-sm text-black">
                                            1191 Eruera Street Rotorua. 3010
                                        </span>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ x: 100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.2,
                                        x: { type: "spring", stiffness: 60 },
                                        opacity: { duration: 1 },
                                        ease: "easeIn",
                                        duration: 1,
                                    }}
                                    className="flex items-start justify-start">
                                    <div className="inline-block bg-yellow-500 p-2 text-white">
                                        <FaEnvelope className="text-xl" />
                                    </div>
                                    <div className="ml-2">
                                        <p className="mb-1 font-bold ">
                                            Technical support
                                        </p>
                                        <Link href="#" className="text-sm text-black">
                                            conzadmin@smartphonesrepair.co.nz
                                        </Link>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ x: 100, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.2,
                                        x: { type: "spring", stiffness: 60 },
                                        opacity: { duration: 1 },
                                        ease: "easeIn",
                                        duration: 1,
                                    }}
                                    className="flex items-start justify-start">
                                    <div className="inline-block bg-yellow-500 p-2 text-white">
                                        <FaPhone className="text-xl" />
                                    </div>
                                    <div className="ml-2">
                                        <p className="mb-1 font-bold ">
                                            Mobile
                                        </p>
                                        <Link href="#" className="text-sm text-black">
                                            +64-7-3477044
                                        </Link>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Form

export const data = [
    {
        title: "1191 Eruera Street Rotorua. 3010",
        icon: <IoLocation />,
    },
    {
        title: "info@smartphonesrepair. <br/> conzadmin@smartphonesrepair.co.nz",
        icon: <PiCardholder />,
    },
    {
        title: "+64-7-3477044",
        icon: <FaPhone />,
    },

]