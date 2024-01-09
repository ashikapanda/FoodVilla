import { useDispatch, useSelector } from "react-redux";
import { addToCart, addNewCart } from "../ReduxStore/slices/cartSlice";
import { FOOD_IMG_URL } from "../common/constants";
import { useState } from "react";

const MenuList = ({ item, isCat, resturantId }) => {
  const [hideMenu, setHideMenu] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);
  console.log("Cart", cart);
  const addItemToCart = (item) => {
    if (cart.items.length > 0 && cart.resturantId !== resturantId) {
      alert("Your cart items from other resturant are removed");
      dispatch(addNewCart());
      dispatch(addToCart({ item, resturantId }));
    } else {
      dispatch(addToCart({ item, resturantId }));
    }
  };

  const renderButtonValue = (curItem) => {
    const existingItem = cart.items.find((item) => item.id === curItem.id);
    return !existingItem ? "ADD" : existingItem.count;
  };
  const catOrMenuMap = isCat ? item?.itemCards : item?.card?.card?.itemCards;

  return (
    <>
      <div className="food-item" key={item?.title}>
        <div className="font-semibold text-xl flex justify-between mb-3">
          <p>
            {isCat
              ? `${item?.title} (${catOrMenuMap.length})`
              : `${item?.card?.card?.title} (${catOrMenuMap.length})`}
          </p>
          <button onClick={() => setHideMenu(!hideMenu)}>🔻</button>
        </div>
        {!hideMenu && (
          <ul>
            {catOrMenuMap.map((cardItem) => (
              <div
                className="food-detail"
                style={{
                  padding: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
                key={cardItem?.card?.info?.id}
              >
                <div>
                  <li>
                    <p className="text-yellow-500 font-medium">
                      {cardItem?.card?.info?.isBestseller && "⭐Bestseller"}
                    </p>
                    <p>
                      {cardItem?.card?.info?.name}
                      <span style={{ paddingLeft: "5px" }}>
                        {cardItem?.card?.info?.itemAttribute?.vegClassifier ===
                        "NONVEG"
                          ? "🔴"
                          : "🟢"}
                      </span>
                    </p>
                  </li>
                  <p>
                    &#x20B9;
                    {cardItem?.card?.info?.price
                      ? Math.floor(cardItem?.card?.info?.price / 100)
                      : Math.floor(cardItem?.card?.info?.defaultPrice / 100)}
                  </p>
                </div>
                <div className="text-center">
                  <img
                    src={FOOD_IMG_URL + cardItem?.card?.info?.imageId}
                    alt="food-item"
                    onError={(e) => (e.target.style.display = "none")}
                    style={{
                      maxWidth: "100px",
                      maxHeight: "auto",
                    }}
                  />
                  <button
                    className="bg-white mt-1 hover:bg-gray-100 text-gray-900 font-semibold py-2 px-4 border border-gray-400 rounded"
                    onClick={() => {
                      addItemToCart(cardItem?.card?.info);
                    }}
                  >
                    {renderButtonValue(cardItem?.card?.info)}
                  </button>
                </div>
              </div>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default MenuList;
