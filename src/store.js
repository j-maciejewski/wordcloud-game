import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import gameSlice from './slices/gameSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    game: gameSlice,
  },
})
