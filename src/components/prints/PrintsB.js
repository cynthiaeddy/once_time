import React from 'react'
import './Prints.css'
import Brucesq from '../../assets/Brucesq.jpg'
import EyeZsq from '../../assets/EyeZsq.jpg'
import haveWantsq from '../../assets/haveWantsq.jpg'
import { withRouter } from "react-router";
import { Link } from 'react-router-dom'





// import { Card } from 'semantic-ui-react'


class Prints extends React.Component  {




  goToCarddetails = (cardId) => {
    localStorage.setItem("selectedCard", cardId);
    this.props.history.push('/card-details');
// you can manage here to pass the clicked card id to the card details page if needed
}
render() {
return (


  <div>
    <div className='secondary-wrapper'>


      <div className='prints-grid'>
        <div className='box box1'>
          <Link to=''><img src={Brucesq} alt='fake' cardId='cardId1'className='resp-image' onClick = {()=>this.goToCarddetails('cardId1')}/></Link>
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
}
}
export default withRouter(Prints)
