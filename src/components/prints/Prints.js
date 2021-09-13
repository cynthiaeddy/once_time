import React from 'react'
import './Prints.css'
import Brucesq from '../../assets/Brucesq.jpg'
import EyeZsq from '../../assets/EyeZsq.jpg'
import haveWantsq from '../../assets/haveWantsq.jpg'
import { Link } from 'react-router-dom'







const Prints = () => (


  <div>
    <div className='secondary-wrapper'>


      <div className='prints-grid'>
        <div className='box box1'>
          <Link to='/print card'><img src={Brucesq} alt='fake' className='resp-image'/></Link>
        </div>
        <div className='box box2'>
          <img src={EyeZsq} alt='fake' className='resp-image'/>
        </div>
        <div className='box box3'>
          <img src={haveWantsq}  alt='fake' className='resp-image'/>
        </div>
        <div className='box box4'>
          <img src={EyeZsq}   alt='fake' className='resp-image'/>
        </div>
        <div className='box box5'>
          <img src={haveWantsq} alt='fake' className='resp-image'/>
        </div>
        <div className='box box6'>
          <img src={Brucesq}  alt='fake' className='resp-image'/>
        </div>
        <div className='box box7'>
          <img src={EyeZsq} alt='fake' className='resp-image'/>
        </div>
        <div className='box box8'>
          <img src={Brucesq}  alt='fake' className='resp-image'/>
        </div>
        <div className='box box9'>
          <img src={EyeZsq} alt='fake' className='resp-image'/>
        </div>
        <div className='box box10'>
          <img src={haveWantsq}   alt='fake' className='resp-image'/>
        </div>
      </div>
    </div>
  </div>
)

export default Prints
