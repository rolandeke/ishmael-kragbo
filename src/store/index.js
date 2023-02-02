import { configureStore } from "@reduxjs/toolkit";
import jewelryReducer from "./jewelry.slice";

export const store = configureStore({
  reducer: {
    jewelry: jewelryReducer,
  },
});
