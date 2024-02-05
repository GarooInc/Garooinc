"use client";
import React, { useEffect, useRef } from 'react';

const LogoTestimonials = ({testimonials, title}) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const ul = carouselRef.current;
    if (ul) {
      const clone = ul.cloneNode(true)
      clone.setAttribute('aria-hidden', 'true')
      ul.parentNode.insertBefore(clone, ul.nextSibling)
    }
  }
  , []);

    return (
      <div className="w-full flex-col pt-8">
        <h1 className="my-10 text-3xl font-bold tracking-tight text-garoo-blue sm:text-4xl text-center font-inter">
            {title}
          </h1>
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-50px),transparent_100%)]">
      <ul ref={carouselRef} className="flex items-center justify-center md:justify-start gap-x-8 animate-infinite-scroll px-4">
        {testimonials.map((logo, index) => (
          <li key={index} className="h-80 w-60">
            <img src={logo}  className="object-contain rounded-md" alt="logo" />
          </li>
        ))}
      </ul>                
    </div>
    </div>
  )
}

export default LogoTestimonials
  