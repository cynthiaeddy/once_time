import React from 'react'
// import '../stylesheets/HeroCarousel.css'
// import SlideCarousel from './SlideCarousel'
import Home from './Home'

class HeroCarousel extends React.Component {
  renderSlides() {
    return <Home slides={this.props.slides} />
  }
  render() {
    console.log('in carousel', this.props.slides)
    if (!this.props.slides) {
      return null
    }
    return <>{this.renderSlides()}</>
  }
}

export default HeroCarousel
