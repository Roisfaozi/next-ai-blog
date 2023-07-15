import { categories } from '../utils/constants'
import SubHeading from './SubHeading'
import Tags from './Tags'
import { IconArrowUpRight } from './icons/IconArrowUpRight'


type Props = { width: string }

function CardContent({ width }: Props) {
  return (
    <div className={`flex-col justify-start items-start gap-6 inline-flex ${width}`}>
      <div className=" flex-col justify-start items-start gap-3 flex">
        {/* <div className="self-stretch text-violet-700 text-sm font-semibold leading-tight">{ date}</div> */}
        <p className="self-stretch text-violet-700 -mt-1 text-sm font-semibold leading-5">
          Sunday , 1 Jan 2023
        </p>
        <div className="flex-col justify-start items-start gap-3 inline-flex">
          <div className="self-stretch justify-start items-start gap-4 relative flex">
            <SubHeading level={2} className="grow shrink basis-0 dark:text-white text-textdark text-2xl font-semibold leading-8">
              UX review presentations
            </SubHeading>
            <div className="pt-1 flex-col justify-start items-start inline-flex">
              <IconArrowUpRight className="w-6 h-6 relative" />
            </div>
          </div>
          <p className="self-stretch text-primary text-base font-normal leading-6">How do you create compelling presentations that wow your colleagues and impress your managers?
          </p>
        </div>
      </div>
      <div className="self-stretch justify-start items-start gap-2 inline-flex">
        {
          categories.map((category, i) => (
            <Tags key={i} tag={category.tag} color={category.color} />
          ))
        }
      </div>
    </div>
  )
}

export default CardContent