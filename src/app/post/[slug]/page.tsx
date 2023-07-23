import NewsLetter from '@/src/Components/NewsLetter'
import BlogContent from '../../(PostDetail)/BlogContent'
import Sidebar from '../../(PostDetail)/Sidebar'

type Props = {}

function PostDetail({ }: Props) {
  return (
    <div className="w-full">
      <div className="gap-8 md:flex-row-reverse md:flex w-full mb-32">
        <div className="basis-3/4">
          <BlogContent />
        </div>
        <div className="basis-1/4">
          <Sidebar />
        </div>
      </div>
      <NewsLetter />
    </div>

  )
}

export default PostDetail