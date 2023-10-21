import React from 'react'
import {FaPhoneAlt,FaMailBulk,FaGithub,FaLinkedin,FaInstagram,FaTwitterSquare, FaFacebookMessenger, FaGitAlt} from 'react-icons/fa'
import PDF from "../Image/Ankit.pdf"

export default function About() {
  return (
    
    <div className='about section container-fluid  p-3  py-lg-5 grayBg' id="about">
        <div className="row justify-content-center">
          <h2 className='text-center fw-bold' id="user-detail-name">About</h2>
            <div className='col-md-11 ms-4 ms-lg-0 p-2 ps-lg-5' >
           
                <p className='fs-5 text-center p-2 px-3 px-lg-5' id="user-detail-intro">Passionate Full Stack Web Developer with a robust command of Frontend and Backend technologies. Skilled in the MERN stack and willing to start a career with an organization that provides an opportunity to improve skills and knowledge gained as well as to grow along with the organization's goal. </p>
                <span className='d-flex justify-content-center'>

                {/* <a className="nav-link resume fw-bold text-black btn " target='_blank' href={PDF} id="resume-button-2">
                Resume
              </a> */}

                </span>
                <div className='d-flex justify-content-evenly flex-wrap gap-2 mt-4' >

                  <div className='bg-white p-3 px-5 rounded aboutCard text-center shadow' >
                    <span className='text-center rounded-circle'>
                     <div>
                     <FaPhoneAlt className='mt-3 text-white'/>
                     </div>
                    </span>
                  <span className='d-flex mt-2'>
              <FaPhoneAlt className='mt-1'/>
                <h5 className='ms-2' id="contact-phone">+91 9576508805</h5>
                </span>
                <span className='d-flex'>
              <FaMailBulk className='mt-1'/>
                <h5 className='ms-2'>erankkrs@gmail.com</h5>
                </span>
                  </div>


                  <div className='bg-white p-3 px-5 rounded aboutCard shadow'>
                  <span className='text-center rounded-circle'>
                     <div>
                     <FaGitAlt className='mt-2 pt-1 fs-3 w-1 text-white'/>
                     </div>
                    </span>
                  <span className='d-flex mt-2'>
              <FaGithub className='mt-1'/>
                <h5 className='ms-2'>ankitsimari</h5>
                </span>
                <span className='d-flex'>
              <FaLinkedin className='mt-1'/>
                <h5 className='ms-2'>ankit-kumar-747786235</h5>
                </span>
                  </div>


                  <div className='bg-white p-3 px-5 rounded aboutCard shadow'>
                  <span className='text-center rounded-circle'>
                     <div>
                     <FaFacebookMessenger className='mt-3 fs-5 text-white'/>
                     </div>
                    </span>
                  <span className='d-flex mt-2 '>
              <FaInstagram className='mt-1'/>
                <h5 className='ms-2 d-block'>ank_krs</h5>
                </span>
                <span className='d-flex'>
              <FaTwitterSquare className='mt-1'/>
                <h5 className='ms-2'>Ankitsimari</h5>
                </span>
                  </div>

                </div>
       
          
               



     
            </div>
        </div>

    </div>
  )
}
