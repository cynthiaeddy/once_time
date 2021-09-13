import React from 'react'
// import '../stylesheets/HeroCarousel.css'
// import SlideCarousel from './SlideCarousel'
import Home from './home/Home'

class HeroCarousel extends React.Component {
  renderSlides() {
    return <Home slides={this.props.slides} />
  }
  render() {
    console.log('in carousel', this.props.slides)
    if (!this.props.slides) {
      return null
    }
    return (
      <>
        <Home />
        {/* // <main className='carousel-container'> */}
        {/* <div className='hero-image'> */}
        {/* <img
              className='big'
              src='https://iws-misc.s3.amazonaws.com/code-challenge/hero-landing-1.jpg'
              alt='runway'></img> */}
        {this.renderSlides()}
        {/* <div className='overlay'></div> */}
        {/* </div> */}
        {/* // </main> */}
      </>
    )
  }
}

export default HeroCarousel
