'use client'
import { Car } from "@/types"
import { generateImage, whatDrive } from "@/utilies/utility"
import Image from "next/image"
import CustomButton from "./CustomButton"
import { useState } from "react"
import CarModal from "./CarModal"


let price = 52
function CarCard({car}:{car:Car}) {
  const [modalOpen,setModalOpen]=useState(false)

    return (
    <>
    <div className="car-card group relative ">
      <div className="car-card__content">
        <h2 className="car-card__content-title leading-4">{car.make} {car.model}</h2>
        <p className="flex text-[32px] mt-2 font-extrabold">
          <span className="self-start text-[14px] font-semibold">$</span>
          <span>{52}</span>
        </p>
      </div>
      <div className="relative w-full h-40 my-3">
        <Image fill src={'/hero.png'} alt='model car' className="object-contain" priority />
      </div>
      <div className="w-full  mt-2  relative">
        <div className="flex item-center w-full justify-between group-hover:invisible relative">
          <div className="relative flex flex-col justify-center items-center gap-2">
            <Image src='/steering-wheel.svg' alt='steering-wheel logo' width={20} height={20}/>
            <p className="font-semibold ">{car.transmission === "a" ? 'Automatic' : 'Manual'}</p>
          </div>
          <div className="relative flex flex-col justify-center items-center gap-2">
            <Image src='/tire.svg' alt='tire logo' width={20} height={20}/>
            <p className="font-semibold">{whatDrive(car.drive)}</p>
          </div>
          <div className="relative flex flex-col justify-center items-center gap-2">
            <Image src='/gas.svg' alt='gas logo' width={20} height={20}/>
            <p className="font-semibold">{car.city_mpg} MPG</p>
          </div>
        </div>
      <div className="car-card__btn-container">
        <CustomButton
        title='View more'
        styles="w-full py-[16px] bg-primary-blue  text-white  font-bold rounded-full"
        handleClick={()=>setModalOpen(true)}
        />
      </div>
      </div>
    </div>
    <CarModal car={car} setModalOpen={setModalOpen} modalOpen={modalOpen} />
    </>
  )
}

export default CarCard