import Loader from "@/components/Loader";
import { Product } from "@/utils/interfaces/products";
import {
  ArrowBack,
  BookmarkBorderOutlined,
  ShoppingCart,
  StarRounded,
} from "@mui/icons-material";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import useSWR from "swr";
import CircleButton from "@/components/CircleButton";
import { useUser } from "@auth0/nextjs-auth0/client";
import { CartContext } from "@/context/cartContext";
const fetcher = (url: string) => fetch(url).then((resp) => resp.json());

type ResponseType = {
  product: Product;
  status_code: string;
  messahe: string;
};

const ProductDetail = () => {
  const router = useRouter();
  const { addToCart } = useContext(CartContext);
  const { user } = useUser();
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
  }, [router, category, productId]);

  if (isLoading || !data) {
    return <Loader />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 minHeight">
      {data && data.product && (
        <>
          <div className="pt-[70px]  h-full flex justify-center items-center maxHeight">
            <div className="py-32">
              <Image
                alt="product_image"
                src={data.product.image}
                height={400}
                width={250}
                style={{ maxWidth: "400px" }}
              ></Image>
            </div>
          </div>

          <div className="md:overflow-y-auto md:maxHeight col-span-2 bg-2 md:rounded-l-full">
            <div
              style={{ minHeight: "calc(100vh - 140px)" }}
              className={
                "md:mt-[70px] p-[70px] md:py-[70px] md:pl-[120px] md:pr-[40px] md:overflow-auto  flex flex-col items-center justify-center gap-8 relative bg-slate-300/50"
              }
            >
              <p className="text-3xl font-normal text-center">
                {data.product.title}
              </p>

              <p className="text-base font-light leading-6 tracking-wide text-justify">
                {data.product.description}
              </p>

              <div className="flex  gap-4 w-full">
                <div className="flex items-center justify-center gap-1 border-zinc-400 border text-zinc-500 font-semibold px-3 text-center rounded-2xl">
                  <p className="font-extrabold">{data.product.rating.rate}</p>
                  <StarRounded style={{ color: "#f6ab3b" }} />
                </div>

                <div className=" border-zinc-400 text-zinc-500 font-semibold border px-3 rounded-2xl text-center">
                  {data.product.category}
                </div>
              </div>
              <div className="flex w-full justify-end items-center gap-1 font-extrabold">
                <p className="text-md font-light">$</p>
                <p className="text-4xl"> {data.product.price}</p>
              </div>

              <div className="flex flex-col  sm:flex-row w-full justify-end items-end gap-5">
                <CircleButton
                  label="Back"
                  handler={() => router.push(`/products/${category}`)}
                >
                  <ArrowBack className="text-xl" />
                </CircleButton>

                {user && (
                  <>
                    <CircleButton
                      label="Buy now"
                      handler={() => addToCart(data.product)}
                    >
                      <ShoppingCart className="text-xl" />
                    </CircleButton>
                    <CircleButton label="Save" handler={() => {}}>
                      <BookmarkBorderOutlined className="text-xl" />
                    </CircleButton>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default ProductDetail;
