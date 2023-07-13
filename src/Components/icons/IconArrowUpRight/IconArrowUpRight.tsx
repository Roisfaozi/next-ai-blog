"use client"

import { useTheme } from 'next-themes'

export function IconArrowUpRight({ className }: any) {
  const { theme } = useTheme()
  const fill = theme === 'dark' ? 'white' : '#1A1A1A'
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M7 17L17 7M17 7H7M17 7V17" stroke={fill} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  )
}
