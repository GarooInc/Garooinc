"use client";
import "./LogoTestimonials.css"
import React, { useEffect, useRef } from 'react';

const LogoTestimonials = ({testimonials}) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const ul = carouselRef.current;
    if (ul) {
      const clone = ul.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      ul.parentNode.insertBefore(clone, ul.nextSibling);
    }
  }
  , []);

    return (
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-50px),transparent_100%)]">
      <ul ref={carouselRef} className="flex items-center justify-center md:justify-start gap-x-8 animate-infinite-scroll px-4">
        {testimonials.map((logo, index) => (
          <li key={index} className="h-80 w-60">
            <img src={logo}  className="object-contain rounded-md" alt="logo" />
          </li>
        ))}
      </ul>                
    </div>
  )
}

export default LogoTestimonials
  