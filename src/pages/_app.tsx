import '@/styles/globals.css'
import { Inter } from '@next/font/google'
import { MainLayout } from '@/components/layout/MainLayout'
import { Seo } from '@/components/layout/Seo'
import { Web3Provider } from '@/providers/Web3'
import type { AppProps } from 'next/app'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Seo />
      <Web3Provider>
        <MainLayout className={`${inter.variable} font-sans`}>
          <Component {...pageProps} />
        </MainLayout>
      </Web3Provider>
    </>
  )
}
