import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import '../stylesheets/HeroCarousel.scss'

const SlideCarousel = (props) => {
  let mySlides = props.slides.map((slide, idx) => {
    return (
      <div key={idx}>
        <img className='resize' src={slide.image} alt={slide.alt} />
        <div className='overlay'></div>
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
        swipeable
        interval={5000}
        transitionTime={1000}
        showIndicators={false}
        showStatus={false}
        showArrows={false}
        showIndicators>
        {mySlides}
      </Carousel>
    </div>
  )
}
export default SlideCarousel
