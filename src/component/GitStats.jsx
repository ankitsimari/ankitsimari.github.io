import React from 'react'

export default function GitStats() {
  return (
    <div className='container p-4'>
        <div className="row gap-3">
          <div className='col-md-11 github_Stats react-activity-calendar' style={{minHeight:"160px"}}>
<img className='' src="https://ghchart.rshah.org/ankitsimari" alt="" />
          </div>
          <div className="col-md-4 github_Stats ">
            <img  id='github-streak-stats' src="https://github-readme-streak-stats.herokuapp.com?user=ankitsimari" alt="" />
          </div>
          <div className="col-md-4 github_Stats ">
            <img  id='github-stats-card' src="https://github-readme-stats.vercel.app/api?username=ankitsimari" alt="" />
          </div>
          <div className="col-md-3 github_Stats" >
            <img  id='github-top-langs' src="https://github-readme-stats.vercel.app/api/top-langs/?username=ankitsimari&layout=pie&show_icons=true&theme=transparent&bg_color=00000000" alt="" />
          </div>
        </div>
    </div>
  )
}
