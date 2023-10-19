import { configureStore } from "@reduxjs/toolkit";
import plan from "./reducers/planReducer";
export const store = configureStore({
    reducer: {
        plan
    }
})