
type Props = {}

function Heading({ }: Props) {
  return (
    <div className="border-t border-b border-dark dark:border-white justify-center items-center inline-flex w-full py-4">
      <h1 className="dark:text-white text-center text-dark font-bold tracking-normal w-full xl:text-[240px] 2xl:text-[266px] sm:text-[18vw] text-[17vw]">THE BLOG</h1>
    </div>
  )
}

export default Heading