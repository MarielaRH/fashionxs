import { Inter } from "next/font/google";
import { CATEGORIES } from "@/utils/constants/categories";
import CategoryCard from "@/components/CategoryCard";
import Button from "@/components/Button";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {

  return (
    <>
      {/* LANDING SECTION */}
      <section className="landing  h-screen" id="landing">
        <div className="bg-black/30 h-full w-full flex flex-col justify-center items-center text-white">
          <p className=" text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold">
            FASHIONXS
          </p>
          <p className="text-xl">Find your own style here!</p>
          <a className="p-10" href="#categories">
            <Button label="explore categories" />
          </a>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section
        className="bg-gray-400 flex flex-col h-screen"
        id="categories"
      >
        <div className="pt-28 flex items-center justify-center text-4xl font-extrabold  text-white ">
          CATEGORIES
        </div>

        <div
          className="grid py-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
          style={{ minHeight: "calc(100vh - 200px)" }}
        >
          {CATEGORIES.map((category) => (
            <CategoryCard category={category} key={category.id} />
          ))}
        </div>
      </section>
    </>
  );
}
