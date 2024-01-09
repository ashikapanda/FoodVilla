/**
 * CREATE STORE
 *  - const store = configureStore({}) - import from RTK
 *
 * PROVIDE STORE TO APP
 *  - <Provider store={store}> - import from react-redux
 *
 * CREATE SLICES
 *  - slice1 = createSlice({
 *      name: "",
 *      initialState: {},
 *      reducers:{  // will have all the actions
 *              addItem: (state, payload) =>{
 *                  modify state value according to requirement
 *              }
 *          }
 *      })
 *      export slice1.reducer by default
 *      export all actions from slice1.actions as named export.
 *
 * PASS THE CREATED SLICES TO THE STORE IN CONFIGURESTORE
 *  - configureStore will take all the reducers of all created slices in reducer object
 *      configureStore({reducer:{
 *          slice1: slice1
 *          slice2: slice2
 *      }})
 *
 * SUBSCRIBE TO THE STORE WHEREVER NEEDED in ANY COMPONENT USING USESELECTOR
 *  - const slice1 =  useSelector(store=> store.slice1) - import from react-redux
 *
 */

import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
