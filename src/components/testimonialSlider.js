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
        name: "Saul Goodman",
        position: "Ceo & Founder",
        review: '" Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa. "',
    },
    {
        img: "/images/testimonials/2.jpg",
        name: "Sara Wilsson",
        position: "Designer",
        review: '" Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper. "',
    },
    {
        img: "/images/testimonials/3.jpg",
        name: "Jena Karlis",
        position: "Store Owner",
        review: '" Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim. "',
    },
    {
        img: "/images/testimonials/4.jpg",
        name: "Matt Brandon",
        position: "Freelancer",
        review: '" Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam. "',
    },
    {
        img: "/images/testimonials/5.jpg",
        name: "John Larson",
        position: "Entrepreneur",
        review: '" Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid. "',
    },
];