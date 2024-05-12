'use client'
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { manufacturers } from "@/constants/constants";
import {  Fragment, useState } from "react";
import { CustomInputProps } from "@/types";


function CustomInput({manufacturer,setManufacturer,errorInInput}:CustomInputProps) {
    const [query,setQuery] = useState('')
    const filteredList = (query.indexOf(' ') !== 0 && query.length === 0) ? []
    : manufacturers
     .filter(item=>item.toLowerCase().replace(/\s+/g,'').includes(query.toLowerCase().replace(/\s+/g,'')))
     
  return (
    <div className="search-manufacturer">
        <Combobox value={manufacturer} onChange={setManufacturer}>
            <div className="relative w-full bg-gray">
                <Combobox.Button className='absolute left-[13px] top-[14px]'>
                    <Image
                        src='/car-logo.svg' 
                        alt='carlogo'
                        width={20}
                        height={20}
                        className=''
                    />
                </Combobox.Button>
                <Combobox.Input className={`search-manufacturer__input ${errorInInput?'border-2 border-red-500':''}`}
                placeholder="Volkswagen"
                displayValue={(t:string)=>{
                    return t}}
                onChange={(e)=>setQuery(e.target.value)}/>
                <Transition
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
                afterLeave={()=>setQuery('')}
                > 
                    {/* might remove 'absolute' and 'relative classes to allow dropdown to grow instead of covering everything else' */}
                    <Combobox.Options className={'absolute w-full z-20'}> 
                        { query && filteredList.map(option=>
                            (<Combobox.Option
                            className={({active})=>`search-manufacturer__option w-full  ${active ? 'bg-primary-blue text-white': 'bg-white text-gray-900' }`}
                            value={option} key={option}>
                                {({selected,active})=>(
                                    <>
                                    <span className={`block truncate ${selected ? 'font-medium': 'font-normal'}`}>{option}</span>
                                    {selected ? 
                                    (<span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'} `}>
                                    </span>) 
                                    : null}
                                    </>
                                )}
                            </Combobox.Option>))
                        }
                    </Combobox.Options>
                </Transition>

            </div>
        </Combobox>


    </div>
  )
}

export default CustomInput