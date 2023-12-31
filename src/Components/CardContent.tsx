import { categories } from '../utils/constants'
import SubHeading from './SubHeading'
import Tags from './Tags'
import { IconArrowUpRight } from './icons'

type Props = { post: any }

function CardContent({ post }: Props) {
  console.log(post)
  return (
    <div className={`flex-col justify-start items-start gap-6 inline-flex w-full`}>
      <div className=" flex-col justify-start items-start gap-3 flex">
        {/* <div className="self-stretch text-violet-700 text-sm font-semibold leading-tight">{ date}</div> */}
        <p className="self-stretch text-violet-700 -mt-1 text-sm font-semibold leading-5">
          Sunday , 1 Jan 2023
        </p>
        <div className="flex-col justify-start items-start gap-3 inline-flex">
          <div className="self-stretch justify-start items-start gap-4 relative flex">
            <SubHeading level={4} className="grow shrink basis-0 dark:text-white text-textdark text-2xl font-semibold leading-8">
              How collaboration makes us better designers
            </SubHeading>
            <div className="pt-1 flex-col justify-start items-start inline-flex">
              <IconArrowUpRight className="w-6 h-6 relative" />
            </div>
          </div>
          <p className="self-stretch text-primary text-base font-normal leading-6">The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...
          </p>
        </div>
      </div>
      <div className="self-stretch justify-start items-start gap-2 inline-flex">
        {
          categories.map(Tags)
        }
      </div>
    </div>
  )
}

export default CardContent