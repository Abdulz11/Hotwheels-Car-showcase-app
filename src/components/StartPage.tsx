'use client'
import { useEffect, useState } from "react"


export default function StartPage() {
    const [num,setNum] = useState(0)
    // const [countInterval,setCountInterval] = useState(600)
   const scale = (num:number,max_in:number,min_in:number,max_out:number,min_out:number,)=>{
    return ((num - min_in) * (max_out - min_out) / (max_in - min_in) + min_out)
   }
   const blurLevel =(num:number)=>{
    let result = ''
        switch (true) {
            case num < 40:
                result = 'blur-md'
                break;
            case num < 70:
                result = 'blur'
                break;
            case num > 70:
                result = 'blur-none'
                break;
        }
       return result
   }

    useEffect(() => {
        let interval = num < 49 ? 90 : num < 70 ? 50 : 200 
      let id = setInterval(()=>{
        if(num === 100) return
        setNum(prev=> prev + 1)
      },interval)

      return () => clearInterval(id)

    }, [num])
    const height = window.innerHeight
       
  return (
    <>
    <div className={`absolute t-0 l-0 w-full z-1000  flex justify-center transition-[height] duration-1000 items-start ${num == 100 ? 'h-0':`h-screen`} bg-primary-blue  filter  overflow-hidden`}>
        <div className={`${blurLevel(num)} text-center w-[360px] relative top-[50px] text-gray-700`}>
        <h4 className="font-bold text-[20px]">Disclaimer:</h4>
        <h5 className="font-semi-bold text-[22px] ">The images on this site do not represent the title of the cars.The API's which offer high quality imagery either require money  or  a company email....both of which I do not have.</h5>
        </div>
    </div>
    <h1 className={` text-4xl font-bold absolute  top-[60%] left-[47%] text-white transition-opacity duration-300 ${num == 100 ? 'opacity-0':''} `}>{num}%</h1>
    </>
  )
}
