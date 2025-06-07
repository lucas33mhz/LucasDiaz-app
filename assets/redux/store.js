import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import { ShopApi } from './Services/ShopService';
import { authApi } from './Services/authServices';
import authReducer from './Services/authSlices'

export const store = configureStore({
  reducer: {
    authReducer,
    [ShopApi.reducerPath]:ShopApi.reducer,
    [authApi.reducerPath]:authApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ShopApi.middleware).concat(authApi.middleware),
})

  