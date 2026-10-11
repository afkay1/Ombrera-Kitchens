export type Lang = "en" | "ar";

export interface L {
  en: string;
  ar: string;
}

export const l = (en: string, ar: string): L => ({ en, ar });

export interface Img {
  src: string;
  alt: L;
}

export const img = (name: string, alt: L): Img => ({ src: `/images/${name}.webp`, alt });

export interface KitchenStyle {
  slug: string;
  number: string;
  name: L;
  tagline: L;
  intro: L;
  story: L[];
  palette: L[];
  features: { title: L; text: L }[];
  bestFor: L;
  light: boolean;
  hero: Img;
  wide: Img;
  details: [Img, Img];
}

export interface Layout {
  slug: string;
  name: L;
  text: L;
  bestFor: L;
  size: L;
  pros: L[];
  image: Img;
  plan: { walls: string; units: { x: number; y: number; w: number; h: number; island?: boolean }[] };
}

export interface Finish {
  slug: string;
  name: L;
  text: L;
  image: Img;
  swatch: Img;
}

export interface Material {
  slug: string;
  name: L;
  family: L;
  text: L;
  image: Img;
}

export interface Project {
  slug: string;
  name: L;
  location: L;
  type: L;
  year: string;
  size: string;
  style: string;
  summary: L;
  story: L[];
  facts: { label: L; value: L }[];
  hero: Img;
  wide: Img[];
  details: Img[];
  before?: Img;
  after?: Img;
}
