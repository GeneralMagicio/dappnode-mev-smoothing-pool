import '@/styles/globals.css'
import { Inter, Urbanist } from '@next/font/google'
import { MainLayout } from '@/components/layout/MainLayout'
import { Seo } from '@/components/layout/Seo'
import { ReactQueryProvider } from '@/providers/ReactQuery'
import { Web3Provider } from '@/providers/Web3'
import type { AppProps } from 'next/app'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const urbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Seo />
      <Web3Provider>
        <ReactQueryProvider>
          <MainLayout
            className={`${inter.variable} ${urbanist.variable} font-inter`}>
            <Component {...pageProps} />
          </MainLayout>
        </ReactQueryProvider>
      </Web3Provider>
    </>
  )
}
