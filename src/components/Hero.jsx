import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // مدة الانيميشن
      once: true     // خليها false علشان تشتغل كل مرة تسكرول
    })
  }, [])

  return (
    <div id='hero' className='my-60'>
      <div className='container mt-20 text-start text-primary-light mx-auto' data-aos="fade-down">
        <h1 className='text-5xl md:text-7xl font-bold'>
          وداعًا للوجبات السريعة<br /> مرحبًا بالوجبات الصحية الرائعة
        </h1>
        <p className='text-2xl md:text-3xl font-semibold pt-6 mb-16 text-secondary-light'>
          استمتع بأشهى الأكلات الصحية مع وصفاتنا السهلة والسريعة</p>
        <Link to={'/'}
          className='border py-3 px-8 text-secondary-light hover:text-neutral-dark hover:bg-secondary-light text-xl font-bold rounded-full bg-neutral-dark'>
          استكشف الأن</Link>
      </div>
    </div>
  )
}

export default Hero