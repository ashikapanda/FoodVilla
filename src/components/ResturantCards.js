import { Link } from "react-router-dom";
import { FOOD_IMG_URL } from "../common/constants";

const ResturantCards = (props) => {
  const { resturants } = props;

  return (
    resturants && (
      <div className="resturants-container">
        <ul className="res-cards">
          {resturants.map((item) => (
            <Link
              key={item?.info?.id}
              to={`/resturant/${item?.info?.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <li className="resturant-card">
                <div className="img-item">
                  <img
                    src={FOOD_IMG_URL + item?.info?.cloudinaryImageId}
                    alt={"food_img"}
                  />
                  {item?.info.hasOwnProperty("aggregatedDiscountInfoV3") ? (
                    <p>
                      {item?.info?.aggregatedDiscountInfoV3?.header +
                        " " +
                        item?.info?.aggregatedDiscountInfoV3?.subHeader}
                    </p>
                  ) : null}
                </div>
                <p>{item?.info?.name}</p>
                <p>
                  {"⭐" +
                    item?.info?.avgRating +
                    " ▪ " +
                    item?.info?.sla?.slaString}
                </p>
                <p>{item?.info?.costForTwo}</p>
                <p className="cuisines">{item?.info?.cuisines.join(",")}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    )
  );
};

export default ResturantCards;
