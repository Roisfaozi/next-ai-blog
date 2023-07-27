
type Props = {}

function Heading({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <h1 className="dark:text-white border-t border-b border-dark dark:border-white w-full text-center text-textdark font-bold xl:text-[242.8px] sm:text-[18vw] text-[17vw]">{children}</h1>
  )
}

export default Heading