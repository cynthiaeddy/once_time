import React from "react";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom'
import confluencezGb from '../../assets/confluencezGb.jpg'
import turtle1920 from '../../assets/turtle1920.jpg'
import mary1920 from '../../assets/mary1920.jpg'
import './Home.css'


const HomeMobile = () => (

  <div>
    <div className='carousel-wrapper'>

     <Carousel
       showThumbs={false}
       infiniteLoop
       autoPlay
       interval={4000}
       transitionTime={1000}
       showIndicators={false}
       showStatus={false}
       showArrows={false}
       >

        <div>
          <Link to='/prints'><img src={confluencezGb} className='prints'alt=''/></Link>
        </div>
        <div>
          <Link to='/original work'><img src={turtle1920} alt=''/></Link>
        </div>
        <div>
          <Link to='/clothing'><img src={mary1920}alt='' /></Link>
        </div>
      </Carousel>
    </div>
  </div>
  );
  export default HomeMobile
