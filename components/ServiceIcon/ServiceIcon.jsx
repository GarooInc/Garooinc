import React from "react"
import PropTypes from "prop-types"
import "./ServiceIcon.css"

const ServiceIcon = ({ image, title, text }) => {
    return (
        <div className='flex flex-col items-start gap-2 mt-8 min-w-xl md:items-center '>
            <div className='overlay_serviceicon' >
                <img className='image_serviceicon' src={image} alt='service'/>
            </div>
            <h1 className='h-12 mt-2 text-xl font-bold tracking-tight text-gray-900 sm:text-m '>{title}</h1>
            <p className='mt-2 text-m leading-6 text-gray-700 text-start'>{text}</p>
        </div>
    )
}

ServiceIcon.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
    color: PropTypes.string,
    textcolor: PropTypes.string
}

export default ServiceIcon
