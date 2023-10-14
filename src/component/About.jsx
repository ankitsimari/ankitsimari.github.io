import React from 'react'
import {FaPhoneAlt,FaMailBulk,FaGithub,FaLinkedin,FaInstagram,FaTwitterSquare, FaFacebookMessenger, FaGitAlt} from 'react-icons/fa'
import PDF from "../Image/Ankit.pdf"

export default function About() {
  return (
    
    <div className='about section container-fluid  p-3  py-lg-5 grayBg' id="about">
        <div className="row justify-content-center">
          <h2 className='text-center fw-bold'>About</h2>
            <div className='col-md-11 ms-4 ms-lg-0 p-2 ps-lg-5' >
           

                <p className='fs-5 text-center p-2 px-3 px-lg-5' >Passionate Full Stack Web Developer with a robust command of Frontend and Backend technologies. Skilled in the MERN stack and willing to start a career with an organization that provides an opportunity to improve skills and knowledge gained as well as to grow along with the organization's goal. </p>
                <span className='d-flex justify-content-center'>

                <div>
      <a className='text-decoration-none' href={PDF} id="resume-button-2">

        <button className="button nav-link resume" type="button">
  <span className="button__text">Resume</span>
  <span className="button__icon"><svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 35 35" id="bdd05811-e15d-428c-bb53-8661459f9307" data-name="Layer 2" className="svg"><path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path><path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path><path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path></svg></span>
</button>
      </a>
    </div>
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
