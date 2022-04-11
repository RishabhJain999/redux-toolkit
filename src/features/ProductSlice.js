import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = {
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
};

export const ProductSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    allProducts: (state, action) => {
      state.data = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { allProducts, setStatus } = ProductSlice.actions;
export default ProductSlice.reducer;

//thunk
export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      dispatch(allProducts(data));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (err) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
};
