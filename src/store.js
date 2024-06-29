import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/user/userSlice";
import historyReducer from "./features/history/historySlice";

export const store = configureStore({
  reducer: {
    userState: userReducer,
    historyState: historyReducer,
  },
});
