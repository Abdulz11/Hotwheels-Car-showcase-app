import CarCard from "@/components/CarCard"
import CustomFilter from "@/components/CustomFilter"
import Hero from "@/components/Hero"
import SearchBar from "@/components/SearchBar"
import StartPage from "@/components/StartPage"
import { fuelType, yearOfProduction } from "@/constants/constants"
import { getCars, getSearchUrl } from "@/utilies/utility"

type HomeSearchParams = {
  manufacturer?: string,
  model?:string,
  year?:string,
  fuel_type?:string

}

export  default async function Home({searchParams}: { searchParams:HomeSearchParams}) { 
  const {manufacturer,model,year,fuel_type} = searchParams 
  // console.log(getSearchUrl(manufacturer,model,year,fuel_type))
  let allCars = await getCars(manufacturer,model,year,fuel_type)
  // console.log(allCars)
  const isDataEmpty = allCars.length === 0 || !Array.isArray(allCars) 



  return (
    <div>
      {/* <StartPage/> */}
      <Hero/>
      <div className="mt-12 padding-x padding-y max-width flex flex-col items-center gap-4 " id='discover'>
        <h1 className="text-4xl font-extrabold" >Car Catalogue</h1>
        <p className="font-semibold text-lg">Expore the cars you want</p>
      </div>
      <div className="home__filters ">
        <SearchBar/>
        <div className="max-sm:w-full px-5 flex justify-between flex-wrap gap-7 ">
          <CustomFilter options={yearOfProduction} title="Year"/>
          <CustomFilter options={fuelType} title='Fuel'/>
        </div>
      </div>
      {/* Car display area */}
        {!isDataEmpty ?
          (<section>
            <div className="home__cars-wrapper px-3">
              {allCars.map(car=><CarCard key={car.model} car={car}/>)}
            </div>
          </section>
        ) :
          <div className="home__error-container">
            <h2 className="text-2xl text-black font-bold">Oops..No cars were found.</h2>
            <p className='text-lg font-medium'>Try another search or filter</p>
          </div>
        }
    </div>
  )
}


