import React, { FC } from "react"
import NextImage, { ImageProps } from "next/image"

export interface ImgProps {
  src: string,
  alt: string,
  layout?: "fixed" | "intrinsic" | "responsive" | "fill",
  width?: number,
  height?: number,
}

export const Image: FC<ImgProps> = ({
  width,
  height,
  src,
  alt,
}) => {
  return (
    !!width && !!height
      ? <NextImage src={src} width={width} height={height} alt={alt} />
      : <NextImage layout="fill" src={src} alt={alt} />
  )
}

export default Image
