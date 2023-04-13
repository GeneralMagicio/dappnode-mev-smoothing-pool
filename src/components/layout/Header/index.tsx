import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { RxExternalLink } from 'react-icons/rx'
import { PAGES } from '@/utils/config'
import { ConnectWalletButton } from '@/components/common/ConnectWalletButton'
import { MobileMenuDialog } from '@/components/dialogs/MobileMenuDialog'

export function Header() {
  const router = useRouter()

  return (
    <header className="flex h-24 items-center justify-between border-b bg-white p-4 sm:p-6">
      <Link className="flex items-center" href="/">
        <Image
          alt="Dappnode logo"
          height={50}
          src="/images/dappnode-logo.svg"
          width={50}
        />
        <h2 className="ml-4 hidden font-urbanist text-3xl font-bold text-DAppGray sm:inline">
          MEV <span className="text-DAppDeep">Smoothing Pool</span>
        </h2>
      </Link>
      <nav className="hidden gap-x-5 sm:flex">
        {PAGES.map(({ name, path }) => {
          const isExternalLink = path.includes('http')
          return (
            <div
              key={name}
              className={clsx(
                'h-[94px] pb-[2px]',
                router.pathname === path ? 'bg-DApppurple-linear' : 'bg-none'
              )}>
              <Link
                className="flex h-[92px] min-w-full items-center bg-white px-3 font-inter text-base leading-7 text-DAppDeep transition duration-300 hover:text-DAppPurple/900"
                href={path}
                rel={isExternalLink ? 'noopener noreferrer' : ''}
                target={isExternalLink ? '_blank' : '_self'}>
                <h3 className="flex items-center">
                  {name}
                  {isExternalLink && <RxExternalLink className="ml-2 inline" />}
                </h3>
              </Link>
            </div>
          )
        })}
      </nav>
      <div className="flex items-center">
        <ConnectWalletButton />
        <div className="sm:hidden">
          <MobileMenuDialog />
        </div>
      </div>
    </header>
  )
}
