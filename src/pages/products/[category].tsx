import Loader from "@/components/Loader";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/utils/interfaces/products";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((resp) => resp.json());

const Category = () => {
  const route = useRouter();
  const [category, setCategory] = useState<string | null>(null);

  const { data, isLoading, error } = useSWR(
    category ? `/api/products/${category}` : null,
    fetcher
  );
  console.log(data);

  useEffect(() => {
    if (route.isReady) {
      setCategory(`${route.query.category}`);
    }
  }, [route]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="p-5 minHeight bg-1">
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 pt-[70px]">
        {data
          ? data.products.map((product: Product) => {
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  category={category}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};
export default Category;
