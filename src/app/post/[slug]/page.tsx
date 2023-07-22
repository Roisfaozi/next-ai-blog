import SubHeading from '@/src/Components/SubHeading'

type Props = {}

function PostDetail({ }: Props) {
  return (
    <div className="gap-8 md:flex-row-reverse md:flex w-full">
      <div className="basis-3/4">
        <SubHeading level={2} className='text-textdark dark:text-white text-3xl font-semibold text-center'>
          Post
        </SubHeading>
      </div>
      <div className="basis-1/4">
        <SubHeading level={2} className='text-textdark dark:text-white text-xl font-semibold text-center'>
          sidebar
        </SubHeading>
      </div>
    </div>
  )
}

export default PostDetail