import React from 'react'
import aboutImg from "../Image/PlaneImg1.png";
import bot from "../Image/Poster.jpeg"
import {FaPhoneAlt,FaMailBulk,FaGithub,FaLinkedin,FaInstagram,FaTwitterSquare, FaFacebookMessenger, FaGitAlt} from 'react-icons/fa'

export default function About() {
  return (
    
    <div className='about section container-fluid  p-3  py-lg-5 grayBg' id="about">
        <div className="row justify-content-center">
          <h2 className='text-center fw-bold'>About</h2>
            <div className='col-md-11 ms-4 ms-lg-0 p-2 ps-lg-5' >
           

                <p className='fw-bold text-center p-2 px-3 px-lg-5' >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, sint et. Pariatur dicta, cupiditate laudantium similique adipisci numquam culpa vero mollitia quae architecto beatae sed ea aspernatur inventore vel, voluptas odit nostrum eligendi alias ut aliquid. Rerum libero officiis delectus omnis. Officia dolor voluptas impedit aut sed architecto, amet soluta ducimus facere sunt rerum ipsam porro optio? Assumenda odio numquam sunt </p>
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
