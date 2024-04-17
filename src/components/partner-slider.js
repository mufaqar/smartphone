import Image from "next/image";
import React from "react";
import Slider from "react-slick";

export default function PartnerSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <Slider {...settings} className="partners">
            {data?.map((item, idx) => {
                return (<div key={idx}>
                    <Image src={item?.img} alt="logo" width={86} height={32} className="m-auto grayscale hover:grayscale-0" />
                </div>
                )
            })}
        </Slider>
    );
}

const data = [
    {
        img: "/images/partner/logo1.png",
    },
    {
        img: "/images/partner/logo2.png",
    },
    {
        img: "/images/partner/logo3.png",
    },
    {
        img: "/images/partner/logo4.png",
    },
    {
        img: "/images/partner/logo5.png",
    },
    {
        img: "/images/partner/logo6.png",
    },
    {
        img: "/images/partner/logo7.png",
    },
];