import React from 'react'
import Header from '../components/Header'
import About from '../components/About';
import Courses from '../components/Courses';
import Gallery from '../components/Gallery';
function Home() {
  return (
    <>
    <Header/>
    <About/>
    <Courses/>
    <Gallery/>
    </>
  )
}

export default Home;