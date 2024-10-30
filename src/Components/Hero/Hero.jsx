import React from 'react'
import './Hero.css'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>NEWLY ARRIVED</h2>
                <div>
                    <p>new</p>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-button">
                    <button>Latest collection</button>
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="" />
            </div>

        </div>
    )
}

export default Hero