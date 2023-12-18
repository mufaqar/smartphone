
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { RiMapPinLine } from "react-icons/ri";
import { PiCardholder } from "react-icons/pi";
import { FaPhone } from "react-icons/fa6";
import { FcGlobe } from "react-icons/fc";
import { motion } from "framer-motion";
import PageBanner from '@/components/page-banner';

function index() {
    return (
        <>
        <PageBanner
        Custm_BG="bg-[url('/images/about.jpg')]"
        title="iPhone Repair" />
        <section className='container mx-auto px-4 bg-white mt-10 mb-10 rounded-md shadow-[0px_0px_15px_0px_rgb(0,0,0,10%)]'>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                    delay: 0.2,
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    duration: 3,
                }} className='text-left px-4 pb-16  '>
                <h1 className='font-[black] text-2xl pt-6 pb-8 text-[#444444]'>iPhone, iPad and MacBook Repair</h1>
                <Link href={'/'} className='text-amber-500 font-[light] lg:text-lg hover:text-slate-900 duration-500 '>Get an Online Quote</Link>
                <div className='lg:flex lg:space-x-16 '>
                    <div className='pt-6'>
                        <h1 className='font-[black] lg:text-2xl  pt-6 pb-4 text-[#444444]'>iPhone, iPad and MacBook Repair</h1>
                        <h2 className='font-[black] lg:text-2xl  pt-6 pb-4 text-[#444444]'>iPhone, iPad and MacBook Repair- HI-TECH LAB</h2>
                        <h3 className='font-[black] lg:lg:text-lg  pt-6 pb-4 text-[#444444]'>BUDGET COMPUTERS AND KIWI MOBILES NEW ZEALAND</h3>
                        <p className='font-[light]   lg:text-lg  leading-normal pb-4  text-[#444444]'>Several options are available if you have an iPhone that needs to be repaired. You can fix it at our Rotorua store or <Link className='text-amber-500 lg:text-lg hover:text-slate-900 font-[light] duration-500 ' href={'/'}> ship your device to us. Sign up for our free online portal to check your shipped device's latest status and track it.</Link> The cost of repairs will vary depending on the model and type of damage.</p>
                        <Link className='text-amber-500 lg:text-lg hover:text-slate-900 font-[light] duration-500 ' href={'/'}>Check online repair prices, for example, iPhone 13 broken screen, iPhone 7 broken screen, iPhone se repair, iPhone battery replacement, iPhone back glass repair, iPhone charging slot is broken.</Link>
                        <p className='font-[light] pb-4  lg:text-lg text-[#444444] pt-4   leading-normal'>Finding a reliable and trustworthy repair service is essential if you have a damaged iPhone. These services can fix various issues, including cracked screens, battery replacements, and water damage. Prices for iPhone repairs vary depending on the model and type of repair needed. It is always best to research before choosing a repair service to ensure they have experience repairing iPhones and using high-quality replacement parts.</p>
                        <h2 className='font-[roboto] text-md   pb-4 text-[#444444]'>iPad Repair</h2>
                        <p className='font-[light]   lg:text-lg  leading-normal pb-4  text-[#444444]'>IPad repair is also available at many service providers. Repair shops like <Link className='text-amber-500 lg:text-lg hover:text-slate-900 font-[light] duration-500 ' href={'/'}> BUDGET COMPUTERS AND KIWI MOBILES </Link> offer iPad screen repair services for different models like iPad Pro, iPad Air, and iPad Mini at affordable prices. Battery service is also available.</p>
                        <h2 className='font-[roboto] text-md   pb-4 text-[#444444]'>Battery Issues</h2>
                        <p className='font-[light]   lg:text-lg  leading-normal pb-4  text-[#444444]'>If your iPhone's battery life is not up to the mark, you may need a replacement. A battery replacement can help improve your phone's performance and lifespan. Apple offers a battery replacement program for eligible iPhone models. The battery replacement cost varies depending on your iPhone's model and whether or not it's covered under warranty.<br /><br />If your iPhone is damaged or not working correctly, BUDGET COMPUTERS AND KIWI MOBILES repair service can help you get it back up and running. Professional repair services offer quick turnaround times and can fix various issues, including dead batteries, cracked screens, and water damage. We also provide general assessment fees to diagnose the problem with your device before proceeding with the repair. With an experienced technician's help, you can fix your iPhone quickly and save money by avoiding needing a replacement.<br /><br />I'd like to point out that finding a reliable service provider to handle all issues is essential regarding iPhone repair. If you're having problems with your device, such as a cracked screen or battery issues, could you bring it into the store for an accurate quote on the repair? Some repair shops also offer MacBook and laptop repairs for added convenience. It's always best to get a professional opinion before attempting DIY fixes that could worsen the problem.</p>
                        <h2 className='font-[roboto] text-md  text-[#444444] pb-4'>Water Damage</h2>
                        <p className='font-[light]   lg:text-lg text-[#444444]  leading-normal'>Water damage is a common issue faced by iPhone users. This can cause many problems, such as poor signal or connectivity, loss of vibration, not charging, and even camera damage. It is essential to take action immediately if your iPhone has been exposed to water. BUDGET COMPUTERS AND KIWI MOBILES offer fast iPhone repair services for all water damage-related issues. They can remove moisture from the device's internal circuitry and give your iPhone the best chance of recovering without extensive repairs.</p>
                        <Image width={500}
                            height={500} src='/images/macbook.jpeg ' alt="image" className='w-64 h-48' />
                        <h2 className='font-[roboto] text-md   pb-4 text-[#444444]'>Conclusion</h2>
                        <p className='font-[light]   lg:text-lg text-[#444444]  leading-normal'>When it comes to iPhone repairs, it's always best to seek the assistance of professional technicians. We have extensive experience and knowledge in resolving various issues with iPhones, whether a dead battery, cracked screen, or malfunctioning software. Skilled technicians can provide affordable and quick solutions so your iPhone will be ready to use soon. Please don't let a damaged iPhone damper your productivity when experts can help you.</p>

                    </div>

                    <div className='lg:pr-28 pt-6 '>

                        <h2 className='font-[roboto] text-md  text-[#444444] pb-4 pt-6' >CONTACT INFO</h2>
                        <li className='list-none lg:text-2xl text-blue-600 flex  items-center  pb-4 '> <RiMapPinLine /><span className='font-[light] pl-2 lg:whitespace-nowrap  lg:text-lg text-[#444444]  leading-normal'>1191 Eruera Street, Rotorua 3010, NZ</span></li>
                        <li className='list-none flex lg:text-xl   text-blue-600 items-center pb-4'>  <FaPhone /><span className='font-[light] pl-2  lg:text-lg text-[#444444]  leading-normal'> 0064-7-3477044</span></li>
                        <li className='list-none flex lg:text-xl  text-blue-600 items-center  pb-4'> <PiCardholder /><span className='font-[light] pl-2  lg:text-lg text-[#444444]  leading-normal'>info@smartphonesrepair.co.nz</span></li>
                        <li className='list-none flex lg:text-xl  text-blue-600 items-center '> <FcGlobe /><span className='font-[light] pl-2  lg:text-lg text-[#444444]  leading-normal'> www.smartphonesrepair.co.nz</span></li>
                    </div>

                </div>
            </motion.div>
        </section>
        </>
    )
}

export default index