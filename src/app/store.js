import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import restaurantReducer from "../features/restaurant/restaurantSlice";
import reservationReducer from "../features/reservation/reservationSlice";
import reviewReducer from "../features/review/reviewSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    restaurants: restaurantReducer,
    reservations: reservationReducer,
    reviews: reviewReducer,
    user: userReducer,
  },
});
