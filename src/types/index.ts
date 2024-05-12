import { Dispatch, MouseEventHandler, SetStateAction } from "react";

export type ButtonProps = {
  title: string;
  btnType?: "button" | "submit" | "reset" | undefined;
  styles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
};

export type CustomInputProps = {
  manufacturer: string;
  setManufacturer: Dispatch<SetStateAction<string>>;
  errorInInput: boolean;
};

export interface Car {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
