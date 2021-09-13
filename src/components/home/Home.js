import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom'

import './Home.css'

const Home = (props) => {
  console.log('in slide', props)
  let mySlides = props.slides.map((slide, idx) => {
    return (
      <div key={idx}>
        <img src={slide.image} alt={slide.alt} />
      </div>
    )
  })
  console.log(mySlides)
  return (
    <div className='carousel-wrapper'>
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={5000}
        transitionTime={1000}
        showIndicators={false}
        showStatus={false}
        showArrows={false}
        showIndicators>
        {mySlides}
      </Carousel>
      <div className='overlay'></div>
    </div>
  )
}
export default Home
