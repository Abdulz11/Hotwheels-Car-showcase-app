'use client'
import { FormEvent, useEffect, useState } from "react"
import CustomInput from "./CustomInput"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"

function SearchBar() {
    const [manufacturer,setManufacturer] = useState('')
    const [model,setModel] = useState('') 
    const [screenScrolled,setScreenScrolled] = useState(false) 
    const [errorInInput,setErrorInInput] = useState(false)
    const router = useRouter()
    const reactSearchParams = useSearchParams()
    const searchParams = reactSearchParams.toString()
    
   
    const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault( )

        if(!manufacturer && !model){
            setErrorInInput(true)
            return
        }
        
        const scrollPosition = window.scrollY
        localStorage.setItem('scrollPosition',String(scrollPosition))
        // 
        let params = new URLSearchParams(window.location.search)
        setErrorInInput(false)
       if(manufacturer){
           params.set('manufacturer',manufacturer)
       }
       if(model){
           params.set('model',model)
       }
        console.log('added URL')
        let newUrl = `${window.location.pathname}?${params}`
        router.push(newUrl)
        setScreenScrolled(true)
    }
    
   
    useEffect(() => {
       
      let scrollHeightFromLocal = localStorage.getItem('scrollPosition')
      console.log('im scroll height inside useeffect')

      if(!scrollHeightFromLocal) return
      console.log('bout to chnage height')
      const id = setTimeout(()=> window.scrollTo(0,Number(scrollHeightFromLocal)),4000)

      if(window.scrollY === Number(scrollHeightFromLocal)){
          localStorage.removeItem('scrollPosition')
          setScreenScrolled(false)
        }
      return ()=> clearTimeout(id)
    }, [screenScrolled,searchParams])
    
        
  return (
    <form className="searchbar items-center" onSubmit={(e)=>handleSubmit(e)}>
        <div className="searchbar__item max-sm:px-3 max-md:px-4 max-sm:flex-col gap-3">
            <CustomInput
                manufacturer={manufacturer}
                setManufacturer={setManufacturer}
                errorInInput={errorInInput}
            />
            <div className='relative flex  items-start justify-between flex-1 search-manufacturer '>
                <Image
                src='/model-icon.png'
                alt='model icon'
                width={30}
                height={30}
                className="object-contain left-1 absolute"/>
                <input 
                type="text" 
                value={model}
                onChange={(e)=>setModel(e.target.value)}
                className={`search-manufacturer__input w-full ${errorInInput ? "border-2  border-red-500": ''}`}
                placeholder="tiguan"
                />
            </div>
            <button type='submit'>
                <Image
                src="/magnifying-glass.svg"
                alt="magnifying-glass"
                width={40}
                height={40}
                className='object-contain relative -left-3 max-sm:hidden'
                />
            </button>
            <button  type='submit' className="bg-primary-blue text-white rounded-3xl px-3 py-2 font-semibold sm:hidden">Search</button>
        </div>
    </form>
  )
}

export default SearchBar