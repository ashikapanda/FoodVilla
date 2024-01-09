import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    resturantId: "",
  },
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload.item;
      const existingItem = state.items.find((ele) => ele.id === id);
      state.resturantId = action.payload.resturantId;
      if (!existingItem) {
        state.items.push({ ...action.payload.item, count: 1 });
      } else {
        existingItem.count++;
      }
      state.totalQuantity++;
    },
    resetCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
    },
    removeItem: (state, action) => {
      state.totalQuantity--;
      const itemFound = state.items.find(
        (item) => item.id === action.payload.id
      );
      const foundIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemFound.count !== 1) {
        itemFound.count--;
      } else {
        state.items.splice(foundIndex, 1);
      }
    },
    addItem: (state, action) => {
      state.totalQuantity++;
      const itemFound = state.items.find(
        (item) => item.id === action.payload.id
      );
      itemFound.count++;
    },
    addNewCart: (state, action) => {
      state.items = [];
      state.totalQuantity = 0;
    },
  },
});
// redux syntax below
//actions are the actions that we want to perform and they are named exported
export const { addItem, resetCart, removeItem, addToCart, addNewCart } =
  cartSlice.actions;
//reducer is a single reducers for all the reducers of the slice and it is exported as default
export default cartSlice.reducer;
