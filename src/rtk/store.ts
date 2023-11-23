import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import cartReducer from "./cartSlice";
import userNameReducer from "./userNameSlice";
import signUpReducer from "./flagSignUp.slice";
import logInReducer from "./flagLogInSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    userName: userNameReducer,
    openSignUp: signUpReducer,
    openLogIn: logInReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
