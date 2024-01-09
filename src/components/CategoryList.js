import { useState } from "react";
import MenuList from "./MenuList";

const CategoryList = ({ categoryList, resturantId }) => {
  console.log("hiiii");
  console.log("categoryTitle", categoryList);
  const [hideMenu, setHideMenu] = useState(false);
  return (
    <div>
      {categoryList.map((category) => (
        <>
          <div className="font-bold text-xl pb-4 flex justify-between">
            <p>{category?.card?.card?.title}</p>
          </div>
          {
            <div className="food-item">
              {category?.card?.card?.categories.map((cat) => (
                <ul className="">
                  <MenuList item={cat} isCat resturantId={resturantId} />
                </ul>
              ))}
            </div>
          }
        </>
      ))}
    </div>
  );
};

export default CategoryList;
