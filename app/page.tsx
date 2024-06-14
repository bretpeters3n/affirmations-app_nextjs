import { auth } from '@clerk/nextjs/server'
import Image from 'next/image'
import Link from 'next/link'
import {
  // ClerkProvider,
  SignInButton,
  // SignedIn,
  // SignedOut,
  // UserButton,
} from '@clerk/nextjs'
import { prisma } from '@/utils/db'

export default async function Home() {
  const { userId } = await auth()

  let href = userId ? '/affirmations' : '/new-user'

  return (
    <main className="flex flex-col h-screen w-screen">
      <section className="flex flex-col items-center justify-center h-full w-full gap-4">
        <Image
          src="/Af-logo.svg"
          width={200}
          height={200}
          alt="Picture of the author"
        />
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
