import React from 'react'
import './Hero.css'
import{HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <section className="hero-wrapper">
    <div className="paddings innerWidth hero-container flexCenter">

<div className="flexColStart hero-left">

<div className="hero-title">
<div className="orange-circle"/>
<motion.h1
initial={{y: "2rem", opacity: 0}}
animate={{y: 0, opacity: 1}}
transition={{
    duration:3,
    type: "spring"

}}
>

Discover<br/>Luxe in Suitable <br/> Estates.
</motion.h1>
</div>
<div className="flexColStart hero-description">
    <span>Luxurious Properties Tailored to Your Style and Vibe,</span>
    <span>Unlock Your Dream Home: Effortlessly Explore a Variety of Properties with Ease.</span>
</div>
<div className="flexCenter search-bar">
    <HiLocationMarker color="blue" size="25"/>
    <input type="text" className="text" />
    <button className="button">Search</button>
</div>



<div className="flexCenter stats">
    <div className="flexColCenter stat">
    <span>
    <CountUp start={8545} end={9000} duration={3}/>
    <span className='plus'>+</span>
    </span>
    <span className='sText'>Premium Products</span>
    </div>

    <div className="flexColCenter stat">
    <span><CountUp start={2550} end={3000} duration={3}/>
    <span className='plus' >+</span>
    </span>
    <span className='sText'>Happy Customers</span>
    </div>

    <div className="flexColCenter stat">
    <span><CountUp end={29} duration={3}/>
    <span className='plus'>+</span>
    </span>
    <span className='sText'>Award Wining</span>
    </div>
    


   
</div>


</div>


<div className=" flexCenter hero-right">
<motion.div
initial={{x: "7rem" , opacity:0}}
animate={{x: 0, opacity:1}}
transition={{
    duration: 3,
    type: "spring"}
}

 className="image-container">
<img alt="BuildingImage" src='./build5.jpeg'/>



</motion.div>
</div>

    </div>


    </section>
  )
}

export default Hero
