import { auth } from '@clerk/nextjs/server'
import Image from 'next/image'
import Link from 'next/link'
import Tilt from 'react-parallax-tilt'
import {
  // ClerkProvider,
  SignInButton,
  // SignedIn,
  // SignedOut,
  // UserButton,
} from '@clerk/nextjs'
import { prisma } from '@/utils/db'
import LogoTilt from '@/components/LogoTilt'
// import '@/css/splide-core.min.css'

export default async function Home() {
  const { userId } = await auth()

  let href = userId ? '/affirmations' : '/new-user'

  return (
    <main className="flex flex-col h-screen w-screen">
      <section className="flex flex-col items-center justify-center h-full w-full gap-4">
        <LogoTilt />
        <div className="">Affirmations App</div>
        <div className="">Motivate yourself to do what you do</div>
        <Link href={href} className="border-solid border-2 border-sky-500">
          Get Started
        </Link>
        <Link href="/demo" className="border-solid border-2 border-sky-500">
          Demo
        </Link>
      </section>
    </main>
  )
}
