import React from 'react'
import CourseData from '../store/DataApi'
import CourseCard from './CourseCard';

function Courses() {
  return (
    <div className='px-6 lg:px-20 py-6 lg:py-16'>
        <h1 className='text-3xl font-semibold text-center mb-3 text-orange-700'>Popular Courses</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {CourseData.map((item, index) => (
          <CourseCard key={index} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Courses;