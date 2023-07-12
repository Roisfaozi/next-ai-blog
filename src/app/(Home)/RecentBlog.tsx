import SubHeading from '@/src/Components/SubHeading'

type Props = {}

function RecentBlog({ }: Props) {
  return (
    <div className="w-full py-[30px] flex-col justify-start items-start md:items-center gap-16 inline-flex">
      <div className="self-stretch h-[1400px] flex-col justify-start items-start gap-8 flex">
        <SubHeading >
          Recent blog posts
        </SubHeading>
        <div className="Content self-stretch h-[1336px] flex-col justify-start items-start gap-8 flex">
          <div className="BlogPostCard self-stretch h-[448px] flex-col justify-start items-start gap-6 flex">
            <img className="Image w-[326px] h-[228px] relative" src="https://via.placeholder.com/326x228" />
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
          <div className="Column self-stretch h-[856px] flex-col justify-center items-start gap-8 flex">
            <div className="BlogPostCard self-stretch h-[412px] flex-col justify-start items-start gap-6 flex">
              <img className="Image w-80 h-[200px] relative" src="https://via.placeholder.com/320x200" />
              <div className="Content self-stretch h-[188px] flex-col justify-start items-start gap-6 flex">
                <div className="HeadingAndText self-stretch h-[140px] flex-col justify-start items-start gap-3 flex">
                  <div className="Author self-stretch text-violet-700 text-sm font-semibold leading-tight">Sunday , 1 Jan 2023</div>
                  <div className="HeadingAndText self-stretch h-[108px] flex-col justify-start items-start gap-2 flex">
                    <div className="Heading self-stretch text-white text-lg font-semibold leading-7">Migrating to Linear 101</div>
                    <div className="SupportingText self-stretch text-neutral-300 text-base font-normal leading-normal">Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...</div>
                  </div>
                </div>
                <div className="Categories self-stretch justify-start items-start gap-2 inline-flex">
                  <div className="Badge justify-start items-start flex">
                    <div className="BadgeBase px-2.5 py-0.5 bg-sky-50 rounded-2xl justify-center items-center flex">
                      <div className="Text text-center text-sky-700 text-sm font-medium leading-tight">Design</div>
                    </div>
                  </div>
                  <div className="Badge justify-start items-start flex">
                    <div className="BadgeBase px-2.5 py-0.5 bg-pink-50 rounded-2xl justify-center items-center flex">
                      <div className="Text text-center text-pink-700 text-sm font-medium leading-tight">Research</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="BlogPostCard self-stretch h-[412px] flex-col justify-start items-start gap-6 flex">
              <img className="Image w-80 h-[200px] relative" src="https://via.placeholder.com/320x200" />
              <div className="Content self-stretch h-[188px] flex-col justify-start items-start gap-6 flex">
                <div className="HeadingAndText self-stretch h-[140px] flex-col justify-start items-start gap-3 flex">
                  <div className="Author self-stretch text-violet-700 text-sm font-semibold leading-tight">Sunday , 1 Jan 2023</div>
                  <div className="HeadingAndText self-stretch h-[108px] flex-col justify-start items-start gap-2 flex">
                    <div className="Heading self-stretch text-white text-lg font-semibold leading-7">Building your API Stack</div>
                    <div className="SupportingText self-stretch text-neutral-300 text-base font-normal leading-normal">The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...</div>
                  </div>
                </div>
                <div className="Categories self-stretch justify-start items-start gap-2 inline-flex">
                  <div className="Badge justify-start items-start flex">
                    <div className="BadgeBase px-2.5 py-0.5 bg-emerald-50 rounded-2xl justify-center items-center flex">
                      <div className="Text text-center text-emerald-700 text-sm font-medium leading-tight">Design</div>
                    </div>
                  </div>
                  <div className="Badge justify-start items-start flex">
                    <div className="BadgeBase px-2.5 py-0.5 bg-pink-50 rounded-2xl justify-center items-center flex">
                      <div className="Text text-center text-pink-700 text-sm font-medium leading-tight">Research</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          S</div>
      </div>
    </div>
  )
}

export default RecentBlog