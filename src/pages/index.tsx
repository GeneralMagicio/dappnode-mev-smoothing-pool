import { Head } from '@/components/layout/Head'
import { UserInfo } from '@/components/views/UserInfo'
import { Statistics } from '@/components/views/Statistics'

export default function Home() {
  return (
    <>
      <Head />
      <main>
        <Statistics />
        <UserInfo />
      </main>
    </>
  )
}
