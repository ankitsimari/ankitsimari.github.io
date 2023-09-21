import React from 'react'
import Line from './Line'
import Project from './Project'

export default function Projects() {
  return (
    <div className='container-fluid  p-5 themeBg'>
        
    {/* <div className='row '>
        <div className="col-md-4 d-flex align-items-center flex-column ">
            <h1>My Projects</h1>
            <Line/>
            <div className="w-75 mt-5 card text-center">
                <img className='w-100' src="https://www.alphalearn.com/wp-content/uploads/2021/11/e-learning-2.jpg" alt="" />
                <h4>E-learning Website</h4>
            </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center ">
          
            <div className=" w-75 mt-5">
                <img className='w-100' src="https://www.alphalearn.com/wp-content/uploads/2021/11/e-learning-2.jpg" alt="" />

            </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center ">
            
            <div className=" w-75">
                <img className='w-100' src="https://www.alphalearn.com/wp-content/uploads/2021/11/e-learning-2.jpg" alt="" />
               
            </div>
        </div>

    </div> */}

    <Project/>

</div>
  )
}
