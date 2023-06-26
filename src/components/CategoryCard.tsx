import { CategoriesType } from "@/utils/constants/categories";
import Button from "./Button";
import { useRouter } from "next/router";

const CategoryCard = ({ category }: { category: CategoriesType }) => {
  const router = useRouter();

  //Redirects to a specific page
  const handlerClick = () => {
    router.push(`/products/${category.path}`);
  };

  // Prints a card of a category
  return (
    <div
      className="group bg-cover text-white hover:cursor-pointer transition-all duration-300 hover:scale-95 min-h-[600px] sm:min-h-[600px] md:min-h-[500px]  h-full"
      style={{
        backgroundImage: `url(${category.image})`,
        backgroundPosition: "center",
      }}
    >
      <span className="hidden group-hover:flex flex-col justify-center items-center h-full w-auto group-hover:bg-black/40">
        <p className="text-2xl font-semibold pb-10 text-center">
          {category.title.toUpperCase()}
        </p>
        <Button label="shop now" handler={handlerClick} />
      </span>
    </div>
  );
};

export default CategoryCard;
