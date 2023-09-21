import React from 'react'
import aboutImg from "../Image/PlaneImg.png";
import {FaPhoneAlt,FaMailBulk,FaGithub,FaLinkedin,FaInstagram,FaTwitterSquare} from 'react-icons/fa'

export default function About() {
  return (
    
    <div className='container-fluid themeBg text-white p-3' id='About'>
        <div className="row ">
            <div className="col-md-6 ">
  
               
            </div>
            <div className='col-md-6'>
                <h1>Ankit Kumar</h1>
                <span className='d-flex'>
                <h3>MERN Stack Developer</h3>
                <h6 className='ms-2 fw-bold'>Masai School</h6>
                </span>
                <span className='d-flex'>
              <FaPhoneAlt className='mt-1'/>
                <h5 className='ms-2'>+91 9576508805</h5>
                </span>
                <span className='d-flex'>
              <FaMailBulk className='mt-1'/>
                <h5 className='ms-2'>erankkrs@gmail.com</h5>
                </span>
                <span className='d-flex'>
              <FaGithub className='mt-1'/>
                <h5 className='ms-2'>ankitsimari</h5>
                </span>
                <span className='d-flex'>
              <FaLinkedin className='mt-1'/>
                <h5 className='ms-2'>ankit-kumar-747786235</h5>
                </span>
                <span className='d-flex'>
              <FaInstagram className='mt-1'/>
                <h5 className='ms-2'>ank_krs</h5>
                </span>
                <span className='d-flex'>
              <FaTwitterSquare className='mt-1'/>
                <h5 className='ms-2'>Ankitsimari</h5>
                </span>



                {/* <span className='d-flex'>
              <FaArrowAltCircleRight className='mt-1'/>
                <h5 className='ms-2'>400+ DSA problem</h5>
                </span>
                <span className='d-flex'>
              <FaArrowAltCircleRight className='mt-1'/>
                <h5 className='ms-2'>1200+ hr of Coding Hands on Experience</h5>
                </span>
                <span className='d-flex'>
              <FaArrowAltCircleRight className='mt-1'/>
                <h5 className='ms-2'>3 Major projects</h5>
                </span> */}
             

                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolore exercitationem sapiente aliquam cum culpa illum minima consequatur eius error, animi a. Ipsum rerum commodi natus laboriosam voluptas asperiores soluta.</p> */}

            </div>
        </div>

    </div>
  )
}
