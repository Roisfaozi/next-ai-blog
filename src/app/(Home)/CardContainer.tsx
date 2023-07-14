import React from 'react'

type Props = { children: React.ReactNode }

function CardContainer({ children }: Props) {
  return (
    <div className="card-container grid lg:gap-6 gap-8 w-full">{children}</div>
  )
}

export default CardContainer