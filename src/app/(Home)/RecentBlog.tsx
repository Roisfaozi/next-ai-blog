import Card from '@/src/Components/Card'
import SubHeading from '@/src/Components/SubHeading'
import CardContainer from './CardContainer'

type Props = {}

function RecentBlog({ }: Props) {
  return (
    <div className="w-full py-[30px] flex-col justify-start items-start md:items-center gap-16 inline-flex">
      <div className="flex-col justify-start items-start gap-8 flex">
        <SubHeading level={2} className='text-textdark dark:text-white text-2xl font-semibold leading-loose' >
          Recent blog posts
        </SubHeading>
        <CardContainer>
          <Card width='w-full' imageHeight='h-[228px]' className={'w-full flex-col justify-start items-start lg:gap-8 gap-6 flex'} />
          <Card width='w-full' imageHeight='h-[200px]' className={'w-full justify-start items-start lg:gap-8 gap-6 flex max-h-[200px]'} />
          <Card width='w-full' imageHeight='h-[200px]' className={'w-full justify-start items-start lg:gap-8 gap-6 flex max-h-[200px]'} />
          <Card width='w-full' imageHeight='h-[228px]' className={'w-full justify-start items-start lg:gap-8 gap-6 flex'} />
        </CardContainer>
      </div>
    </div>
  )
}

export default RecentBlog