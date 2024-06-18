'use client'

import { useState } from 'react'
import {
  // ClerkProvider,
  // SignInButton,
  // SignedIn,
  // SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Link from 'next/link'

const Navigation = () => {
  const [isActive, setIsActive] = useState(false)
  const handleHamClick = () => {
    // 👇️ toggle isActive state on click
    setIsActive((current) => !current)
  }

  return (
    <nav className="btm-gradient text-slate-700 font-manrope text-xl z-10 pointer-events-none flex flex-row h-[60px]">
      <div className="">
        <button
          type="button"
          id="hamburger"
          className={
            isActive
              ? 'opened z-30 pointer-events-auto'
              : 'z-30 pointer-events-auto'
          }
          onClick={handleHamClick}
          aria-label="Main Menu"
        >
          <svg
            width="40"
            height="40"
            className="fixed top-[.5rem] left-[.5rem]"
            viewBox="0 0 100 100"
          >
            {/* NEW */}
            <path
              className="theme-switcher line line1"
              d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
            />
            <path className="theme-switcher line line2" d="M 20,50 H 80" />
            <path
              className="theme-switcher line line3"
              d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
            />
          </svg>
        </button>
        <ul
          id="menu"
          // style={{ zIndex: '20', pointerEvents: 'auto' }}
          className={
            isActive
              ? 'opened font-semibold flex flex-col items-center m-auto z-20 pointer-events-auto'
              : 'font-semibold flex flex-col items-center m-auto z-20 pointer-events-auto'
          }
        >
          <li className="w-max hover:font-extrabold">
            <Link
              href={'/'}
              onClick={handleHamClick}
              className="theme-switcher"
            >
              Home
            </Link>
          </li>
          <li className="w-max hover:font-extrabold">
            <Link
              href="/affirmations"
              onClick={handleHamClick}
              className="theme-switcher"
            >
              Affirmations
            </Link>
          </li>
          <li className="w-max hover:font-extrabold">
            <Link
              href="/about"
              onClick={handleHamClick}
              className="theme-switcher"
            >
              About
            </Link>
          </li>
        </ul>
      </div>

      <div id="appName" className="w-full text-center absolute top-[1rem]">
        Affirmations
      </div>

      <div className="pointer-events-auto absolute top-4 right-4">
        <UserButton />
      </div>
    </nav>
  )
}

export default Navigation
