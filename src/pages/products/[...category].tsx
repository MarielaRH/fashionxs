import Loader from "@/components/Loader";
import { Product } from "@/utils/interfaces/products";
import { StarRounded } from "@mui/icons-material";
import { url } from "inspector";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((resp) => resp.json());

type ResponseType = {
  product: Product;
  status_code: string;
  messahe: string;
};

const ProductDetail = () => {
  const router = useRouter();
  const [productId, setProductId] = useState<string | null>(null);
  const [category, setCategory] = useState<string | null>(null);

  const { data, isLoading }: { data: ResponseType; isLoading: boolean } =
    useSWR(
      productId && category ? `/api/products/${category}/${productId}` : null,
      fetcher
    );

  useEffect(() => {
    if (router.isReady) {
      setCategory(router.query.category ? router.query.category[0] : null);
      setProductId(router.query.category ? router.query.category[1] : null);
    }
    return () => {
      setCategory(null);
      setProductId(null);
    };
  }, [router]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div
      className=" bg-red-200 grid grid-cols-1 md:grid-cols-2 "
      style={{ minHeight: "calc(100vh - 70px)" }}
    >
      {data && (
        <>
          <div className="pt-[70px] bg-white  h-full flex justify-center items-center">
            <div className="p-32">
              <Image
                alt="product_image"
                src={data.product.image}
                height={400}
                width={300}
                style={{ maxWidth: "400px" }}
              ></Image>
            </div>
          </div>

          <div className="p-[70px] h-full bg-red-600 flex flex-col items-center justify-center">
            <p className="text-3xl font-light pb-10">{data.product.title}</p>

            <p className="text-base font-extralight">
              {data.product.description}
            </p>

            <div className="flex items-center gap-1 ">
              <p className="font-semibold">{data.product.rating.rate}</p>
              <StarRounded style={{ color: "#f6ab3b" }} />
            </div>

            <div className="flex justify-center items-center gap-1 font-semibold">
              <p className="text-md font-light">$</p>
              <p className="text-2xl"> {data.product.price}</p>
            </div>
            {data.product.category}
          </div>
        </>
      )}
    </div>
  );
};
export default ProductDetail;
