import React from 'react'
import { FaFacebookSquare, FaTelegram, FaTwitter } from 'react-icons/fa'
import { FaSquareInstagram, FaSquareWhatsapp } from 'react-icons/fa6'
import { MdFoodBank } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex flex-col bg-black/10 backdrop-blur-xs border-t border-gray-500'>
      <div className='flex-1'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 py-8 px-12 mx-8'>
          <div className='col-span-2 md:col-span-2 w-full md:w-3/4'>
            <Link to={"/"} className='logo flex justify-start gap-2 text-xl font-semibold md:text-2xl md:font-bold text-primary-light'>
              <MdFoodBank />
              <span>أكلة انهاردة</span>
            </Link>{/* Logo */}
            <p className='mt-4 text-sm md:text-lg font-normal md:font-medium text-primary-light'>هو مزيج من الأطباق العربية والتركية والفارسية واليونانية والرومانية، مع بصمة مصرية فريدة. يشتهر المطبخ المصري بتنوعه وغناه بالخضروات واللحوم والأسماك، بالإضافة إلى الأطباق الشعبية الشهيرة مثل الكشري والفول المدمس والطعمية والملوخية والفتة</p>
          </div>
          <div className='col-span-1 md:col-span-1'>
            <div className='nav'>
              <h1 className='text-lg md:text-2xl text-neutral-light font-medium md:font-bold mb-4'>روابط سريعة</h1>
              <ul className='justify-center gap-4 text-sm md:text-xl font-medium text-primary-light'>
                <li><Link to={'/'}>الرئيسية</Link></li>
                <li><Link to={'/'}>وصفات</Link></li>
                <li><Link to={'/'}>أكلات رئيسية</Link></li>
                <li><Link to={'/'}>فطور</Link></li>
                <li><Link to={'/'}>كيك</Link></li>
              </ul>
            </div>{/* Nav */}
          </div>
          <div className='col-span-1 md:col-span-1'>
            <div className='nav'>
              <h1 className='text-lg md:text-2xl text-neutral-light font-medium md:font-bold mb-4'>تواصل معنا</h1>
              <ul className='justify-center gap-4 text-sm md:text-xl font-medium text-primary-light'>
                <li><Link to={'/'} className='flex justify-start items-center gap-1'><FaSquareInstagram />إنستجرام</Link></li>
                <li><Link to={'/'} className='flex justify-start items-center gap-1'><FaFacebookSquare />فيسبوك</Link></li>
                <li><Link to={'/'} className='flex justify-start items-center gap-1'><FaSquareWhatsapp />واتساب</Link></li>
                <li><Link to={'/'} className='flex justify-start items-center gap-1'><FaTelegram />تليجرام</Link></li>
                <li><Link to={'/'} className='flex justify-start items-center gap-1'><FaTwitter />تويتر</Link></li>
              </ul>
            </div>{/* Nav */}
          </div>
          {/* <div className='col-span-2 md:col-span-1'>
            <div className='text-sm font-normal md:text-lg md:font-semibold text-start text-primary-light'>
              <p>© 2023 أكلة انهاردة. جميع الحقوق محفوظة.</p>
              <p>تصميم وتطوير بواسطة <Link to='/' className='text-primary-light'>عبدالرحمن محمد</Link></p>
            </div>
          </div> */}
        </div>
      </div>
      <div className='border-t border-gray-500 text-primary-light py-8 px-12 mx-8'>
        <div className='flex flex-wrap md:flex-row justify-between items-center text-sm font-normal md:text-lg md:font-semibold'>
          <p className='text-center text-secondary-light'>سياسة الخصوصية | شروط الاستخدام</p>
          <p className='text-center text-secondary-light'>© ٢٠٢٤ أكلة انهاردة. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </div>

    // <div className='footer bg-neutral-dark text-primary-light py-8 px-12 flex items-center justify-between'>
    //   <div className='text-sm font-normal md:text-lg md:font-semibold'>
    //     <p className='text-center text-secondary-light'>© 2023 أكلة انهاردة. جميع الحقوق محفوظة.</p>
    //     <p className='text-center text-secondary-light'>تصميم وتطوير بواسطة <Link to='/' className='text-primary-light'>اسمك</Link></p>
    //   </div>

    // </div>
  )
}

export default Footer