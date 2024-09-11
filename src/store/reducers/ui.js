import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarOpen: false,
  sidebarCollapsed: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleOpen: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    toggleCollapse: (state) => {
      state.sidebarCollapsed = !state.sidebarCollapsed;
    },
  },
});


export const {toggleCollapse,toggleOpen}=uiSlice.actions;
export default uiSlice.reducer;