import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion";
import PageBanner from '@/components/page-banner';
function index() {
  return (
    <>
      <PageBanner
        Custm_BG="bg-[url('/images/about.jpg')]"
        title="About Us" />
      <section className='container mx-auto px-4 bg-white mt-10 mb-10 rounded-md shadow-[0px_0px_15px_0px_rgb(0,0,0,32%)]'>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2,
            x: { type: "spring", stiffness: 60 },
            opacity: { duration: 1 },
            ease: "easeIn",
            duration: 3,
          }} className='text-left px-4 pb-16 lg:w-[70%] '>
          <h1 className='font-[roboto] text-xl divide-y pt-6 pb-4'>About Us</h1>
          <p className='font-[light] pb-2'>Budget Computers and Kiwi Mobiles are a locally owned and operated store in Rotorua, New Zealand. They specialize in offering a wide range of budget-friendly computers, mobile phones, and related accessories. The store is known for its customer care and personalised services, helping customers find the best products according to their needs while staying within their budget. Budget Computers and Kiwi Mobiles staff members have extensive knowledge of the products they sell, ensuring that customers receive quality support and assistance.<br /><br />For more visit us.</p>
          <p className='font-[light] pb-4'>In addition to selling new and refurbished devices, the store also offers repair services for computers, laptops, mobile phones, and other electronic gadgets. With their technical expertise, they can troubleshoot and repair various common issues, such as hardware malfunctions, software problems, and virus infections.  <br /><br />Budget Computers and Kiwi Mobiles is located in the heart of Rotorua and is easily accessible by public transportation or by car</p>

          <p className='font-[light] pb-4'>Are you looking for the best tech repair services in New Zealand? Look no further than Budget Computers and Kiwi Mobiles! Our state-of-the-art Hi-Tech LAB, online job form and free quote check ERP system make it easy to get affordable, fast, and reliable repairs for your iPhone, Samsung, OPPO, Huawei, XBOX, computer, MacBook, iPad, laptop and peripherals. We diagnose and repair motherboards, too, using the latest tools and machines to avoid any further damage to your expensive device.</p>
          <Link href={'/'} className='font-[roboto]  text-amber-500 hover:text-blue-300'>Whether you visit our service centre in Rotorua or ship your device to us from anywhere in the country, you can trust us to provide the highest-rated repair services. Get back to hi-tech living with Budget Computers and Kiwi Mobiles today!</Link>
          <p className='font-[light] pb-4 pt-4'>  Are you tired of wasting money on computers, mobile phones, or console repairs? Look no further! Budget Computers and Kiwi Mobiles offer repair services that are affordable and come with a warranty. Our expert technicians can fix iPhones, Samsung, Oppos, Huawei, and other smartphone models. We also specialise in console repairs, such as Xbox One X and Xbox Series S. We have covered you from water damage to HDMI port replacement. We are the go-to repair shop for all your tech problems in North Shore. Don't just take our word for it; we fix any fault for iPhones 6 to iPhone 13 X Pro; check the free quote at:  <Link href={'/'} className='font-[light] pb-4 text-amber-500 hover:text-blue-300 '>https://kiwimobiles.co.nz/jobform/search-price.</Link></p>
          <p className='font-[light] pb-4'>Sign up at:<Link href={'/'} className='text-amber-500 hover:text-blue-300'> https://kiwimobiles.co.nz/jobform/user-signup/</Link> and send your device, no hassle, real-time online status of your shipped device.</p>
          <h1 className='font-[italic] text-xl divide-y  pb-4'>Our few Expertise, Which usually local repair does not offer.</h1>
          <p className='font-[light] pb-4'>We provide micro-soldering repair services for the Xbox and PlayStation micro-soldering. We install new charging ports for the Xbox, Playstation, and other micro USB ports. We also offer micro-soldering repair services for iPad, iPhones, and other smartphones. We can fix any other hardware device, such as a PC, laptop repair, PC motherboard repair, laptop motherboard repair, laptop LCD screen replacement, laptop ac repair, laptop wifi repair, laptop Bluetooth repair,  laptop webcam repair,  laptop keyboard repair,  laptop touchpad repair, laptop tablet repair,  wireless laptop repair, laptop camera repair,  local repair, motherboard repair,   iPhone 6, iPad, iPhone xs, iPhone 13, iPhone 13 pro max, iPhone 7, iPhone 8, iPhone 11, Samsung S22, Samsung S21, Note 10. <Link href={'/'} className='font-[light] pb-4 text-amber-500 hover:text-blue-300 '>Sign up and Get a Free Quote.</Link></p>
          <h2 className='font-[roboto] text-xl divide-y  pb-4'>Ransomware</h2>
          <p className='font-[light] pb-4'>Ransomware is malicious software that can wreak havoc on your iPhone by encrypting your data and holding it hostage until you pay a ransom. It's essential to take preventative measures to avoid falling victim to ransomware attacks, such as keeping your iPhone's software up to date and avoiding suspicious links and downloads. If you become a ransomware victim, seek professional iPhone repair services immediately to minimise the damage and recover your data as soon as possible.<Link href={'/'} className='text-amber-500 hover:text-blue-300'>Get A Quote</Link> </p>
          <h1 className='font-[roboto] text-xl divide-y  pb-4'>IPAD Repair:</h1>
          <p className='font-[light] pb-4'>Many reputable repair services are available if you have an iPad that needs repair. Budget Computers and Kiwi Mobiles can help with various issues, including cracked screens, battery replacement, and software problems. Some repair shops even offer same-day service for certain repairs. Please just be sure to research and choose a qualified and trustworthy service to ensure your iPad is in good hands. <Link href={'/'} className='text-amber-500 hover:text-blue-300'>Get Quote</Link> </p>
          <div className='lg:flex space-x-10 items-center  mt-10 mb-10'>
            <h1 className='font-[roboto] text-xl divide-y  pb-4'>iPhones Repair</h1>
            <Image width={500}
              height={500} src='/images/services2.avif'
              alt="image"
              className=' h-48 w-48 ' />
          </div>
          <p className='font-[light] pb-4'>At Budget Computers and Kiwi Mobiles, we offer various repair services for iPhone 6 to iPhone 13.<br></br><br />
            iPhone screen repair, iPhone back glass repair, iPhone Charging slot repair, iPhone battery replacement, iPhone motherboard repair, iPhone camera replacement, iPhone speaker repair, iPhone home button repair, and iPhone volume critical repair.</p>
          <h1 className='font-[roboto] text-xl divide-y  pb-4'>Console and Motherboards Repair.</h1>
          <p className='font-[light] pb-4'>When it comes to console repair, a range of issues can arise. Some console repairs may be as simple as cleaning the disc drive or replacing a faulty HDMI cable, while others may require more complex solutions, such as fixing motherboard problems. No matter the issue, you'll need professional help to repair your console correctly and promptly. Whether you need Xbox 360 repair, Microsoft Xbox repair, or PlayStation repair, experts can diagnose and fix any issue you may be experiencing with your console.<Link href={'/'} className='text-amber-500 hover:text-blue-300'> Get A Free Quote Online</Link></p>
          <h1 className='font-[roboto] text-xl divide-y  pb-4'>Smartphones Repair:</h1>
          <p className='font-[light] pb-4'>Budget Computers and Kiwi Mobiles offer various services, including screen replacement for iPhones, Oppo, Samsung Galaxy, Huawei and other smartphones. Wet use of high-quality replacement parts is essential to ensure your device's longevity. If you're looking for an iPhone screen replacement, you can look no further than Budget Computers and Kiwi Mobiles. We offer quick and efficient same-day repair services on all iPhone models, including the latest iPhone 13. Our team of experienced technicians is equipped with the necessary skills and tools to repair all types of mobile phones.<Link href={'/'} className='text-amber-500 hover:text-blue-300'> Get A Free Quote Online </Link></p>
          <h1 className='font-[roboto] text-xl divide-y  pb-4'>XBOX Repair:</h1>
          <p className='font-[light] pb-4'>Xbox is one of the most popular gaming consoles. Xbox 360, Microsoft Xbox, PS 5, However, it's not immune to common issues such as black screens and overheating. These problems can frustrate gamers who want to enjoy playing their favourite games without interruptions. Luckily, professional repair services are available that can diagnose and fix these issues quickly and efficiently. If you're having problems, you should look for a professional repair service to fix them immediately.<br /><br />Many people want to buy this Xbox 360 to play games but get a lame console. So they are not able to play the games properly. They can get a perfect console with a warranty of 3 months. They can also get their consoles repaired with a warranty of 3 months. Some people might need help to play the games properly. They can also get their consoles repaired with a warranty of 3 months.<Link href={'/'} className='text-amber-500 hover:text-blue-300'> Get a Quote Online</Link></p>
          <h1 className='font-[roboto] text-xl divide-y  pb-4'>Android Tablet Repair </h1>
          <p className='font-[light] pb-4'>When it comes to Android tablet repair, there are a few common issues that can arise. One of the most frequent problems is a cracked screen; software malfunctions are common with Android tablets and can cause issues such as freezing or crashing. Another issue many users face is battery problems, such as not charging correctly or draining too quickly. Which accidental drops or hits can cause.</p>
          <h1 className='font-[roboto] text-xl divide-y  pb-4'>Desired:</h1>
          <p className='font-[light] pb-4'>And with our free online quote, you can compare our prices to other repair services and see the benefits for yourself. Don't let a broken device keep you from growing and managing your life - let us help you increase your productivity and restore what you've saved.</p>
          <h1 className='font-[roboto] text-xl divide-y  pb-4'>Action:</h1>
          <p className='font-[light] pb-4'>Ready to experience the reliable and affordable services of The Only HITECH LAB? Please take action today and drop off or ship us your device for a quote. Our certified technicians will manage your repair carefully and efficiently, ensuring you are back up and running as soon as possible.</p>
          <h1 className='font-[roboto] text-xl divide-y  pb-4'>Conclusion</h1>
          <p className='font-[light] pb-4'>In conclusion, Xbox, PS5, iPhones, Samsung,s, OPPO, Huawei, MacBooks, iPads, Android Tablets, Laptops, and Computer repairs can be daunting, especially when you need to become more familiar with the technicalities involved. However, with BUDGET COMPUTERS AND KIWI MOBILES' expert in diagnosis and repair in its HI-TECH LAB, We used the latest tools and machines. We followed the industry protocols to avoid further damage or data loss.  You can have your Device up and running quickly.<br /><br />Trust BUDGET COMPUTERS AND KIWI MOBILES's Xbox Repair Services for all your Device repair needs.<Link href={'/'} className='text-amber-500 hover:text-blue-300'> Sign Up and Get any device free Quote.</Link> Learn more about our services by visiting our website or contacting us today.</p>
        </motion.div>
      </section>
    </>
  )
}

export default index
