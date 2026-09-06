import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import restaurantReducer from "../features/restaurant/restaurantSlice";
import reservationReducer from "../features/reservation/reservationSlice";
import reviewReducer from "../features/review/reviewSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    restaurant: restaurantReducer,
    reservation: reservationReducer,
    review: reviewReducer,
  },
});
