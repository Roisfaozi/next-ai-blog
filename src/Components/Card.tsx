import Image from 'next/image'

type Props = {}

function Card({ }: Props) {
  return (
    <div className="self-stretch w-full flex-col justify-start items-start lg:gap-8 gap-6 flex sm:inline-flex ">
      <div className="relative w-full h-[228px]">
        <Image
          src={`https://via.placeholder.com/326x228`}
          alt={`image plaeceholder`}
          sizes='sizes="(max-width: 480px) 100vw,
                (max-width: 768px) 75vw,
                (max-width: 1060px) 50vw,
                33vw'
          fill
          className="object-cover"

        />
      </div>

      {/* <img className="Image w-[326px] h-[228px] relative" src="https://via.placeholder.com/326x228" /> */}
      <div className="Content self-stretch h-[196px] flex-col justify-start items-start gap-6 flex">
        <div className="HeadingAndText self-stretch h-[148px] flex-col justify-start items-start gap-3 flex">
          <div className="Author self-stretch text-violet-700 text-sm font-semibold leading-tight">Sunday , 1 Jan 2023</div>
          <div className="HeadingAndIcon self-stretch justify-start items-start gap-4 inline-flex">
            <div className="Heading grow shrink basis-0 text-white text-2xl font-semibold leading-loose">UX review presentations</div>
            <div className="IconWrap pt-1 flex-col justify-start items-start inline-flex">
              <div className="ArrowUpRight w-6 h-6 relative" />
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
    </div>
  )
}

export default Card