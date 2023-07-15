import Heading from './(Home)/Heading'
import RecentBlog from './(Home)/RecentBlog'
const red = 'blue'

function Home() {
  const bg = `bg-${red}-50`
  return (
    <div className="sm:py-[30px] py-24 flex-col justify-center items-start flex w-full">
      <Heading />
      <RecentBlog />
      <div className={`w-full h-32 ${bg}`}>

      </div>
    </div>
  )
}


export default Home