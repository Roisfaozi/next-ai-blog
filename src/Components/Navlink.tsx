"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navigation } from '../utils/constants'

type Props = {}

function Navlink({ }: Props) {
  const pathname = usePathname()
  const active = navigation.findIndex((e) => e.path === pathname)
  return (
    <ul className="header_nav">
      {navigation.map((e, i) => (
        <li key={i} className={`${i === active ? 'active font-bold' : ''}`}>
          <Link href={e.path}>
            {e.display}
          </Link>
        </li>
      ))}
    </ul>

  )
}

export default Navlink