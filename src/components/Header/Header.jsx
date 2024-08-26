import { useState } from 'react'
import Logo from '../../assets/images/logo-white.png'
import { CgMenuRight } from 'react-icons/cg'
import { RiCloseLargeLine } from 'react-icons/ri'
import { ContactButton } from '../ContactButton'

export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const MENU = [
    {
      id: 1,
      name: 'Inicio',
      link: 'https://dentric.com.mx'
    },
    {
      id: 2,
      name: 'Nosotros',
      link: 'https://dentric.com.mx'
    },
    {
      id: 3,
      name: 'Servicios',
      link: 'https://dentric.com.mx'
    },
    {
      id: 4,
      name: 'Testimonios',
      link: 'https://dentric.com.mx'
    }
  ]
  return (
    <>
      <nav className='bg-white h-auto relative'>
        <div className='container-nav flex flex-row justify-between w-11/12 m-auto py-2 items-center md:py-5 '>
          <div className='logo-header'>
            <img src={Logo} alt='' className='w-40 md:w-64' />
          </div>
          <ul
            className={`${isOpenMenu ? 'left-0' : '-left-full md:left-auto'}  menu absolute  top-0 bg-sky-950 w-full left-0 h-screen flex  
            items-center flex-col z-40 duration-500 md:relative md:h-auto md:w-auto md:flex-row md:bg-transparent `}
          >
            <RiCloseLargeLine
              className='absolute z-40 text-white top-5 right-5 text-xl md:hidden'
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            />

            {MENU.map((data, index) => (
              <li
                className='pt-14 text-white text-lg md:text-slate-900 md:pt-2 md:mx-5'
                key={index}
              >
                <a href={data.link}>{data.name}</a>
              </li>
            ))}
            <ContactButton bg='bg-blue-600 mt-14 md:mt-0' />
          </ul>
          <div
            className='bar-menu md:hidden'
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            <CgMenuRight className='h-12 w-8' />
          </div>
        </div>
      </nav>
    </>
  )
}
