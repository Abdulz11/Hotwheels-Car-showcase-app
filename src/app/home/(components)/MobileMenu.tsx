'use client'

import { AnimatePresence } from "motion/react";
import { motion} from 'framer-motion';
import { Dispatch, SetStateAction } from "react";

export default function MobileMenu(prop:{isMenuOpen:boolean,setIsMenuOpen:Dispatch<SetStateAction<boolean>>}) {

   const  {isMenuOpen,setIsMenuOpen} = prop
    const tabs = ["Model","Pricing","About Us",'Contact Us','Custom Models']

    return(
    <AnimatePresence>
       {isMenuOpen && <motion.div
       initial={{ opacity: 0, y: -20 }} 
       animate={{ opacity: 1, y: 0 }} 
       exit={{ opacity: 0, y: 20 }} 
       transition={{ duration: 0.3, ease: "easeInOut" }} 
        className="fixed inset-0 bg-black bg-opacity-[0.93] flex flex-col justify-center items-center z-50 text-white text-3xl"
        onClick={() => setIsMenuOpen(false)} 
        >
        {/* Close button */}
        <button 
            className="absolute top-5 right-5 text-4xl" 
            onClick={() => setIsMenuOpen(false)}
        >
            ✖
        </button>
    
        {/* Menu Items */}
        {tabs.map((tab) => (
            <button 
            key={tab} 
            className="py-3 text-2xl" 
            onClick={() => {setIsMenuOpen(false); }}
            >
            {tab}
            </button>
        ))}
        </motion.div>}
    </AnimatePresence>
    )
}
