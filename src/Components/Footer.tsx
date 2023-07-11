import Link from 'next/link'

type Props = {}

function Footer({ }: Props) {
  return (
    <footer>
      <div className="container">
        <ul className="footer-links">
          <li className="text-wrapper"><Link href={'https://www.twitter.com/iniroisfaozi'}>Twitter</Link></li>
          <li className="text-wrapper"><Link href={'https://www.linkedin.com/in/roisfaozi/'}>LinkedIn</Link></li>
          <li className="text-wrapper"><Link href={'mailto:roisfaozi8@gmail.com'}>Email</Link></li>
          <li className="text-wrapper"><Link href={'#'}>RSS feed</Link></li>
          <li className="text-wrapper"><Link href={'#'}>Add to Feedly</Link></li>
        </ul>
        <div className="text-wrapper">© 2023
        </div>
      </div>
    </footer>
  )
}

export default Footer