import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom'

import './Home.css'

const Home = () => (
  <div className='carousel-wrapper'>
    <Carousel
      showThumbs={false}
      infiniteLoop
      autoPlay
      interval={5000}
      transitionTime={1000}
      showIndicators={false}
      showStatus={false}
      showArrows={false}>
      <div>
        <img
          src='https://iws-misc.s3.amazonaws.com/code-challenge/hero-landing-1.jpg'
          className='prints'
          alt=''
        />
      </div>
      <div>
        <img
          src='https://iws-misc.s3.amazonaws.com/code-challenge/hero-landing-2.jpg'
          alt=''
        />
      </div>
      <div>
        <img
          src='https://iws-misc.s3.amazonaws.com/code-challenge/hero-landing-3.jpg'
          alt=''
        />
      </div>
    </Carousel>
    <div className='overlay'></div>
  </div>
)
export default Home
