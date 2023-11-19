import { configureStore } from '@reduxjs/toolkit'
import modalReducer from '@/features/modals'
import authReducer from '@/features/auth'


export const store = configureStore({
  reducer: {
    auth: authReducer,
    modals: modalReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch