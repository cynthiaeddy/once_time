import React from "react";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom'
import confluencezGb from '../../assets/confluencezGb.jpg'
import turtle1920 from '../../assets/turtle1920.jpg'
import mary1920 from '../../assets/mary1920.jpg'
import './Home.css'


const Home = () => (

    <div className='carousel-wrapper'>

     <Carousel
       showThumbs={false}
       infiniteLoop
       autoPlay
       interval={4000}
       transitionTime={1000}
       showIndicators={false}
      //  centerMode
      //  centerSlidePercentage={50}
       showStatus={false}
       showArrows={false}
       >




        <div>
          <Link to='/prints'><img src='https://iws-misc.s3.amazonaws.com/code-challenge/hero-landing-1.jpg' className='prints'alt=''/></Link>
        </div>
        <div>
          <Link to='/original work'><img src='https://iws-misc.s3.amazonaws.com/code-challenge/hero-landing-2.jpg' alt=''/></Link>
        </div>
        <div>
          <Link to='/clothing'><img src='https://iws-misc.s3.amazonaws.com/code-challenge/hero-landing-3.jpg'alt='' /></Link>
        </div>
      </Carousel>
    </div>
  );
  export default Home
