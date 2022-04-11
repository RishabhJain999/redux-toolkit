import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
  },
});
// Action creators are generated for each case reducer function
export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;
