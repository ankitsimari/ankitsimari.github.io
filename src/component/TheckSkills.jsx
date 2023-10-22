import React from 'react'
import Express from '../TechStacks/Express'
import Mongodb from '../TechStacks/Mongodb'
import Chart from '../TechStacks/Chart'
import Node from '../TechStacks/Node'
import TypeScript from '../TechStacks/TypeScript'
import Redux from '../TechStacks/Redux'
import Bootstrap from '../TechStacks/Bootstrap'
import MaterialUI from "../TechStacks/MaterialUi"
import Html from '../TechStacks/Html'
import Css from '../TechStacks/Css'
import JavaScript from '../TechStacks/JavaScript'
import ReactJs from '../TechStacks/ReactJs'
import Git from '../TechStacks/Git'
import Github from '../TechStacks/Github'
import AOS from '../TechStacks/AOS'





export default function TeckSkills() {
  return (
    <div className="container mt-lg-5 mt-3 mb-5 skills-card"  id="skills">
      <div className="row text-center">
<h1 className=' fs-2 fw-bold' >Technical <span style={{color:"#F96F0E"}}>Skills</span></h1>
{/* <div style={{height:"3px",width:"200px" , border:"2px solid #F96F0E",marginTop:"20px",display:'block',margin:"auto"}}></div> */}
    <div className=' col gap-1 column-gap-2 Teachskills'>
{/* <Html/>
<Css/>
<JavaScript/>
<React/> */}
<Html/>
<Css/>
<JavaScript/>
<ReactJs/>
<Redux/>
<TypeScript/>
<Bootstrap/>
<MaterialUI/>
<AOS/>
<Chart/>
<Git/>
<Github/>
<Node/>
<Express/>
<Mongodb/>
    </div>
      </div>

    </div>
  )
}
