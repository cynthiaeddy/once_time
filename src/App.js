import React from 'react'
import './App.css'

import Home from './components/Home'
import Header from './components/Header'
import HeroCarousel from './components/HeroCarousel'
import MasonryGrid from './components/MasonryGrid'
import Footer from './components/Footer'

import 'react-responsive-carousel/lib/styles/carousel.min.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
    }
  }
  async componentDidMount() {
    try {
      const response = await fetch(
        `https://s0nshulo19.execute-api.us-east-1.amazonaws.com/default/code-challenge`,
        { method: 'GET' }
      )
      const responseData = await response.json()
      console.log('fetchArticles() resp data', responseData)

      if (!response.ok) {
        throw new Error(response.message)
      }
      this.setState({
        articles: responseData,
      })
    } catch (error) {
      return error
    }
  }

  render() {
    return (
      <div id='container'>
        <Header />
        {/* <Home /> */}
        <HeroCarousel slides={this.state.articles.hero_slides} />
        <MasonryGrid
          text={this.state.articles.hero_text}
          cards={this.state.articles.cards}
        />
        <Footer />
      </div>
    )
  }
}

export default App
