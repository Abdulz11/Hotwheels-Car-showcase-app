'use client'

import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { useState } from "react";


export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
            <Link href="/" className="text-2xl font-bold">
              <Image src="/AIPICS/main logo.png" alt="Brand Logo" width={40} height={40} />
            </Link>
            <ul className="hidden lg:flex space-x-6 font-['Figtree']">
              <li><Link href="/models" className="hover:text-gray-300">Models</Link></li>
              <li><Link href="/pricing" className="hover:text-gray-300">Pricing</Link></li>
              <li><Link href="/about" className="hover:text-gray-300">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300">Contact Us</Link></li>
              <li><Link href="/custom-models" className="hover:text-gray-300">Custom Models</Link></li>
            </ul>
            <div className="flex justify-between gap-6 md:gap-14 cursor-pointer ">
                <div className="flex">
                <Link href="/login" className="mr-4 border border-white px-4 py-2 rounded-md">Login</Link>
                <Link href="/get-started" className="bg-white text-[#05152C] px-2 md:px-4 py-2 rounded-md font-medium text-sm">Get Started Now</Link>
                </div>
                <MobileMenu setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen}/>
            </div>
            <div onClick={()=>setIsMenuOpen(true)} className="lg:hidden">
                <Image alt="hamburger-menu" width={40} height={40}src='/AIPICS/burger-menu-svgrepo-com.svg'></Image>
            </div>
          </nav>
  )
}
