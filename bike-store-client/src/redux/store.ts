import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/baseApi'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { authReducer } from './features/Auth/authSlice'

const persistConfig = {
  key: 'auth',
  storage,
}
// const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authReducer
  },
  middleware: (defaultMiddleware) => defaultMiddleware().concat(baseApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch