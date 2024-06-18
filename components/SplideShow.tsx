'use client'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import Image from 'next/image'

const SplideShow = ({ id, title, content }) => {
  const Data = {
    id,
    title,
    content,
  }

  const sampleContent = ['slide 01', 'slide 02']

  return (
    <div className="home-slideshow">
      <Splide
        options={{
          pagination: false,
          pauseOnHover: false,
          arrows: false,
          type: 'fade',
          rewind: true,
          autoplay: true,
          speed: 500,
          width: '100vw',
          height: '100vh',
          interval: 4000,
        }}
        aria-label="My Affirmation Quotes"
      >
        {content.map((item, i) => (
          <SplideSlide
            id={i}
            key={i}
            value={item}
            data-splide-interval={
              // '4000'
              item.length > 60 ? '8000' : '4000'
            }
          >
            <p>{item}</p>
          </SplideSlide>
        ))}
        <div className="splide__progress">
          <div className="splide__progress__bar"></div>
        </div>
      </Splide>
    </div>
  )
}

export default SplideShow
