import Card from '@/src/Components/Card'
import SubHeading from '@/src/Components/SubHeading'

type Props = {}

function AllBlogPostSection({ }: Props) {
  return (
    <div className='flex-col justify-start items-start gap-[30px] flex w-full'>
      <div className="flex-col justify-start items-start gap-8 flex">
        <SubHeading level='2' className="text-white text-2xl font-semibold">All blog posts</SubHeading>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-12 gap-x-8 w-full">
          <Card imageHeight={'h-[240px]'} />
          <Card imageHeight={'h-[240px]'} />
          <Card imageHeight={'h-[240px]'} />
          <Card imageHeight={'h-[240px]'} />
          <Card imageHeight={'h-[240px]'} />
          <Card imageHeight={'h-[240px]'} />
        </div>
      </div>
    </div>
  )
}

export default AllBlogPostSection