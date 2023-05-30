import { Inter } from "next/font/google";
import { CATEGORIES } from "@/utils/constants/categories";
import CategoryCard from "@/components/CategoryCard";
import Button from "@/components/Button";
import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from "@mui/icons-material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* LANDING SECTION */}
      <section className="landing h-screen" id="landing">
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
        className="bg-zinc-700 flex flex-col min-h-[100vh]"
        id="categories"
      >
        <div className="h-28 flex items-center justify-center text-3xl font-extrabold  text-white ">
          CATEGORIES
        </div>

        <div
          className="grid pb-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
          style={{ minHeight: "calc(100vh - 224px)" }}
        >
          {CATEGORIES.map((category) => (
            <CategoryCard category={category} key={category.id} />
          ))}
        </div>

        <div className="flex flex-col justify-start items-center h-28">
          <a
            className="group flex flex-col justify-center items-center"
            href="#trending"
          >
            <Button label="explore trending" />
            <span className="hidden group-hover:flex">
              <KeyboardArrowDownRounded
                sx={{ height: 30, width: 30, color: "white" }}
              />
            </span>
          </a>
        </div>
      </section>

      {/* TRENDING SECTION */}

      <section
        id="trending"
        className="bg-gray-400 flex flex-col justify-center h-screen"
      >
        <p className="text-2xl text-white text-center">TRENDING SECTION</p>
        <div className="w-full flex justify-center items-center">
          <a
            className="p-10 hover:pt-[10px] group flex flex-col justify-center items-center"
            href="#categories"
          >
            <span className="hidden group-hover:flex">
              <KeyboardArrowUpRounded
                sx={{ height: 30, width: 30, color: "white" }}
              />
            </span>
            <Button label="back to categories" />
          </a>

          <a
            className="p-10 hover:pt-[10px] group flex flex-col justify-center items-center"
            href="#landing"
          >
            <span className="hidden group-hover:flex">
              <KeyboardArrowUpRounded
                sx={{ height: 30, width: 30, color: "white" }}
              />
            </span>
            <Button label="back to home" />
          </a>
        </div>
      </section>
    </>
  );
}
