import { animateScroll as scroll } from 'react-scroll';
import { FaAngleDoubleUp } from 'react-icons/fa'
import { useEffect, useState } from 'react';

export const BackToTopBtn = () => {

  const [show, setShow] = useState(false)
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShow(true)
      } else {
        setShow(false)
      }
    })
  }, [])

  const scrollToTop = () => {
    scroll.scrollToTop()
  }
  
  return (
    show && (
    <button type="button" onClick={() => scrollToTop()} aria-label="Volver al inicio" className="flex justify-center items-center bg-gradient-to-r text-white text-xs sm:text-sm lg:text-base font-bold dark:from-primaryDark from-primaryLight from-0% dark:via-secondaryDark via-secondaryLight via-51% dark:to-primaryDark to-primaryLight to-100% w-10 h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 fixed z-10 right-4 bottom-8 md:right-6 md:bottom-12 lg:right-8 lg:bottom-16 rounded-lg cursor-pointer">
      <FaAngleDoubleUp size="1.5em" />
    </button>
    )
  )
}