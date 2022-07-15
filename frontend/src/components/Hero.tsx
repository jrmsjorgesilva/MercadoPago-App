import React from 'react'
import Sidebar from './Sidebar';
import HeroStepper from './HeroStepper';

const Hero = () => {
  return (
    <div style={{ 
            display: 'grid',
            gridTemplateColumns: '1fr 3fr'
        }}
     >
        <Sidebar />
        <HeroStepper />
    </div>
  )
}

export default Hero