import React from "react"
import Image from "next/image"
import "./logoClouds.css"

const LogoClouds = () => {
    const logos = [
        "/assets/images/logoclouds/1.png",
        "/assets/images/logoclouds/2.png",
        "/assets/images/logoclouds/3.png",
        "/assets/images/logoclouds/4.png",
        "/assets/images/logoclouds/5.png",
        "/assets/images/logoclouds/6.png",
        "/assets/images/logoclouds/7.png",
        "/assets/images/logoclouds/8.png",
        "/assets/images/logoclouds/9.png",
        "/assets/images/logoclouds/10.png",
    ]

    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-garoo-sky sm:text-4xl text-center">
          Trusted By Renowned ENTREPRENEURS
          </h1>
          <div className="marquee-container">
          <div className="mx-auto mt-10 flex items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 marquee">
            {logos.map((logo) => (
                <Image
                    key={logo}
                    src={logo}
                    alt=""
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    width={150}
                    height={50}
                />
                ))
            }
          </div>
          </div>
        </div>
      </div>
    )
  }

export default LogoClouds
  