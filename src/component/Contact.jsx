import React from 'react'
import RoundedContact from '../Rounded/RoundedContact'

export default function Contact() {
  return (
    <div className='container-fluid py-4 grayBg' id='contact'>
        <div className='row'>
            <div className="col-md-6 d-flex justify-content-center align-items-center">
                <RoundedContact/>
            </div>
            <div className="col-md-6  mt-3 mt-lg-0">
            <form className=''>
            <h3 className='text-center text-lg-start'>Connect with me</h3>
            <input className='form-control my-2 my-lg-3 rounded-0 w-75 d-block m-auto m-lg-0' type="text" placeholder='Full Name' />
            
            <input className='form-control my-2 my-lg-3  rounded-0 w-75 d-block m-auto m-lg-0' type="email" placeholder='Email' />
         
            <input className='form-control my-2 my-lg-3  rounded-0 w-75 d-block m-auto m-lg-0' type="text" placeholder='Subject' />
           
            <textarea className='form-control my-2 my-lg-3  rounded-0 w-75 d-block m-auto m-lg-0' type="text" placeholder=''/>
            </form>
            <button className='btn rounded-0 d-block m-auto m-lg-0'>Send Message</button>
            </div>

        </div>

    </div>
  )
}
