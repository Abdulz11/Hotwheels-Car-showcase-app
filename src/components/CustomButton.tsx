'use client'
import { ButtonProps } from "@/types";

export default function CustomButton(props:ButtonProps) {
  return (
    <>
    <button
    disabled={false}
    type={props.btnType}
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
