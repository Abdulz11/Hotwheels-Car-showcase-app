'use client'
import Image from "next/image"
import CustomButton from "./CustomButton"
import Link from "next/link"

function Hero() {
    function handleScroll(){
        console.log('hero button has been clicked')
       window.scrollTo(0,300)
    }
    

  return (
    <div className="hero pt-10 ">
        <div className="flex-1  padding-x">
            <h1 className="hero__title">A showcase made for car enthusiats.</h1>
            <p className="hero__subtitle">
                Filter cars through brands, model, year and more.
            </p>
            {/* <Link href="#discover" className='cursor-pointer'> */}
                <CustomButton 
                title='Explore cars'
                handleClick={()=>console.log('hero btn clicked')}
                styles='bg-primary-blue rounded-full mt-10 text-white'
                />
            {/* </Link> */}
        </div>
        <div className="hero__image-container ">
            <div className="hero__image">
                <Image fill src='/hero.png' alt='image of a car' className="object-contain"/>
            </div>
            <div className="hero__image-overlay"/>
        </div>
    </div>
  )
}

export default Hero