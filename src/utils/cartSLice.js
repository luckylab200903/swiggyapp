import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {      //initialstate is an object
    items: [],
  },
  reducers: {
    additem: (state, action) => {
      //actions additem  
      state.items.push(action.payload);
    },
    removeitem: (state) => {
        //actions removeitem
      state.items.pop();
    },
    clearitem: (state) => {
        //actions clearitem
      state.items.length = 0;
    },
  },
});

export const { additem, removeitem, clearitem } = cartSlice.actions;
export default cartSlice.reducer;
