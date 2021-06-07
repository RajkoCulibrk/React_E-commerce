import { useSelector } from "react-redux";

export default function useCheckIfInCart(id) {
  const { cartItems } = useSelector((state) => state.cart);

  let index = cartItems?.findIndex((ci) => {
    return ci.product.productId == id;
  });

  return index > -1;
}
