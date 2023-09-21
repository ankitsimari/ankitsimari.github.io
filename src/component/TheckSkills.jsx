import React from 'react'
import HTML from '../TechStacks/HTML/HTML'
import CSS from '../TechStacks/CSS/CSS'
import JavaScript from '../TechStacks/JS/JavaScript'
import ReactJS from '../TechStacks/React/React'
import REdux from '../TechStacks/Redux/REdux'
import TypeScript from '../TechStacks/TypeScript/TypeScript'
import Bootstrap from '../TechStacks/Bootstrap/Bootstrap'
import Material_UI from '../TechStacks/Material_UI/Material_UI'



export default function TeckSkills() {
  return (
    <div className="container mt-lg-5 mt-3 mb-5" id='techSkill'>
      <div className="row">
<h2 className='text-center' style={{color:"#F96F0E"}}>Tech Skills</h2>
{/* <div style={{height:"3px",width:"200px" , border:"2px solid #F96F0E",marginTop:"20px",display:'block',margin:"auto"}}></div> */}
    <div className=' col gap-1 column-gap-2 skills'>
<HTML/>
<CSS/>
<JavaScript/>
<ReactJS/>
<REdux/>
<TypeScript/>
<Bootstrap/>
<Material_UI/>
    </div>
      </div>

    </div>
  )
}
