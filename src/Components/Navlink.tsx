"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navigation } from '../utils/constants'

type Props = {
  navbar: boolean
  children?: React.ReactNode
}

function Navlink({ children, navbar }: Props) {

  const pathname = usePathname()
  const active = navigation.findIndex((e) => e.path === pathname)
  return (
    <ul className={`justify-start items-center sm:gap-3.5 gap-5 sm:flex ${navbar === false ? 'hidden' : 'flex flex-col'}`}>
      {navigation.map((e, i) => (
        <li key={i} className={`list-none p-2 relative w-fit after:absolute after:-bottom-0.5 after:left-1/2 after:w-0 after:-translate-x-1/2 after:transition-width after:duration-300 after:ease-in after:h-[1px] after:dark:bg-white after:bg-dark ${i === active ? 'font-bold after:w-full' : ''}`}>
          <Link href={e.path} className='text-dark dark:text-white md:text-xl text-lg font-normal leading-6 relative inline'>
            {e.display}
          </Link>
        </li>
      ))}
      {children}
    </ul>

  )
}

export default Navlink