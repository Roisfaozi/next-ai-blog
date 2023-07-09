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
    <header className="header">
      <nav className={`navbar ${navbar === false ? 'justify-between h-[32px]' : 'navbar-responsive'}`}

      >
        <div className={`menu-wrapper ${navbar === false ? 'justify-between' : 'wrapper'}`}

        >
          <div className="logo">Your Name</div>

          <Navlink navbar={navbar} >
            <DarkModeToggle />
          </Navlink>
        </div>
        <div className="hamburger" ref={btnRef} onClick={() => setNavbar(!navbar)} tabIndex={0} >
          {
            navbar === false ?
              <IconHamburger fill={fill} tabIndex={0} className='animate-burger' />
              :
              <IconClose fill={fill} tabIndex={0} className='animate-burger' />
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
      className={`toggle-mode ${theme === 'light' ? '' : 'justify-end'}`}
    >
      <div className={`toggle-btn ${theme === 'light' ? 'translate-x-10' : 'translate-x-0 '}`} />

      {theme === 'light' ? (
        <IconOutlineSun />
      ) : (
        <IconOutlineMoon />

      )}

    </div>
  );
}
