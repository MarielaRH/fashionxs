import ProductCard from "@/components/ProductCard";
import { CartContext } from "@/context/cartContext";
import { Product } from "@/utils/interfaces/products";
import { useContext } from "react";

const Cart = () => {
  const { cart, addToCart } = useContext(CartContext);
  const createKey = () => {
    const key = new Date();
    const random = Math.random();
    return `${key.getMilliseconds()}_${random}`;
  };
  return (
    <div className="p-5 minHeight bg-2">
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-5 pt-[70px]">
        {cart
          ? cart.map((product: Product) => {
              return (
                <ProductCard
                  key={createKey()}
                  product={product}
                  category={null}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Cart;
