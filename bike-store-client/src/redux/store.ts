import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/baseApi'
import storage from 'redux-persist/lib/storage'
import { authReducer } from './features/Auth/authSlice'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import { cartReducer } from './features/cart/cartSlice'

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "cart"], // Only persist auth & cart
};

export const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  auth: authReducer,
  cart: cartReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (defaultMiddleware) => defaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }
  }).concat(baseApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store);