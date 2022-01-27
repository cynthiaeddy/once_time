import React from 'react'
import '../stylesheets/MasonryCard.css'
import { month_name } from './helper_functions'
const MasonryCard = props => {
  const dateArr = props.date.split('/')
  const dateMonth = dateArr.slice(0, 1).join()
  const dateRest = dateArr.slice(1).join(', ')
  return (
    <>
      <div className='card'>
        <img className='card-img' src={props.image} alt='' />
        <h6>
          {' '}
          {month_name(new Date(dateMonth))}
          {'  '}
          {dateRest}
        </h6>
        <h2>
          <a href='#'>{props.title}</a>
        </h2>
        <p className='author-p'>
          Presented by <span>{props.author}</span>
        </p>
      </div>
    </>
  )
}

export default MasonryCard
