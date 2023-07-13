import React from 'react'

type Props = { children: React.ReactNode }

function SubHeading({ children }: Props) {
  return (
    <h2 className="Heading self-stretch text-dark dark:text-white text-2xl font-semibold leading-loose">{children}</h2>
  )
}

export default SubHeading