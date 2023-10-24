import React from 'react'
import "./RoundedContact.css";
import {FaLinkedinIn,FaInstagram, FaWhatsapp, FaTwitterSquare} from 'react-icons/fa'
import {AiOutlinePhone} from 'react-icons/ai'
import {HiOutlineMail} from 'react-icons/hi'

export default function RoundedContact() {
  const LinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/ankit-kumar-747786235/",
      "_blank"
    )}

    
  const Phone = () => {
    window.open(
      "tel:+919576508805",
      "_blank"
    )}

  const WhatsAap = () => {
    window.open(
      "https://wa.me/+919576508805",
      "_blank"
    )}

  const Email = () => {
    window.open(
      "mailto:erankkrs@gmail.com",
      "_blank"
    )}



  return (
    <div >
        <div className="main">
  <div className="up">
    <button className="card1 border" onClick={LinkedIn}>
    <FaLinkedinIn className='w-100 fs-3 mt-3 ms-2 linkedIn ' />
    </button>
    <button className="card2 border" onClick={Phone}>
   <AiOutlinePhone className='w-100 fs-3 mt-3 instagram ' />
    </button>
  </div>
  <div className="down" onClick={WhatsAap}>
    <button className="card3 border">
<FaWhatsapp className='w-100 fs-3 mb-3 ms-2 ' />
    </button>
    <button className="card4 border" onClick={Email}>
        <HiOutlineMail className='w-100 fs-3 mb-3 instagram'/>
    </button>
  </div>
</div>
    </div>
  )
}
