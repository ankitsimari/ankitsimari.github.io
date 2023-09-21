import React from 'react'
import { FaLinkedinIn,FaGithub,FaWhatsapp, FaMailBulk } from 'react-icons/fa'

export default function SocialMedia() {
  return (
    <div className='mainDIv h-100 '>
            <footer class="wrapper">
        <div class="icons " onClick={()=>{window.location.href="https://www.linkedin.com/in/ankit-kumar-747786235/"}}>
            <div class="tooltip bg-primary">
              LinkedIn
            </div>
            <FaLinkedinIn className=' text-primary rounded-icon'/>
        </div>

        <div class="icons " onClick={()=>{window.location.href="https://github.com/ankitsimari"}}>
            <div class="tooltip bg-black">
               Git
            </div>
            {/* <span> </span> */}
            <FaGithub className=' text-black rounded-icon'/>
        </div>

        <div class="icons " onClick={()=>{window.location.href="https://github.com/ankitsimari"}}>
            <div class="tooltip bg-success">
               WhatsApp
            </div>
            <FaWhatsapp className=' text-success rounded-icon'/>
       
        </div>

        <div class="icons " onClick={()=>{window.location.href="https://github.com/ankitsimari"}}>
            <div class="tooltip bg-danger">
               Email
            </div>
          
            <FaMailBulk className=' text-danger rounded-icon'/>
        </div>
    </footer>
    </div>
  )
}
