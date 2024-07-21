import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import Navigation from '@/components/Navigation'
// import '../css/Nav.css'
import {
  ClerkProvider,
  // SignInButton,
  // SignedIn,
  // SignedOut,
  // UserButton,
} from '@clerk/nextjs'
import '@/css/normalize.css'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Affirmations App',
  description: 'Motivate yourself to do what you do;)',
  icons: {
    icon: '/favicon-32x32.png', // /public path
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${inter.variable}`}>
        <body className="flex flex-col h-screen bg-slate-50">
          {/* <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn> */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
