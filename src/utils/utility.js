export const fetchData = async (API) => {
  try {
    const data = await fetch(API);
    return await data.json();
    // return jsonData;
  } catch (err) {
    console.log("err", err);
    return { error: err };
  }
};

export const filterResturants = (resturants, searchText) => {
  return resturants.filter((item) => {
    return item.info.name.toUpperCase().includes(searchText.toUpperCase());
  });
};
