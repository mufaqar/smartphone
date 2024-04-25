import React from 'react'

export default function Pricing() {
    return (
        <>
            <section className='py-16'>
                <div className='container mx-auto md:px-12 px-4'>
                    <h4 className='text-base font-medium text-[#aaaaaa] Raleway uppercase mb-1 py-0'>
                        IPHONE PRICES @ Budget Computers and Kiwi Mobiles
                        <span className='hr_line inline-block my-1.5 w-[120px] ml-2 h-[1px] bg-yellow-500'></span>
                    </h4>
                    <h2 className='md:text-4xl text-2xl font-bold Raleway uppercase py-0'>
                        MOST TRUSTED & PROFESSIONAL REPIR COMPANY. FROM SCREEN REPAIR TO CHIP LEVEL REPAIRS. ALL REPAIRS INSTORE
                    </h2>
                    <p className='text-base font-bold text-center Raleway mt-8 mb-3'>
                        To Avail these prices you have to mentioned code 2468 while booking for repairs.
                    </p>
                    <p className='text-base font-normal text-yellow-500 text-center Raleway'>
                        SAME DAY REPAIR* SUBJECT TO PART INSTOCK AND APPOINTMENT
                    </p>
                </div>
            </section>
            <section className='py-16'>
                <div className='container mx-auto md:px-12 px-4'>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-7'>
                        {[0, 1, 2, 3]?.map((item: any, idx: number) => {
                            return (<div key={idx} className='repair_card bg-white pt-[42px] md:px-12 px-5 pb-5 rounded-md shadow-[0_1rem_3rem_0_rgba(0,0,0,0.175)] hover:shadow-[0_1rem_3rem_0_rgba(0,0,0,0.75)] transition duration-300 ease-in-out'>
                                <h2 className='md:text-xl text-lg font-medium text-center Raleway mb-2 py-0'>
                                    IPHONE<sub>13/13</sub> Pro
                                </h2>
                                <p className='text-base font-normal text-yellow-500 text-center Raleway'>
                                    Same Day Repair
                                </p>
                                <ul className='list-inside divide-y divide-[#dee2e6] mt-14'>
                                    <li className='text-lg font-normal text-center Raleway py-2'>
                                        iPhone 12/12 Pro LCD REPAIR <strong className='text-yellow-500'>$150</strong>
                                    </li>
                                    <li className='text-lg font-normal text-center Raleway py-2'>
                                        iPhone 12/12 Pro LCD REPAIR <strong className='text-yellow-500'>$150</strong>
                                    </li>
                                    <li className='text-lg font-normal text-center Raleway py-2'>
                                        iPhone 12/12 Pro LCD REPAIR <strong className='text-yellow-500'>$150</strong>
                                    </li>
                                    <li className='text-lg font-normal text-center Raleway py-2'>
                                        iPhone 12/12 Pro LCD REPAIR <strong className='text-yellow-500'>$150</strong>
                                    </li>
                                </ul>
                            </div>
                            )
                        })}
                    </div>
                    <div className='flex flex-col divide-y divide-[#dee2e6] mt-12'>
                        {[0, 1, 2, 3]?.map((item: any, idx: number) => {
                            return (<div key={idx} className='py-4'>
                                <h2 className='md:text-3xl text-lg font-medium Raleway py-0'>
                                    IPHONE 7 PLUS LCD REPAIR PRICES—- Same Day One hour service
                                </h2>
                                <ul className='list-disc list-inside pl-5'>
                                    <li className='text-base font-normal Raleway py-2'>
                                        LCD Screen REPLACEMENT <strong className='text-yellow-500'>$70</strong>
                                    </li>
                                    <li className='text-base font-normal Raleway py-2'>
                                        LCD Screen REPLACEMENT <strong className='text-yellow-500'>$70</strong>
                                    </li>
                                    <li className='text-base font-normal Raleway py-2'>
                                        LCD Screen REPLACEMENT <strong className='text-yellow-500'>$70</strong>
                                    </li>
                                    <li className='text-base font-normal Raleway py-2'>
                                        LCD Screen REPLACEMENT <strong className='text-yellow-500'>$70</strong>
                                    </li>
                                </ul>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}
