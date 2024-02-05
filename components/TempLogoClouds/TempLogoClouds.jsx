import React from "react"
import Image from "next/image"
import "./TempLogoClouds.css"

const LogoClouds = ({logos, title}) => {

    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-garoo-sky sm:text-4xl text-center font-inter">
            {title}
          </h1>
          <div className="marquee-container">
          <div className="mx-auto mt-10 flex items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 marquee">
            {logos.map((logo) => (
                <img
                    key={logo}
                    src={logo}
                    alt=""
                    className="col-span-2 max-h-12 w-full object-cover lg:col-span-1 max-w-[100px]"
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
  