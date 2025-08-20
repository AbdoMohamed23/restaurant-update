import React, { useEffect, useRef, useState } from 'react'
import { MdFoodBank } from "react-icons/md";
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const menuRef = useRef(null);

  const handleNav = () => setIsOpen(!isOpen);

  // ✅ إخفاء/إظهار الـ Header حسب اتجاه السكروول
  useEffect(() => {
    const controlHeader = () => {
      if (window.scrollY > lastScrollY) {
        // نازل لتحت
        setShowHeader(false);
      } else {
        // طالع لفوق
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlHeader);
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);

  // ✅ قفل المينيو عند الكليك بره
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <>
      {/* ✅ الخلفية الضبابية عند فتح القائمة */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-md z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ✅ الهيدر (يظهر/يختفي مع السكروول) */}
      <div
        className={`header px-12 bg-black/10 backdrop-blur-xs border-b border-gray-500 fixed top-0 left-0 right-0 z-30 transition-transform duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className='logo-nav max-w-[1200px] w-full flex justify-between items-center py-4 mx-auto'>
          <Link to={"/"} className='logo flex justify-center gap-2 text-2xl font-bold text-primary-light'>
            <MdFoodBank />
            <span>أكلة انهاردة</span>
          </Link>{/* Logo */}
          <div className='nav md:block hidden'>
            <ul className='flex justify-center gap-4 text-xl font-bold text-primary-light'>
              <li><Link to={'/'}>الرئيسية</Link></li>
              <li><Link to={'/'}>وصفات</Link></li>
              <li><Link to={'/'}>أكلات رئيسية</Link></li>
              <li><Link to={'/'}>فطور</Link></li>
              <li><Link to={'/'}>كيك</Link></li>
            </ul>
          </div>{/* Nav */}
          <div className='md:hidden block'>
            <button onClick={handleNav} className='text-2xl text-primary-light'>
              {isOpen ? '' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* ✅ قائمة الموبايل الناعمة */}
      <div
        ref={menuRef}
        className={`fixed top-8 left-4 w-[80%] text-white bg-[#202121] rounded-xl shadow-lg p-6 z-50 transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <h1 className="text-3xl primary-color mb-4">
          <Link to={"/"} className='logo flex justify-center gap-2 text-2xl font-bold text-primary-light border-b border-gray-500'>
            <MdFoodBank />
            <span>أكلة انهاردة</span>
          </Link>
        </h1>
        <ul className="space-y-4 text-xl">
          <li><Link onClick={() => setIsOpen(false)} to={'/'}>الرئيسية</Link></li>
          <li><Link onClick={() => setIsOpen(false)} to={'/'}>وصفات</Link></li>
          <li><Link onClick={() => setIsOpen(false)} to={'/'}>أكلات رئيسية</Link></li>
          <li><Link onClick={() => setIsOpen(false)} to={'/'}>فطور</Link></li>
          <li><Link onClick={() => setIsOpen(false)} to={'/'}>كيك</Link></li>
        </ul>
      </div>
    </>
  )
}

export default Header;