
export type CategoriesType = {
  id: string;
  title: string;
  path: string;
  image: string;
};

export const CATEGORIES: CategoriesType[] = [
    {
      id: "women_fxs",
      title: "Women's clothing",
      path: 'women',
      image: "/images/women.jpeg",
    },
    {
      id: "men_fxs",
      title: "Men's clothing",
      path: 'men',
      image: "/images/men.jpeg",
    },
  {
    id: "electronics_fxs",
    title: "Electronics",
    path: 'electronics',
    image: "/images/electronics.jpeg",
  },
  {
    id: "jewelry_fxs",
    title: "Jewelry",
    path: 'jewelry',
    image: "/images/jewelry.jpeg",
  },
];
