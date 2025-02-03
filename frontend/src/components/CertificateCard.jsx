import React from 'react'

function CertificateCard({item}) {
  return (
    <div className='max-w-2xl h-96 shadow-md'>
        <img src={item.image} className='w-full object-cover' alt="" />
    </div>
  )
}

export default CertificateCard