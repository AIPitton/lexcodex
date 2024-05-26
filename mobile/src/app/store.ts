import { configureStore } from '@reduxjs/toolkit'
import mainReducer from '../features/main/mainSlice.ts'
import { persistStore, persistReducer } from 'redux-persist' // Import persist modules
import storage from '@react-native-async-storage/async-storage' // Import AsyncStorage
const persistConfig = {
  key: 'root', // Key prefix for persisted state
  storage, // Storage engine (AsyncStorage for React Native)
  version: 1,
  // whitelist: ['main'], // Array of reducer names to persist (optional)
  // blacklist: ['someReducer'], // Array of reducer names to NOT persist (optional)
}
const persistedReducer = persistReducer(persistConfig, mainReducer) // Wrap reducer

export const store = configureStore({
  reducer: {
    main: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disables the middleware
      immutableCheck: false,
    }),
})
export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
