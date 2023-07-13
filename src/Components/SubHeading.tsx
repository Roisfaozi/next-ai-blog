import React from 'react';

type Props = {
  children: React.ReactNode,
  level: any,
  className?: string;
}

function SubHeading({ children, level, className }: Props) {
  const CustomHeading = `h${level}` as keyof JSX.IntrinsicElements
  return (
    <CustomHeading className={className}>{children}</CustomHeading>
  )
}

export default SubHeading