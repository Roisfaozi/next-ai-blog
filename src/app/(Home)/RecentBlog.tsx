import Card from '@/src/Components/Card'
import SubHeading from '@/src/Components/SubHeading'
import getLatestPosts from '@/src/libs/getPost'
import CardContainer from './CardContainer'

type Props = {}

async function RecentBlog({ }: Props) {
  const post = await getLatestPosts()
  return (
    <div className="w-full py-[30px] flex-col justify-start items-start md:items-center gap-16 inline-flex">
      <div className="flex-col justify-start items-start gap-8 flex w-full">
        <SubHeading level={2} className='text-textdark dark:text-white text-2xl font-semibold' >
          Recent blog posts
        </SubHeading>
        <CardContainer>
          <Card className='card' imageHeight={'h-[228px]'} latestPost={post[0]} />
          <Card className='card' imageHeight={'h-[200px]'} />
          <Card className='card' imageHeight={'h-[200px]'} />
          <Card className='card' imageHeight={'h-[246px]'} />
        </CardContainer>
      </div>
    </div>
  )
}

export default RecentBlog