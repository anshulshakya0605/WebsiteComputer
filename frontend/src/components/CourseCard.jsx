import React from 'react'


function CourseCard({item}) {
    
    const {image, name, fees, minimum_pay, duration } = item;

  return (
    <div className='mt-4 mx-auto'>
        <div className='w-72 h-[450px] border shadow-lg rounded-lg hover:scale-95 duration-300 hover:shadow-orange-300 relative '>
           <img src={image} className='w-full h-46 rounded-lg object-cover' alt={name} /> 
           <div className='px-3 py-4'>
            <h1 className='text-xl text-orange-700 uppercase font-bold'> {name} </h1>
            <h3 className='py-2 text-xl font-semibold'>Course Fees: ₹ {fees} </h3>
            <p className='text-lg font-semibold text-gray-800'>Minimum Pay: ₹ {minimum_pay} </p>
            <p className='font-semibold text-orange-600'>Course Duration: ({duration}) Month's </p>
           </div>

            <div className='bg-orange-100 absolute bottom-0 w-full h-10 rounded-b-md'>
                <div className='px-5 flex items-center justify-between pt-1'>
                <button className='text-xl font-semibold'>Enquiry</button>
                <button className='text-xl font-semibold'>Details</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default CourseCard;