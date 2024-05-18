import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ({setPlayState}) => {
  return (
    <div className='About'>
      <div className="about-left">
        <img src={about_img} alt="" className='about_img' />
        <img src={play_icon} alt="" className='play_icon' onClick={()=>{
          setPlayState(true)}} />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrows leaders today</h2>
        <p>National rankings, environmentally friendly and state- of-the 
          facilities, growing reputation for excellence in teaching and 
          affordable cost of education are some of the glaring attractions of 
          SSUET. Its hallmark includes the curricula emphasizing on research, 
          the air conditioned class rooms and labs meeting international 
          standards, sports facilities, symposium and seminars, Continuing 
          Education Programs, strict adherence to Teaching Schedules, sound 
          interaction between Industry and Academia, ongoing research projects 
          and above all the Career Planning & Placement Bureau, which helps find 
          jobs for the alumni.</p>
      </div>
    </div>
  )
}

export default About
