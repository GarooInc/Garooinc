import React from 'react';

const ButtonNormal = ({text,href}) => {
    return(
        
        <a className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer" href={href}>
            {text}
        </a>
    )
}

export default ButtonNormal