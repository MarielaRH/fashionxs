import {
  ArrowOutward,
  ShoppingCart,
  StarRounded,
  TurnedInNot,
} from "@mui/icons-material";
import Image from "next/image";
import TooltipIcon from "./TooltipIcon";
import { Product } from "@/utils/interfaces/products";
import styles from "@/styles/components/Category.module.css";

const ProductCard = ({
  product,
  category,
}: {
  product: Product;
  category: string | null;
}) => {
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
            <TooltipIcon
              title="Agregrar a favoritos"
              redirectPath={product.id}
              category={category}
            >
              <TurnedInNot className="text-white" />
            </TooltipIcon>

            <TooltipIcon
              title="Ver detalle"
              redirectPath={product.id}
              category={category}
            >
              <ArrowOutward className="text-white" />
            </TooltipIcon>
          </div>
        </section>

        <div className="flex justify-center items-center gap-1 font-semibold">
          <p className="text-md font-light">$</p>
          <p className="text-2xl"> {product.price}</p>
        </div>
        <p className="font-thin flex items-center justify-center text-center p-3 h-auto">
          {product.title}
        </p>

        <div className="flex gap-2 font-medium items-center justify-center p-[12px] rounded-sm hover:scale-95 hover:cursor-pointer transition-all duration-300 bg-neutral-500/20 text-white">
          <ShoppingCart className="text-xl" />
          <span>Add to card</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
