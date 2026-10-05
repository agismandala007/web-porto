import Link from 'next/link'
import { Typo } from '@/ui'

export function TopNavigation() {
  return (
    <nav className="sticky top-0 z-50 flex h-fit items-center justify-center bg-[#fff8eb]">
      <div className="flex items-center gap-15 py-8">
        <Link href="/">
          <Typo fontWeight="semibold" size="md">
            Home
          </Typo>
        </Link>
        <Link href="/">
          <Typo fontWeight="semibold" size="md">
            Projects
          </Typo>
        </Link>
        <Link href="/">
          <Typo fontWeight="semibold" size="md">
            Contacts
          </Typo>
        </Link>
      </div>
    </nav>
  )
}
