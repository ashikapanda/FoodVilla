export const searchInitialState = { searchText: "", searchClicked: false };

export const searchReducer = (state, { type, payload }) => {
  switch (type) {
    case "SEARCH_RES":
      return {
        ...state,
        searchText: payload?.searchText,
        searchClicked: false,
      };
    case "SEARCH_CLICK":
      return { ...state, searchClicked: true };
    case "SEARCH_RESET":
      return { ...state, searchClicked: false };
  }
};
