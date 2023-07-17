"use client"
import { useTheme } from 'next-themes'
type Props = {}

export function IconArrowLeft({ }: Props) {
  const { resolvedTheme } = useTheme()
  const fill = resolvedTheme === 'dark' ? 'white' : '#1A1A1A'
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">

      <path d="M15.8327 9.99984H4.16602M4.16602 9.99984L9.99935 15.8332M4.16602 9.99984L9.99935 4.1665" stroke={fill} strokeWidth="1.67" strokeLinecap="round"
        strokeLinejoin="round" />

    </svg>
  )
}

