import Link from 'next/link';
import React from 'react'
import { FaGamepad, FaMobileAlt } from "react-icons/fa";
import PartnerSlider from '@/components/partner-slider'
import Image from 'next/image';
import { IoSettingsOutline } from 'react-icons/io5';

export default function Home1() {
    return (
        <>
            <section className='py-16 bg-[url("/images/hero-bg.jpg")] bg-top bg-cover bg-no-repeat bg-fixed min-h-screen h-full bg-blend-overlay bg-black/60'>
                <div className='md:w-1/2 mx-auto px-4'>
                    <h1 className='md:text-[56px] md:leading-[60px] text-2xl font-bold text-white text-center py-2 px-7 border-2 border-white rounded'>
                        Electronic Repair Experts
                    </h1>
                    <p className='text-2xl font-normal text-white text-center my-5'>
                        We are team of talented Electronic Repair Experts in Hamilton New zealand
                    </p>
                </div>
                <div className='container mx-auto px-4 grid md:grid-cols-4 grid-cols-1 gap-5 mt-16'>
                    {[0, 1, 2, 3]?.map((item: any, idx: number) => {
                        return (<div key={idx} className='py-[30px] px-5 border border-white/60 hover:border-yellow-500'>
                            <span className='text-7xl text-yellow-500 flex justify-center w-full'>
                                <FaMobileAlt />
                            </span>
                            <Link href="#" className='text-xl font-bold text-white hover:text-yellow-500 text-center block w-full mt-4'>
                                iPhone Repair
                            </Link>
                            <p className='text-base font-normal text-white text-center'>
                                Apple Fix is here to help you keep your iPhone running in tiptop shape. Just give us a ring.
                            </p>
                        </div>
                        )
                    })}
                </div>
            </section>
            <section className='py-16'>
                <div className='container mx-auto px-4'>
                    <h4 className='text-base font-medium text-[#aaaaaa]  uppercase mb-1 py-0'>
                        @ AppleFix
                        <span className='hr_line inline-block my-1.5 w-[120px] ml-2 h-[1px] bg-yellow-500'></span>
                    </h4>
                    <h2 className='md:text-4xl text-2xl font-bold uppercase py-0'>
                        We Do
                    </h2>
                    <div className='grid md:grid-cols-4 grid-cols-1 gap-5 mt-10'>
                        {[0, 1, 2, 3]?.map((item: any, idx: number) => {
                            return (<div key={idx} className='py-[80px] px-5 border border-[#ebebeb] hover:border-white bg-white hover:translate-y-[-10px] hover:shadow-[0_0_25px_rgba(0,0,0,0.1)] transition duration-300 ease-in-out'>
                                <span className='text-3xl bg-yellow-500 text-white flex items-center justify-center w-[64px] h-[64px] mx-auto rounded'>
                                    <FaGamepad />
                                </span>
                                <Link href="#" className='text-xl font-bold text-black text-center block w-full mt-5'>
                                    Gaming Console Repairs
                                </Link>
                                <p className='text-base font-normal text-center'>
                                    All our professional technician expertise in diagnosing problems and committed to fix your gaming console quickly. We understand it is hard to live without playing games.
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
                    <h4 className='text-base font-medium text-[#aaaaaa]  uppercase mb-1 py-0'>
                        20 YEARS OF EXPRIENCE IN
                        <span className='hr_line inline-block my-1.5 w-[120px] ml-2 h-[1px] bg-yellow-500'></span>
                    </h4>
                    <h2 className='md:text-4xl text-2xl font-bold uppercase py-0'>
                        DIGITAL DEVICE REPAIR SERVICES
                    </h2>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-7 mt-10'>
                        <div>
                            <Image src="/images/features.jpg" alt='feature' width={1024} height={768} className='w-full h-full object-cover' />
                        </div>
                        <div className='flex flex-col md:gap-12 gap-7'>
                            <div className='flex gap-4'>
                                <span className='sm:text-5xl text-3xl text-yellow-500 flex w-fit pt-5'>
                                    <IoSettingsOutline />
                                </span>
                                <div>
                                    <Link href="#" className='text-xl font-bold text-black block w-full mb-2'>
                                        Quality and Original Apple Parts
                                    </Link>
                                    <p className='text-base font-normal'>
                                        Apple Fix uses nothing but top quality original or original equipment manufacturer (OEM) Apple parts for your gadgets. No guessing—the OEM parts we use for your iPhone, iPad, or MacBook, will be exactly what you need.
                                    </p>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <span className='sm:text-5xl text-3xl text-yellow-500 flex w-fit pt-5'>
                                    <IoSettingsOutline />
                                </span>
                                <div>
                                    <Link href="#" className='text-xl font-bold text-black block w-full mb-2'>
                                        Quality and Original Apple Parts
                                    </Link>
                                    <p className='text-base font-normal'>
                                        Apple Fix uses nothing but top quality original or original equipment manufacturer (OEM) Apple parts for your gadgets. No guessing—the OEM parts we use for your iPhone, iPad, or MacBook, will be exactly what you need.
                                    </p>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <span className='sm:text-5xl text-3xl text-yellow-500 flex w-fit pt-5'>
                                    <IoSettingsOutline />
                                </span>
                                <div>
                                    <Link href="#" className='text-xl font-bold text-black block w-full mb-2'>
                                        Quality and Original Apple Parts
                                    </Link>
                                    <p className='text-base font-normal'>
                                        Apple Fix uses nothing but top quality original or original equipment manufacturer (OEM) Apple parts for your gadgets. No guessing—the OEM parts we use for your iPhone, iPad, or MacBook, will be exactly what you need.
                                    </p>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <span className='sm:text-5xl text-3xl text-yellow-500 flex w-fit pt-5'>
                                    <IoSettingsOutline />
                                </span>
                                <div>
                                    <Link href="#" className='text-xl font-bold text-black block w-full mb-2'>
                                        Quality and Original Apple Parts
                                    </Link>
                                    <p className='text-base font-normal'>
                                        Apple Fix uses nothing but top quality original or original equipment manufacturer (OEM) Apple parts for your gadgets. No guessing—the OEM parts we use for your iPhone, iPad, or MacBook, will be exactly what you need.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-16 bg-[url("/images/cta-bg.jpg")] bg-top bg-cover bg-no-repeat bg-fixed bg-blend-overlay bg-black/60'>
                <div className='container mx-auto px-4'>
                    <h2 className='text-3xl font-bold text-white text-center'>
                        WARRANTY ON ALL IPHONE LCD REPAIR
                    </h2>
                    <p className='text-base font-normal text-white text-center '>
                        We will beat any competitor price by 10%<br />
                        *All repairs same day, no extra charges for one hour fast servic
                    </p>
                    <Link href="#" className='text-base font-semibold text-white border-2 border-white bg-transparent hover:border-yellow-500 hover:bg-yellow-500 rounded py-2 px-[28px] flex justify-center w-fit mx-auto mt-5 transition duration-300 ease-in-out'>
                        Contact Us
                    </Link>
                </div>
            </section>
            <section className='py-16'>
                <div className='container mx-auto px-4'>
                    <h4 className='text-base font-medium text-[#aaaaaa]  uppercase mb-1 py-0'>
                        SERVICES
                        <span className='hr_line inline-block my-1.5 w-[120px] ml-2 h-[1px] bg-yellow-500'></span>
                    </h4>
                    <h2 className='md:text-4xl text-2xl font-bold uppercase py-0'>
                        CHECK OUR MORE SERVICES
                    </h2>
                    <div className='grid md:grid-cols-4 grid-cols-1 gap-5 mt-10'>
                        {[0, 1, 2, 3]?.map((item: any, idx: number) => {
                            return (<div key={idx} className='py-[80px] px-5 border border-[#ebebeb] hover:border-white bg-white hover:translate-y-[-10px] hover:shadow-[0_0_25px_rgba(0,0,0,0.1)] transition duration-300 ease-in-out'>
                                <span className='text-3xl bg-yellow-500 text-white flex items-center justify-center w-[64px] h-[64px] mx-auto rounded'>
                                    <FaGamepad />
                                </span>
                                <Link href="#" className='text-xl font-bold text-black text-center block w-full mt-5'>
                                    Gaming Console Repairs
                                </Link>
                                <p className='text-base font-normal text-center'>
                                    All our professional technician expertise in diagnosing problems and committed to fix your gaming console quickly. We understand it is hard to live without playing games.
                                </p>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
