import React from 'react'
import { MdOutlineContentPasteSearch, MdPayments } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import { GrSystem } from "react-icons/gr";

import Form from './form';
import Link from 'next/link';
import { motion } from "framer-motion";
import Image from 'next/image';
function Facilities() {
  return (
    <>
      <section className='py-16 overflow-x-hidden'>
        <div className='container mx-auto px-3'>
          <div className='grid md:grid-cols-3 grid-cols-1 gap-7 px-5'>
            <div>
              <Image src="/images/services2.avif" alt='about' width={269} height={194} className='w-full h-full' />
            </div>
            <div className='md:col-span-2'>
              <div>
                <h3 className='md:text-4xl text-3xl font-bold uppercase text-black Raleway mb-7'>
                  About Us
                </h3>
                <p className='text-lg font-medium text-black mb-5'>
                  Budget Computers and Kiwi Mobiles are locally owned and operated stores in Rotorua, New Zealand. We specialize in offering to repair a wide range of budget-friendly computers, mobile phones, Gaming consoles and related accessories. The store is known for its customer care and personalised services, helping customers find the best products according to their needs while staying within their budget. Budget Computers and Kiwi Mobiles staff members have extensive knowledge of the products to repair in a HI-TECH LAB, ensuring that customers receive quality support and assistance. We use the latest tools and machines to diagnose a device and make quality repairs.
                </p>
                <Link href="/about" className='block text-lg font-semibold text-white Raleway bg-yellow-500 hover:bg-white hover:text-yellow-500 border-2 border-yellow-500 hover:border-white px-10 py-2.5 w-fit transition duration-300 ease-in-out'>
                  For more visit us.
                </Link>
              </div>

            </div>
          </div>
          <h1 className='text-center font-bold text-5xl m-16 underline  underline-offset-8 decoration-2 decoration-blue-600  '>Our Process</h1>
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
            }} className='grid md:grid-cols-4 grid-cols-1 md:gap-4 gap-7 mt-12 cursor-pointer '>
            {Services_Data.map((item, idx) => {
              return (
                <div key={idx} className="text-center md:px-0 px-8 relative duration-300 bg-white shadow-[0px_0px_15px_0px_rgb(0,0,0,32%)]">
                  <div className="mx-auto  relative bottom-8   flex h-16 w-16 items-center justify-center group-hover:bg-black rounded-full bg-blue-100">
                    <span className='  text-3xl text-black group-hover:text-white'>
                      {item.icon}
                    </span>
                  </div>

                  <h3 className='text-black group-hover:text-white mb-3 text-xl font-bold lg:px-14 Raleway'>
                    {item.title}
                  </h3>
                  <p className='text-black group-hover:text-white mb-3 text-base font-bold lg:px-14 Raleway'>
                    {item?.info}
                  </p>
                  <Link href="https://jobform.budgetrepaircenter.nz/search" target='_blank' className='text-lg font-semibold text-white Raleway bg-yellow-500 hover:bg-black hover:text-yellow-500 border-2 border-yellow-500 hover:border-white px-10 py-2.5 w-fit transition duration-300 ease-in-out'>
                    {item?.link_title}
                  </Link>

                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
      <Form />


    </>
  )
}

export default Facilities

export const Services_Data = [
  {
    title: "Find your repair quote",
    icon: <MdOutlineContentPasteSearch />,
    info: "Select Make, Model and fault type to find the repair cost in seconds.",
    link_title: "Search Now",
    link: "https://jobform.budgetrepaircenter.nz/search"
  },

  {
    title: "Agent Portal",
    icon: <GrSystem />,
    info: "If you are running a repair shop and don’t have HI-TECH LAB. Register here, and choose us as your highly qualified repair partner.",
    link_title: "Register as Agent",
    link: "https://jobform.budgetrepaircenter.nz/agent-signup/"
  },
  {
    title: "Send  & Pay",
    icon: <MdPayments />,
    info: "After registration at the online web portal, send us your query, and our expert technician reply with a quotation for repair; if you are happy with the cost, ship us, and track your device via your dedicated web portal. ",
    link_title: "Agent Dashboard",
    link: "https://jobform.budgetrepaircenter.nz/agent-dashboard"


  },
  {
    title: "Receive You Device",
    icon: <SiMinutemailer />,
    info: "Save time! Fix your devices online. Click for procedures, tracking, and a free quote in minutes. Access your portal to check device status, payment options, and tracking number. Call 073477044 for quotes and shipping updates.",
    link_title: "Search and Request a Qoute",
    link: "https://jobform.budgetrepaircenter.nz/search"


  },




]








