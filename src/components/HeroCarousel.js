import React from 'react'
import '../stylesheets/HeroCarousel.scss'
import SlideCarousel from './SlideCarousel'

class HeroCarousel extends React.Component {
  renderSlides() {
    return <SlideCarousel slides={this.props.slides} />
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
