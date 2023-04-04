import { useEffect, useState } from 'react'
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai'
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsScrolled(false)
      } else if (window.scrollY > 30 && !isScrolled) {
        setIsScrolled(true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isScrolled])
  return (
    <nav className={`fixed top-0 z-10 w-full px-2 ${isScrolled && 'bg-white bg-opacity-60 shadow-md backdrop-blur'}`}>
      <div className='mx-auto max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl'>
        <div className='flex items-center justify-between gap-4 py-2'>
          <div className='hidden gap-3 lg:flex'>
            <a href='#' className='nav-link text-yellow-300 hover:text-yellow-200'>
              Cắt Webtoon
            </a>
            <a href='#' className='nav-link nav-link-dark'>
              Ủng hộ
            </a>
            <a href='#' className='nav-link nav-link-dark'>
              Đăng truyện
            </a>
            <a href='#' className='nav-link nav-link-dark'>
              Tin tức
            </a>
          </div>
          <a
            href='#'
            className={`font-extrabold uppercase text-white text-opacity-60 ${isScrolled && '!text-gray-500'}`}
          >
            Cứu truyện
          </a>
          <div className='flex justify-end gap-2'>
            <button className='rounded-full bg-gray-500 p-3 text-white hover:bg-gray-400'>
              <AiOutlineSearch />
            </button>
            <button className='rounded-full bg-gray-500 p-3 text-white hover:bg-gray-400 '>
              <AiOutlineMenu />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
