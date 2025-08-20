import React, { useEffect } from 'react'
import assets0 from '../assets/2.png' // Assuming you have an image at this path
import assets1 from '../assets/00.png' // Assuming you have an image at this path
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

const FlexImgTxt = () => {
    useEffect(() => {
      AOS.init({
        duration: 1500, // مدة الانيميشن
        once: true     // خليها false علشان تشتغل كل مرة تسكرول
      })
    }, [])

  return (
    <>
          <div className='container mx-auto flex flex-col md:flex-row justify-between gap-4 my-40' data-aos="fade-up">
        <div className='w-full md:w-1/2 text-start'>
            <h2 className='text-4xl font-bold text-primary-light mt-24 mb-2'>وصفات متنوعة</h2>
            <p className='text-xl text-secondary-light mb-8'>استمتع بتشكيلة واسعة من الوصفات الصحية واللذيذة التي تناسب جميع الأذواق نحن نصنع كل شيء يدويًا بأفضل المكونات الممكنة نحن نفخر بأنفسنا في صنع طعام حقيقي من أفضل المكونات استمتع بتشكيلة واسعة من الوصفات الصحية واللذيذة التي تناسب جميع الأذواق نحن نصنع كل شيء يدويًا بأفضل المكونات الممكنة نحن نفخر بأنفسنا في صنع طعام حقيقي من أفضل المكونات</p>
            <Link to={'/'} className='border py-2 px-6 text-secondary-light hover:text-neutral-dark hover:bg-secondary-light text-xl font-bold rounded-full bg-neutral-dark mt-4'>استكشف الوصفات</Link>
        </div>{/* txt */}
        <div className='w-full md:w-1/2 text-end'>
            <img src={assets0} alt="وصفات متنوعة" />
        </div>{/* image */}
    </div>
    <div className='container mx-auto flex flex-col md:flex-row justify-between gap-12 my-40' data-aos="fade-out">
        <div className='w-full md:w-1/2 text-end'>
            <img src={assets1} className='rounded-2xl' alt="وصفات متنوعة" />
        </div>{/* image */}
        <div className='w-full md:w-1/2 text-start'>
            <h2 className='text-4xl font-bold text-primary-light mt-12 mb-2'>وصفات متنوعة</h2>
            <p className='text-xl text-secondary-light mb-8'>نحن نصنع كل شيء يدويًا بأفضل المكونات الممكنة استمتع بتشكيلة واسعة من الوصفات الصحية واللذيذة التي تناسب جميع الأذواق نحن نصنع كل شيء يدويًا بأفضل المكونات الممكنة نحن نفخر بأنفسنا في صنع طعام حقيقي من أفضل المكونات استمتع بتشكيلة واسعة من الوصفات الصحية واللذيذة التي تناسب جميع الأذواق نحن نصنع كل شيء يدويًا بأفضل المكونات الممكنة نحن نفخر بأنفسنا في صنع طعام حقيقي من أفضل المكونات</p>
            <Link to={'/'} className='border py-2 px-6 text-secondary-light hover:text-neutral-dark hover:bg-secondary-light text-xl font-bold rounded-full bg-neutral-dark mt-4'>استكشف الوصفات</Link>
        </div>{/* txt */}
    </div>
    </>
  )
}

export default FlexImgTxt