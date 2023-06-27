"use client"

import { useState } from "react";
import Navlink from './Navlink';

function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-white sticky top-0 dark:bg-[#090D1F] z-50">
      <div className="w-full h-[65px] py-2.5 justify-between items-center gap-3.5 inline-flex ">
        <p className="text-white text-[20px] font-semibold leading-normal">Your Name</p>
        <div>

          <Navlink />
        </div>
      </div>
    </nav>
  );
}

export default NavBar