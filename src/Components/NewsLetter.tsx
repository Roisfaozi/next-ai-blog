import EmailForm from './EmailForm'
import SubHeading from './SubHeading'

type Props = {}

function NewsLetter({ }: Props) {
  return (
    <div className="w-full flex-col justify-start items-center gap-10 flex">
      <div className=" flex-col justify-start items-center gap-6 flex">
        <div className="flex-col justify-center items-center gap-3 flex">
          <div className="text-center text-violet-500 text-base font-semibold leading-normal">Newlatters</div>
          <SubHeading level={3} className="text-center text-textdark dark:text-white text-5xl font-semibold leading-[60px]">Stories and interviews</SubHeading>
        </div>
        <p className="w-[768px] text-center text-xl font-normal leading-[30px]">Subscribe to learn about new product features, the latest in technology, solutions, and updates.</p>
      </div>
      <EmailForm />
    </div>
  )
}

export default NewsLetter