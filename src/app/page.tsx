import AllBlogPostSection from './(Home)/AllBlogPostSection'
import Heading from './(Home)/Heading'
import Pagination from './(Home)/Pagination'
import RecentBlog from './(Home)/RecentBlog'

function Home() {
  return (
    <div className="sm:py-[30px] py-24 flex-col justify-center gap-[30px] items-start flex w-full">
      <Heading />
      <RecentBlog />
      <AllBlogPostSection />
      <Pagination />
    </div>
  )
}


export default Home