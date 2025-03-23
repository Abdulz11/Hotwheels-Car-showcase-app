'use client'
// import Head from "next/head";
import Link from "next/link";
import AiCard from "./(components)/AiCard";
import Slider from "./(components)/Slider";
import Image from "next/image";
import MobileMenu from "./(components)/MobileMenu";
import Nav from "./(components)/Nav";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <div>
      <div className=" min-h-screen w-screen">
        {/* Navbar */}
        <div className="bg-gradient-to-b from-black to-blue-900   text-white min-h-[630px] ">
          <Nav />
          {/* Hero Section */}
          <header className="text-center py-20 px-6 w-[60%]  mx-auto space-y-16 md:space-y-14 ">
            <p className="sm:font-bold font-medium sm:text-base text-sm font-['Plus Jakarta Sans'] text-center w-full text-[#7191FF]">Leverage on Automation</p>
            <h1 className=" md:w-auto text-3xl md:text-6xl lg:text-7xl font-bold leading-['80px'] ">
              AI Models for Business Solutions
            </h1>
            <p className="text-lg text-gray-300 mt-4">
              Leverage AI to automate, analyze, and optimize your workflows.
            </p>
            <Link href="/get-started" className="mt-2  md:mt-6 inline-block bg-white md:px-6 py-3 px-3 rounded-md text-[#05152C] font-semibold sm:text-xl text-sm">
              Get Started Now
            </Link>
          </header>
        </div>

        {/* Company Logos */}
        <section className="flex flex-col items-center justify-center gap-y-10 md:space-y-0 py-10">
            <div>
              <p className="text-[#667085] font-['Plus Jakarta Sans']" >Join 4,000+ companies already growing</p>
            </div>
            <div className="overflow-x-hidden min-w-screen ">
              <Image alt='company logos' src="/AIPICS/company Logos.png" width={1540} height={50}/>
            </div>
        </section>
        {/* hero section 2 */}
        <div className="flex flex-col items-center gap-y-8 md:gap-y-16  my-24 px-14">
          <div className=''>
            <motion.h1
               initial={{ opacity:0,y:40}}
               whileInView={{opacity:1,y:0}}  
              transition={{duration:0.5}}
              viewport={{ once: true,amount:1 }} 
              className="text-[#22263F] font-semibold text-3xl md:text-5xl max-w-2xl text-center">AI Models tailored for your business needs
            </motion.h1>
          </div>
          <div className="">
            <motion.p 
              initial={{ opacity:0,y:40}}
              whileInView={{opacity:1,y:0}} 
              transition={{duration:0.5,delay:1}}
              viewport={{ once: true,amount:1 }}
              className=" text-xl leading-7 text-[#828282] font-medium max-w-2xl md:max-w-4xl text-center ">Leverage the power of AI to automate, analyze, and optimize your workflows. Our specialized models are designed to fit different business needs
            </motion.p>
          </div>
        </div>

        {/* Features Section */}
        <section className="py-16 my-16">
          {/* <AiCard/> */}
          <Slider />
        </section>

        {/* Footer */}
        <footer className="text-center py-6 bg-black text-gray-400">
          &copy; 2024 AI Solutions. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

