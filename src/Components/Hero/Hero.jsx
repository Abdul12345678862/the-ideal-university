import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Welcome to our world we ensure better education for a better world</h1>
        <p>We are free to be the BEST we can be! As a single-building, 
            independent university district, we are free from curricular 
            mandates found in larger school systems. Our proven educational 
            approach is bolstered by a Paris Board of Education committed to 
            putting cutting-edge learning materials and classroom technology 
            in the hands of our teachers.</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
