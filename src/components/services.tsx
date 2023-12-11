import Image from 'next/image'
import React from 'react'

function Services() {
  return (
    <section className='bg-blue-50/40 py-16' id='services'>
      <div className='container mx-auto px-4'>
        <h2 className='md:text-7xl text-3xl font-bold text-center'>
          Islamic Center Services
        </h2>
        <div className='grid md:grid-cols-4 grid-cols-1 gap-7 mt-10'>
          {Services_Data.map((item, idx) => {
            return <div key={idx} className='bg-white py-5 rounded rounded-br-[30px] shadow-[0px_0px_15px_0px_rgb(0,0,0,32%)]'>
              <div className='bg-[#36AE7C] rounded-full p-4 w-fit mx-auto'>
                <Image src={item.icon} alt='service/1' width={50} height={50} />
              </div>
              <h3 className='md:text-2xl text-xl font-bold text-center'>
                {item.title}
              </h3>
              <p className='text-base font-medium text-center'>
                {item.sub_title}
              </p>
            </div>
          })}
        </div>
      </div>
    </section>
  )
}

export default Services

export const Services_Data = [
  {
    title: "Counselling",
    sub_title: " Dawah Project",
    icon: "/images/service/1.svg",
  },
  {
    title: "Divorce",
    sub_title: "Separate Married Life",
    icon: "/images/service/2.svg",
  },
  {
    title: "Cemetry",
    sub_title: "Graveyard",
    icon: "/images/service/3.svg",
  },
  {
    title: "Social Service",
    sub_title: "Privately Provided",
    icon: "/images/service/4.svg",
  },
  {
    title: "Religious Inquiry",
    sub_title: "Comparative Study",
    icon: "/images/service/5.svg",
  },
  {
    title: "Marriage",
    sub_title: "Nikkah/Katb Al Kitab",
    icon: "/images/service/6.svg",
  },
  {
    title: "Hajj",
    sub_title: "Hajj Process & Guidence",
    icon: "/images/service/7.svg",
  },
  {
    title: "Facilities",
    sub_title: "Free Books & Others",
    icon: "/images/service/8.svg",
  },
  {
    title: "Safety & Security",
    sub_title: "Authorized Organization",
    icon: "/images/service/9.svg",
  },
  {
    title: "Waqf",
    sub_title: "Mortmain Property",
    icon: "/images/service/10.svg",
  },
  {
    title: "Membership",
    sub_title: "Ummah Community",
    icon: "/images/service/11.svg",
  },
  {
    title: "Get in tocuh",
    sub_title: "For More Information",
    icon: "/images/service/12.svg",
  },
]