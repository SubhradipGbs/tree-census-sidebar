import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebarOpen: false,
  sidebarCollapsed: false,
  drawerOpen: false,
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
    toggleDrawer: (state) => {
      state.drawerOpen = !state.drawerOpen;
    },
  },
});

export const { toggleCollapse, toggleOpen, toggleDrawer } = uiSlice.actions;
export default uiSlice.reducer;
