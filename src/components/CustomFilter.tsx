'use client'
import { Listbox,Transition } from "@headlessui/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState,useEffect } from "react";


 
 
export default function CustomFilter({options,title}:{options:string[],title:string}) {
  const router = useRouter()
  const pathname = usePathname()
  const [selected,setSelected] = useState('')
  const [scrolled,setScrolled] = useState(false)

  function handleFilterParams(value:string){
    setSelected(value)
    
    const scrollPosition = window.scrollY
    localStorage.setItem('scrollPositionInFilter',String(scrollPosition))
    const params = new URLSearchParams(window.location.search)
    const query = title == 'Fuel' ? 'fuel_type' : 'year'
    params.set(query,value)
    const newParams = `${pathname}?${params}` 
    router.push(newParams)
    setScrolled(true)
  }

  useEffect(() => {
    let scrollHeightFromLocal = localStorage.getItem('scrollPositionInFilter')
    console.log('im scroll height inside useeffect in filter')

    if(!scrollHeightFromLocal) return
    console.log('bout to chnage height')
    const id = setTimeout(()=> window.scrollTo(0,Number(scrollHeightFromLocal)),4000)

    if(window.scrollY === Number(scrollHeightFromLocal)){
        localStorage.removeItem('scrollPositionInFilter')
        setScrolled(false)
      }
  
    return () => {
      clearInterval(id)
    }
  }, [scrolled])
  
 
  return (
    <div className="w-fit">
      <Listbox value={selected } onChange={(value)=>handleFilterParams(value)}>
        <div className="relative w-fit z-10">
          <Listbox.Button className='custom-filter__btn'>
              <span className='block truncate'>{selected !== '' ? selected : title }</span>
              <Image
              src='/chevron-up-down.svg'
              alt="chevron up and down"
              width={20}
              height={20}
              className="ml-4 object-contain"
              />
          </Listbox.Button>
          <Transition
          as={'div'}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          >
            <Listbox.Options className={`custom-filter__options  text-center`}>
            {options.map((option)=>(
            <Listbox.Option className={`cursor-pointer`} value={option !== title ? option:''} key={option}>
              {({selected,active})=>(
                <span className={`truncate w-full inline-block ${active ? 'bg-primary-blue text-white': 'bg-white text-gray'}`}>{option}</span>        
              )}
            </Listbox.Option>
            ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
 