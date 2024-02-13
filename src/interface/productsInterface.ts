export interface Product {
  id: number;
  slug: string;
  name: string;
  model: string;
  image: Image;
  category: string;
  categoryImage: Image;
  isNew: boolean;
  price: number;
  description: string;
  features: string;
  includes: AdditionalInfo[];
  gallery: Gallery;
  otherProducts: OtherProduct[];
}

export interface AdditionalInfo {
  quantity: number;
  item: string;
}

export interface Gallery {
  first: Image;
  second: Image;
  third: Image;
}

export interface OtherProduct {
  slug: string;
  name: string;
  image: Image;
}

export interface Image {
  mobile: string;
  tablet: string;
  desktop: string;
}
