import React from 'react'

function CertificateCard({item}) {
  return (
    <div className='max-w-2xl md:h-96 shadow-md my-4 relative'>
        <img src={item.image} className='w-full object-cover' alt="" />
    </div>
  )
}

export default CertificateCard;