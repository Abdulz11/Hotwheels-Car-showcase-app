'use client'
import { Car } from "@/types";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Dispatch, Fragment, SetStateAction } from "react";
 

type ModalProps={
    car:Car,
    modalOpen:boolean,
    setModalOpen: Dispatch<SetStateAction<boolean>>
}
export default function CarModal({car,modalOpen,setModalOpen}:ModalProps) {
    return(
    <>
        <Transition appear show={modalOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={()=>setModalOpen(false)}>
                <Transition.Child 
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-out duration-200' 
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm"/>   
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center ">
                    <Transition.Child 
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-0'
                enterTo='opacity-100 scale-100'
                leave='ease-out duration-200' 
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-0'>
                    <Dialog.Panel className='relative w-full bg-white max-w-lg max-h-[90vh] rounded-2xl   text-left shadow-xl transition-all flex flex-col gap-5 overflow-y-auto p-3' >
                        <button 
                        className='absolute top-2 right-2 z-10 w-fit p-2 bg-white rounded-full'
                        onClick={()=>setModalOpen(false)}>
                        <Image
                        src='/close.svg'
                        alt='close button'
                        width={20}
                        height={20}
                        className='object-contain'
                        />
                        </button>
                        <div className="flex flex-1 flex-col gap-3">
                            <div className="relative w-full h-48 bg-pattern bg-cover bg-center rounded-lg">
                                <Image src='/hero.png' alt='car model' fill objectFit="contain" />
                            </div>
                            <div className="flex gap-3">
                                <div className="flex-1 relative  h-24 bg-primary-blue-100 rounded-lg">
                                <Image src='/hero.png' alt='car model' fill objectFit="contain" />
                                </div>
                                <div className="flex-1 relative  h-24 bg-primary-blue-100 rounded-lg">
                                <Image src='/hero.png' alt='car model' fill objectFit="contain" />
                                </div>
                                <div className="flex-1 relative  h-24 bg-primary-blue-100 rounded-lg">
                                <Image src='/hero.png' alt='car model' fill objectFit="contain" />
                                </div>
                            </div>
                            <div className="flex-1 flex flex-col gap-2">
                                <h2 className=" font-semibold text-xl capitalize">{car.make} {car.model}</h2>
                                <div className="mt-3 flex-col flex gap-4">
                                    {Object.entries(car).map(item=>(
                                    <div className="flex justify-between items-center my-2"key={item[1]}>
                                        <h4 className="text-grey capitalize">{item[0].replaceAll('_',' ')}</h4>
                                        <p className="text-black-100 font-semibold">{item[1]}</p>
                                    </div>
                                    ))}
                                    
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    </>) 
}
