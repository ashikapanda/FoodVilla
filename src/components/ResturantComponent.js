import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../utils/utility";
import { FOOD_IMG_URL, RES_MENU_API } from "../common/constants";
import LoaderComponent from "./LoaderComponent";
import MenuList from "./MenuList";
import CategoryList from "./CategoryList";

const ResturantComponent = (props) => {
  const [resData, setResData] = useState(null);
  const [menulist, setMenulist] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetchData(RES_MENU_API + params.resId).then((res) => {
      console.log("response", res);
      setResData(res?.data?.cards[0]?.card?.card?.info);
      setMenulist(
        res?.data?.cards
          .filter((item) => {
            return item.groupedCard;
          })[0]
          .groupedCard?.cardGroupMap?.REGULAR?.cards.filter((list) => {
            return list?.card?.card?.itemCards;
          })
      );
      setCategoryList(
        res?.data?.cards
          .filter((item) => {
            return item.groupedCard;
          })[0]
          .groupedCard?.cardGroupMap?.REGULAR?.cards.filter((list) => {
            return list?.card?.card?.categories;
          })
      );
    });
  }, []);
  console.log("resData", resData);
  console.log("menuList", menulist);
  if (!resData || !menulist) {
    return <LoaderComponent />;
  }
  console.log("categoryList------------------", categoryList);
  return (
    <div className="resturant-menu">
      <div className="resturant-info">
        <div>
          <img
            src={FOOD_IMG_URL + resData?.cloudinaryImageId}
            alt="res-image"
          />
        </div>
        <div>
          <h4>{resData?.name}</h4>
          <p>{resData?.cuisines.join(", ")}</p>
          <p>{resData?.areaName}</p>
        </div>

        <div className="rating-box">
          <p style={{ borderBottom: "1px solid grey", paddingBottom: "2px" }}>
            {"⭐ " + resData?.avgRatingString}
          </p>
          <p style={{ paddingTop: "2px" }}>{resData?.totalRatingsString}</p>
        </div>
      </div>
      <hr />
      <div className="menu-list" key={resData?.id}>
        {menulist &&
          menulist.map((item) => (
            <MenuList item={item} resturantId={resData?.id} />
          ))}
        {categoryList && (
          <ul>
            <CategoryList
              categoryList={categoryList}
              resturantId={resData?.id}
            />
          </ul>
        )}
      </div>
    </div>
  );
};

export default ResturantComponent;
