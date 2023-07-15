import Heading from './(Home)/Heading'
import RecentBlog from './(Home)/RecentBlog'

function Home() {
  return (
    <div className="sm:py-[30px] py-24 flex-col justify-center items-start flex w-full">
      <Heading />
      <RecentBlog />

    </div>
  )
}


export default Home