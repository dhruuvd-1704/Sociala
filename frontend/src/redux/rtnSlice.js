// src/store/rtnSlice.js
import { createSlice } from "@reduxjs/toolkit";

const rtnSlice = createSlice({
  name: "realTimeNotification",
  initialState: {
    likeNotification: [],
  },
  reducers: {
    setLikeNotification: (state, action) => {
      state.likeNotification.push(action.payload);
    },
    clearLikeNotifications: (state) => {
      state.likeNotification = [];
    },
  },
});

export const { setLikeNotification, clearLikeNotifications } = rtnSlice.actions;
export default rtnSlice.reducer;
