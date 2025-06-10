export interface ProductType {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew: boolean;
  isLimited: boolean;
  rating: number;
  reviews: number;
}

export const products: ProductType[] = [
  {
    id: 1,
    name: "Sonny Angel Animal Series",
    price: 12.99,
    image: "https://i.pinimg.com/736x/d0/c3/66/d0c366dbb152306a6188f87215943012.jpg",
    category: "classic",
    isNew: false,
    isLimited: false,
    rating: 5,
    reviews: 432
  },
  {
    id: 2,
    name: "Sonny Angel Vegetable Serie",
    price: 14.99,
    image: "https://i.pinimg.com/736x/c2/23/a0/c223a00b8e3aebd10b3ba27400ab8b6c.jpg",
    category: "classic",
    isNew: false,
    isLimited: false,
    rating: 4,
    reviews: 287
  },
  {
    id: 3,
    name: "Sonny Angel Fruit Serie",
    price: 14.99,
    image: "https://i.pinimg.com/736x/66/57/dc/6657dce8bdd489b5d4d6a4a8272ce829.jpg",
    category: "classic",
    isNew: false,
    isLimited: false,
    rating: 5,
    reviews: 321
  },

  {
    id: 5,
    name: "Sonny Angel Christmas Series 2025",
    price: 16.99,
    image: "https://kawaii-panda.com/3139/sonny-angel-christmas2015.jpg",
    category: "seasonal",
    isNew: true,
    isLimited: true,
    rating: 5,
    reviews: 147
  },
  {
    id: 6,
    name: "Sonny Angel Halloween Series",
    price: 16.99,
    image: "https://m.media-amazon.com/images/I/41OjkytGOVL.jpg",
    category: "seasonal",
    isNew: false,
    isLimited: true,
    rating: 5,
    reviews: 213
  },
  {
    id: 7,
    name: "Sonny Angel Valentine's Day Series",
    price: 16.99,
    image: "https://cdn11.bigcommerce.com/s-fvv65gjhoq/images/stencil/1200x1200/products/2927/9835/sonnyangel_valentine2018_bb__19261.1516229395.jpg?c=2",
    category: "seasonal",
    isNew: false,
    isLimited: true,
    rating: 4,
    reviews: 178
  },
  {
    id: 8,
    name: "Sonny Angel Artist Collection",
    price: 24.99,
    image: "https://kiyowoskin.com/cdn/shop/files/s-l1600.png?v=1724802613&width=713",
    category: "limited",
    isNew: true,
    isLimited: true,
    rating: 5,
    reviews: 87
  },


];