import Image from 'next/image'
import Link from 'next/link'
import CustomButton from './CustomButton'

function Navbar() {
  return ( 
    <nav className='w-screen z-10  '>
        <div className='max-w-[90%] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 z-10 '>
              <h1 className='font-extrabold text-[26px] '>
                <Link href='/'>Hot-Wheels</Link>
              </h1>
            <CustomButton  
           title='Sign-in'
           styles='font-bold rounded-full bg-white min-w-[130px]'
           />
        </div>
    </nav>
    
  )
}

export default Navbar