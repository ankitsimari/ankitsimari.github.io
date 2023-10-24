import React from 'react'
import "./RoundedContact.css";
import {FaLinkedinIn,FaInstagram, FaWhatsapp, FaTwitterSquare} from 'react-icons/fa'

export default function RoundedContact() {
  return (
    <div >
        <div class="main">
  <div class="up">
    <button class="card1">
    <FaLinkedinIn className='w-100 fs-3 mt-3 ms-2 linkedIn ' />
    </button>
    <button class="card2 ">
   <FaTwitterSquare className='w-100 fs-3 mt-3 instagram'/>
    </button>
  </div>
  <div class="down">
    <button class="card3">
<FaWhatsapp className='w-100 fs-3 mb-3 ms-2 ' />
    </button>
    <button class="card4">
        <FaInstagram className='w-100 fs-3 mb-3 instagram'/>
    </button>
  </div>
</div>
    </div>
  )
}
