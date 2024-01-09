//clicking on add button dispatches and action that calls a funtion known as reducers which updates the slice of the store.
// We cannot directly modify the store.
import { FOOD_IMG_URL } from "../common/constants";
import { useDispatch, useSelector } from "react-redux";
import { resetCart } from "../ReduxStore/slices/cartSlice";
import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  console.log("cartItems", cartItems);
  const clearCartItems = () => {
    dispatch(resetCart());
  };
  const incrementCount = (e) => {
    console.log("eve");
  };
  return (
    <div className="bg-orange-50 m-3 text-center">
      <h3 className="text-red-900  p-2">Your Food Cart</h3>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div
            className="flex justify-between m-2 p-4 border-b-2 border-gray-300"
            key={item.id}
          >
            <div className=" items-center ">
              <img
                className="max-w-28"
                src={FOOD_IMG_URL + item?.imageId}
                alt="food-item"
                onError={(e) => (e.target.style.display = "none")}
              />
              <span className="text-base font-semibold">
                {item?.itemAttribute?.vegClassifier === "NONVEG" ? "🔴" : "🟢"}
                {item?.name}
              </span>
            </div>

            <div className="text-lg">
              &#x20B9;
              {item?.price
                ? Math.floor(item?.price / 100)
                : Math.floor(item?.defaultPrice / 100)}
              <div className="mt-2">
                <AddToCartButton item={item} />
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className=" pb-3">
          <p className=" font-medium text-xl p-2">
            Your cart is empty. Add items to proceed!
          </p>
          <Link to="/">Resturants Near you</Link>
        </div>
      )}
      {cartItems.length > 0 && (
        <button
          className="bg-orange-200 m-2 hover:bg-orange-300 text-gray-900 font-semibold py-2 px-4 border border-gray-400 rounded"
          onClick={() => {
            clearCartItems();
          }}
        >
          Clear cart
        </button>
      )}
    </div>
  );
};

export default Cart;
