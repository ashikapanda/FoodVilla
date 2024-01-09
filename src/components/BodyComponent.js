import React, { useContext, useEffect, useState } from "react";
import resturantData from "./json/resturantData.json";
import LoaderComponent from "./LoaderComponent";
import ResturantCards from "./ResturantCards";
import { RES_DATA_API } from "../common/constants";
import ErrorComponent from "./ErrorComponent";
import { fetchData, filterResturants } from "../utils/utility";
import { AppContext } from "../ContextStore/AppProvider";

const BodyComponent = () => {
  const [resData, setResData] = useState(null);
  const [error, setError] = useState(false);
  const { search, setSearch } = useContext(AppContext);
  console.log("bodySearch", search);
  console.log("resData--", resData);

  useEffect(() => {
    fetchData(RES_DATA_API).then((res) => {
      if (res.error) {
        setError(true);
      } else {
        setResData(
          res?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      }
    });
  }, []);

  useEffect(() => {
    if (search.searchClicked && resData) {
      const filteredResturants = filterResturants(resData, search.searchText);
      console.log("filt------", filteredResturants);
      setResData(filteredResturants);
      setSearch({ type: "SEARCH_RESET" });
    }
  }, [search]);

  return error && !resData ? (
    <ErrorComponent data={error} />
  ) : !resData ? (
    <LoaderComponent />
  ) : (
    <div className="body-container">
      <h3
        style={{
          textAlign: "center",
          fontWeight: "bolder",
        }}
        className="text-red-700"
      >
        Resturants Near Me
      </h3>
      <ResturantCards resturants={resData} />
    </div>
  );
};

export default BodyComponent;
