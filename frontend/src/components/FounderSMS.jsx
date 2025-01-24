import React from 'react'
import { ReactTyped } from 'react-typed'
import FounderImg from '../assets/images/about/amit.png'
import CoFounderImg from '../assets/images/about/anshul.jpeg'
function FounderSMS() {


    return (
        <>
            <div className='flex flex-col md:flex-row items-center justify-between px-6 lg:px-20 lg:py-16 gap-8'>
                <div className='w-full md:w-1/2 flex items-center justify-center'>
                    <div>
                        <h1 className='text-orange-700 font-bold text-2xl mb-3'>Founder Message</h1>
                        <h3 className='text-xl font-semibold mb-3 uppercase'>Mr. Amit <span> <ReactTyped
                            className='text-orange-700'
                            strings={['SHAKYA', 'KUMAR']}
                            typeSpeed={70}
                            backSpeed={80}
                            loop={true}
                        /> </span> </h3>

                        <p className='text-lg mb-2'>Welcome to Shree Balaji Computer Training Institute, where we believe that knowledge and skills in technology can change lives and open doors to a brighter future. In today's digital age, the demand for skilled professionals is constantly increasing, and at Shri Balaji Computer Centre, we aim to meet that demand by empowering our students with top-class training and real-world skills.</p>

                        <p className='text-lg mb-2'>Our mission is to create an environment where students are motivated to learn, innovate, and build careers with confidence. With a team of experienced instructors and a curriculum that evolves with industry standards, we are dedicated to delivering an educational experience that’s both practical and impactful. Our programs are carefully designed to suit the needs of diverse learners—whether you’re a beginner or looking to specialize further, we have a path for you.</p>

                        <p className='text-lg mb-2'>We are equally committed to supporting our students beyond the classroom, providing career guidance and placement assistance to help them make their mark in the tech world. At Shree Balaji Computer Centre, each student's success is our success, and we are proud to see our graduates achieve remarkable things in their careers.</p>

                    </div>
                </div>
                <div className='w-full md:w-1/2 flex items-center justify-center'>
                    <img src={FounderImg} alt="image" className='w-[80%] mt-5 mb-5 md:mb-0 rounded-xl shadow-xl hover:shadow-blue-400 hover:shadow-2xl cursor-pointer hover:scale-90 duration-500' />
                </div>
            </div>

            {/* co-founder message  */}
            
            <div className='flex flex-col md:flex-row items-center justify-between px-6 lg:px-20 lg:py-16 gap-8'>
                <div className='w-full md:w-1/2 flex items-center justify-center'>
                    <img src={CoFounderImg} alt="image" className='w-[70%] mt-5 mb-5 md:mb-0 rounded-xl shadow-xl hover:shadow-blue-400 hover:shadow-2xl cursor-pointer hover:scale-90 duration-500' />
                </div>
                <div className='w-full md:w-1/2 flex items-center justify-center'>
                    <div>
                        <h1 className='text-orange-700 font-bold text-2xl mb-3'>Co-Founder Message</h1>
                        <h3 className='text-xl font-semibold mb-3 uppercase'>Mr. Anshul <span> <ReactTyped
                            className='text-orange-700'
                            strings={['SHAKYA', 'KUMAR']}
                            typeSpeed={70}
                            backSpeed={80}
                            loop={true}
                        /> </span> </h3>
                        <h3 className='text-2xl font-semibold mb-3'>He is a Software<span> <ReactTyped
                            className='text-orange-700'
                            strings={['Developer', 'Engineer', 'Designer', 'Coder']}
                            typeSpeed={60}
                            backSpeed={60}
                            loop={true}
                        /> </span> </h3>

                        <p className='text-lg mb-2'>Welcome to Sree Balaji Computer Training Institute. Our journey has always been centered around empowering individuals through technology and education. In today's rapidly evolving digital world, having the right skills and confidence to navigate technological advancements is essential. At Shree Balaji Computer Center, we are dedicated to equipping our students with in-demand skills, practical experience, and industry insights that will prepare them to excel in their careers and adapt to the future of work.</p>

                        <p className='text-lg mb-2'>Our experienced instructors and carefully designed curriculum focus not only on building technical expertise but also on fostering problem-solving abilities, critical thinking, and creativity. Each course and program we offer is designed to meet the needs of both beginners and advanced learners, with the goal of helping each student reach their full potential.</p>

                        <p className='text-lg mb-2'>Thank you for choosing Shree Balaji Computer Training Institute. We look forward to being a part of your journey towards success and seeing the positive impact you bring to the industry and the community.</p>

                    </div>
                </div>

            </div>
        </>
    )
}

export default FounderSMS;