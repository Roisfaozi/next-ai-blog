import Card from '@/src/Components/Card'
import SubHeading from '@/src/Components/SubHeading'

type Props = {}

function AllBlogPostSection({ }: Props) {
  return (
    <div className='flex-col justify-start items-start gap-[30px] flex w-full'>
      <div className="flex-col justify-start items-start gap-8 flex">
        <SubHeading level='2' className="text-white text-2xl font-semibold">All blog posts</SubHeading>
        <div className="grid grid-cols-3 gap-y-12 gap-x-8 w-full">
          <div className="BlogPostCard grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
            <img className="Image w-96 h-60 relative" src="https://via.placeholder.com/384x240" />
            <div className="Content self-stretch h-[172px] flex-col justify-start items-start gap-6 flex">
              <div className="HeadingAndText self-stretch h-[124px] flex-col justify-start items-start gap-3 flex">
                <div className="Author self-stretch text-violet-700 text-sm font-semibold leading-tight">Sunday , 1 Jan 2023</div>
                <div className="HeadingAndIcon self-stretch justify-start items-start gap-4 inline-flex">
                  <div className="Heading grow shrink basis-0 text-white text-2xl font-semibold">Bill Walsh leadership lessons</div>
                  <div className="IconWrap pt-1 flex-col justify-start items-start inline-flex">
                    <div className="ArrowUpRight w-6 h-6 relative" />
                  </div>
                </div>
                <div className="SupportingText self-stretch text-neutral-300 text-base font-normal leading-normal">Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?</div>
              </div>
              <div className="Categories self-stretch justify-start items-start gap-2 inline-flex">
                <div className="Badge justify-start items-start flex">
                  <div className="BadgeBase px-2.5 py-0.5 bg-purple-50 rounded-2xl justify-center items-center flex">
                    <div className="Text text-center text-violet-700 text-sm font-medium leading-tight">Leadership</div>
                  </div>
                </div>
                <div className="Badge justify-start items-start flex">
                  <div className="BadgeBase px-2.5 py-0.5 bg-slate-50 rounded-2xl justify-center items-center flex">
                    <div className="Text text-center text-indigo-900 text-sm font-medium leading-tight">Management</div>
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
          <div className="BlogPostCard grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
            <img className="Image w-96 h-60 relative" src="https://via.placeholder.com/384x240" />
            <div className="Content self-stretch h-[172px] flex-col justify-start items-start gap-6 flex">
              <div className="HeadingAndText self-stretch h-[124px] flex-col justify-start items-start gap-3 flex">
                <div className="Author self-stretch text-violet-700 text-sm font-semibold leading-tight">Sunday , 1 Jan 2023</div>
                <div className="HeadingAndIcon self-stretch justify-start items-start gap-4 inline-flex">
                  <div className="Heading grow shrink basis-0 text-white text-2xl font-semibold">PM mental models</div>
                  <div className="IconWrap pt-1 flex-col justify-start items-start inline-flex">
                    <div className="ArrowUpRight w-6 h-6 relative" />
                  </div>
                </div>
                <div className="SupportingText self-stretch text-neutral-300 text-base font-normal leading-normal">Mental models are simple expressions of complex processes or relationships.</div>
              </div>
              <div className="Categories self-stretch justify-start items-start gap-2 inline-flex">
                <div className="Badge justify-start items-start flex">
                  <div className="BadgeBase px-2.5 py-0.5 bg-sky-50 rounded-2xl justify-center items-center flex">
                    <div className="Text text-center text-sky-700 text-sm font-medium leading-tight">Product</div>
                  </div>
                </div>
                <div className="Badge justify-start items-start flex">
                  <div className="BadgeBase px-2.5 py-0.5 bg-indigo-50 rounded-2xl justify-center items-center flex">
                    <div className="Text text-center text-indigo-700 text-sm font-medium leading-tight">Research</div>
                  </div>
                </div>
                <div className="Badge justify-start items-start flex">
                  <div className="BadgeBase px-2.5 py-0.5 bg-orange-50 rounded-2xl justify-center items-center flex">
                    <div className="Text text-center text-orange-700 text-sm font-medium leading-tight">Frameworks</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="BlogPostCard grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
            <img className="Image w-96 h-60 relative" src="https://via.placeholder.com/384x240" />
            <div className="Content self-stretch h-[172px] flex-col justify-start items-start gap-6 flex">
              <div className="HeadingAndText self-stretch h-[124px] flex-col justify-start items-start gap-3 flex">
                <div className="Author self-stretch text-violet-700 text-sm font-semibold leading-tight">Sunday , 1 Jan 2023</div>
                <div className="HeadingAndIcon self-stretch justify-start items-start gap-4 inline-flex">
                  <div className="Heading grow shrink basis-0 text-white text-2xl font-semibold">What is Wireframing?</div>
                  <div className="IconWrap pt-1 flex-col justify-start items-start inline-flex">
                    <div className="ArrowUpRight w-6 h-6 relative" />
                  </div>
                </div>
                <div className="SupportingText self-stretch text-neutral-300 text-base font-normal leading-normal">Introduction to Wireframing and its Principles. Learn from the best in the industry.</div>
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

          <Card imageHeight={'h-[240px]'} className={''} />
          <Card imageHeight={'h-[240px]'} className={''} />
          <Card imageHeight={'h-[240px]'} className={''} />
        </div>
      </div>
    </div>
  )
}

export default AllBlogPostSection