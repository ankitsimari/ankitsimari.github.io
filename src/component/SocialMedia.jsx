import React from 'react'
import { FaLinkedinIn,FaGithub,FaWhatsapp, FaMailBulk } from 'react-icons/fa'

export default function SocialMedia() {
  return (
    <div className='mainDIv h-100 '>
            <footer className="wrapper">
        <div className="icons themeBg" onClick={()=>{window.location.href="https://www.linkedin.com/in/ankit-kumar-747786235/"}}>
            <div className="tooltip bg-primary" id="contact-linkedin">
              LinkedIn
            </div>
            <FaLinkedinIn className=' text-white rounded-icon'/>
        </div>

        <div className="icons themeBg" id="contact-github" onClick={()=>{window.location.href="https://github.com/ankitsimari"}}>
            <div className="tooltip bg-black">
               Git
            </div>
            {/* <span> </span> */}
            <FaGithub className=' text-white rounded-icon'/>
        </div>

        <div className="icons themeBg" onClick={()=>{window.location.href="https://github.com/ankitsimari"}}>
            <div className="tooltip bg-success">
               WhatsApp
            </div>
            <FaWhatsapp className=' text-white rounded-icon'/>
       
        </div>

        <div className="icons themeBg" id="contact-email" onClick={()=>{window.location.href="https://github.com/ankitsimari"}}>
            <div className="tooltip bg-danger">
               Email
            </div>
          
            <FaMailBulk className=' text-white rounded-icon'/>
        </div>
    </footer>
    </div>
  )
}
