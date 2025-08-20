import assets1 from '../assets/01.jpg'
import assets2 from '../assets/02.jpg'
import assets3 from '../assets/03.jpg'
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const SiteList = () => {
    useEffect(() => {
      AOS.init({
        duration: 1000, // مدة الانيميشن
        once: true     // خليها false علشان تشتغل كل مرة تسكرول
      })
    }, [])
  const products = [
    { id: 1, title: 'فراخ مشوية', price: '120 ج.م', image: assets3, time: '30 دقيقة' },
    { id: 2, title: 'سمك باتية', price: '170 ج.م', image: assets1, time: '10 دقايق' },
    { id: 3, title: 'مهلبية', price: '100 ج.م', image: assets2, time: '25 دقيقة' },
    { id: 4, title: 'شكشوكة', price: '80 ج.م', image: assets3, time: '20 دقيقة' },
    { id: 5, title: 'سمبتيك', price: '20 ج.م', image: assets1, time: '30 دقيقة' },
    { id: 6, title: 'بتنجان مشروم', price: '210 ج.م', image: assets2, time: '20 دقيقة' },
    // يمكنك إضافة المزيد من المنتجات هنا
  ];
  return (
    <div id='site-list' className='overflow-hidden mt-20 mx-auto' data-aos="fade-in">
      <div className='flex animate-scroll gap-4'>{/* flex when you will make it scrolling*/}
        {[...products, ...products].map((product, index) => (
          <div key={`${product.id}-${index}`} className='card  flex-shrink-0 w-64'>
            <img src={product.image} className='rounded-t-xl w-full h-32' alt="أكلات مصرية شهية" />
            <div className='flex flex-col justify-between gap-1 text-black text-xl font-semibold px-4 py-2 bg-white/60 rounded-b-xl'>
              <h1>{product.title}</h1>
              <div className='flex justify-between items-center'>
                <p>{product.time}</p>
                <span>{product.price}</span>
              </div>
              <Link to={'/'} className='bg-black hover:text-neutral-dark text-white hover:bg-secondary-light text-lg font-semibold text-center py-2 px-4 rounded-full my-2 transition-all ease-in-out duration-300'>اطلب دلوقتي</Link>
            </div>{/* flex text with out the image */}
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default SiteList