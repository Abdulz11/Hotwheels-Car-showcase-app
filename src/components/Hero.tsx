'use client'
import Image from "next/image"
import CustomButton from "./CustomButton"

function Hero() {
    
    function handleScroll(){
        console.log('scrolled')
    }
  return (
    <div className="hero">
        <div>
            <div>
                <h1 className="hero__title">Find book or rent a - car  quickly and easily</h1>
                <p className="hero__subtitle">
                    streamline car rental experience with our effortless booking process.
                </p>
                <CustomButton 
                title='Explore cars'
                handleClick={handleScroll}
                styles='bg-primary-blue rounded-full mt-10 text-white'

                />
            </div>
            <div className="hero__image-container">
                <div className="hero__image"></div>
                <Image fill src='/hero.png' alt='image of a car' className="object-contain"/>
                <div className="hero__image-overlay"/>
            </div>
        </div>
    </div>
  )
}

export default Hero