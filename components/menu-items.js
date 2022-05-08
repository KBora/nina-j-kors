import Link from 'next/link'
import MenuItem from './menu-item'

export default function MenuItems() {
  return (
    <>
      <Link href="/" passHref>
        <div>
          <MenuItem>
            Home
          </MenuItem>
        </div>
      </Link>

      <Link href="/sketchbook" passHref>
        <div>
          <MenuItem>
            Sketchbook
          </MenuItem>
        </div>
      </Link>

      <Link href="/podcast" passHref>
        <div>
          <MenuItem>
            Podcast
          </MenuItem>
        </div>
      </Link>

      <Link href="/about" passHref>
        <div>
          <MenuItem>
            About
          </MenuItem>
        </div>
      </Link>
    </>
  )
}