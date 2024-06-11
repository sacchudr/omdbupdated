import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Kannada from "../assets/Kannada.jpg"
import Posters from "../assets/movie-poster1.jpg"
import English from "../assets/The_fall_guy.jpg"
import { Rating } from '@mui/material';

const Carousel=()=> {
    const settings = {
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
    };
  
    return (
      <Slider {...settings} className='slider'>
        <div className='carouse'>
          <div  className='carouselinner'> 
          <div className='carouselimg'>
          </div>
          <div className='caruselcontent'>
          <h1 className='moviename'>K.G.F</h1>
          <Rating className='rating'/>
          <p>KGF is an Indian Kannada language period action film series set mostly in the Kolar Gold Fields, which gives the series its name, created by Prashanth Neel and produced by Hombale Films starring Yash in lead role with an ensemble supporting cast.</p>
          </div>
          </div>
        </div>
        <div className='carouse'>
          <div  className='carouselinner'> 
          <div className='carouselimg'>
          </div>
          <div className='caruselcontent'>
          <h1 className='moviename'>K.G.F</h1>
          <Rating className='rating'/>
          <p>KGF is an Indian Kannada language period action film series set mostly in the Kolar Gold Fields, which gives the series its name, created by Prashanth Neel and produced by Hombale Films starring Yash in lead role with an ensemble supporting cast.</p>
          </div>
          </div>
        </div>

        <div className='carouse'>
          <div  className='carouselinner'> 
          <div className='carouselimg'>
          <img src={English} className='carimg'  alt="" />
          </div>
          <div className='caruselcontent'>
          <h1 className='moviename'>K.G.F</h1>
          <Rating className='rating'/>
          <p>KGF is an Indian Kannada language period action film series set mostly in the Kolar Gold Fields, which gives the series its name, created by Prashanth Neel and produced by Hombale Films starring Yash in lead role with an ensemble supporting cast.</p>
          </div>
          </div>
        </div>
        <div className='carouse'>
          <div  className='carouselinner'> 
          <div className='carouselimg'>
          <img src={English} className='carimg'  alt="" />
          </div>
          <div className='caruselcontent'>
          <h1 className='moviename'>K.G.F</h1>
          <Rating className='rating'/>
          <p>KGF is an Indian Kannada language period action film series set mostly in the Kolar Gold Fields, which gives the series its name, created by Prashanth Neel and produced by Hombale Films starring Yash in lead role with an ensemble supporting cast.</p>
          </div>
          </div>
        </div>



        
  
      
      </Slider>
    );
  }
  
  export default Carousel;
  