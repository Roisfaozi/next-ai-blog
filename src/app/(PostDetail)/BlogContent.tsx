import SubHeading from '@/src/Components/SubHeading'
import Image from 'next/image'
import Cover from '../../public/images/image-cover.png'
type Props = {}

function BlogContent({ }: Props) {
  return (
    <div className='flex-col justify-start items-start gap-8 inline-flex w-full'>
      <p className="self-stretch text-violet-700 -mt-1 text-sm font-semibold leading-5">
        Sunday , 1 Jan 2023
      </p>
      <SubHeading level={1} className='text-textdark dark:text-white text-4xl font-bold'>
        Building any open-source projects this weekend?
      </SubHeading>
      <div className='relative w-full'>
        <Image
          src={Cover}
          alt={`image plaeceholder`}
          sizes='sizes="(max-width: 480px) 100vw,
                (max-width: 768px) 75vw,
                (max-width: 1060px) 50vw,
                33vw'
          className="object-cover"
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div >
      <div className="text-content">
        <p>A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and
          horizontal lines that create a matrix of intersecting points, which can be used to align and organize page
          elements. Grid systems are used to create a consistent look and feel across a website, and can help to
          make the layout more visually appealing and easier to navigate.</p>
        <p>If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one
          place to another because of the grid system that the city is built on. Just as the predictability of a
          city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides
          users and designers alike. Because of their consistent reference point, grids improve page readability and
          scannability and allow people to quickly get where they need to go.</p>
      </div>
    </div>
  )
}

export default BlogContent