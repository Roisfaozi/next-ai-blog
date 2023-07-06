"use client"

import { useTheme } from 'next-themes';
import { useEffect, useState } from "react";
import Navlink from './Navlink';
import { IconOutlineMoon1 } from './icons/IconOutlineMoon1';
import { IconOutlineSun } from './icons/IconOutlineSun';

function NavBar() {
  const [navbar, setNavbar] = useState(false);




  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">Your Name</div>
        <Navlink >
          <DarkModeToggle />
        </Navlink>
      </nav>
    </header>
  );
}

export default NavBar

function DarkModeToggle({ colour = 'bg-blue-600', on = false, tabIndex = 0 }) {
  const [isOn, setIsOn] = useState(on);
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
      className={`toggle-mode ${theme === 'dark' ? '' : 'justify-end'}`}
    >
      <div className={`w-6 h-6 absolute dark:bg-dark bg-white rounded-2xl border-none transform left-4 duration-200 ease-out ${theme === 'dark' ? 'translate-x-10' : 'translate-x-0 '}`} />
      {theme === 'dark' ? (
        <IconOutlineMoon1 className="icon-instance-node" />
      ) : (
        <IconOutlineSun className="icon-instance-node" />
      )}
    </div>
  );
}
