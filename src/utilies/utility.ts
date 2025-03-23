import { Car } from "@/types";

// HEADERS FOR API
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3db4f102a7msh5ae292808434471p10ae3fjsn6eba5f57c21d",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

// UTILITY FUNCTIONS
export function whatDrive(drive: string) {
  let result = "";
  switch (drive) {
    case "fwd":
      result = "Front-wheel drive";
      break;
    case "rwd":
      result = "Rear-wheel drive";
      break;
    case "awd":
      result = "All-wheel drive";
      break;
    case "rwd":
      result = "Rear-wheel drive";
      break;
  }
  return result;
}

export function getSearchUrl(
  make?: string,
  model?: string,
  year?: string,
  fuel?: string
) {
  let searchUrl = new URL("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars");
  searchUrl.searchParams.set("make", make ? make : "");
  searchUrl.searchParams.set("model", model ? model : "");
  searchUrl.searchParams.set("year", year ? year : "2023");
  searchUrl.searchParams.set("fuel_type", fuel ? fuel : "");
  searchUrl.searchParams.set("limit", "20");
  return `${searchUrl}`;
}

export async function getCars(
  manufacturer?: string,
  model?: string,
  year?: string,
  fuel?: string
): Promise<Car[] | []> {
  const url = getSearchUrl(manufacturer, model, year, fuel);
  // const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla&year=2023&limit=5`;
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return [];
    // if (error && typeof error === "object" && "message" in error)
    //   console.error(error.message);
    // throw new Error();
  }
}

export const generateImage = (car: Car, angle?: string) => {
  const { make, model, year } = car;
  let url = new URL("https://cdn.imagin.studio/getimage");
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("modelYear", String(year));
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("make", make);
  url.searchParams.append("angle", `${angle}`);
  return `${url}`;
};

// fetch sneakers
async function trySneakers() {
  const sneakersUrl =
    "https://the-sneaker-database-api-your-ultimate-sneaker-encyclopedia.p.rapidapi.com/search?query=Adidas%20Forum";
  const SneakersOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "3db4f102a7msh5ae292808434471p10ae3fjsn6eba5f57c21d",
      "X-RapidAPI-Host":
        "the-sneaker-database-api-your-ultimate-sneaker-encyclopedia.p.rapidapi.com",
    },
  };
  try {
    const fetchSneakers = await fetch(sneakersUrl, SneakersOptions);
    const sneakers = await fetchSneakers.json();
    console.log(sneakers);
  } catch (error) {
    console.error(error);
  }
}

// trySneakers()
// custom hook
