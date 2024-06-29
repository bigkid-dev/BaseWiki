import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userHistory: [],
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addHistory: (state, action) => {
      console.log(action.payload);
      const history = action.payload;
      state.userHistory = history;
    },
  },
});

export const { addHistory } = historySlice.actions;

export default historySlice.reducer;
