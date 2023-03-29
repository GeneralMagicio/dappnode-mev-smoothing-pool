import Image from 'next/image'
import Link from 'next/link'
import { IoLogoDiscord } from 'react-icons/io5'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import { MAIN_SITE_URL, SOCIALS } from '@/utils/config'

const socialIcons = {
  Discord: IoLogoDiscord,
  GitHub: FaGithubSquare,
  LinkedIn: FaLinkedin,
  Twitter: FaTwitterSquare,
}

export function Footer() {
  return (
    <footer className="flex h-20 items-center justify-between border-t bg-white px-12">
      <Link
        className="flex items-center"
        href={MAIN_SITE_URL}
        rel="noopener noreferrer"
        target="_blank">
        <Image
          alt="Dappnode logo"
          height={26}
          src="/dappnode-logo.svg"
          width={26}
        />
        <h4 className="ml-3 text-xs">
          Dappnode | Decentralized P2P Networking | © 2023
        </h4>
      </Link>
      <nav className="flex gap-x-5">
        {SOCIALS.map(({ name, path }) => {
          const Icon = socialIcons[name]
          return (
            <Link
              key={name}
              className="flex items-center"
              href={path}
              rel="noopener noreferrer"
              target="_blank">
              <Icon className="h-5 w-5 text-DAppDeep" />
            </Link>
          )
        })}
      </nav>
    </footer>
  )
}
