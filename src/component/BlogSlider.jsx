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
        <DIV className='grayBg py-3'>

			{/* Medicare */}
<div className="blog-slider my-5">
  <div className="blog-slider__wrp swiper-wrapper">
    <div className="blog-slider__item swiper-slide">
      <div className="blog-slider__img">
        
        <img className='shadow' src="https://i.ibb.co/FK6mThk/doctor-Img-fotor-20231022203134.png" alt=""/>
      </div>
      <div className="blog-slider__content">
        <span className="blog-slider__code">26 August 2023</span>
        <div className="blog-slider__title">MediCare</div>
		<h6 className="project-tech-stack mb-4" >React | Bootstrap | Material UI</h6>
        <div className="blog-slider__text"> MediCare is an online platform designed to simplify the process of booking appointments with doctors. Our website aims to bridge the gap between patients and healthcare providers. </div>
		<span className='d-flex'>
        <a href="https://github.com/ankitsimari/teal-board-7169" className="blog-slider__button me-3"><BsGithub className='fs-4 me-2'/> Github</a>
        <a href="https://teal-board-7169-ankit-doc-web.vercel.app/" className="blog-slider__button me-3"><TbWorldShare className='fs-4 me-2'/> Link</a>
		</span>
      </div>
    </div>
  </div>
</div>

{/* EcoFood */}


<div className="blog-slider my-5">
  <div className="blog-slider__wrp swiper-wrapper">
    <div className="blog-slider__item swiper-slide">
      <div className="blog-slider__img">
        
        <img src="https://i.ibb.co/ykmY4N3/Screenshot-2023-10-22-204325-fotor-20231022204413.png" alt=""/>
      </div>
      <div className="blog-slider__content">
        <span className="blog-slider__code">September 2023</span>
        <div className="blog-slider__title">EcoFood</div>
		<h6 className="project-tech-stack mb-4" >React | Redux | Material UI</h6>
        <div className="blog-slider__text">  Welcome to the EcoFood Fresh Food Website! eco-friendly food delivery solution. We connect food lovers with sustainable, delicious meals and grocery. </div>
		<span className='d-flex'>
        <a href="https://github.com/ankitsimari/sleek-circle-8356" className="blog-slider__button me-3"><BsGithub className='fs-4 me-2'/> Github</a>
        <a href="https://ecofoodankit.vercel.app/" className="blog-slider__button me-3"><TbWorldShare className='fs-4 me-2'/> Link</a>
		</span>
      </div>
    </div>
  </div>
</div>


{/* Learning Home */}

<div className="blog-slider my-5">
  <div className="blog-slider__wrp swiper-wrapper">
    <div className="blog-slider__item swiper-slide">
      <div className="blog-slider__img">
        
        <img src="https://i.ibb.co/4sf7bj9/hh-fotor-20231022205332.png" alt=""/>
      </div>
      <div className="blog-slider__content">
        <span className="blog-slider__code">June 2023</span>
        <div className="blog-slider__title">Learning Home</div>
		<h6 className="project-tech-stack mb-4" >HTML | CSS | JavaScript</h6>
        <div className="blog-slider__text"> Welcome to Learning Home, your online education hub. We provide a convenient and enriching e-learning experience. </div>
		<span className='d-flex'>
        <a href="https://github.com/ankitsimari/spiffy-pail-5202" className="blog-slider__button me-3"><BsGithub className='fs-4 me-2'/> Github</a>
        <a href="https://ankitkumarsimri.netlify.app/" className="blog-slider__button me-3"><TbWorldShare className='fs-4 me-2'/> Link</a>
		</span>
      </div>
    </div>
  </div>
</div>

{/*  */}

<div className="blog-slider my-5">
  <div className="blog-slider__wrp swiper-wrapper">
    <div className="blog-slider__item swiper-slide">
      <div className="blog-slider__img">
        
        <img src="https://user-images.githubusercontent.com/74038190/212749447-bfb7e725-6987-49d9-ae85-2015e3e7cc41.gif" alt=""/>
      </div>
      <div className="blog-slider__content">
        <span className="blog-slider__code">October 2023</span>
        <div className="blog-slider__title">In Progress</div>
		<h6 className="project-tech-stack mb-4" >... | ... | ...</h6>
        <div className="blog-slider__text">Stay tuned for my upcoming ventures, set to revolutionize with state-of-the-art technology. Keep an eye out for the latest updates and innovations. </div>
		<span className='d-flex'>
        <a href="https://github.com/ankitsimari/teal-board-7169" className="blog-slider__button me-3"><BsGithub className='fs-4 me-2'/> Github</a>
        <a href="https://teal-board-7169-ankit-doc-web.vercel.app/" className="blog-slider__button me-3"><TbWorldShare className='fs-4 me-2'/> Link</a>
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
	 background-color: #ffe53b;
	 /* background-image: linear-gradient(147deg, #ffe53b 0%, #fd3838 74%); */
	 min-height: 100vh;
	 display: flex;
	 font-family: 'Fira Sans', sans-serif;
}
 .blog-slider {
	 width: 95%;
	 position: relative;
	 max-width: 800px;
	 margin: auto;
	 background: #fff;
	 box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
	 padding: 25px ;
	 border-radius: 25px;
	 height: 400px;
	 transition: all 0.3s;
}
 @media screen and (max-width: 992px) {
	 .blog-slider {
		 max-width: 680px;
		 height: 400px;
	}
}
 @media screen and (max-width: 768px) {
	 .blog-slider {
		 min-height: 500px;
		 height: auto;
		 margin: 180px auto;
	}
}
 @media screen and (max-height: 500px) and (min-width: 992px) {
	 .blog-slider {
		 height: 350px;
	}
}
 .blog-slider__item {
	 display: flex;
	 align-items: center;
}
 @media screen and (max-width: 768px) {
	 .blog-slider__item {
		 flex-direction: column;
	}
}
 .blog-slider__item.swiper-slide-active .blog-slider__img img {
	 opacity: 1;
	 transition-delay: 0.3s;
}
 .blog-slider__item.swiper-slide-active .blog-slider__content > * {
	 opacity: 1;
	 transform: none;
}
 .blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(1) {
	 transition-delay: 0.3s;
}
 .blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(2) {
	 transition-delay: 0.4s;
}
 .blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(3) {
	 transition-delay: 0.5s;
}
 .blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(4) {
	 transition-delay: 0.6s;
}
 .blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(5) {
	 transition-delay: 0.7s;
}
 .blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(6) {
	 transition-delay: 0.8s;
}
 .blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(7) {
	 transition-delay: 0.9s;
}
 .blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(8) {
	 transition-delay: 1s;
}
 .blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(9) {
	 transition-delay: 1.1s;
}
 .blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(10) {
	 transition-delay: 1.2s;
}
 .blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(11) {
	 transition-delay: 1.3s;
}
 .blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(12) {
	 transition-delay: 1.4s;
}
 .blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(13) {
	 transition-delay: 1.5s;
}
 .blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(14) {
	 transition-delay: 1.6s;
}
 .blog-slider__item.swiper-slide-active .blog-slider__content > *:nth-child(15) {
	 transition-delay: 1.7s;
}
 .blog-slider__img {
	margin-top: 10px;
	 width: 300px;
	 flex-shrink: 0;
	 height: 300px;
	 /* background-image: linear-gradient(to left, #faab1b, #f96f0e); */
	 box-shadow: 4px 13px 30px 1px rgba(252, 56, 56, 0.2);
	 border-radius: 20px;
	 transform: translateX(-80px);
	 overflow: hidden;
}
 .blog-slider__img:after {
	 content: '';
	 position: absolute;
	 top: 0;
	 left: 0;
	 width: 100%;
	 height: 100%;
	 /* background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%); */
	 border-radius: 20px;
	 opacity: 0.8;
}
 .blog-slider__img img {
	 width: 100%;
	 height: 100%;
	 object-fit: cover;
	 display: block;
	 opacity: 0;
	 border-radius: 20px;
	 transition: all 0.3s;
}
 @media screen and (max-width: 768px) {
	 .blog-slider__img {
		 transform: translateY(-50%);
		 width: 90%;
	}
}
 @media screen and (max-width: 576px) {
	 .blog-slider__img {
		 width: 95%;
	}
}
 @media screen and (max-height: 500px) and (min-width: 992px) {
	 .blog-slider__img {
		 height: 270px;
	}
}
 .blog-slider__content {
	 padding-right: 25px;
}
 @media screen and (max-width: 768px) {
	 .blog-slider__content {
		 margin-top: -80px;
		 text-align: center;
		 padding: 0 30px;
	}
}
 @media screen and (max-width: 576px) {
	 .blog-slider__content {
		 padding: 0;
	}
}
 .blog-slider__content > * {
	 opacity: 0;
	 transform: translateY(25px);
	 transition: all 0.4s;
}
 .blog-slider__code {
	 color: #7b7992;
	 margin-bottom: 15px;
	 display: block;
	 font-weight: 500;
}
 .blog-slider__title {
	 font-size: 24px;
	 font-weight: 700;
	 color: #0d0925;
	 /* margin-bottom: 20px; */
}
 .blog-slider__text {
	 color: #4e4a67;
	 margin-bottom: 30px;
	 line-height: 1.5em;
}
 .blog-slider__button {
	 display: inline-flex;
	 background-image: linear-gradient(to left, #faab1b, #f96f0e);
	 padding: 10px 20px;
	 border-radius: 50px;
	 color: #fff;
	 box-shadow: 0px 14px 80px rgba(252, 56, 56, 0.4);
	 text-decoration: none;
	 font-weight: 500;
	 justify-content: center;
	 text-align: center;
	 letter-spacing: 1px;
}
 @media screen and (max-width: 576px) {
	 .blog-slider__button {
		 width: 100%;
	}
}
 .blog-slider .swiper-container-horizontal > .swiper-pagination-bullets, .blog-slider .swiper-pagination-custom, .blog-slider .swiper-pagination-fraction {
	 bottom: 10px;
	 left: 0;
	 width: 100%;
}
 .blog-slider__pagination {
	 position: absolute;
	 z-index: 21;
	 right: 20px;
	 width: 11px !important;
	 text-align: center;
	 left: auto !important;
	 top: 50%;
	 bottom: auto !important;
	 transform: translateY(-50%);
}
 @media screen and (max-width: 768px) {
	 .blog-slider__pagination {
		 transform: translateX(-50%);
		 left: 50% !important;
		 top: 205px;
		 width: 100% !important;
		 display: flex;
		 justify-content: center;
		 align-items: center;
	}
}
 .blog-slider__pagination.swiper-pagination-bullets .swiper-pagination-bullet {
	 margin: 8px 0;
}
 @media screen and (max-width: 768px) {
	 .blog-slider__pagination.swiper-pagination-bullets .swiper-pagination-bullet {
		 margin: 0 5px;
	}
}
 .blog-slider__pagination .swiper-pagination-bullet {
	 width: 11px;
	 height: 11px;
	 display: block;
	 border-radius: 10px;
	 background: #062744;
	 opacity: 0.2;
	 transition: all 0.3s;
}
 .blog-slider__pagination .swiper-pagination-bullet-active {
	 opacity: 1;
	 background: #fd3838;
	 height: 30px;
	 box-shadow: 0px 0px 20px rgba(252, 56, 56, 0.3);
}
 @media screen and (max-width: 768px) {
	 .blog-slider__pagination .swiper-pagination-bullet-active {
		 height: 11px;
		 width: 30px;
	}
}
 
`