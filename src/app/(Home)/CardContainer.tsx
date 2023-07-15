import React from 'react'

type Props = { children: React.ReactNode }

function CardContainer({ children }: Props) {
  return (
    <div className="card-container grid grid-cols-4 grid-rows-2 lg:gap-8 gap-6 w-full">{children}</div>
  )
}

export default CardContainer