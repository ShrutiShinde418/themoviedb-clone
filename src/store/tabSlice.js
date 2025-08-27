import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabBars: {
    trendingTab: "Today",
    popularTab: "Streaming",
    freeToWatchTab: "Movies",
  },
};

const tabSlice = createSlice({
  name: "tabBars",
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.tabBars[action.payload.tabType] = action.payload.tabName;
    },
  },
});

export const { setActiveTab } = tabSlice.actions;

export default tabSlice.reducer;
