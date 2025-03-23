import Image from "next/image"
import Link from "next/link"


export default function AiCard(prop:{label:string,content:string,image:string}) {

  return (
    <>
    <div className="flex flex-col items-center md:flex-row space-y-4 md:space-y-0 justify-between min-w-[300px] lg:min-w-[900px] md:min-w-[700px] md:h-[500px] md:pt-5 md:px-10 px-2  rounded-md  bg-[#F6FAF3] overflow-hidden">
        <div className="flex flex-col gap-[20px] md:self-center items-center   justify-between w-[90%] space-y-1 md:space-y-0 md:w-[40%] pt-2  ">
            <h3 className="text-xl mb-2 font-semibold text-[#828282] ">{prop.label}</h3>
            <p className=" text-md md:text-[42px] text-center md:text-left text-[#22263F] font-['Figtree'] leading-[100%] font-semibold">{prop.content}</p>
            <button className="mt-4  py-2 bg-[#03217F] text-white rounded-md transition w-full md:w-[113px]">Learn More</button>
        </div>
        <div className="relative md:w-[70%] w-[100%] h-[100px] md:-mx-56  md:h-[500px] sm:h-50">
        <Image src={prop.image} alt={prop.label} layout="fill" style={{ objectFit: 'cover' }}className="rounded-lg" />
        </div>
    </div>
    </>
    
  )
}
