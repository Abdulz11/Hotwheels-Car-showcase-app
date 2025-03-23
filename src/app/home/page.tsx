
// import Head from "next/head";
import Link from "next/link";
import AiCard from "./(components)/AiCard";
import Slider from "./(components)/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className=" min-h-screen w-screen bg-green-400 md:bg-red-800 lg:bg-purple-700">
        {/* Navbar */}
        <div className="bg-gradient-to-b from-black to-blue-900   text-white min-h-[630px] ">
          <nav className="flex justify-around items-center p-6 max-w-7xl mx-auto">
            <Link href="/" className="text-2xl font-bold">
              <Image src="/AIPICS/main logo.png" alt="Brand Logo" width={40} height={40} />
            </Link>
            <ul className="hidden md:flex space-x-6 font-['Figtree']">
              <li><Link href="/models" className="hover:text-gray-300">Models</Link></li>
              <li><Link href="/pricing" className="hover:text-gray-300">Pricing</Link></li>
              <li><Link href="/about" className="hover:text-gray-300">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300">Contact Us</Link></li>
              <li><Link href="/custom-models" className="hover:text-gray-300">Custom Models</Link></li>
            </ul>
            <div>
              <Link href="/login" className="mr-4 border border-white px-4 py-2 rounded-md">Login</Link>
              <Link href="/get-started" className="bg-white text-[#05152C] px-2 md:px-4 py-2 rounded-md font-medium text-sm">Get Started Now</Link>
            </div>
          </nav>

          {/* Hero Section */}
          <header className="text-center py-20 px-6 w-[60%]  mx-auto space-y-5 ">
            <p className="sm:font-bold font-medium sm:text-base text-sm font-['Plus Jakarta Sans'] text-center w-full text-[#7191FF]">Leverage on Automation</p>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-['80px'] ">
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
        <div className="flex flex-col items-center gap-y-8 md:gap-y-5 border-black border-3 my-24">
          <h1 className="text-[#22263F] font-semibold text-5xl max-w-2xl text-center">AI Models tailored for your business needs</h1>
          <p className="text-xl leading-7 text-[#828282] font-medium max-w-4xl text-center ">Leverage the power of AI to automate, analyze, and optimize your workflows. Our specialized models are designed to fit different business needs</p>
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

