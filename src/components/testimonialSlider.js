import Image from "next/image";
import React from "react";
import Slider from "react-slick";

export default function TestimonialSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,

    };
    return (
        <Slider {...settings}>
            {data?.map((item, idx) => {
                return (<div key={idx}>
                    <Image src={item?.img} alt='picture' width={100} height={100} className='mx-auto border-[6px] border-white/20 rounded-full mb-2.5' />
                    <p className='md:text-xl text-lg font-bold text-white mb-1 text-center Raleway'>
                        {item.name}
                    </p>
                    <p className='text-sm font-medium text-[#ddd] text-center Raleway mb-4'>
                        {item?.position}
                    </p>
                    <blockquote className='md:text-xl text-lg font-normal text-[#eee] text-center Raleway italic max-w-[80%] mx-auto'>
                        {item?.review}
                    </blockquote>
                </div>
                )
            })}
        </Slider>
    );
}

const data = [
    {
        img: "/images/testimonials/1.jpg",
        name: " Saul Goodman",
        position: "Ceo & Founder",
        review: '" Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper. "',
    },
    {
        img: "/images/testimonials/1.jpg",
        name: " Saul Goodman",
        position: "Ceo & Founder",
        review: '" Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper. "',
    },
    {
        img: "/images/testimonials/1.jpg",
        name: " Saul Goodman",
        position: "Ceo & Founder",
        review: '" Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper. "',
    },
    {
        img: "/images/testimonials/1.jpg",
        name: " Saul Goodman",
        position: "Ceo & Founder",
        review: '" Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper. "',
    },
    {
        img: "/images/testimonials/1.jpg",
        name: " Saul Goodman",
        position: "Ceo & Founder",
        review: '" Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper. "',
    },
];