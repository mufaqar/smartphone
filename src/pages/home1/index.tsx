import Link from 'next/link';
import React from 'react'
import PartnerSlider from '@/components/partner-slider'
import Image from 'next/image';
import TestimonialSlider from '@/components/testimonialSlider'
import SeoMeta from '@/components/seo';
import { Services } from "@/const/services"
import { Posts } from '@/const/posts'

export default function Home1() {
    return (
        <>
            <SeoMeta title="Budget Computers and Kiwi Mobiles in Rotorua, New Zealand." description="Budget Computers  specialize in offering a wide range of budget-friendly computers, mobile phones, and related accessories" url="https://budgetrepaircenter.nz/home1" />
            <section className='py-16 bg-[url("/images/bgg4.avif")] bg-top bg-cover bg-no-repeat bg-fixed min-h-screen h-full bg-blend-overlay bg-black/50 flex flex-col items-center justify-center'>
                <div className='md:max-w-[960px] mx-auto px-4'>
                    <h1 className='md:text-[42px] md:leading-[42px] text-2xl font-bold text-white text-center Poppins tracking-[1px] py-2 px-7 border-2 border-white rounded'>
                    Reliable iPhone Repair Rotorua: Fast Service Guaranteed
                    </h1>
                    <p className='md:text-xl text-base font-normal text-white text-center Raleway my-5'>
                    Have you ever experienced the frustration of a cracked screen or water-damaged iPhone in Rotorua, New Zealand? It can be a nightmare, especially when your phone is essential for work and communication. 
                    </p>
                </div>
                <div className='container mx-auto px-4 grid md:grid-cols-4 grid-cols-1 gap-5 mt-16'>
                    {Services?.slice(0, 4).map((item: any, idx: number) => {
                        return (<div key={idx} className='py-[30px] px-5 border border-white/60 hover:border-yellow-500'>
                            <span className='text-7xl text-yellow-500 flex justify-center w-full'>
                                {item?.icon}
                            </span>
                            <Link href={item?.link} className='text-xl font-bold text-white hover:text-yellow-500 text-center Raleway block w-full mt-4'>
                                {item?.title}
                            </Link>
                            <p className='text-base font-normal text-white text-center Raleway'>
                                {item?.content}
                            </p>
                        </div>
                        )
                    })}
                </div>
            </section>
            <section className='py-16'>
                <div className='container mx-auto px-4'>
                    <h4 className='text-base font-medium text-[#aaaaaa] Raleway uppercase mb-1 py-0'>
                        @ Budget Computers and Kiwi Mobiles
                        <span className='hr_line inline-block my-1.5 w-[120px] ml-2 h-[1px] bg-yellow-500'></span>
                    </h4>
                    <h2 className='md:text-4xl text-2xl font-bold Raleway uppercase py-0'>
                        We Do
                    </h2>
                    <div className='grid md:grid-cols-4 grid-cols-1 gap-5 mt-10'>
                        {Services?.slice(4, 8)?.map((item: any, idx: number) => {
                            return (<div key={idx} className='py-[80px] px-5 border border-[#ebebeb] hover:border-white bg-white hover:translate-y-[-10px] hover:shadow-[0_0_25px_rgba(0,0,0,0.1)] transition duration-300 ease-in-out'>
                                <span className='text-3xl bg-yellow-500 text-white flex items-center justify-center w-[64px] h-[64px] mx-auto rounded'>
                                    {item?.icon}
                                </span>
                                <Link href={item?.link} className='md:text-xl text-xl font-bold text-black text-center Raleway block w-full mt-5'>
                                    {item?.title}
                                </Link>
                                <p className='text-base font-normal text-center Raleway'>
                                    {item?.content}
                                </p>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <section className='py-16'>
                <div className='container mx-auto px-4'>
                    <PartnerSlider />
                </div>
            </section>
            <section className='py-16'>
                <div className='container mx-auto px-4'>
                    <h4 className='text-base font-medium text-[#aaaaaa] Raleway uppercase mb-1 py-0'>
                        20 YEARS OF EXPRIENCE IN
                        <span className='hr_line inline-block my-1.5 w-[120px] ml-2 h-[1px] bg-yellow-500'></span>
                    </h4>
                    <h2 className='md:text-4xl text-2xl font-bold Raleway uppercase py-0'>
                    Why Choose Budget Repair Center Computers & Kiwi Mobiles? Affordable iPhone Repair in Rotorua?
                    </h2>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-7 mt-10'>
                        <div>
                            <Image src="/images/digital.jpg" alt='feature' width={1024} height={768} className='max-h-[768px]' />
                        </div>
                        <div className='flex flex-col md:gap-12 gap-7'>
                            {Services?.slice(8, 12)?.map((item: any, idx: number) => {
                                return (<div key={idx} className='flex gap-4'>
                                    <span className='sm:text-5xl text-3xl text-yellow-500 flex w-fit pt-5'>
                                        {item?.icon}
                                    </span>
                                    <div>
                                        <h4 className='md:text-xl text-lg font-bold text-black Raleway mb-1'>
                                            {item?.title}
                                        </h4>
                                        <p className='text-base font-normal Raleway'>
                                            {item?.content}
                                        </p>
                                    </div>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-16 bg-[url("/images/cta-bg.jpg")] bg-top bg-cover bg-no-repeat bg-fixed bg-blend-overlay bg-black/60'>
                <div className='container mx-auto px-4'>
                    <h2 className='md:text-3xl text-2xl font-bold text-white text-center Raleway'>
                        WARRANTY ON ALL IPHONE LCD REPAIR
                    </h2>
                    <p className='text-base font-normal text-white text-center Raleway'>
                        We will beat any competitor price by 10% <br />
                        *All repairs same day, no extra charges for one hour fast service
                    </p>
                    <Link href="#" className='text-base font-semibold text-white Raleway border-2 border-white bg-transparent hover:border-yellow-500 hover:bg-yellow-500 rounded py-2 px-[28px] flex justify-center w-fit mx-auto mt-5 transition duration-300 ease-in-out'>
                        Contact Us
                    </Link>
                </div>
            </section>
            <section className='py-16'>
                <div className='container mx-auto px-4'>
                    <h4 className='text-base font-medium text-[#aaaaaa] Raleway uppercase mb-1 py-0'>
                        SERVICES
                        <span className='hr_line inline-block my-1.5 w-[120px] ml-2 h-[1px] bg-yellow-500'></span>
                    </h4>
                    <h2 className='md:text-4xl text-2xl font-bold Raleway uppercase py-0'>
                    Comprehensive Range of Services Offered
                    </h2>
                    <div className='grid md:grid-cols-4 grid-cols-1 gap-5 mt-10'>
                        {Services?.slice(12, 16).map((item: any, idx: number) => {
                            return (<div key={idx} className='py-[80px] px-5 border border-[#ebebeb] hover:border-white bg-white hover:translate-y-[-10px] hover:shadow-[0_0_25px_rgba(0,0,0,0.1)] transition duration-300 ease-in-out'>
                                <span className='text-3xl bg-yellow-500 text-white flex items-center justify-center w-[64px] h-[64px] mx-auto rounded'>
                                    {item?.icon}
                                </span>
                                <Link href={item?.link} className='md:text-xl text-xl font-bold text-black text-center Raleway block w-full mt-5'>
                                    {item?.title}
                                </Link>
                                <p className='text-base font-normal text-center Raleway'>
                                    {item?.content}
                                </p>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <section className='py-16 bg-[url("/images/testimonials-bg.jpg")] bg-center bg-cover bg-no-repeat bg-fixed bg-blend-overlay bg-black/60'>
                <div className='container mx-auto px-4'>
                    <TestimonialSlider />
                </div>
            </section>
            <section className='py-16'>
                <div className='container mx-auto px-4'>
                    <h4 className='text-base font-medium text-[#aaaaaa] Raleway uppercase mb-1 py-0'>
                        BLOG
                        <span className='hr_line inline-block my-1.5 w-[120px] ml-2 h-[1px] bg-yellow-500'></span>
                    </h4>
                    <h2 className='md:text-4xl text-2xl font-bold Raleway uppercase py-0'>
                        LATEST NEWS & BLOGS
                    </h2>
                    <div className='grid md:grid-cols-3 grid-cols-1 gap-5 mt-10'>
                        {Posts?.map((item: any, idx: number) => {
                            return (<div key={idx} className='border border-[rgba(0,0,0,0.12)] bg-white shadow-[0_2px_5px_0_rgba(0,0,0,0.16)]'>
                                <div className='relative'>
                                    <Image src={item?.img} alt='feature' width={1024} height={768} className='w-full h-full object-cover' />
                                    <span className='text-xs font-light text-white bg-yellow-500 py-2 px-3 rounded absolute top-5'>
                                        {item?.date}
                                    </span>
                                </div>
                                <div className='p-6'>
                                    <h3 className='md:text-2xl text-xl font-semibold text-black Raleway block w-full mb-1'>
                                        {item?.title}
                                    </h3>
                                    <p className='text-sm font-normal Raleway mb-5'>
                                        {item?.content}
                                    </p>
                                    <Link href={item?.link} className='text-sm font-normal uppercase text-white bg-yellow-500 hover:bg-black Raleway block w-fit py-[13px] px-[34px] shadow-[0_2px_5px_0_rgba(0,0,0,0.16)]'>
                                        Read More
                                    </Link>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                    <div className='text-center lg:w-[80%] w-full mx-auto mt-6'>
                        <h2 className='text-3xl font-bold text-black'>Conclusion</h2>
                        <p className=' font-normal Raleway'>In conclusion, Budget Center & Computers & Kiwi Mobiles. Affordable Repair in Rotorua offers fast and reliable service for all your smartphone and laptop repair needs. With expert technicians and a commitment to quality assurance, you can trust that your device is in good hands. They offer comprehensive services to get your device back in working order, from screen to water damage solutions, battery replacements, motherboards and more. The process is convenient and efficient, with convenient scheduling and fast service. And if your device is not an iPhone, we can still help. Don't let a broken device hold you back; contact Affordable iPhone Repair in Rotorua today for all your needs.</p>
                    </div>
                </div>
            </section>
        </>
    )
}
