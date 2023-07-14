import { categories } from '../utils/constants'
import SubHeading from './SubHeading'
import Tags from './Tags'
import { IconArrowUpRight } from './icons/IconArrowUpRight'


type Props = {}

function CardContent({ }: Props) {

  return (
    <div className="flex-col justify-start items-start gap-6 inline-flex">
      <div className="self-stretch flex-col justify-start items-start gap-3 flex">
        {/* <div className="self-stretch text-violet-700 text-sm font-semibold leading-tight">{ date}</div> */}
        <div className="self-stretch text-violet-700 text-sm font-semibold leading-tight">Sunday , 1 Jan 2023</div>
        <div className="self-stretch justify-start items-start gap-4 inline-flex">
          <SubHeading level={2} className="grow shrink basis-0 dark:text-white text-textdark text-2xl font-semibold leading-loose">UX review presentations</SubHeading>
          <div className="pt-1 flex-col justify-start items-start inline-flex">
            <IconArrowUpRight className="w-6 h-6 relative" />
          </div>
        </div>
        <div className="self-stretch text-primary text-base font-normal leading-normal">How do you create compelling presentations that wow your colleagues and impress your managers?</div>
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