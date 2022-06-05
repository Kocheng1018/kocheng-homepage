import React from "react";
import Image from "next/image"

const IconFrame = ({alt, path}: {alt: string, path: string}) => {
  const square: number = 24
  return (
      <>
        <Image alt={alt} src={path} width={square} height={square}/>
      </>
  )
}

const Email = () => {
  return (
    <a
      className="flex justify-center items-center gap-2" 
      href="mailto: devil871018@gmail.com"
      rel="noreferrer noopener"
      target="_blank"
    >
      <IconFrame alt="Email" path="/icon/mail.png" />
      <span>devil871018@gmail.com</span>
    </a>
  )
}

const LinkedIn = () => {
  return (
    <a
      className="flex justify-center items-center gap-2"
      href="https://www.linkedin.com/in/kocheng-hsiao-2060141b2"
      rel="noreferrer noopener"
      target="_blank"
    >
      <IconFrame alt="LinkedIn" path="/icon/linkedin.png" />
      <span>Kocheng Hsiao</span>
    </a>
  )
}

const GitHub = () => {
  return (
    <a
      className="flex justify-center items-center gap-2"
      href="https://github.com/Kocheng1018"
      rel="noreferrer noopener"
      target="_blank"
    >
      <IconFrame alt="GitHub" path="/icon/github.png" />
      <span>Kocheng1018</span>
    </a>
  )
}

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="w-full flex justify-around items-center">
        <Email />
        <LinkedIn />
        <GitHub />
      </div>
      <h6> © 2022 Yun-Yang Hsiao All Rights Reserved.</h6>
    </div>
  )
}
export default Footer