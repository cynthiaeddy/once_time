import React from 'react'

const Hamburger = () => {
  let topClass = ['topLine']
  let midClass = ['middleLine']
  let bottomClass = ['bottomLine']
  return (
    <div>
      <button className='toggle menu-button'>
        <div className={topClass} />
        <div className={midClass} />
        <div className={bottomClass} />
      </button>
    </div>
  )
}

export default Hamburger
