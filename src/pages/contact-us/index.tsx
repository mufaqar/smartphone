import PageBanner from '@/components/page-banner'
import Link from 'next/link';
import React from 'react'
import { FaGlobeAfrica, FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";

function Contact_Us() {
    return (
        <>
            <PageBanner
                Custm_BG="bg-[url('/images/about.jpg')]"
                title="Contact Us" />
            <section className="mb-32">
                <div className="relative h-[500px] overflow-hidden">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12552.233064615843!2d176.2507699974189!3d-38.1388381229038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6c277b70381649%3A0x193c03a4dd2ee1bd!2s1191%20Eruera%20Street%2C%20Rotorua%203010%2C%20New%20Zealand!5e0!3m2!1sen!2s!4v1702976204503!5m2!1sen!2s"
                        className="left-0 top-0 h-full w-full" frameBorder={0}
                        allowFullScreen></iframe>
                </div>
                <div className="container px-6 md:px-12">
                    <div className="block rounded-lg bg-[hsla(0,0%,100%,0.7)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
                        <div className="mb-12 grid gap-x-6 md:grid-cols-2 lg:grid-cols-4">
                            <div className="mx-auto mb-12 text-center lg:mb-0">
                                <span className="block mx-auto mb-6 h-8 w-8 text-yellow-500">
                                    <FaGlobeAfrica className="text-2xl" />
                                </span>
                                <h6 className="text-base font-medium Raleway">
                                    New Zealand
                                </h6>
                            </div>
                            <div className="mx-auto mb-12 text-center lg:mb-0">
                                <span className="block mx-auto mb-6 h-8 w-8 text-yellow-500">
                                    <FaMapMarkerAlt className="text-2xl" />
                                </span>
                                <h6 className="text-base font-medium Raleway">
                                    1191 Eruera Street Rotorua. 3010
                                </h6>
                            </div>
                            <div className="mx-auto mb-6 text-center md:mb-0">
                                <span className="block mx-auto mb-6 h-8 w-8 text-yellow-500">
                                    <FaPhoneAlt className="text-2xl" />
                                </span>
                                <Link href="tel:+64-7-3477044" className="text-base font-medium Raleway">
                                    +64-7-3477044
                                </Link>
                            </div>
                            <div className="mx-auto text-center">
                                <span className="block mx-auto mb-6 h-8 w-8 text-yellow-500">
                                    <FaRegEnvelope className="text-2xl" />
                                </span>
                                <Link href="mailto:conzadmin@smartphonesrepair.co.nz" className="text-base font-medium Raleway">
                                    conzadmin@smartphonesrepair.co.nz.
                                </Link>
                            </div>
                        </div>
                        <div className="mx-auto max-w-[700px]">
                            <form>
                                <div className="relative mb-6">
                                    <input type="text"
                                        className="peer block min-h-[auto] w-full rounded border bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear peer-focus:text-yellow-500 motion-reduce:transition-none placeholder:opacity-0"
                                        id="fname"
                                        name="fname"
                                        placeholder='First Name' />
                                    <label
                                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-yellow-500 motion-reduce:transition-none"
                                        htmlFor="fname">Name
                                    </label>
                                </div>
                                <div className="relative mb-6">
                                    <input type="email"
                                        className="peer block min-h-[auto] w-full rounded border bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear peer-focus:text-yellow-500 motion-reduce:transition-none placeholder:opacity-0"
                                        id="email"
                                        name="email"
                                        placeholder='Email address' />
                                    <label
                                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-yellow-500 motion-reduce:transition-none"
                                        htmlFor="email">Email address
                                    </label>
                                </div>
                                <div className="relative mb-6">
                                    <input type="phone"
                                        className="peer block min-h-[auto] w-full rounded border bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear peer-focus:text-yellow-500 motion-reduce:transition-none placeholder:opacity-0"
                                        id="phone"
                                        name="phone"
                                        placeholder='Phone' />
                                    <label
                                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-yellow-500 motion-reduce:transition-none"
                                        htmlFor="email">Phone
                                    </label>
                                </div>
                                <div className="relative mb-6">
                                    <textarea
                                        className="peer block min-h-[auto] w-full rounded border bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear motion-reduce:transition-none  placeholder:opacity-0"
                                        id="exampleFormControlTextarea1" rows={5} placeholder="Your message"></textarea>
                                    <label htmlFor="exampleFormControlTextarea1"
                                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-yellow-500 motion-reduce:transition-none">Message</label>
                                </div>
                                <button type="submit"
                                    className="inline-block w-full rounded bg-yellow-500 hover:bg-black px-6 pt-2.5 pb-2 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out">
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact_Us