import AllBlogPostSection from './(Home)/AllBlogPostSection'
import Heading from './(Home)/Heading'
import Pagination from './(Home)/Pagination'
import RecentBlog from './(Home)/RecentBlog'

export const revalidate = 60

function Home() {
  return (
    <div className="sm:py-[30px] py-24 flex-col justify-center gap-[30px] items-start flex w-full">
      <Heading >THE BLOG</Heading>
      <RecentBlog />
      <AllBlogPostSection />
      <Pagination />
    </div>
  )
}


export default Home