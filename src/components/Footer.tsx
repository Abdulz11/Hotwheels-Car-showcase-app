import Image from "next/image"
import { FooterLinks } from "@/constants/constants"
import Link from "next/link"


function Footer() {
    
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
        <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
            <div className="flex flex-col flex-wrap justify-start items-start gap-6">
                <Image src='/logo.svg' alt='logo' width={118} height={18}
                className="object-contain"
                />
                <p className="text-base font-semibold text-gray-700">
                   Hot-Wheels 2023<br/>
                    All rights reserved
                    &copy;
                </p>
            </div>
            {/* links */}
            <div className="footer__links">
                {FooterLinks.map((linkCategory)=>{
                    return(
                    <div key={linkCategory.title} className="footer__link">
                        <h3 className="font-bold">{linkCategory.title}</h3>
                       {linkCategory.links.map(link=><Link key={link.title} href={link.url} className="text-gray-500">{link.title}</Link>)}
                     </div>
                     )
                    })
                }
            </div>
        </div>
        <div className=" flex justify-between items-center text-gray-700 mt-10 flex-wrap border-t border-gray-100 sm:px-5 px-6 py-19 max-w-[90%] max-md:flex-col max-md:gap-5">
            <h3 className="font-medium">@2023Hot-Wheels.All rights reserved</h3>
            <div className=' footer__copyrights-link text-gray-500'>
            <Link href='/'>Privacy & Policy</Link>
            <Link href='/'>Terms and Conditions</Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer