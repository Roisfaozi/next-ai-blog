import React from 'react'

type Props = { children: React.ReactNode }

function CardContainer({ children }: Props) {
  return (
    <div className="self-stretch w-full flex-col justify-start items-start lg:gap-6 gap-8 flex md:inline-flex lg:flex">{children}</div>
  )
}

export default CardContainer