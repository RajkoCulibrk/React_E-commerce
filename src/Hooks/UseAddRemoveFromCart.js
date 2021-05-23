import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/Actions/CartActions";
import { addToCartNotLoggedIn } from "../Redux/Slices/CartSlice/CartSlice";

/* custom hook for register user page functionality */
export default function useHandleAddToCart() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  function handleAddToCart(product, ammount) {
    if (user) {
      dispatch(addToCart({ productId: product.productId, ammount }));
    } else {
      dispatch(addToCartNotLoggedIn({ product, ammount }));
    }
  }
  return { handleAddToCart };
}
