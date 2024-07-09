'use client'

import Image from 'next/image'
import Tilt from 'react-parallax-tilt'

const LogoTilt = () => {
  return (
    <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20}>
      <Image
        src="/Af-logo.svg"
        width={200}
        height={200}
        alt="Affirmations App logo. Visually, the letters A and F in a box."
        priority={true}
      />
    </Tilt>
  )
}

export default LogoTilt
