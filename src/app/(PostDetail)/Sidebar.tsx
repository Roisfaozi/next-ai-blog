import Card from '@/src/Components/Card'
import SubHeading from '@/src/Components/SubHeading'

type Props = {}

function Sidebar({ }: Props) {
  return (
    <div className="flex-col justify-center items-start gap-8 inline-flex">
      <SubHeading level={2} className='text-textdark dark:text-white text-2xl font-semibold' >
        Recent blog posts
      </SubHeading>
      <Card className='' imageHeight={'h-[228px]'} />
      <Card className='' imageHeight={'h-[200px]'} />
      <Card className='' imageHeight={'h-[200px]'} />
      <Card className='' imageHeight={'h-[246px]'} />
    </div>
  )
}

export default Sidebar