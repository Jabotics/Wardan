// import { StaticImageData } from "next/image";

export interface Items {
  imageSrc: string;
  backImageSrc: string;
  title: string;
  heading(): string;
  description: string;
  description1: string;
  sizes: string[];
}