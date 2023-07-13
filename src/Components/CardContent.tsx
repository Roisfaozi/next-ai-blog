import SubHeading from './SubHeading'
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
        <div className="SupportingText self-stretch text-neutral-300 text-base font-normal leading-normal">How do you create compelling presentations that wow your colleagues and impress your managers?</div>
      </div>
      <div className="Categories self-stretch justify-start items-start gap-2 inline-flex">
        <div className="Badge justify-start items-start flex">
          <div className="BadgeBase px-2.5 py-0.5 bg-purple-50 rounded-2xl justify-center items-center flex">
            <div className="Text text-center text-violet-700 text-sm font-medium leading-tight">Design</div>
          </div>
        </div>
        <div className="Badge justify-start items-start flex">
          <div className="BadgeBase px-2.5 py-0.5 bg-indigo-50 rounded-2xl justify-center items-center flex">
            <div className="Text text-center text-indigo-700 text-sm font-medium leading-tight">Research</div>
          </div>
        </div>
        <div className="Badge justify-start items-start flex">
          <div className="BadgeBase px-2.5 py-0.5 bg-pink-50 rounded-2xl justify-center items-center flex">
            <div className="Text text-center text-pink-700 text-sm font-medium leading-tight">Presentation</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardContent