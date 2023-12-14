import React from 'react'
import Link from 'next/link'
function index() {
  return (
    <section className='container mx-auto px-4 bg-green-50 mt-10 mb-10 rounded-md shadow-[0px_0px_15px_0px_rgb(0,0,0,32%)]'>

<div className='mx-auto px-4'>
    <h1 className='font-[roboto] text-3xl divide-y pt-6 pb-4'>About Us</h1>
<p className='font-[light] pb-2'>Budget Computers and Kiwi Mobiles are a locally owned and operated store in Rotorua, New Zealand. They specialize in offering a wide range of budget-friendly computers, mobile phones, and related accessories. The store is known for its customer care and personalised services, helping customers find the best products according to their needs while staying within their budget. Budget Computers and Kiwi Mobiles staff members have extensive knowledge of the products they sell, ensuring that customers receive quality support and assistance.</p>
<p className='font-[light] pb-4'>For more visit us.</p>
<p className='font-[light] pb-4'>In addition to selling new and refurbished devices, the store also offers repair services for computers, laptops, mobile phones, and other electronic gadgets. With their technical expertise, they can troubleshoot and repair various common issues, such as hardware malfunctions, software problems, and virus infections.</p>
<p className='font-[light] pb-4'>Budget Computers and Kiwi Mobiles is located in the heart of Rotorua and is easily accessible by public transportation or by car</p>
<p className='font-[light] pb-4'>Are you looking for the best tech repair services in New Zealand? Look no further than Budget Computers and Kiwi Mobiles! Our state-of-the-art Hi-Tech LAB, online job form and free quote check ERP system make it easy to get affordable, fast, and reliable repairs for your iPhone, Samsung, OPPO, Huawei, XBOX, computer, MacBook, iPad, laptop and peripherals. We diagnose and repair motherboards, too, using the latest tools and machines to avoid any further damage to your expensive device.</p>
<Link href={'/'}   className='font-[roboto]  text-amber-500 hover:text-blue-300'>Whether you visit our service centre in Rotorua or ship your device to us from anywhere in the country, you can trust us to provide the highest-rated repair services. Get back to hi-tech living with Budget Computers and Kiwi Mobiles today!</Link>
 <p className='font-[light] pb-4 pt-4'>  Are you tired of wasting money on computers, mobile phones, or console repairs? Look no further! Budget Computers and Kiwi Mobiles offer repair services that are affordable and come with a warranty. Our expert technicians can fix iPhones, Samsung, Oppos, Huawei, and other smartphone models. We also specialise in console repairs, such as Xbox One X and Xbox Series S. We have covered you from water damage to HDMI port replacement. We are the go-to repair shop for all your tech problems in North Shore. Don't just take our word for it; we fix any fault for iPhones 6 to iPhone 13 X Pro; check the free quote at:  <Link href={'/'} className='font-[light] pb-4 text-amber-500 hover:text-blue-300 '>https://kiwimobiles.co.nz/jobform/search-price.</Link></p>
<p className='font-[light] pb-4'>Sign up at:<Link href={'/'} className='text-amber-500 hover:text-blue-300'> https://kiwimobiles.co.nz/jobform/user-signup/</Link> and send your device, no hassle, real-time online status of your shipped device.</p>



























</div>



    </section>
  )
}

export default index
