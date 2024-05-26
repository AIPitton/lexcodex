import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface MainState {
  localesPersist: string
}

const initialState: MainState = {
  localesPersist: '',
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setLocalesPersist: (state, action) => {
      state.localesPersist = action.payload
    },
  },
})

export const { setLocalesPersist } = mainSlice.actions

export default mainSlice.reducer
