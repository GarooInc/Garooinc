import React from 'react'
import Stats from '../Stats/Stats'

const Portfolio = () => {
  return (
    <div className="relative max-h-full isolate overflow-hidden bg-white px-6 pt-10 sm:pt-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">From Guatemala to the <span className="mt-2 text-3xl font-bold tracking-tight text-garoo-sky sm:text-6xl">World.</span></h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              We are proud to serve clients globally with our cutting-edge e-commerce and AI bot solutions. We are committed to delivering top-notch technology that empowers businesses to succeed in the digital era. Join us on this journey of innovation and let&apos;s shape the future together.
              </p>
              <Stats />
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img className="w-[48rem] max-w-none rounded-xl  shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src="/assets/images/gtworld.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Portfolio
