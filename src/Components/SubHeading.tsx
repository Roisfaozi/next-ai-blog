import React from 'react'

type Props = { children: React.ReactNode }

function SubHeading({ children }: Props) {
  return (
    <div className="Heading self-stretch text-dark dark:text-white text-2xl font-semibold leading-loose">{children}</div>
  )
}

export default SubHeading