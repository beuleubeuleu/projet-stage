export type productType = {
  _id: string;
  name: string;
  description: string;
  richDescription: string;
  image: string;
  images: string[];
  brand: string;
  price: number;
  category: {
    _id: string;
    name: string;
    color: string;
    icon: string;
    image: string;
    __v: number;
  };
  countInStock: number;
  rating: number;
  numReviews: number;
  isFeatured: boolean;
  dateCreated: string;
  __v: number;
}
