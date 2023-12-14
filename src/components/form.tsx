import React from 'react'
import { Roboto } from 'next/font/google';
const roboto = Roboto({
    weight:'300',
    subsets:['latin'],
    display:'swap' })
function Form() {
    return (
        <section className='bg-[#111] mt-16 rounded-b-[12rem] '>
            <form className="container mx-auto px-4 ">
                <h2 className='md:text-4xl text-3xl font-bold text-center text-white pb-20 pt-10'>
                    BOOK APPOINTMENT
                </h2>

                <div className=' grid grid-cols-2 gap-10 '>

                    <input
                        type="email"
                        id="email"
                        aria-describedby="helper-text-explanation"
                        className={` h-14 border border-white text-gray-900 bg-transparent text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${roboto.className}`}
                        placeholder="Enter First Name"
                    />

                    <input
                        type="email"
                        id="email"
                        aria-describedby="helper-text-explanation"
                        className={` h-14 border border-white text-gray-900 bg-transparent text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${roboto.className}`}
                        placeholder="Enter Last Name"
                    />

                    <input
                        type="email"
                        id="email"
                        aria-describedby="helper-text-explanation"
                        className={` h-14 border border-white text-gray-900 bg-transparent text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${roboto.className}`}
                        placeholder="Enter Email.."
                    />

                    <input
                        type="email"
                        id="email"
                        aria-describedby="helper-text-explanation"
                        className={` h-14 border border-white text-gray-900 bg-transparent text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${roboto.className}`}
                        placeholder="Enter Your Phone"
                    />

                </div>

                <textarea
                    id="message"
                    rows={4}
                    className={` mt-6 block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-white focus:ring-blue-500 focus:border-blue-500 bg-black bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  ${roboto.className}`}
                    placeholder="Message"
                    defaultValue={""}
                />

                <div className='text-center m-10 pb-10'>
                    <button className={`bg-yellow-500 px-6 py-2 font-bold text-black hover:text-white hover:bg-blue-800 animate-bounce  ${roboto.className}`}>Submit</button>
                </div>
            </form>

        </section>
    )
}

export default Form
