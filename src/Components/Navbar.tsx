"use client"
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from "react";
import Navlink from './Navlink';
import { IconOutlineMoon } from './icons/IconOutlineMoon';
import { IconOutlineSun } from './icons/IconOutlineSun';

const IconHamburger = dynamic(() => import('./icons/IconHamburger').then((mod) => mod.IconHamburger), { ssr: false })
const IconClose = dynamic(() => import('./icons/IconClose').then((mod) => mod.IconClose), { ssr: false })

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const { theme } = useTheme()

  const btnRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const closeMenu = (e: any) => {
      if (btnRef.current && !btnRef.current.contains(e.target)) {
        setNavbar(false)
      }
    }

    document.body.addEventListener('click', closeMenu)

    return () => {
      document.body.removeEventListener('click', closeMenu)
    }
  }, [])

  const fill = theme === 'dark' ? 'white' : '#1A1A1A'
  return (
    <header className={`bg-white dark:bg-dark lg:py-[30px] md:py-[20px] py-5 sm:top-0 sm:sticky fixed left-0 sm:px-0 px-5 w-full z-30`}>
      <nav className={`text-textdark dark:text-white flex items-center md:py-[10px] py-0 relative w-full sm:h-full transition-all duration-500 ${navbar === false ? 'justify-between h-[32px]' : 'flex-col justify-around h-screen'}`}

      >
        <div className={`inline-flex items-center w-full bg-white dark:bg-dark ${navbar === false ? 'justify-between' : 'flex-col justify-center items-center gap-[54px] w-screen h-[80%]'}`}

        >
          <div className="md:text-xl text-lg font-semibold leading-6o">Your Name</div>

          <Navlink navbar={navbar} >
            <DarkModeToggle />
          </Navlink>
        </div>
        <div className="block p-0 sm:hidden" ref={btnRef} onClick={() => setNavbar(!navbar)} tabIndex={0} >
          {
            navbar === false ?
              <IconHamburger fill={fill} tabIndex={0} className='animate-burger' />
              :
              <IconClose fill={fill} tabIndex={0} className='animate-apear' />
          }

        </div>
      </nav>
    </header>
  );
}

export default NavBar

function DarkModeToggle({ tabIndex = 0 }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  function toggle() {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  function handleClick() {
    toggle()
  }

  function handleKeyDown({ key }: any) {
    if (key === 'Enter') toggle();
  }


  return (
    <div
      role="checkbox"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      className={`w-24 h-10 px-4 py-2 bg-dark dark:bg-white rounded-[29px] relative items-start gap-4 flex ${theme === 'light' ? '' : 'justify-end'}`}
    >
      <div className={`w-6 h-6 absolute dark:bg-dark bg-white rounded-2xl border-none transform left-4 duration-100 ease-out ${theme === 'light' ? 'translate-x-10' : 'translate-x-0 '}`} />

      {theme === 'light' ? (
        <IconOutlineSun />
      ) : (
        <IconOutlineMoon />

      )}

    </div>
  );
}
