import Link from 'next/link'

type Props = {}

function Footer({ }: Props) {
  return (
    <footer className='w-full h-full py-[30px] dark:bg-dark bg-white flex-row sm:flex-col justify-start items-start gap-16 inline-flex'>
      <div className="self-stretch grow shrink basis-0 sm:px-0 px-8 sm:flex-row-reverse flex-col sm:justify-end justify-center sm:items-start items-center gap-[30px] inline-flex">
        <ul className="sm:flex-row flex-col sm:justify-start justify-center sm:items-start items-center gap-3.5 flex">
          <li className="dark:text-white text-textdark text-xl font-normal leading-normal"><Link href={'https://www.twitter.com/iniroisfaozi'}>Twitter</Link></li>
          <li className="dark:text-white text-textdark text-xl font-normal leading-normal"><Link href={'https://www.linkedin.com/in/roisfaozi/'}>LinkedIn</Link></li>
          <li className="dark:text-white text-textdark text-xl font-normal leading-normal"><Link href={'mailto:roisfaozi8@gmail.com'}>Email</Link></li>
          <li className="dark:text-white text-textdark text-xl font-normal leading-normal"><Link href={'#'}>RSS feed</Link></li>
          <li className="dark:text-white text-textdark text-xl font-normal leading-normal"><Link href={'#'}>Add to Feedly</Link></li>
        </ul>
        <div className="dark:text-white text-textdark text-xl font-normal leading-normal">© 2023
        </div>
      </div>
    </footer>
  )
}

export default Footer