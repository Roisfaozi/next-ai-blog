import SubHeading from '@/src/Components/SubHeading'

type Props = {}

function Sidebar({ }: Props) {
  return (
    <div className="Column w-[342px] flex-col justify-center items-start gap-8 inline-flex">
      <SubHeading level={2} className='text-textdark dark:text-white text-2xl font-semibold' >
        Recent blog posts
      </SubHeading>
      <div className="BlogPostCard self-stretch h-[432px] flex-col justify-start items-start gap-8 flex">
        <img className="Image w-[342px] h-[204px] relative" src="https://via.placeholder.com/342x204" />
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
      <div className="BlogPostCard self-stretch h-[440px] flex-col justify-start items-start gap-6 flex">
        <img className="Image w-[342px] h-[228px] relative" src="https://via.placeholder.com/342x228" />
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
      <div className="BlogPostCard self-stretch h-[440px] flex-col justify-start items-start gap-6 flex">
        <img className="Image w-[342px] h-[228px] relative" src="https://via.placeholder.com/342x228" />
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
      <div className="BlogPostCard self-stretch h-[500px] flex-col justify-start items-start gap-8 flex">
        <img className="Image w-[342px] h-60 relative" src="https://via.placeholder.com/342x240" />
        <div className="Content self-stretch h-[228px] flex-col justify-start items-start gap-6 flex">
          <div className="HeadingAndText self-stretch h-[180px] flex-col justify-start items-start gap-3 flex">
            <div className="Author self-stretch text-violet-700 text-sm font-semibold leading-tight">Sunday , 1 Jan 2023</div>
            <div className="HeadingAndIcon self-stretch justify-start items-start gap-4 inline-flex">
              <div className="Heading grow shrink basis-0 text-white text-2xl font-semibold leading-loose">Bill Walsh leadership lessons</div>
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
      <div className="BlogPostCard self-stretch h-[444px] flex-col justify-start items-start gap-8 flex">
        <img className="Image w-[342px] h-60 relative" src="https://via.placeholder.com/342x240" />
        <div className="Content self-stretch h-[172px] flex-col justify-start items-start gap-6 flex">
          <div className="HeadingAndText self-stretch h-[124px] flex-col justify-start items-start gap-3 flex">
            <div className="Author self-stretch text-violet-700 text-sm font-semibold leading-tight">Sunday , 1 Jan 2023</div>
            <div className="HeadingAndIcon self-stretch justify-start items-start gap-4 inline-flex">
              <div className="Heading grow shrink basis-0 text-white text-2xl font-semibold leading-loose">PM mental models</div>
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
      <div className="BlogPostCard self-stretch h-[468px] flex-col justify-start items-start gap-8 flex">
        <img className="Image w-[342px] h-60 relative" src="https://via.placeholder.com/342x240" />
        <div className="Content self-stretch h-[196px] flex-col justify-start items-start gap-6 flex">
          <div className="HeadingAndText self-stretch h-[148px] flex-col justify-start items-start gap-3 flex">
            <div className="Author self-stretch text-violet-700 text-sm font-semibold leading-tight">Sunday , 1 Jan 2023</div>
            <div className="HeadingAndIcon self-stretch justify-start items-start gap-4 inline-flex">
              <div className="Heading grow shrink basis-0 text-white text-2xl font-semibold leading-loose">What is Wireframing?</div>
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
      <div className="BlogPostCard self-stretch h-[476px] flex-col justify-start items-start gap-8 flex">
        <img className="Image w-[342px] h-60 relative" src="https://via.placeholder.com/342x240" />
        <div className="Content self-stretch h-[204px] flex-col justify-start items-start gap-6 flex">
          <div className="HeadingAndText self-stretch h-[156px] flex-col justify-start items-start gap-3 flex">
            <div className="Author self-stretch text-violet-700 text-sm font-semibold leading-tight">Sunday , 1 Jan 2023</div>
            <div className="HeadingAndIcon self-stretch justify-start items-start gap-4 inline-flex">
              <div className="Heading grow shrink basis-0 text-white text-2xl font-semibold leading-loose">How collaboration makes us better designers</div>
              <div className="IconWrap pt-1 flex-col justify-start items-start inline-flex">
                <div className="ArrowUpRight w-6 h-6 relative" />
              </div>
            </div>
            <div className="SupportingText self-stretch text-neutral-300 text-base font-normal leading-normal">Collaboration can make our teams stronger, and our individual designs better.</div>
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
      <div className="BlogPostCard self-stretch h-[500px] flex-col justify-start items-start gap-8 flex">
        <img className="Image w-[342px] h-60 relative" src="https://via.placeholder.com/342x240" />
        <div className="Content self-stretch h-[228px] flex-col justify-start items-start gap-6 flex">
          <div className="HeadingAndText self-stretch h-[180px] flex-col justify-start items-start gap-3 flex">
            <div className="Author self-stretch text-violet-700 text-sm font-semibold leading-tight">Sunday , 1 Jan 2023</div>
            <div className="HeadingAndIcon self-stretch justify-start items-start gap-4 inline-flex">
              <div className="Heading grow shrink basis-0 text-white text-2xl font-semibold leading-loose">Our top 10 Javascript frameworks to use</div>
              <div className="IconWrap pt-1 flex-col justify-start items-start inline-flex">
                <div className="ArrowUpRight w-6 h-6 relative" />
              </div>
            </div>
            <div className="SupportingText self-stretch text-neutral-300 text-base font-normal leading-normal">JavaScript frameworks make development easy with extensive features and functionalities.</div>
          </div>
          <div className="Categories self-stretch justify-start items-start gap-2 inline-flex">
            <div className="Badge justify-start items-start flex">
              <div className="BadgeBase px-2.5 py-0.5 bg-emerald-50 rounded-2xl justify-center items-center flex">
                <div className="Text text-center text-emerald-700 text-sm font-medium leading-tight">Software Development</div>
              </div>
            </div>
            <div className="Badge justify-start items-start flex">
              <div className="BadgeBase px-2.5 py-0.5 bg-pink-50 rounded-2xl justify-center items-center flex">
                <div className="Text text-center text-pink-700 text-sm font-medium leading-tight">Tools</div>
              </div>
            </div>
            <div className="Badge justify-start items-start flex">
              <div className="BadgeBase px-2.5 py-0.5 bg-rose-50 rounded-2xl justify-center items-center flex">
                <div className="Text text-center text-rose-700 text-sm font-medium leading-tight">SaaS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="BlogPostCard self-stretch h-[476px] flex-col justify-start items-start gap-8 flex">
        <img className="Image w-[342px] h-60 relative" src="https://via.placeholder.com/342x240" />
        <div className="Content self-stretch h-[204px] flex-col justify-start items-start gap-6 flex">
          <div className="HeadingAndText self-stretch h-[156px] flex-col justify-start items-start gap-3 flex">
            <div className="Author self-stretch text-violet-700 text-sm font-semibold leading-tight">Sunday , 1 Jan 2023</div>
            <div className="HeadingAndIcon self-stretch justify-start items-start gap-4 inline-flex">
              <div className="Heading grow shrink basis-0 text-white text-2xl font-semibold leading-loose">Podcast: Creating a better CX Community</div>
              <div className="IconWrap pt-1 flex-col justify-start items-start inline-flex">
                <div className="ArrowUpRight w-6 h-6 relative" />
              </div>
            </div>
            <div className="SupportingText self-stretch text-neutral-300 text-base font-normal leading-normal">Starting a community doesn’t need to be complicated, but how do you get started?</div>
          </div>
          <div className="Categories self-stretch justify-start items-start gap-2 inline-flex">
            <div className="Badge justify-start items-start flex">
              <div className="BadgeBase px-2.5 py-0.5 bg-purple-50 rounded-2xl justify-center items-center flex">
                <div className="Text text-center text-violet-700 text-sm font-medium leading-tight">Podcasts</div>
              </div>
            </div>
            <div className="Badge justify-start items-start flex">
              <div className="BadgeBase px-2.5 py-0.5 bg-slate-50 rounded-2xl justify-center items-center flex">
                <div className="Text text-center text-indigo-900 text-sm font-medium leading-tight">Customer Success</div>
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
      <div className="BlogPostCard self-stretch h-[440px] flex-col justify-start items-start gap-6 flex">
        <img className="Image w-[342px] h-[228px] relative" src="https://via.placeholder.com/342x228" />
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
      <div className="BlogPostCard self-stretch h-[500px] flex-col justify-start items-start gap-8 flex">
        <img className="Image w-[342px] h-60 relative" src="https://via.placeholder.com/342x240" />
        <div className="Content self-stretch h-[228px] flex-col justify-start items-start gap-6 flex">
          <div className="HeadingAndText self-stretch h-[180px] flex-col justify-start items-start gap-3 flex">
            <div className="Author self-stretch text-violet-700 text-sm font-semibold leading-tight">Sunday , 1 Jan 2023</div>
            <div className="HeadingAndIcon self-stretch justify-start items-start gap-4 inline-flex">
              <div className="Heading grow shrink basis-0 text-white text-2xl font-semibold leading-loose">Bill Walsh leadership lessons</div>
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
      <div className="BlogPostCard self-stretch h-[444px] flex-col justify-start items-start gap-8 flex">
        <img className="Image w-[342px] h-60 relative" src="https://via.placeholder.com/342x240" />
        <div className="Content self-stretch h-[172px] flex-col justify-start items-start gap-6 flex">
          <div className="HeadingAndText self-stretch h-[124px] flex-col justify-start items-start gap-3 flex">
            <div className="Author self-stretch text-violet-700 text-sm font-semibold leading-tight">Sunday , 1 Jan 2023</div>
            <div className="HeadingAndIcon self-stretch justify-start items-start gap-4 inline-flex">
              <div className="Heading grow shrink basis-0 text-white text-2xl font-semibold leading-loose">PM mental models</div>
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
    </div>
  )
}

export default Sidebar