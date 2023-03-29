import { Footer } from './Footer'
import { Header } from './Header'
import { ReactNode } from 'react'
import clsx from 'clsx'

interface MainLayoutProps {
  children: ReactNode
  className?: string
}

export function MainLayout({ children, className }: MainLayoutProps) {
  return (
    <div className={clsx('min-h-screen bg-wave-pattern bg-cover', className)}>
      <Header />
      <div className="mx-auto min-h-screen-content max-w-7xl p-8">
        {children}
      </div>
      <Footer />
    </div>
  )
}
