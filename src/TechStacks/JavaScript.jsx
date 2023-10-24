import React from 'react'
import styled from 'styled-components'
import { SiJavascript } from 'react-icons/si'
export default function JavaScript() {
  return (
    <DIV data-aos="fade-up">
    <div className='skills-card'>
    <div className="boxCSS">
      <div className="card_box_css border">
        <span>
          {/* <img
            className="techImgCSS skills-card-img"
            src="https://thumbs.dreamstime.com/b/javascript-icon-logo-javascript-often-abbreviated-as-js-programming-language-conforms-to-ecmascript-specification-204759326.jpg"
            alt=""
          /> */}
           <SiJavascript className='techImgCSS ' style={{fontSize:"130px",color:"#FDD93C"}}/>
        </span>
      </div>
    </div>
        <h3  class="skills-card-name d-none">Node js</h3>
  </div>
    </DIV>
  )
}



const DIV = styled.div`
    .boxCSS {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
  }

 .techImgCSS  {
  margin-top: 50px;
  margin-left: 20px;
    width: 60%;
  }

  .card_box_css {
    width: 133px;
    height: 150px;
    border-radius: 20px;
    overflow: hidden;
       background:transparent;
    /* border: 1px solid gray; */
    position: relative;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.55);
    cursor: pointer;
    transition: all 0.3s;
  }

  /* .card_box_css:hover {
    transform: scale(1.1);
  } */

  .card_box_css span {
    position: absolute;
    /* overflow: hidden; */
    width: 150px;
    height: 150px;
    top: -20px;
    left: -20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card_box_css span::before {
    content: "JavaScript";
    position: absolute;
    width: 150%;
    height: 33px;
    background-image: linear-gradient(
      45deg,
      #ff6547 0%,
      #ffb144 51%,
      #ff7053 100%
    );
    transform: rotate(-45deg) translateY(-20px);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 600;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.23);
  }

  .card_box_css span::after {
    content: "";
    position: absolute;
    width: 10px;
    bottom: 0;
    left: 0;
    height: 10px;
    z-index: -1;
    box-shadow: 140px -140px #cc3f47;
    background-image: linear-gradient(
      45deg,
      #ff512f 0%,
      #f09819 51%,
      #ff512f 100%
    );
  }




  /* javaScript */

  
`