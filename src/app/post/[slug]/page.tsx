import SubHeading from '@/src/Components/SubHeading'
import Sidebar from '../../(PostDetail)/Sidebar'

type Props = {}

function PostDetail({ }: Props) {
  return (
    <div className="gap-8 md:flex-row-reverse md:flex w-full">
      <div className="basis-3/4">
        <SubHeading level={1} className='text-textdark dark:text-white text-3xl font-semibold text-center'>
          Building any open-source projects this weekend?
        </SubHeading>

        <p>A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and
          horizontal lines that create a matrix of intersecting points, which can be used to align and organize page
          elements. Grid systems are used to create a consistent look and feel across a website, and can help to
          make the layout more visually appealing and easier to navigate.</p>
      </div>
      <div className="basis-1/4">
        <Sidebar />
      </div>
    </div>
  )
}

export default PostDetail