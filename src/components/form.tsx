import React from 'react'
import { IoLocation } from "react-icons/io5";
import { PiCardholder } from "react-icons/pi";
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import { motion } from "framer-motion";
import Link from 'next/link';

function Form() {
    return (
        // <section className='py-16 bg-blue-50'>
        //     <div className="container mx-auto px-4 ">
        //         <div className='grid md:grid-cols-2 grid-cols-1 gap-7 '>
        //             <div className='flex flex-col gap-5'>
        //                 <h2 className='md:text-4xl text-3xl font-bold uppercase Raleway text-black mb-5'>
        //                     BOOK APPOINTMENT
        //                 </h2>
        //                 {data.map((item, idx) => {
        //                     return <div key={idx} className=''>
        //                         <div className='w-fit flex items-center gap-2 group'>
        //                             <span className='md:text-2xl p-2 rounded-full bg-black text-white group-hover:bg-yellow-500 transition duration-300 ease-in-out'>
        //                                 {item.icon}
        //                             </span>
        //                             <motion.span
        //                                 initial={{ x: -100, opacity: 0 }}
        //                                 animate={{ x: 0, opacity: 1 }}
        //                                 transition={{
        //                                     delay: 0.2,
        //                                     x: { type: "spring", stiffness: 60 },
        //                                     opacity: { duration: 1 },
        //                                     ease: "easeIn",
        //                                     duration: 1,
        //                                 }} className=' font-bold lg:text-lg group-hover:text-yellow-500'>
        //                                 <Link href="#">
        //                                     <span dangerouslySetInnerHTML={{ __html: item.title }} />
        //                                 </Link>
        //                             </motion.span>
        //                         </div>
        //                     </div>;
        //                 })}
        //                 <ul className='flex flex-wrap gap-3'>
        //                     <li>
        //                         <Link
        //                             href="#!"
        //                             type="button"
        //                             className="h-9 w-9 bg-yellow-500 rounded-full border-2 border-yellow-500 text-white hover:text-yellow-500 transition duration-150 ease-in-out hover:bg-white"
        //                             data-te-ripple-init=""
        //                             data-te-ripple-color="light"
        //                         >
        //                             <svg
        //                                 xmlns="http://www.w3.org/2000/svg"
        //                                 className="mx-auto h-full w-4"
        //                                 fill="currentColor"
        //                                 viewBox="0 0 24 24"
        //                             >
        //                                 <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        //                             </svg>
        //                         </Link>
        //                     </li>
        //                     <li>
        //                         <Link
        //                             href="#!"
        //                             type="button"
        //                             className="h-9 w-9 bg-yellow-500 rounded-full border-2 border-yellow-500 text-white hover:text-yellow-500 transition duration-150 ease-in-out hover:bg-white"
        //                             data-te-ripple-init=""
        //                             data-te-ripple-color="light"
        //                         >
        //                             <svg
        //                                 xmlns="http://www.w3.org/2000/svg"
        //                                 className="mx-auto h-full w-4"
        //                                 fill="currentColor"
        //                                 viewBox="0 0 24 24"
        //                             >
        //                                 <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        //                             </svg>
        //                         </Link>
        //                     </li>
        //                     <li>
        //                         <Link
        //                             href="#!"
        //                             type="button"
        //                             className=" h-9 w-9 bg-yellow-500 rounded-full border-2 border-yellow-500 text-white hover:text-yellow-500 transition duration-150 ease-in-out hover:bg-white"
        //                             data-te-ripple-init=""
        //                             data-te-ripple-color="light"
        //                         >
        //                             <svg
        //                                 xmlns="http://www.w3.org/2000/svg"
        //                                 className="mx-auto h-full w-4"
        //                                 fill="currentColor"
        //                                 viewBox="0 0 24 24"
        //                             >
        //                                 <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        //                             </svg>
        //                         </Link>
        //                     </li>
        //                     <li>
        //                         <Link
        //                             href="#!"
        //                             type="button"
        //                             className=" h-9 w-9 bg-yellow-500 rounded-full border-2 border-yellow-500 text-white hover:text-yellow-500 transition duration-150 ease-in-out hover:bg-white"
        //                             data-te-ripple-init=""
        //                             data-te-ripple-color="light"
        //                         >
        //                             <svg
        //                                 xmlns="http://www.w3.org/2000/svg"
        //                                 className="mx-auto h-full w-4"
        //                                 fill="currentColor"
        //                                 viewBox="0 0 24 24"
        //                             >
        //                                 <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        //                             </svg>
        //                         </Link>
        //                     </li>

        //                 </ul>
        //             </div>
        //             <form className='grid grid-cols-1 gap-7'>
        //                 <div className='grid md:grid-cols-2 grid-cols-1 gap-7'>
        //                     <input
        //                         type="text"
        //                         id="fname"
        //                         aria-describedby="helper-text-explanation"
        //                         className={`Raleway border focus:border-black placeholder:text-black text-gray-900 bg-transparent text-base rounded-lg focus:ring-0 focus:outline-0 block  w-full px-5 py-2.5`}
        //                         placeholder="Enter First Name"
        //                     />

        //                     <input
        //                         type="text"
        //                         id="lname"
        //                         aria-describedby="helper-text-explanation"
        //                         className={`Raleway border focus:border-black placeholder:text-black text-gray-900 bg-transparent text-base rounded-lg focus:ring-0 focus:outline-0 block  w-full px-5 py-2.5`}
        //                         placeholder="Enter Last Name"
        //                     />

        //                     <input
        //                         type="email"
        //                         id="email"
        //                         aria-describedby="helper-text-explanation"
        //                         className={`Raleway border focus:border-black placeholder:text-black text-gray-900 bg-transparent text-base rounded-lg focus:ring-0 focus:outline-0 block  w-full px-5 py-2.5`}
        //                         placeholder="Enter Email.."
        //                     />

        //                     <input
        //                         type="tel"
        //                         id="phone"
        //                         aria-describedby="helper-text-explanation"
        //                         className={`Raleway border focus:border-black placeholder:text-black text-gray-900 bg-transparent text-base rounded-lg focus:ring-0 focus:outline-0 block  w-full px-5 py-2.5`}
        //                         placeholder="Enter Your Phone"
        //                     />
        //                 </div>
        //                 <textarea
        //                     id="message"
        //                     rows={6}
        //                     className={`Raleway border focus:border-black placeholder:text-black text-gray-900 bg-transparent text-base rounded-lg focus:ring-0 focus:outline-0 block  w-full px-5 py-2.5`}
        //                     placeholder="Message"
        //                     defaultValue={""}
        //                 />
        //                 <div className='text-start'>
        //                     <button className={`text-lg Raleway bg-yellow-500 px-10 py-2.5 font-bold text-white hover:bg-black hover:-translate-y-4 rounded-lg`}>Submit</button>
        //                 </div>
        //             </form>
        //         </div>

        //     </div>
        // </section>
        <section className='py-16'>
            <div className="relative h-[350px] bg-[url('/images/contact.jpg')] overflow-hidden bg-cover bg-center bg-no-repeat bg-blend-multiply bg-black/50 flex items-center justify-center">
            </div>
            <div className="container mx-auto px-6 md:px-8">
                <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-24 md:px-12 -mt-[80px] backdrop-blur-[30px] ">
                    <div className="flex md:flex-row flex-col gap-7 items-center">
                        <div className="md:w-1/2 w-full">
                            <h3 className='md:text-4xl text-3xl font-bold uppercase text-black Raleway mb-7'>
                                BOOK APPOINTMENT
                            </h3>
                            <form className='grid grid-cols-1 gap-5'>
                                <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                                    <div className="relative">
                                        <input type="text"
                                            className="Raleway border placeholder:text-black text-gray-900 bg-transparent text-base rounded-lg focus:ring-0 focus:outline-0 block w-full px-5 py-2.5 peer min-h-[auto] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-0 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
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
                                            className="Raleway border placeholder:text-black text-gray-900 bg-transparent text-base rounded-lg focus:ring-0 focus:outline-0 block w-full px-5 py-2.5 peer min-h-[auto] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-0 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
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
                                            className="Raleway border placeholder:text-black text-gray-900 bg-transparent text-base rounded-lg focus:ring-0 focus:outline-0 block w-full px-5 py-2.5 peer min-h-[auto] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-0 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
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
                                            className="Raleway border placeholder:text-black text-gray-900 bg-transparent text-base rounded-lg focus:ring-0 focus:outline-0 block w-full px-5 py-2.5 peer min-h-[auto] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-0 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
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
                                        className="Raleway border placeholder:text-black text-gray-900 bg-transparent text-base rounded-lg focus:ring-0 focus:outline-0 block w-full px-5 py-2.5 peer min-h-[auto] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-0 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                                        id="message" rows={4}></textarea>
                                    <label htmlFor="message"
                                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out -translate-y-[0.9rem] peer-focus:scale-[0.9] peer-focus:opacity-100 opacity-0 peer-focus:text-black peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none ">Message</label>
                                </div>
                                <button className={`text-lg Raleway bg-yellow-500 px-10 py-2.5 font-medium text-white hover:bg-black hover:-translate-y-4 rounded-lg`}>
                                    Submit
                                </button>
                            </form>
                        </div>
                        <div className="md:w-1/2 w-full">
                            <div className="grid md:grid-cols-2 grid-cols-1 gap-7 justify-between">
                                <div className="flex items-start justify-start">
                                    <div className="inline-block rounded-md bg-yellow-500 p-2 text-white">
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
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="inline-block rounded-md bg-yellow-500 p-2 text-white">
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
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="inline-block rounded-md bg-yellow-500 p-2 text-white">
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
                                </div>
                                <div className="flex items-start justify-start">
                                    <div className="inline-block rounded-md bg-yellow-500 p-2 text-white">
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
                                </div>
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