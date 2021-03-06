import React from 'react'
import MasonryCard from './MasonryCard'
import { month_name } from './helper_functions'

import '../stylesheets/MasonryCard.scss'

class MasonryGrid extends React.Component {
  renderCards() {
    const cardSort = this.props.cards.sort((a, b) => {
      if (a.date > b.date) {
        return -1
      }
      if (a.date < b.date) {
        return 1
      }
      return 0
    })
    return cardSort.map((card, idx) => (
      <MasonryCard
        key={idx}
        image={card.image}
        date={card.date}
        title={card.title}
        author={card.author}
      />
    ))
  }

  render() {
    if (!this.props.text) {
      return null
    }
    const titleArr = this.props.text.title.split(' ')
    const firstLine = titleArr.slice(0, 1).join()
    const secondLine = titleArr.slice(1).join(' ')
    const dateArr = this.props.text.date.split('/')
    const dateMonth = dateArr.slice(0, 1).join()
    const dateRest = dateArr.slice(1).join(', ')
    console.log(this.props)

    return (
      <>
        <div className='masonry-container'>
          <div className='hero-copy'>
            <h1>
              {firstLine}
              <br />
              {secondLine}
            </h1>
            <h3>
              {month_name(new Date(dateMonth))}
              {'  '}
              {dateRest}
            </h3>

            <p className='hero-p'>{this.props.text.subtitle}</p>
          </div>
          <div className='wrapper'>
            <div className='masonry'>{this.renderCards()}</div>
          </div>
        </div>
      </>
    )
  }
}

export default MasonryGrid
