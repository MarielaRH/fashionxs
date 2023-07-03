import {
  ArrowOutward,
  Delete,
  ShoppingCart,
  StarRounded,
  TurnedInNot,
} from "@mui/icons-material";
import Image from "next/image";
import TooltipIcon from "./TooltipIcon";
import { Product } from "@/utils/interfaces/products";
import styles from "@/styles/components/Category.module.css";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useContext } from "react";
import { CartContext } from "@/context/cartContext";

const ProductCard = ({
  product,
  category,
}: {
  product: Product;
  category?: string | null;
}) => {
  const { error, isLoading, user } = useUser();
  const { cart, addToCart } = useContext(CartContext);

  const addProductToCart = (product: Product) => {
    addToCart(product);
  };

  return (
    <div
      className={
        styles.box_shadow +
        " bg-neutral-900  m-2 max-h-full text-white flex flex-col justify-between rounded-md"
      }
    >
      <div className=" min-h-[320px] bg-white flex justify-center items-center rounded-t-md">
        <Image
          src={product.image}
          alt="Image Product"
          height={200}
          width={200}
          priority
          style={{ maxHeight: "300px", width: "auto" }}
        />
      </div>

      <div className="py-3 px-5 flex flex-col justify-between h-full">
        <section className="flex items-center justify-between">
          <div className="flex items-center gap-1 ">
            <p className="font-semibold">{product.rating.rate}</p>
            <StarRounded style={{ color: "#f6ab3b" }} />
          </div>
          <div className="flex gap-1">
            {user && category && (
              <TooltipIcon
                title="Agregrar a favoritos"
                redirectPath={product.id}
                category={category}
              >
                <TurnedInNot className="text-white" />
              </TooltipIcon>
            )}

            {category && (
              <TooltipIcon
                title="Ver detalle"
                redirectPath={product.id}
                category={category}
              >
                <ArrowOutward className="text-white" />
              </TooltipIcon>
            )}
          </div>
        </section>

        <div className="flex justify-center items-center gap-1 font-semibold">
          <p className="text-md font-light">$</p>
          <p className="text-2xl">{product.price}</p>
        </div>
        <p className="font-thin flex items-center justify-center text-center p-3 h-auto">
          {product.title}
        </p>

        {user && category && (
          <div
            className="flex gap-2 font-medium items-center justify-center p-[12px] rounded-sm hover:scale-95 hover:cursor-pointer transition-all duration-300 bg-neutral-500/20 text-white"
            onClick={() => addProductToCart(product)}
          >
            <ShoppingCart className="text-xl" />
            <span>Add to card</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
