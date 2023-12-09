import React from 'react'
import LogoTestimonials from '@/components/LogoTestimonials/LogoTestimonials'
import Home from '@/components/Home'
import About from '@/components/About/About'
import LogoClouds from '@/components/LogoClouds/LogoClouds'
import { CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'


const PrincipalPage = () => {
  return (
    <div className="principalPage w-full">
        <section id='/' className="home w-full h-screen">
            <Home />
        </section>
        <LogoTestimonials />
        <section id='about' className="w-full h-screen">
            <About title="E - Commerce Solutions" subtitle="Businesses with Cutting-Edge Technology" text1="At Garoo Inc, we pride ourselves on our cutting-edge e-commerce solutions that drive businesses to new heights of success."  text2="Beyond e-commerce, our expertise in AI bot development sets us apart. Garoo Inc is committed to harnessing the full potential of artificial intelligence to bring intelligent and interactive bots to life." solutionTitle="E - Commerce Solutions." solutionText="We take care of designing, creating, and managing your e-commerce site. Keep your site up to date, just send an email and we will do it for you. Put all your energy in growing and creating an amazing business." icon={<CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-garoo-blue" aria-hidden="true"/>} videoUrl="https://cdn.shopify.com/videos/c/o/v/06c704982afd46e58389bf28425e5b70.mp4" />
            <About title="BOT Solutions" subtitle="Businesses with AI Innovation" text1="We understand that the online marketplace is a dynamic and competitive environment, which is why we offer tailored services that cater to the unique needs of each client."  text2="We believe in the power of technology to shape a better future, and we are excited to partner with you on this exciting adventure." solutionTitle="BOT Solutions." solutionText="We create chatbots powered by Artificial Intelligence (Chat GPT). Our AI bots are designed to enhance customer experiences, automate processes, and provide invaluable insights for businesses. Whether it's customer support, personalized recommendations, or streamlining operations. Our AI bots are built to deliver unparalleled efficiency and effectiveness." icon={<LockClosedIcon className="mt-1 h-5 w-5 flex-none text-garoo-blue" aria-hidden="true" />} videoUrl="https://cdn.shopify.com/videos/c/o/v/e8f54a2ffa4e4af4acd30b3216db29d1.mp4" />
            <LogoClouds/>
        </section>
        <section id='/services' className="text-center">
            <h1>Services</h1>
        </section>
        <section id='/portfolio' className="portfolio">
            <h1>Portfolio</h1>
        </section>
        <footer className="footer">
            <h1>Footer</h1>
        </footer>
    </div>
  )
}

export default PrincipalPage