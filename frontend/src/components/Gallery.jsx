import React from 'react'
import CertificateCard from './CertificateCard'
import CertificateApi from '../store/CertificateApi'
function Gallery() {
  return (
    <div className='max-w-screen-2xl px-16 my-14 items-center justify-center mx-auto'>
        <h1 className='text-3xl text-orange-700 font-bold text-center mb-4'>Certificates</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mx-auto'>
            {CertificateApi.map((item, index) => (
                <CertificateCard key={index} item={item} />
            ))}
        </div>
    </div>
  )
}

export default Gallery