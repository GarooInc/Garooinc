import React from 'react'

const Looker = () => {
  return (
    <div className='mt-20 w-full'>
        <iframe 
          width="100%" 
          height="650" 
          src="https://lookerstudio.google.com/embed/reporting/0a7362be-97e9-444c-ac21-132879f25be3/page/2YoyD" 
          frameBorder="0" 
          style={{ border: '0' }}  // Change here: style as an object
          allowFullScreen
          sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        ></iframe>
    </div>
  )
}

export default Looker;
