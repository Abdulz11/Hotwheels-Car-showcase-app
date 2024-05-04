'use client'
import { MouseEventHandler } from "react";

type ButtonProps={
  title:string ;
  styles?:string;
  handleClick?:MouseEventHandler<HTMLButtonElement>;
}

export default function CustomButton(props:ButtonProps) {
  return (
    <>
    <button
    disabled={false}
    type='button'
    className={`custom-btn ${props.styles}`}
    onClick={props.handleClick}
    >
    <span className={`flex-1`}>
      {props.title}
    </span>
    </button>
    </>
  )
}
