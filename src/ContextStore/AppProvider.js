import { createContext, useReducer } from "react";
import { searchInitialState, searchReducer } from "./reducer/searchReducer";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [search, setSearch] = useReducer(searchReducer, searchInitialState);
  const store = { search, setSearch };

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};
