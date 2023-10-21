import React, { Component } from 'react';
import { BsGithub } from 'react-icons/bs';
import { TbWorldShare } from 'react-icons/tb';
import styled from 'styled-components';
import Swiper from 'swiper'; // You may need to install swiper as a dependency

class BlogSlider extends Component {
  componentDidMount() {
    // Initialize the Swiper here
    new Swiper('.blog-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
      
    });
  }

  render() {
    return (
        <DIV className='m-3'>
      <div className="blog-slider">
        <div className="blog-slider__wrp swiper-wrapper">
          {/* Slide 1 */}
          <div className="blog-slider__item swiper-slide">
            <div className="blog-slider__img">
            <img className="h-100 w-100 rounded" src="https://i.ibb.co/9Z9H2n5/doctor-Img.png" alt="" />
            </div>
            <div className="blog-slider__content">
              <span className="blog-slider__code">26 December 2019</span>
              <div className="blog-slider__title">Lorem Ipsum Dolor</div>
              <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?</div>
              {/* <a href="#" className="blog-slider__button">READ MORE</a> */}
              <span className='d-flex'>
                <button className='btn mx-3 px-2'> <BsGithub className="fs-3 me-1"/>Github</button>
                <button className='btn px-2'>   <TbWorldShare className="fs-3 me-1"/> Demo</button>
              </span>
            </div>
          </div>
        </div>
      </div>
      </DIV>
    );
  }
}

export default BlogSlider;


const DIV = styled.div`
    
    @import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800');
* {
  box-sizing: border-box;
}
body {
background-color: #FFE53B;
background-image: linear-gradient(147deg, #FFE53B 0%, #fd3838 74%);
min-height: 100vh;
font-family: 'Fira Sans', sans-serif;
  display: flex;
}

.blog-slider {
    width: 95%;
  position: relative;
    max-width: 800px;
    margin: auto;
    background: #fff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
    padding: 25px;
    border-radius: 10px;
    /* height: 400px; */
  transition: all .3s;
  
   
  @media screen and (max-width: 992px) {
    /* max-width: 680px; */
        height: 400px;
        
  }
  
  @media screen and (max-width: 768px) {
    /* min-height: 500px; */
   
    height: auto;
    margin: 180px auto;
  }
  
  
  @media screen and (max-height: 500px) and (min-width: 992px) {
        height: 350px;
  }
  
  &__item {
    display: flex;
    align-items: center;
    
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
    
    &.swiper-slide-active {
      .blog-slider__img {
        img {
          opacity: 1;
        transition-delay: .3s;
        }
      }
      .blog-slider__content {
        > * {
      
        opacity: 1;
        transform: none;

      @for $i from 0 to 15 {
        &:nth-child(#{$i + 1}) {
          transition-delay: $i * 0.1 + 0.3s;
        }
      }

    }
      }
    }
    
  }
  
  &__img {
    /* width: 300px; */
    flex-shrink: 0;
    height: 200px;
    /* border-radius: 10px; */
    transform: translateX(-80px);  
    overflow: hidden;
    transition: transform 0.3s;
    &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%); */
      /* border-radius: 20px; */
    opacity: 0.8;
}

    
    img {
      width: 100%;
    height: 100%;
    object-fit: cover;
      display: block;
       opacity: 0;
      /* border-radius: 20px; */
      transition: transform 0.3s;
        border: 3px solid #fe8a39;
    }

    img:hover{
        transform: scale(1.1);
    }
    
    
    @media screen and (max-width: 992px) {
      // width: 45%;
    }
    @media screen and (max-width: 768px) {
    transform: translateY(-50%);
      width: 90%;
  }
    @media screen and (max-width: 576px) {
      width: 95%;
    }
     @media screen and (max-height: 500px) and (min-width: 992px) {
        height: 270px;
  }
  }
  
  &__content {
    // width: 60%;
    padding-right: 25px;
    @media screen and (max-width: 992px) {
      // width: 55%;
    }
    @media screen and (max-width: 768px) {
          margin-top: -80px;
    text-align: center;
    padding: 0 30px;
    }
    
    @media screen and (max-width: 576px) {
      padding: 0
    }
    > * {
      opacity: 0;
      transform: translateY(25px);
      transition: all .4s;
      
      
    }
    
  }
  
  &__code {
    color: #7b7992;
    margin-bottom: 15px;
    display: block;
    font-weight: 500;
  }
  
  &__title {
    font-size: 24px;
    font-weight: 700;
    color: #0d0925;
    margin-bottom: 20px;
  }
  
  &__text {
    color: #4e4a67;
    margin-bottom: 30px;
    line-height: 1.5em;
  }
  
  &__button {
        display: inline-flex;
    background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
    padding: 15px 35px;
    border-radius: 50px;
    color: #fff;
    box-shadow: 0px 14px 80px rgba(252, 56, 56, 0.4);
    text-decoration: none;
    font-weight: 500;
        justify-content: center;
    text-align: center;
    letter-spacing: 1px;
    @media screen and (max-width: 576px) {
      width: 100%;
    }
    
  }
  .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
    bottom: 10px;
    left: 0;
    width: 100%;
    
}
  &__pagination {
   position: absolute;
    z-index: 21;
    right: 20px;
    width: 11px!important;
    text-align: center;
    left: auto!important;
    top: 50%;
    bottom: auto!important;
    transform: translateY(-50%);
    @media screen and (max-width: 768px) {
     transform: translateX(-50%);
          left: 50%!important;
      top: 205px;
    width: 100%!important;
    display: flex;
    justify-content: center;
    align-items: center;
    }
     &.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 8px 0;
       @media screen and (max-width: 768px) {
         margin: 0 5px;
       }
}
    
    .swiper-pagination-bullet {
    width: 11px;
    height: 11px;
    display: block;
    border-radius: 10px;
    background: #062744;
    opacity: 0.2;
      transition: all .3s;
      &-active {
    opacity: 1;
    background: #fd3838;
    height: 30px;
    box-shadow: 0px 0px 20px rgba(252, 56, 56, 0.3);
        
        @media screen and (max-width: 768px) {
          height: 11px;
          width: 30px;
        }
}
}
    
  }
  
}
`