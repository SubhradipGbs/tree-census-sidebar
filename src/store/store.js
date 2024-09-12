import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./reducers/auth";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/es/storage/session";
import { uiSlice } from "./reducers/ui";

const persistConfig = {
  key: "root",
  storage: sessionStorage,
  // storage,
};

const reducer = combineReducers({
  auth: authSlice.reducer,
  ui: uiSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
