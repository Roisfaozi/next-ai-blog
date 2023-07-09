"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navigation } from '../utils/constants'

type Props = {
  navbar: boolean
  children?: any
}

function Navlink({ children, navbar }: Props) {

  const pathname = usePathname()
  const active = navigation.findIndex((e) => e.path === pathname)
  return (
    <ul className={`menu ${navbar === false ? 'hidden' : 'flex flex-col'}`}>
      {navigation.map((e, i) => (
        <li key={i} className={`${i === active ? 'active' : ''}`}>
          <Link href={e.path} className='link'>
            {e.display}
          </Link>
        </li>
      ))}
      {children}
    </ul>

  )
}

export default Navlink