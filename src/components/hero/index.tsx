'use client'      
import { useEffect, useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function Hero() {
  const [selectedImage, setSelectedImage] = useState(0);
  const data = [
    {
      img: "images/bg3.avif",
      title: 'Best Repairing Site'
    },
    {
      img: "images/bgg4.avif",
      title: 'Best Laptop Selling Site'
    },
    {
      img: "images/lapp2.avif",
      title: 'Best Laptop Selling Site'
    },
    {
      img: "images/bgg2.avif",
      title: 'Best Mobile Selling Site'
    },
  
  ];

  const [allImages, setAllImages] = useState(data);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedImage((prevSelectedImage) =>
        prevSelectedImage < allImages.length - 1 ? prevSelectedImage + 1 : 0
      );
    }, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [allImages.length]); // Include allImages.length as a dependency to ensure correct cleanup

  return (
    <div>
      <motion.figure
        key={selectedImage}
        initial={{ x: -100, opacity: 0, scale: 0.8 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          scale: { duration: 0.5 }, // Adjust the duration for the scale effect
          ease: "easeIn",
          duration: 1,
        }}
      >
        <AnimatePresence >
          <motion.img
            key={selectedImage}
            className="h-screen w-full relative transition-opacity duration-500 "
            src={allImages[selectedImage].img}
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        </AnimatePresence>
      </motion.figure>

      <ul className="flex justify-between ">
        <li
          className="absolute text-center  animate-bounce border-2 border-white rounded-full hover:border-red-500 text-5xl text-red-600 hover:text-green-500 top-2/3 left-5 cursor-pointer transition duration-300 ease-in-out hover:opacity-100"
          onClick={() => {
            if (selectedImage > 0) setSelectedImage(selectedImage - 1);
          }}
        >
          <FaArrowCircleLeft />
        </li>

        <li
          className="absolute text-5xl text-red-600 animate-bounce border-2 border-white rounded-full hover:border-red-500 hover:text-green-500  top-2/3 right-5 cursor-pointer transition duration-300 ease-in-out hover:opacity-100"
          onClick={() => {
            if (selectedImage < allImages.length - 1)
              setSelectedImage(selectedImage + 1);
          }}
        >
          <FaArrowCircleRight />
        </li>
      </ul>
    </div>
  );
}

export default Hero;























            // import React from 'react'
      
      // import AliceCarousel from 'react-alice-carousel';
      // import 'react-alice-carousel/lib/alice-carousel.css';
      
      // const data=[
      //     {
      //         img: "images/bbg.avif",
      //     },
      //     {
      //         img: "images/nik1.avif",
      //     },
      //     {
      //         img: "images/shoes.avif",
      //     }
      // ]
      // function Hero() {
      //     const items = data.map((item)=>{
      //         return(
      //     <img className='cursor-pointer w-full h-[70vh] -z-10' role='presentation' src={item.img} alt = ''></img>
      //         )
      //     })
      //     const responsive = {
      //     0: { items: 1 },
      //     1024: { items: 1 },
      //   };
      //   return (
      //     <div >
      //          <AliceCarousel
      //         mouseTracking
      //         items={items}
      //         disableButtonsControls={false} // Enable buttons
      //         autoPlay
      //         autoPlayInterval={2000}
      //         infinite
      //         responsive={responsive}
      //       />
      //     </div>
      //   )
      // }
      
      // export default Hero